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
    <div className="h-[100dvh] w-screen relative">
      <Navbar />
      <Footer />
      <Hero />
      <Project />
      <Collection />
      <Markets />
      <Events />
      <Roadmap />
      <Team />
      {/* <TeamTest /> */}
    </div>
  );
}

export default App;
