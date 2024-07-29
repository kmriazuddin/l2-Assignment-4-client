import BannerSection from "./BannerSection";
import Blog from "./Blog";
import BrandPartners from "./BrandPartners";
import CarouselImage from "./CarouselImage";
import FeaturedProducts from "./FeaturedProducts";
import ServiceAdvertisement from "./ServiceAdvertisement";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <CarouselImage />
      <Services />
      <FeaturedProducts />
      <BannerSection />
      <ServiceAdvertisement />
      <BrandPartners />
      <Blog />
    </div>
  );
};

export default Home;
