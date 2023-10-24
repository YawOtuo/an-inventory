"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../../lib/api/items";
import ItemCard from "../components/ItemCard";
import AddItemModal from "../components/modals/AddItem";

export default function Page() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["items"], () => fetchItems());
  return (
    <div className="flex flex-col w-full">
      <AddItemModal />
      <div className="grid grid-cols-4 w-full gap-y-5">
        {items?.map((r, index) => (
          <div className="col-span-4 md:col-span-2 lg:col-span-1" key={index}>
            <ItemCard type={r?.type} count={r?.count} />
          </div>
        ))}
      </div>
    </div>
  );
}
