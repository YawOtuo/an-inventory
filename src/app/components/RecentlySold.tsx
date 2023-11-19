import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../../lib/api/items";
import ItemCard from "./ItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchInventories } from "../../../lib/api/inventory";
import Link from "next/link";

export default function RecentlySold() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["inventory"], () => fetchInventories());
  return (
    <div className="py-5 w-full">
      <p>Recently Sold</p>
      <div className="grid grid-cols-2  gap-y-3 mt-5 gap-x-5">
        {items?.slice(0, 6).map((r: any, index: any) => (
          <div className="col-span-3 md:col-span-1" key={index}>
            {" "}
          <Link href={'/inventory'}>  <ItemCard key={index} category={r?.Item?.category} name={r?.Item?.name} count={r?.quantity} /></Link>
          </div>
        ))}
      </div>

    </div>
  );
}
