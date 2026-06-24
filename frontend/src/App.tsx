import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import WorkExperience from "@/components/WorkExperience";
import Certifications from "@/components/Certifications";
import Awards from "@/components/Awards";
import Projects from "@/components/Projects";
import ConnectBar from "@/components/ConnectBar";

const App = () => {
  return (
    <div className="app-shell" data-testid="app-shell">
      <Navbar />
      <main className="relative z-10" style={{ paddingBottom: 140 }}>
        <Hero />
        <Highlights />
        <WorkExperience />
        <Certifications />
        <Awards />
        <Projects />
      </main>
      <ConnectBar />
    </div>
  );
};

export default App;
