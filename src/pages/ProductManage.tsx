import { useGetProductsQuery } from "@/redux/api/baseApi";
import AddProduct from "./products/AddProduct";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProductCard from "./ProductCard";

type TProduct = {
  _id: string;
  image: string;
  title: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
  description: string;
};

const ProductManage = () => {
  const { data: products, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }
  return (
    <div className="md:px-12 w-full p-4 mt-28 md:mt-12 rounded-md ">
      <div className="flex justify-between items-center mb-5">
        <AddProduct />
        <h2 className="font-medium text-lg bg-cyan-50 px-2 border border-cyan-200">
          {products?.data.length} Products Here
        </h2>
      </div>
      <div className="w-full h-full space-y-3 rounded-xl p-[5px] ">
        <div className="bg-cyan-50 rounded-md p-4  space-y-3  w-full h-full ">
          <Table className="">
            <TableHeader className="bg-cyan-500 text-white">
              <TableRow className="rounded-lg">
                <TableHead className="text-lg w-3/12 text-center">
                  Image
                </TableHead>
                <TableHead className="text-lg w-3/12  text-center">
                  Name
                </TableHead>
                <TableHead className="text-lg w-3/12 text-center">
                  Brand
                </TableHead>
                <TableHead className="text-lg w-3/12 text-center">
                  Price
                </TableHead>
                <TableHead className="text-lg w-3/12 text-center">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products?.data.length > 0 ? (
                products?.data?.map((product: TProduct) => (
                  <ProductCard product={product} />
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md"
                  >
                    <p>There is no product</p>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProductManage;
