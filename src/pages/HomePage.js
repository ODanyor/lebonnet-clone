import React, { useEffect } from "react";
// Layouts
import Slider from "../layouts/slider/Slider";
import BannerOne from "../layouts/banners/BannerOne";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Slider />
      <BannerOne />
    </div>
  );
}

export default HomePage;
