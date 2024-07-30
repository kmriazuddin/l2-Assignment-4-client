import { useAppSelector } from "@/redux/hooks/hooks";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { Badge } from "./badge";
import { FaCartPlus } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center h-[70px] p-4 md:px-12 bg-cyan-500">
      <div className="flex gap-2 items-center">
        <img
          src="https://i.ibb.co/prJwdGM/MKS-Logo.png"
          className="md:w-12 md:h-10 w-6 h-6 rounded-full"
          alt=""
        />
        <h2 className="text-xl md:text-2xl font-semibold">
          M<span className="text-pink-500">K</span> SHOP
        </h2>
      </div>
      <div>
        <ul
          className={`md:flex gap-8 z-10 md:bg-transparent text-black  font-medium md:static absolute text-xl items-center ${
            open
              ? "top-20 right-7 p-5 bg-slate-200  text-black divide-y divide-slate-400"
              : "-top-48 right-0"
          } `}
        >
          <li className="text-xl">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? " text-pink-600" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? " text-pink-600" : "")}
            >
              Products
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? " text-pink-600" : "")}
            >
              About
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? " text-pink-600" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="/product-manage"
              className={({ isActive }) => (isActive ? " text-pink-600" : "")}
            >
              Product Manage
            </NavLink>
          </li>
        </ul>
      </div>
      <NavLink to="/cart" className="flex items-center w-3/12  md:w-1/12 p-3">
        <Badge className="bg-lime-200 text-[#4A249D] -top-2 -right-2 text-sm md:text-lg relative md:-right-16 md:-top-3">
          {cartItems?.length > 0 ? cartItems.length : 0}
        </Badge>
        <FaCartPlus className="text-pink-500 text-2xl  md:text-4xl " />
      </NavLink>
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open ? <ImCross /> : <IoIosMenu />}
      </div>
    </div>
  );
};

export default Navbar;
