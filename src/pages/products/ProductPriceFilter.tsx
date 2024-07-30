/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown.menu";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const ProductPriceFilter = ({ onFilterChange }: any) => {
  const [filterPrice, setFilterPrice] = useState("");

  const handleFilterChange = (value: any) => {
    setFilterPrice(value);
    onFilterChange(value);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-1 items-center md:w-3/12">
          <button className="hover:bg-pink-500 hover:text-white border-cyan-600 text-center border px-3 py-2 font-medium rounded-lg flex items-center justify-center gap-1 text-lg">
            <div className="flex items-center gap-2">
              <h2 className=" text-lg">Filter By Price</h2>
              <IoIosArrowDropdown className="hover:bg-pink-500 hover:text-white border-cyan-600 font-medium" />
            </div>
          </button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuLabel>Price</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={filterPrice}
          onValueChange={handleFilterChange}
        >
          <DropdownMenuRadioItem value="500-1000">
            &#2547;500-&#2547;1000
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="1000-1500">
            &#2547;1000-&#2547;1500
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="1500-3000">
            &#2547;1500-&#2547;3000
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="3000-100000">
            $3000-$100000
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductPriceFilter;
