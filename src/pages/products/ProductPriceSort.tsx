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

const ProductPriceSort = ({ onSortChange }: any) => {
  const [sortPrice, setSortPrice] = useState("priceLowToHigh");

  const handleSortChange = (value: any) => {
    setSortPrice(value);
    onSortChange(value);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="border px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white border-cyan-600 text-lg font-medium">
          <div className="flex items-center gap-2">
            <h2 className="text-lg">Sort By Price</h2>
            <IoIosArrowDropdown className="hover:bg-pink-500 hover:text-white border-cyan-600 font-medium" />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuLabel>Price</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={sortPrice}
          onValueChange={handleSortChange}
        >
          <DropdownMenuRadioItem value="priceHighToLow">
            High To Low
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="priceLowToHigh">
            Low To High
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductPriceSort;
