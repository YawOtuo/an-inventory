"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchInventories } from "../../lib/api/inventory";
import { CautionCard } from "./components/cautionCard";

const Page = () => {
  const {
    isLoading,
    error,
    data: inventories,
  } = useQuery(["inventory"], () => fetchInventories());

  return (
    <div>
      {inventories?.map((r: any, index: any) => (
        <CautionCard key={index} type={r?.type} count={r?.number} />
      ))}
    </div>
  );
};
export default Page;
