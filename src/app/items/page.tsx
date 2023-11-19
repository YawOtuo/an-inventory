"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../../lib/api/items";
import ItemCard from "../components/ItemCard";
import AddItemModal from "../components/modals/AddItem";
import Link from "next/link";

export default function Page() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["items"], () => fetchItems());
  return (
    <div className="flex flex-col w-full  px-5 lg:px-10 gap-5">
      <AddItemModal />
      <div className="grid grid-cols-2 w-full gap-y-5">
        {
          isLoading && <p>Loading</p>
        }
        {items?.map((r, index) => (
          <div className="col-span-2 md:col-span-2 lg:col-span-1" key={index}>
            <Link href={`/items/${r?.id}`}>
              <ItemCard category="cloth" name={r?.type} count={r?.count} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
