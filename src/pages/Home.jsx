import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";

function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Hero />
      <Cards />
    </div>
  );
}

export default Home;