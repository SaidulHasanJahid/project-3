import React from "react";
import LatestPost from "./components/latest-post";
import Tab from "./components/tab";
import BestMonthOffer from "./components/best-month-offer";
import FirstCard from "./components/category";
import HeroCarousel from "./components/slider";
import DealOfTheDay from "./components/deal-of-the-day";
import FeaturedProducts from "./components/featured-products";
import InfoBanner from "./components/InfoBanner";

const Home = () => {

  return (
    <div>
      <HeroCarousel />
      <FirstCard />
      <BestMonthOffer />
      <Tab />
      <FeaturedProducts />
      <InfoBanner />
      <DealOfTheDay />
      <LatestPost />
    </div>
  );
};

export default Home;
