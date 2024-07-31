import { MdOutlineSavings } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ServiceAdvertisement = () => {
  return (
    <div
      className="bg-green-600 py-3 md:mx-12"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 items-center space-y-2 md:space-y-0">
        <div className="flex items-center md:text-center m-auto">
          <MdOutlineSavings className="text-lg md:text-4xl font-bold text-white" />
          <h1 className="text-lg md:text-4xl font-bold text-white">
            SAVE UP TO <span className="text-rose-500">30%</span> OFF
          </h1>
        </div>
        <p className="text-center md:text-start text-slate-200 w-3/4 md:w-full m-auto">
          Vertical filter Another great way of allowing the visitors to define
          their product browsing process - include a detailed. Designed for
          modern sites.
        </p>
        <div className="text-center">
          <button className="px-4 py-2 bg-slate-100 text-cyan-700 font-semibold">
            SHOP NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceAdvertisement;
