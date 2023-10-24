"use client";
import { useQuery } from "@tanstack/react-query";
import { CautionCard } from "./components/cautionCard";
import { fetchItems } from "../../lib/api/items";

const Page = () => {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["inventory"], () => fetchItems());

  return (
    <div className="p-10 ">
      <div className="flex flex-wrap gap-2">
        {items?.map((r: any, index: any) => (
          <CautionCard key={index} type={r?.type} count={r?.quantity} />
        ))}
      </div>
    </div>
  );
};
export default Page;
