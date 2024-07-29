import { IconType } from "react-icons";
import SectionTitle from "@/components/ui/SectionTitle";
import { FaCameraRetro } from "react-icons/fa";
import { SiPcgamingwiki } from "react-icons/si";
import { GiDeliveryDrone } from "react-icons/gi";
import { GiEarbuds } from "react-icons/gi";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

type TService = {
  name: string;
  desc: string;
  icon: IconType;
};

const ServiceFeatures = [
  {
    name: "Action Camera",
    desc: "Free shipping on orders below $500, Visit Our Store & Get Your Desired IT Product!",
    icon: FaCameraRetro,
  },
  {
    name: "Gaming Console",
    desc: "Free shipping on orders below $500, Visit Our Store & Get Your Desired IT Product!",
    icon: SiPcgamingwiki,
  },
  {
    name: "Drone",
    desc: "Free shipping on orders below $500, Visit Our Store & Get Your Desired IT Product!",
    icon: GiDeliveryDrone,
  },
  {
    name: "Earbuds",
    desc: "Free shipping on orders below $500, Visit Our Store & Get Your Desired IT Product!",
    icon: GiEarbuds,
  },
  {
    name: "Mobile Phone",
    desc: "Free shipping on orders below $500, Visit Our Store & Get Your Desired IT Product!",
    icon: HiMiniDevicePhoneMobile,
  },
];
const Services = () => {
  return (
    <div className="md:px-12 w-full   p-4 mt-16 rounded-md ">
      <SectionTitle
        heading="Featured Category"
        subHeading="Get Your Desired Product from Featured Category"
        sectionImg="https://i.ibb.co/SdK0n79/section-title-vector.png"
      />
      {/* card */}
      <div className="md:flex mt-10 items-center gap-5">
        {ServiceFeatures?.map((service: TService, index: number) => (
          <div
            key={index}
            className="text-center mt-4 md:mt-0 p-3 bg-[#e0e0e0]"
            style={{
              boxShadow: "9px 9px 18px #b8b8b8, -9px -9px 18px #ffffff",
              borderRadius: "30px",
            }}
          >
            <div className="flex items-center  justify-center">
              <service.icon className="mb-2 text-center text-3xl md:text-5xl" />
            </div>

            <h2 className="mb-1 text-lg font-medium">{service.name}</h2>
            <p className="mb-2 text-sm  text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
