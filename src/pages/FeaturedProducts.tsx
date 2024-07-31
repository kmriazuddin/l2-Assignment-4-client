/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import SectionTitle from "@/components/ui/SectionTitle";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const FeaturedProducts = () => {
  const [showAll, setShowAll] = useState(false);
  const { data, isLoading } = useGetProductsQuery(undefined, {
    pollingInterval: 1000,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }
  const displayedProducts = showAll ? data?.data : data?.data.slice(0, 8);

  return (
    <div className="md:px-12 w-full p-4 mt-16 rounded-md">
      <SectionTitle
        subHeading="Check & Get Your Desired Product!"
        heading="Featured Products"
        sectionImg="https://i.ibb.co/SdK0n79/section-title-vector.png"
      />
      <div className="text-3xl mb-2 font-bold text-center">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5 justify-between items-center mt-10 rounded-lg">
          {displayedProducts?.map((product: any) => {
            return (
              <div
                key={product._id}
                className="border-gray-200 bg-cyan-500 border p-4"
              >
                <Badge className="relative hover:text-black hover:bg-lime-500 text-lg right-32 md:right-40 rounded-l-lg text-white bg-pink-500">
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
                      emptySymbol={<FaStar className="text-gray-300 text-lg" />}
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
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="bg-cyan-500 hover:text-white hover:bg-pink-500 mt-6 text-lg shadow-xl font-medium px-3 py-2 rounded-lg"
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
