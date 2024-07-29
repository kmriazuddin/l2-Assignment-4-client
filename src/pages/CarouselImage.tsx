import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaArrowRight } from "react-icons/fa";

const keyboardBrands = [
  {
    title: "Havit KB876L USB Multi-Function Backlit Gaming Keyboard",
    brand: "Havit",
    image: "https://i.ibb.co/3RqNhcN/Havit-KB876-L.png",
  },
  {
    title:
      "A4TECH Fstyler FBX51C Rechargeable Bluetooth & 2.4G Wireless Keyboard",
    brand: "A4-TECH",
    image: "https://i.ibb.co/gm8rGhK/A4-TECH-Fstyler-FBX51-C.png",
  },
  {
    title: "Logitech MK240 Wireless Keyboard and Mouse Combo",
    brand: "Logitech",
    image: "https://i.ibb.co/JmxpnVF/Logitech-MK240.png",
  },
];

const CarouselImage = () => {
  return (
    <div className="md:px-12 w-full">
      <Carousel>
        <CarouselContent>
          {keyboardBrands?.map((brand) => (
            <CarouselItem key={brand.brand}>
              <div className="bg-teal-300 p-4 mt-16 rounded-md md:flex items-center justify-between">
                <div className="md:flex justify-center  md:w-1/2 p-8 w-full ">
                  <div className="w-full">
                    <h2 className="tracking-widest mb-2 leading-snug text-2xl md:text-3xl font-bold w-full">
                      {brand.title}
                    </h2>
                    <h2 className="font-normal mb-2 text-lg">
                      Explore{" "}
                      <span className="text-pink-500 font-medium tracking-wide">
                        {brand.brand}
                      </span>{" "}
                      wide range of keyboards. Whether you are a gamer, content
                      creator, or professional, {brand.brand} offers
                      cutting-edge technology to enhance your computing
                      experience.
                    </h2>
                    <div className="flex mt-4 gap-6 items-center">
                      <button className="bg-cyan-500 text-lg shadow-xl font-medium px-3 py-2 rounded-lg">
                        View Services
                      </button>
                      <button className="text-lg shadow-md flex items-center gap-2 font-medium px-3 py-2 rounded-lg border-2 border-pink-500">
                        Pricing Plans{" "}
                        <FaArrowRight className="text-pink-500 mt-1" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2  w-full md:p-8">
                  <img
                    src={brand?.image}
                    className="rounded-xl mx-auto w-[300px] h-[300px] md:w-[600px] md:h-[400px]"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-slate-500 text-white  md:mx-12" />
        <CarouselNext className="bg-slate-500 text-white  md:mx-12" />
      </Carousel>
    </div>
  );
};

export default CarouselImage;
