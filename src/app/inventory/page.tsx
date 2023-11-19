"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../../lib/api/items";
import InventoryCard from "../components/InventoryCard";

export default function Inventory() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["items"], () => fetchItems());
  return (
    <div className="w-full flex items-center justify-start flex-col px-5 lg:px-20 gap-10">
      <p className="text-2xl font-semibold w-full text-left mt-10">My inventory</p>
      <div className="flex flex-col gap-5 w-full ">
        {items?.map((r: any, index: number) => (
          <div className="col-span-2 md:col-span-2 lg:col-span-1" key={index}>
            <InventoryCard category="cloth" name={r?.type} count={r?.count} actionType="refill" />
          </div>
        ))}
      </div>
    </div>
  );
}
