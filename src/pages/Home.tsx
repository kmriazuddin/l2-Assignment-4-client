import BannerSection from "./BannerSection";
import CarouselImage from "./CarouselImage";
import FeaturedProducts from "./FeaturedProducts";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <CarouselImage />
      <Services />
      <FeaturedProducts />
      <BannerSection />
    </div>
  );
};

export default Home;
