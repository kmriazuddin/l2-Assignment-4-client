import SectionTitle from "@/components/ui/SectionTitle";

const BrandPartners = () => {
  const brands = [
    {
      logo: "https://i.ibb.co/R3X8hfr/logitechg.png",
    },
    {
      logo: "https://i.ibb.co/xqn5bYv/logo-002.png",
    },
    {
      logo: "https://i.ibb.co/GM9Fp1z/lenovo.png",
    },
    {
      logo: "https://i.ibb.co/4s8dthM/havit.png",
    },
    {
      logo: "https://i.ibb.co/MZ37Sn0/fantech-logo-black.webp",
    },
    {
      logo: "https://i.ibb.co/8PmkxvC/razer-ths-logo.png",
    },
  ];

  return (
    <div>
      <div className="md:px-12 w-full p-4 mt-16 rounded-md ">
        <SectionTitle
          subHeading="Our Brand Partners"
          sectionImg="https://i.ibb.co/SdK0n79/section-title-vector.png"
        />
        {/* all brands */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10">
          {brands?.map((brand, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="text-center"
            >
              <img
                src={brand.logo}
                className="mx-auto rounded-lg mb-4 w-14 h-8 md:w-20 md:h-8 border-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandPartners;
