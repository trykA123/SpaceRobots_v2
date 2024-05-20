import Collection from "./pages/Collection";
import Events from "./pages/Events";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Markets from "./pages/Markets";
import Navbar from "./pages/Navbar";
import Project from "./pages/Project";
import Roadmap from "./pages/Roadmap";
import Team from "./pages/Team";
import TeamTest from "./pages/TeamTest";

function App() {
  return (
    <div className="relative h-[100dvh] w-screen snap-mandatory snap-start">
      <Navbar />
      <Hero />
      <Project />
      <Collection />
      <Markets />
      <Events />
      <Roadmap />
      <Team />
      <Footer />
      {/* <TeamTest /> */}
    </div>
  );
}

export default App;
