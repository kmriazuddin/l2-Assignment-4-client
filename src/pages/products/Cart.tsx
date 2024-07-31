/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SingleCart from "./SingleCart";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks/hooks";
import SectionTitle from "@/components/ui/SectionTitle";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const { data: products, isLoading } = useGetProductsQuery(undefined, {
    pollingInterval: 1000,
  });
  const { totalOrderPrice } = useAppSelector((state) => state.cart);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return;
    const outOfStockItems = cartItems.filter((cartItem) => {
      const product = products.data.find(
        (item: any) => item._id === cartItem._id
      );

      return product ? cartItem.cartQuantity > product.quantity : true;
    });
    setIsButtonDisabled(outOfStockItems.length > 0);
  }, [cartItems, products, isLoading]);

  const handleProceedCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div tabIndex={1} className="md:px-12 w-full p-4 rounded-md h-screen">
      <div>
        {cartItems.length > 0 && (
          <SectionTitle
            subHeading="My Cart"
            sectionImg="https://i.ibb.co/SdK0n79/section-title-vector.png"
          />
        )}

        {cartItems?.length > 0 ? (
          <div className="w-full h-full space-y-3 rounded-xl p-[5px] ">
            <div className="bg-cyan-50 rounded-md p-4  space-y-3  w-full h-full ">
              <Table className="">
                <TableHeader className=" bg-cyan-500 text-white">
                  <TableRow className="rounded-lg">
                    <TableHead className="text-lg w-3/12 text-center">
                      Image
                    </TableHead>
                    <TableHead className="text-lg w-3/12 text-center">
                      Title
                    </TableHead>
                    <TableHead className="text-lg w-3/12 text-center">
                      Quantity
                    </TableHead>
                    <TableHead className="text-lg w-3/12 text-center">
                      Price
                    </TableHead>
                    <TableHead className="text-lg w-3/12 text-center">
                      Actions
                    </TableHead>
                    <TableHead className="text-lg w-3/12 text-center"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems?.length > 0 &&
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    cartItems?.map((cart: any) => <SingleCart cart={cart} />)}
                </TableBody>
              </Table>
            </div>
            <div className="bg-cyan-200">
              <h2 className="text-end mx-12 text-lg font-medium">
                Total Price: ${totalOrderPrice.toFixed(2)}
              </h2>
            </div>
          </div>
        ) : (
          <h2 className="text-3xl text-rose-500 mb-7 font-bold text-center">
            There is no cart items.
          </h2>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="text-end mx-auto mt-4">
          <button
            onClick={handleProceedCheckout}
            className={`text-white text-lg font-medium mx-auto rounded px-3 py-2 bg-cyan-500 hover:bg-pink-500 ${
              isButtonDisabled
                ? "opacity-50 bg-gray-300 cursor-not-allowed"
                : ""
            }`}
            disabled={isButtonDisabled ? true : false}
          >
            Proceed To Checkout{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
