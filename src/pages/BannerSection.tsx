import SectionTitle from "@/components/ui/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const BannerSection = () => {
  const banners = [
    {
      cover: "https://i.ibb.co/hKBGc0j/featured-2.png",
    },
    {
      cover: "https://i.ibb.co/nf1Dw19/featured-1-1.png",
    },
  ];
  return (
    <div className="my-10" data-aos="fade-up" data-aos-duration="1000">
      <SectionTitle
        subHeading="New Collection Coming"
        sectionImg="https://i.ibb.co/SdK0n79/section-title-vector.png"
      />
      <div className="grid md:grid-cols-2 gap-3">
        {banners?.map((banner, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            className="text-center"
          >
            <div className="w-3/4 m-auto">
              <img className="rounded-xl" src={banner.cover} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSection;
