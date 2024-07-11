import Collection from "./pages/Collection";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Markets from "./pages/Markets";
import Navbar from "./pages/Navbar";
import Project from "./pages/Project";
import Roadmap from "./pages/Roadmap";
import Stories from "./pages/Stories";
import Team from "./pages/Team";

function App() {
  return (
    <div className="relative h-[100dvh] w-screen snap-mandatory snap-start">
      <Navbar />
      <Hero />
      <Project />
      <Collection />
      <Markets />
      <Stories />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
