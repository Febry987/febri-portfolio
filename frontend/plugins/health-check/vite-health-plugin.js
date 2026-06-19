import fs from 'fs';
import path from 'path';

const SERVER_START_TIME = Date.now();

class ViteHealthPlugin {
  constructor() {
    this.status = {
      state: 'idle',
      errors: [],
      warnings: [],
      lastCompileTime: null,
      lastSuccessTime: null,
      compileDuration: 0,
      totalCompiles: 0,
      firstCompileTime: null,
    };
  }

  getStatus() {
    return {
      ...this.status,
      isHealthy: this.status.state === 'success',
      errorCount: this.status.errors.length,
      warningCount: this.status.warnings.length,
      hasCompiled: this.status.totalCompiles > 0,
    };
  }

  getSimpleStatus() {
    return {
      state: this.status.state,
      isHealthy: this.status.state === 'success',
      errorCount: this.status.errors.length,
      warningCount: this.status.warnings.length,
    };
  }

  reset() {
    this.status = {
      state: 'idle',
      errors: [],
      warnings: [],
      lastCompileTime: null,
      lastSuccessTime: null,
      compileDuration: 0,
      totalCompiles: 0,
      firstCompileTime: null,
    };
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function formatDuration(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  if (hours > 0) return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
  return `${seconds}s`;
}

export function viteHealthPlugin() {
  const healthPlugin = new ViteHealthPlugin();

  return {
    name: 'vite-health-plugin',
    apply: 'serve',

    configureServer(server) {
      const enableHealth = process.env.ENABLE_HEALTH_CHECK === 'true';
      if (!enableHealth) return;

      const inform = (msg) => console.log('[Health Check]', msg);

      server.middlewares.use('/health', (req, res, next) => {
        const url = req.url;
        const status = healthPlugin.getStatus();
        const uptime = Date.now() - SERVER_START_TIME;
        const memUsage = process.memoryUsage();

        const os = awaitOs();

        function respond(json) {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(json));
        }

        if (url === '/' || url === '') {
          respond({
            status: status.isHealthy ? 'healthy' : 'unhealthy',
            timestamp: new Date().toISOString(),
            uptime: {
              seconds: Math.floor(uptime / 1000),
              formatted: formatDuration(uptime),
            },
            build: {
              state: status.state,
              isHealthy: status.isHealthy,
              hasCompiled: status.hasCompiled,
              errors: status.errorCount,
              warnings: status.warningCount,
              lastCompileTime: status.lastCompileTime
                ? new Date(status.lastCompileTime).toISOString() : null,
              lastSuccessTime: status.lastSuccessTime
                ? new Date(status.lastSuccessTime).toISOString() : null,
              compileDuration: status.compileDuration
                ? `${status.compileDuration}ms` : null,
              totalCompiles: status.totalCompiles,
              firstCompileTime: status.firstCompileTime
                ? new Date(status.firstCompileTime).toISOString() : null,
            },
            server: {
              nodeVersion: process.version,
              platform: os.platform,
              arch: os.arch,
              cpus: os.cpus,
              memory: {
                heapUsed: formatBytes(memUsage.heapUsed),
                heapTotal: formatBytes(memUsage.heapTotal),
                rss: formatBytes(memUsage.rss),
                external: formatBytes(memUsage.external),
              },
            },
            environment: process.env.NODE_ENV || 'development',
          });
        } else if (url === '/simple') {
          const simple = healthPlugin.getSimpleStatus();
          if (simple.state === 'success') res.statusCode = 200, res.end('OK');
          else if (simple.state === 'compiling') res.statusCode = 200, res.end('COMPILING');
          else if (simple.state === 'idle') res.statusCode = 200, res.end('IDLE');
          else res.statusCode = 503, res.end('ERROR');
        } else if (url === '/ready') {
          const simple = healthPlugin.getSimpleStatus();
          respond({
            ready: simple.state === 'success',
            state: simple.state,
            ...(simple.state !== 'success' && {
              reason: simple.state === 'compiling' ? 'Compilation in progress' : 'Compilation failed',
            }),
          });
        } else if (url === '/live') {
          respond({ alive: true, timestamp: new Date().toISOString() });
        } else if (url === '/errors') {
          respond({
            errorCount: status.errorCount,
            warningCount: status.warningCount,
            errors: status.errors,
            warnings: status.warnings,
            state: status.state,
          });
        } else if (url === '/stats') {
          respond({
            totalCompiles: status.totalCompiles,
            averageCompileTime: status.totalCompiles > 0
              ? `${Math.round(uptime / status.totalCompiles)}ms` : null,
            lastCompileDuration: status.compileDuration
              ? `${status.compileDuration}ms` : null,
            firstCompileTime: status.firstCompileTime
              ? new Date(status.firstCompileTime).toISOString() : null,
            serverUptime: formatDuration(uptime),
          });
        } else {
          next();
        }
      });

      inform('Health endpoints ready:');
      inform('  • GET /health         - Detailed status');
      inform('  • GET /health/simple  - Simple OK/ERROR');
      inform('  • GET /health/ready   - Readiness check');
      inform('  • GET /health/live    - Liveness check');
      inform('  • GET /health/errors  - Error details');
      inform('  • GET /health/stats   - Statistics');
    },

    handleHotUpdate({ modules }) {
      const now = Date.now();
      healthPlugin.status.state = 'compiling';
      healthPlugin.status.lastCompileTime = now;
      if (!healthPlugin.status.firstCompileTime) {
        healthPlugin.status.firstCompileTime = now;
      }
      return modules;
    },

    buildStart() {
      const now = Date.now();
      healthPlugin.status.state = 'compiling';
      healthPlugin.status.lastCompileTime = now;
      if (!healthPlugin.status.firstCompileTime) {
        healthPlugin.status.firstCompileTime = now;
      }
    },

    buildEnd(error) {
      healthPlugin.status.totalCompiles++;
      healthPlugin.status.compileDuration = Date.now() - healthPlugin.status.lastCompileTime;
      if (error) {
        healthPlugin.status.state = 'failed';
        healthPlugin.status.errors = [{ message: error.message, stack: error.stack }];
      } else {
        healthPlugin.status.state = 'success';
        healthPlugin.status.lastSuccessTime = Date.now();
        healthPlugin.status.errors = [];
      }
    },
  };
}

async function awaitOs() {
  const os = await import('os');
  return {
    platform: os.platform(),
    arch: os.arch(),
    cpus: os.cpus().length,
  };
}
