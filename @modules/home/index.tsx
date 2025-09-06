import BestMonthOffer from "./components/best-month-offer";
import Best_Selling_Product from "./components/best-selling-products";
import CategoryCard from "./components/category";
import ProductTabs from "./components/category-wise-products";
import DealOfTheDay from "./components/deal-of-the-day";
import FeaturedProducts from "./components/featured-products";
import InfoBanner from "./components/InfoBanner";
import LatestPost from "./components/latest-post";
import HeroCarousel from "./components/slider";

const Home = ({ categoriesItem, bannerItem, productsItem,   }: any) => {
  return (
    <div>
      <HeroCarousel bannerItem={bannerItem} />
      <CategoryCard categoriesItem={categoriesItem} />
      <BestMonthOffer />
      <ProductTabs />
      <FeaturedProducts  />
      <InfoBanner />
      <DealOfTheDay />
      <Best_Selling_Product />
      <LatestPost />
    </div>
  );
};

export default Home;