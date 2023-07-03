import Collection from "./pages/Collection";
import Events from "./pages/Events";
import Hero from "./pages/Hero";
import Markets from "./pages/Markets";
import Navbar from "./pages/Navbar";
import Project from "./pages/Project";
import Roadmap from "./pages/Roadmap";
import Team from "./pages/Team";

function App() {
  return (
    <div className="h-[100dvh] w-screen relative">
      <Navbar />
      <Hero />
      <Project />
      <Collection />
      <Markets />
      <Events />
      <Roadmap />
      <Team />
    </div>
  );
}

export default App;
