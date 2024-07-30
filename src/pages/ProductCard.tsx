import { TableCell, TableRow } from "@/components/ui/table";
import { useDeleteProductsMutation } from "@/redux/api/baseApi";
import { TiDeleteOutline } from "react-icons/ti";

import swal from "sweetalert";
import UpdateProduct from "./products/UpdateProduct";
export type TTodoProductProps = {
  product: {
    _id: string;
    image: string;
    title: string;
    brand: string;
    quantity: number;
    price: number;
    rating: number;
    description: string;
  };
};

const ProductCard = ({ product }: TTodoProductProps) => {
  const [deleteProduct] = useDeleteProductsMutation();

  function handleDelete(deleteId: string) {
    console.log(deleteId);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product data!",
      icon: "warning",
      // @ts-expect-error: Unreachable code error
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteProduct(deleteId);
        swal("Product has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Product is safe!");
      }
    });
  }

  return (
    <TableRow key={product._id}>
      <div className="flex justify-center">
        <TableCell className="text-center text-base">
          <img
            src={product.image}
            alt={product.title}
            className="w-16 h-16 object-cover rounded-2xl"
          />
        </TableCell>
      </div>
      <TableCell className="text-start text-base">{product.title}</TableCell>

      <TableCell className="text-center text-base">{product.brand}</TableCell>

      <TableCell className="text-center text-base">${product.price}</TableCell>

      <TableCell className="text-center  flex items-start gap-3 text-base">
        {/* <button className="bg-[#4A249D] p-3 rounded-full">
          <FaPen className="text-white  text-xl" />
        </button> */}
        <UpdateProduct product={product} />
        <button
          onClick={() => handleDelete(product?._id)}
          className="bg-red-600 p-3 rounded"
        >
          <TiDeleteOutline className="text-white text-xl" />
        </button>
      </TableCell>
    </TableRow>
  );
};

export default ProductCard;
