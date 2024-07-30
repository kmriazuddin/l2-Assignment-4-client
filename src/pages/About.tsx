import { IconType } from "react-icons";
import { FaStore, FaUserEdit } from "react-icons/fa";
import { FaRegHandshake, FaUsers } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import ServiceAdvertisement from "./ServiceAdvertisement";
import SectionTitle from "@/components/ui/SectionTitle";

type TAbout = {
  name: string;
  description: string;
  icon: IconType;
};

const aboutFeatures = [
  {
    name: "Satisfied User",
    icon: FaUsers,
    description: "user is a person who utilizes a computer or network service.",
  },
  {
    name: "Staffs",
    icon: FaUserEdit,
    description:
      "Charged with carrying out the work of an establishment or executing some.",
  },
  {
    name: "Partners",
    icon: FaRegHandshake,
    description:
      "A person who shares or is associated with another in some action or endeavor.",
  },
  {
    name: "Support",
    icon: MdSupportAgent,
    description: "Free shipping on all orders above a certain amount.",
  },
  {
    name: "Cashback Offers",
    icon: FaStore,
    description:
      "Customer can enjoy Cashback as many times as they like during the offer period.",
  },
];

const About = () => {
  return (
    <div className="md:px-12 w-full p-4 md:mt-12 rounded-md ">
      <div className="md:flex gap-8 items-center">
        <div className="md:w-1/2 w-full rounded-lg p-4">
          <div
            className="w-full flex justify-center"
            style={{
              boxShadow: "19px 19px 0px #5a5a5a, -19px -19px 0px #ffffff",
              borderRadius: "30px",
            }}
          >
            <img
              src="https://i.ibb.co/C8QpgNV/keyboard-alienware.png"
              className="rounded-xl md:w-[700px] md:h-[500px]"
            />
          </div>
        </div>
        <div className="md:w-1/2 mt-3 w-full">
          <SectionTitle
            subHeading="Our Vision"
            heading="What we have ?"
            sectionImg="https://i.ibb.co/SdK0n79/section-title-vector.png"
          />
          <div className="flex justify-center mt-10">
            <h2 className="md:tracking-widest md:w-8/12 text-lg text-justify">
              Our expertise in mechanical keyboards ensures that your
              high-performance peripherals are always in top condition. We
              understand the intricate details and precision required to
              maintain and repair these devices. Whether it's key switches, RGB
              lighting, or firmware updates, our team is equipped with the
              skills and knowledge to handle all your mechanical keyboard needs.
              Trust us to keep your typing experience smooth and responsive.
            </h2>
          </div>
        </div>
      </div>
      <div className="md:grid-cols-5 grid gap-5 grid-cols-1 mt-16">
        {aboutFeatures?.map((service: TAbout, index: number) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            className="text-center rounded-md p-3"
            style={{
              boxShadow: "9px 9px 18px #b8b8b8, -9px -9px 18px #ffffff",
              borderRadius: "30px",
            }}
          >
            <div className="flex items-center justify-center">
              <service.icon className="mb-2 text-center text-xl md:text-4xl" />
            </div>

            <h2 className="mb-1 text-lg">{service?.name}</h2>
            <p className="mb-2 text-sm w-10/12 mx-auto text-gray-400">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <ServiceAdvertisement />
      </div>
    </div>
  );
};

export default About;
