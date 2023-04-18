import Hero from './pages/Hero';
import Project from "./pages/Project";
import Collection from "./pages/Collection";
import Markets from "./pages/Markets";
import Navbar from "./pages/Navbar";
import Roadmap from "./pages/Roadmap";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Project />
      <Collection />
      <Markets />
      <Roadmap />
    </div>
  );
}

export default App;
