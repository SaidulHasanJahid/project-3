import CategoryCard from "./components/category";
import LatestPost from "./components/latest-post";
import HeroCarousel from "./components/slider";
import BeltSection from "./components/belt-section";
import SpecialEditionSection from "./components/special-edition-sectio";
import BagSection from "./components/bag-section";
import BifoldWalletSection from "./components/bifold-wallet-section";
import ComboOfferSection from "./components/combo-offer-section";
import FashionSlider from "./components/explore-section";
import FashionIntroSection from "./components/discover-section";
import VideoSection from "./components/vedio";
import WalletCategories from "./components/categori-walet-secton";
import FeatureSection from "./components/feature-section";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <CategoryCard />
      <BeltSection />
      <SpecialEditionSection />
      <BagSection />
      <BifoldWalletSection />
      <FashionSlider />
      <ComboOfferSection />
      <VideoSection />
      <WalletCategories />
      <FashionIntroSection />
      <LatestPost />
      <FeatureSection />
    </div>
  );
};

export default Home;
