import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Project from "./pages/Project";
import Collection from "./pages/Collection";
import Markets from "./pages/Markets";

function App() {
  return (
    <div className="h-full">
      <Navbar />
      <Hero />
      <Project />
      <Collection />
      <Markets />
    </div>
  );
}

export default App;
