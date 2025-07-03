import BestMonthOffer from "./components/best-month-offer";
import FirstCard from "./components/category";
import CategoryWiseProducts from "./components/category-wise-products";
import DealOfTheDay from "./components/deal-of-the-day";
import FeaturedProducts from "./components/featured-products";
import InfoBanner from "./components/InfoBanner";
import LatestPost from "./components/latest-post";
import HeroCarousel from "./components/slider";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <FirstCard />
      <BestMonthOffer />
      <CategoryWiseProducts />
      <FeaturedProducts />
      <InfoBanner />
      <DealOfTheDay />
      <LatestPost />
    </div>
  );
};

export default Home;
