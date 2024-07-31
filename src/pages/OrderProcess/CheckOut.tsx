/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAddOrdersMutation } from "@/redux/api/baseApi";
import { clearCart } from "@/redux/features/todoSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CheckOut = () => {
  const { totalOrderPrice } = useAppSelector((state) => state.cart);
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [addOrder, { error }] = useAddOrdersMutation();
  console.log(cartItems.length);

  let errorMessage: string | null = null;
  // @ts-expect-error: Unreachable code error
  if (error?.data?.message) {
    // @ts-expect-error: Unreachable code error
    errorMessage = error.data.message;
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phNumber: "",
    address: "",
    products: [],
    payment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    const products = cartItems?.map((item) => ({
      product: item._id,
      quantity: item.cartQuantity,
    }));

    const orderData = {
      ...formData,
      products,
    };
    console.log({ orderData });
    try {
      const res = await addOrder(orderData).unwrap();
      console.log("Order placed successfully", res);

      if (res?.success === true) {
        swal({
          title: "Product Confirmed!",
          text: "Successful",
          icon: "success",
          // @ts-expect-error: Unreachable code error
          button: "Done",
        });
      }
      //cart clr
      dispatch(clearCart());
      navigate("/order-confirmed");
      // Add any additional success handling here
    } catch (error) {
      console.error("Failed to place order", error);
      // Add any error handling here
    }
  };

  return (
    <div className="md:px-12 w-full p-4 rounded-md">
      <div className="flex mx-1 justify-center">
        {errorMessage && (
          <h2 className="text-center text-xl font-medium text-red-600">
            Error:{errorMessage}, please fill all field
          </h2>
        )}
      </div>
      <div className="md:flex items-start gap-8">
        <div className="md:w-1/2 w-full rounded-lg p-4">
          <div className="border md:w-8/12 flex justify-center md:mt-48 items-center border-dashed py-2 mb-4 px-3 mx-auto rounded-md border-cyan-400">
            <div className=" ">
              <h2 className="rounded-md font-medium text-lg p-2 mb-2 text-center">
                Total Taka: &#2547;{totalOrderPrice.toFixed(2)}
              </h2>
              <h2 className=" rounded-md p-2 text-base mb-2 text-center">
                You can go back if you want,{" "}
                <NavLink to="/products" className={"text-green-500 font-bold"}>
                  View All Products
                </NavLink>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 justify-between">
                {cartItems?.map((cart: any) => (
                  <div className="">
                    <div>
                      <img src={cart.image} className="w-20 m-auto" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border md:w-8/12 flex justify-center items-center border-dashed py-2 mb-4 px-3 mx-auto rounded-md border-cyan-400">
            <div className=" ">
              <h2 className="rounded-md font-medium text-lg p-2 mb-2 text-center">
                Shipping And Delivery
              </h2>
              <h2 className=" rounded-md p-2 text-base mb-2 text-center">
                Orders are delivered on business days Saturday-Friday excluding
                public holidays.
              </h2>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full rounded-lg p-4 border">
          <div className=" w-full">
            <div className="bg-cyan-200 px-2">
              <h2 className="text-3xl tracking-widest mb-1 font-bold">
                Your Cart
              </h2>
              <h2 className="tracking-widest mb-7">
                Provide Your Address We will deliver your order to this address
              </h2>
            </div>
            <form action="">
              <div className="mt-8">
                <h2>Name*</h2>
                <div className="flex mt-3 justify-center">
                  <input
                    onChange={handleChange}
                    name="name"
                    className="w-full rounded-lg border border-slate-300 mt-2 p-2"
                  />
                </div>
              </div>
              <div className="mt-5">
                <h2>Email*</h2>
                <div className="flex mt-3 justify-center">
                  <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    className="w-full rounded-lg border border-slate-300 mt-2 p-2"
                  />
                </div>
              </div>
              <div className="mt-5">
                <h2>Phone Number*</h2>
                <div className="flex mt-3 justify-center">
                  <input
                    name="phNumber"
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 mt-2 p-2"
                  />
                </div>
              </div>
              <div className="mt-5">
                <h2>Delivery Address*</h2>
                <div className="flex mt-3 justify-center">
                  <input
                    onChange={handleChange}
                    name="address"
                    className="w-full rounded-lg border border-slate-300 mt-2 p-2"
                  />
                </div>
              </div>
              <div className="mt-5">
                <h2>Payment Method*</h2>
                <div className="flex flex-col mt-2 space-y-4">
                  <label className="flex items-center space-x-3">
                    <input
                      style={{ width: "20px", height: "20px" }}
                      type="checkbox"
                      name="payment"
                      required
                      onChange={handleChange}
                      value="cashOnDelivery"
                      className="form-radio text-indigo-600"
                    />
                    <span className="text-lg">Cash on Delivery</span>
                  </label>
                </div>
              </div>{" "}
              {cartItems.length ? (
                <button
                  onClick={handlePlaceOrder}
                  type="submit"
                  className="text-white font-medium text-lg mt-6 mx-auto  px-5 py-2 rounded-lg  bg-cyan-500 hover:bg-pink-500"
                >
                  Next Process{" "}
                </button>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
