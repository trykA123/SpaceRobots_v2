import Collection from "./pages/Collection";
import Hero from "./pages/Hero";
import Markets from "./pages/Markets";
import Navbar from "./pages/Navbar";
import Project from "./pages/Project";
import AuctionsList from "./services/api";
import { ApolloClient } from "@apollo/client";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Project />
      <Collection />
      <Markets />
    </div>
  );
}

export default App;
