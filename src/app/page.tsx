"use client";
import { useQuery } from "@tanstack/react-query";
import { CautionCard } from "./components/cautionCard";
import { fetchItems } from "../../lib/api/items";
import { JustFilledCard } from "./components/JustFilledCard";

const Page = () => {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["inventory"], () => fetchItems());

  return (
    <div className="py-10 px-24  ">
      <div className="flex flex-wrap gap-3">
        {items?.map((r: any, index: any) => (
          <CautionCard key={index} type={r?.type} count={r?.quantity} />
        ))}
      </div>
      <div className="py-4">Just Filled</div>
      <div className="flex flex-wrap gap-3">
        {items?.map((r: any, index: any) => (
          <JustFilledCard key={index} type={r?.type} count={r?.quantity} />
        ))}
      </div>
    </div>
  );
};
export default Page;
