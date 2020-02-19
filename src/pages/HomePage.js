import React, { useEffect } from "react";
import "../static/styles/HomePage.css";
// Layouts
import Slider from "../layouts/slider/Slider";
import BannerOne from "../layouts/banners/BannerOne";
import CategoryList from "../layouts/home/CategoryList";
import CategoryBanner from "../layouts/home/CategoryBanner";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="HomePage">
      <div className="PC">
        <Slider />
        <BannerOne />
      </div>
      <div className="Mobile">
        <CategoryList />
        <CategoryBanner />
      </div>
    </div>
  );
}

export default HomePage;
