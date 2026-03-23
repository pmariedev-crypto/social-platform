import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchPanel from "../components/SearchPanel";
import FeatureSection from "../components/FeatureSection";

function Home() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Hero />
      <FeatureSection />
    </div>
  );
}

export default Home;