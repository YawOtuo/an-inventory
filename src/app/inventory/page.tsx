"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../../lib/api/items";
import InventoryCard from "../components/InventoryCard";
import { fetchInventories } from "../../../lib/api/inventory";

export default function Inventory() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["inventories"], () => fetchInventories());
  return (
    <div className="w-full flex items-center justify-start flex-col px-5 lg:px-20 gap-10">
      <p className="text-2xl font-semibold w-full text-left mt-10">My inventory</p>
      {
        isLoading && <p>Loading...</p>
      }
      <div className="flex flex-col gap-5 w-full ">
        {items?.map((r: any, index: number) => (
          <div className="col-span-2 md:col-span-2 lg:col-span-1" key={index}>
            <InventoryCard item={r} />
          </div>
        ))}
      </div>
    </div>
  );
}
