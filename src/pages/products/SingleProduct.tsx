/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unsafe-optional-chaining */
import { useGetSingleProductQuery } from "@/redux/api/baseApi";
import { addToCart } from "@/redux/features/todoSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { RiMapPinAddLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import Rating from "react-rating";
import ServiceAdvertisement from "../ServiceAdvertisement";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  const { _id, image, title, brand, quantity, price, rating, description } =
    data?.data;

  const handleAddToCart = () => {
    const product = {
      _id,
      image,
      title,
      brand,
      quantity,
      price,
      rating,
      description,
    };

    const cartItem = cartItems.find((item) => item._id === product._id);
    if (cartItem && cartItem.quantity <= 0) {
      swal({
        title: "Product is out of stock!",
        text: "This product is no longer available.",
        icon: "error",
      });
      return;
    }

    if (!cartItem && product.quantity <= 0) {
      swal({
        title: "Product is out of stock!",
        text: "This product is no longer available.",
        icon: "error",
      });
      return;
    }

    dispatch(addToCart(product));

    swal({
      title: "Product added to cart!",
      text: "Successfully added to your cart.",
      icon: "success",
    });
  };

  return (
    <div className="md:px-12 w-full p-4 rounded-md">
      <div className="md:flex items-center gap-8">
        <div className="md:w-1/2 w-full rounded-lg p-4">
          <div
            className="w-full"
            style={{
              background: "#e0e0e0",
              boxShadow: "44px 44px 100px #d5d5d5, -44px -44px 100px #ebebeb",
              borderRadius: "10px",
            }}
          >
            <img
              src={data?.data?.image}
              className="flex m-auto rounded-lg md:w-[700px] md:h-[500px]"
              alt=""
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full space-y-3">
          <h2 className="text-xl font-bold mb-2 text-cyan-500 text-justify">
            {data?.data?.title}
          </h2>
          <h2 className="text-lg font-medium mx-auto">
            Quantity: {data?.data?.quantity}
          </h2>
          <h2 className="text-lg font-bold">Brand: {data?.data?.brand}</h2>
          <div className="">
            {/* @ts-expect-error: Type issue with Rating component */}
            <Rating
              initialRating={data?.data?.rating}
              emptySymbol={<FaStar className="text-gray-300 " />}
              fullSymbol={<FaStar className="text-pink-500" />}
              fractions={2}
              readonly
            />
          </div>
          <h2 className="text-3xl font-medium">
            Price: &#2547;{data?.data?.price}
          </h2>
          <p className="text-lg text-justify">{data?.data?.description}</p>
          <h2 className="bg-green-200 flex justify-center items-center gap-2 rounded-md md:w-9/12 mx-auto p-2 text-base mb-2 text-center">
            <RiMapPinAddLine /> Enter Pin-code To Know Estimated Delivery Date
          </h2>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleAddToCart}
              className="text-white text-lg md:w-4/12 mx-auto rounded px-3 py-2  bg-cyan-500 hover:bg-pink-500"
            >
              Add To Cart{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 justify-center items-center">
        <div className="border border-dashed py-2 mb-4 px-3 rounded-md border-cyan-400">
          <h2 className="rounded-md p-2 text-base mb-2 text-center">
            Easy 7 days return and exchange. Return Policies may vary based on
            products and promotions. For full details on our Returns Policies,
            <span className={"text-pink-400  font-bold"}>
              {" "}
              please click here.
            </span>
          </h2>
          <h2 className="text-slate-500 mx-auto text-sm text-center mt-2">
            HANDPICKED STYLES | ASSURED QUALITY
          </h2>
        </div>
        <div className="border border-dashed mb-4 px-3 rounded-md border-cyan-400">
          <button className="bg-green-200 rounded-md p-2 px-5 text-base mb-2 flex text-center mx-auto">
            Get it 20% off
          </button>
          <h2 className=" rounded-md text-base mb-2 text-center">
            Free Shipping on 499 and above. Just <br /> for you.{" "}
            <NavLink to="/products" className={"text-pink-400 font-bold"}>
              View All Products
            </NavLink>
          </h2>
        </div>
      </div>
      <div className="mt-10">
        <ServiceAdvertisement />
      </div>
    </div>
  );
};

export default SingleProduct;
