import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-cyan-500 md:px-12 w-full mt-20 p-4 md:mt-30 rounded-md">
      <footer className="footer flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col mx-4 md:mx-0  items-start">
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co/prJwdGM/MKS-Logo.png"
              alt="Instrument Academy"
              className="w-10 h-10 rounded-full"
            />
            <span className="footer-title text-2xl md:text-3xl font-bold">
              Stay Connected
            </span>
          </div>
          <p className="mt-2 text-lg">MKS Tech Ltd.</p>
          <p>Head Office: 28 Kazi Nazrul Islam</p>
          <p>Ave,Navana Zohura Square, Dhaka 1000</p>
        </div>

        <div className="flex mx-4 md:mx-0 flex-col md:flex-row md:gap-20 w-full md:w-auto">
          <div className="mt-4  md:mt-0">
            <span className="footer-title text-xl font-semibold">About Us</span>
            <ul className="mt-2">
              <li>
                <a className="link  link-hover" href="#">
                  EMI Terms
                </a>
              </li>
              <li>
                <a className="link link-hover" href="#">
                  Brands
                </a>
              </li>
              <li>
                <a className="link link-hover" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="link link-hover" href="#">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a className="link link-hover" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="footer-title text-xl font-semibold">
              Featured Products
            </span>
            <ul className="mt-2">
              <li>
                <a className="link link-hover" href="#">
                  Desktop
                </a>
              </li>
              <li>
                <a className="link link-hover" href="#">
                  Laptop
                </a>
              </li>
              <li>
                <a className="link link-hover" href="#">
                  Monitor
                </a>
              </li>
              <li>
                <a className="link link-hover" href="#">
                  Camera
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 mx-4 md:mx-0 md:mt-0">
          <span className="footer-title text-xl font-semibold">Support</span>
          <div className="mt-2 space-y-3">
            <div>
              <button className="border-2 hover:border-pink-400 rounded-full px-10 py-1">
                <p>10AM-7PM</p>
                <p>16789</p>
              </button>
            </div>
            <div>
              <button className="border-2 hover:border-pink-400 rounded-full px-10 py-1">
                <p>10AM-7PM</p>
                <p>16789</p>
              </button>
            </div>
          </div>
        </div>
      </footer>
      <hr className="mt-8" />
      <div className="mt-5 flex flex-col md:flex-row justify-between gap-2">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:space-x-5">
          <p>Experience Star Tech App on your mobile:</p>
          <div className="flex items-center border rounded px-2 py-1 space-x-3 hover:border-pink-500 cursor-pointer">
            <FaGooglePlay className="text-xl" />
            <div>
              <p className="text-xs">Download on</p>
              <h6>Google Play</h6>
            </div>
          </div>
          <div className="flex items-center border rounded px-2 py-1 space-x-3 hover:border-pink-500 cursor-pointer">
            <FaAppStoreIos className="text-xl" />
            <div>
              <p className="text-xs">Download on</p>
              <h6>App Store</h6>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-slate-800 p-2 md:px-3 rounded hover:bg-pink-500 cursor-pointer flex items-center">
            <FaFacebookF className="md:text-2xl text-white" />
          </div>
          <div className="bg-slate-800 p-2 md:px-3 rounded hover:bg-pink-500 cursor-pointer flex items-center">
            <SlSocialYoutube className="md:text-2xl text-white" />
          </div>
          <div className="bg-slate-800 p-2 md:px-3 rounded hover:bg-pink-500 cursor-pointer flex items-center">
            <FaInstagram className="md:text-2xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
