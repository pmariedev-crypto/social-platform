import Navbar from "../components/Navbar";
import SearchPanel from "../components/SearchPanel";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import PopularCategories from "../components/PopularCategories";

function Home() {
  return (
    <div>
      <Navbar />
      <SearchPanel />
      <Hero />
      <FeatureSection />
      <PopularCategories />
    </div>
  );
}

export default Home;