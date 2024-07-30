/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import useDebounce from "@/redux/hooks/useDebounce";
import { useState } from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ProductPriceSort from "./ProductPriceSort";
import ProductPriceFilter from "./ProductPriceFilter";
import { Badge } from "@/components/ui/badge";
import Rating from "react-rating";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceAdvertisement from "../ServiceAdvertisement";

const AllProducts = () => {
  const [filterPrice, setFilterPrice] = useState("");
  const [sort, setSort] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const filters = {
    searchTerm: debouncedSearchTerm,
    sort,
    priceRange: filterPrice,
  };

  const { data, isLoading } = useGetProductsQuery(filters);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }
  return (
    <div className="md:px-12 w-full p-4 rounded-md">
      <SectionTitle
        subHeading="Our Products"
        sectionImg="https://i.ibb.co/SdK0n79/section-title-vector.png"
      />
      {/* filter */}
      <div className="border px-4 md:flex justify-between items-center m-auto border-l-0 border-r-0 bg-green-300 space-y-5 md:space-y-0 py-2">
        <div className="md:w-9/12 flex flex-wrap items-center gap-5">
          <button
            className="border px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white border-cyan-600 text-lg font-medium"
            onClick={() => {
              setFilterPrice("");
              setSort("");
              setSearchTerm("");
            }}
          >
            Reset
          </button>
          <ProductPriceSort onSortChange={setSort} />
          <ProductPriceFilter onFilterChange={setFilterPrice} />
        </div>
        <div className="flex rounded-2xl p-1 md:w-3/12 items-center border border-pink-400">
          <Input
            type="text"
            placeholder="Search here..."
            className="font-medium text-lg bg-transparent border-0 outline-none focus:ring-0"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {!searchTerm && <FaSearch className="text-2xl" />}
        </div>
      </div>
      {data?.data.length > 0 ? (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5 justify-between items-center mt-10 rounded-lg">
          {data?.data.length > 0 &&
            data?.data?.map((product: any) => {
              return (
                <div
                  key={product._id}
                  className="border-gray-200 bg-cyan-500 border p-4"
                >
                  <Badge className="relative hover:text-black hover:bg-lime-500 text-lg rounded-l-lg text-white bg-pink-500">
                    &#2547;{product?.price}
                  </Badge>
                  <img
                    src={product?.image}
                    className="h-[400px] w-[500px] rounded-xl mb-4"
                    alt=""
                  />

                  <div className="flex p-1 mb-2 items-center justify-between text-white">
                    <h2 className="text-center font-medium text-xl">
                      {product?.brand}
                    </h2>
                    <div className="flex items-center gap-1">
                      {/* @ts-expect-error: Type issue with Rating component */}
                      <Rating
                        initialRating={product?.rating}
                        emptySymbol={
                          <FaStar className="text-gray-300 text-lg" />
                        }
                        fullSymbol={<FaStar className="text-white text-lg" />}
                        fractions={2}
                        readonly
                      />
                    </div>
                  </div>
                  <h2 className=" text-gray-800 mb-1 font-normal text-left text-lg">
                    {product?.title}
                  </h2>
                  <div className="flex items-center justify-between">
                    <h2 className="text-gray-800 font-normal text-left text-lg">
                      Quantity:
                      <span className="font-medium"> {product?.quantity}</span>
                    </h2>
                    <NavLink
                      to={`/products/${product?._id}`}
                      className="bg-pink-500 text-white text-lg font-medium px-3 py-2 rounded-xl"
                    >
                      Details
                    </NavLink>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <h2 className="text-3xl mb-2 font-medium text-center mt-16">
          No Product Found
        </h2>
      )}
      <div className="mt-10 md:mt-16">
        <ServiceAdvertisement />
      </div>
    </div>
  );
};

export default AllProducts;
