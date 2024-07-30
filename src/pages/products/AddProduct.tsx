/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import swal from "sweetalert";
import { useState } from "react";
import { useAddProductsMutation } from "@/redux/api/baseApi";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const AddProduct = () => {
  const [addProduct, { error }] = useAddProductsMutation();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  let errorMessage: string | null = null;
  // @ts-expect-error: Unreachable code error
  if (error?.data?.message) {
    // @ts-expect-error: Unreachable code error
    errorMessage = error.data.message;
  }

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const quantityList = parseFloat(quantity);
    const priceValue = parseFloat(price);
    const rate = parseFloat(rating);

    const data = {
      title,
      image,
      brand,
      quantity: quantityList,
      price: priceValue,
      rating: rate,
      description,
    };

    try {
      const response = await addProduct(data).unwrap();

      if (response?.success === true) {
        swal({
          title: "Product added!",
          text: "Successful",
          icon: "success",
          // @ts-expect-error: Unreachable code error
          button: "Done",
        });
      }
    } catch (error) {
      console.error("Failed to add product", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-cyan-500 hover:bg-pink-500 text-white px-3 py-2 rounded-lg text-xl font-semibold">
          Add Product
        </button>
      </DialogTrigger>

      <div className="flex mx-1 justify-center ">
        {errorMessage && (
          <h2 className="text-center  text-xl font-medium text-red-600">
            Error: {errorMessage} Please provide valid input!
          </h2>
        )}
      </div>
      <DialogContent className="sm:max-w-[425px] bg-slate-200">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>
            Add Product that you want to add.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title">Title:</Label>
              <Input
                onBlur={(e) => setTitle(e.target.value)}
                id="title"
                className="col-span-3"
                name="title"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image">Image Url:</Label>
              <Input
                onBlur={(e) => setImage(e.target.value)}
                id="image"
                className="col-span-3"
                name="image"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="brand">Brand:</Label>
              <Input
                onBlur={(e) => setBrand(e.target.value)}
                id="brand"
                className="col-span-3"
                name="brand"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity">Quantity:</Label>
              <Input
                onBlur={(e) => setQuantity(e.target.value)}
                id="quantity"
                className="col-span-3"
                name="quantity"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price">Price:</Label>
              <Input
                onBlur={(e) => setPrice(e.target.value)}
                id="price"
                className="col-span-3"
                name="price"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating">Rating:</Label>
              <Input
                onBlur={(e) => setRating(e.target.value)}
                id="rating"
                className="col-span-3"
                name="rating"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description">Description:</Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
                name="description"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <button
                className="bg-cyan-500 hover:bg-pink-500 px-3 py-2 text-white"
                type="submit"
              >
                Upload{" "}
              </button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
