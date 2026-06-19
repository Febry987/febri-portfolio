import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Competitions from "@/components/Competitions";
import Awards from "@/components/Awards";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import ConnectBar from "@/components/ConnectBar";

const App = () => {
  return (
    <div className="app-shell" data-testid="app-shell">
      <Navbar />
      <main className="relative z-10" style={{ paddingBottom: 140 }}>
        <Hero />
        <Highlights />
        <Competitions />
        <Awards />
        <Certifications />
        <Projects />
      </main>
      <ConnectBar />
    </div>
  );
};

export default App;
