"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchItems, fetchOneItem } from "../../../../lib/api/items";
import { useRouter } from "next/navigation";
import IconButton from "@/app/components/Buttons/IconButton";
import Link from "next/link";

type Props = {};

export default function Page({ params }: Props) {
  const itemId = params.id;
  const {
    isLoading: itemLoading,
    error: itemError,
    data: item,
  } = useQuery(["item", itemId], () => fetchOneItem(itemId), {
    enabled: !!itemId,
  });
  return (
    <div className="w-full px-5 lg:px-20 py-10">
      {itemLoading && <p>Loading...</p>}
      <div className="flex flex-col items-start justify-center w-full">
        <div className="flex flex-col gap-3 items-start justify-center uppercase w-full">
          <div className="flex gap-5 items-center justify-start">
            <p className="text-3xl font-bold">{item?.type}</p>
            <p className="bg-slate-100 px-5 py-1">{"CLOTH"}</p>
          </div>
          <div className="flex items-center justify-start gap-5 w-full flex-wrap">
            <Link href={"/inventory"}>
              <IconButton
                label="See related Inventories "
                variant="inventories"
                reverse
              />
            </Link>
            <IconButton label="Refill" variant="refill" />
            <IconButton label="Sell" variant="sell" />
          </div>
        </div>{" "}
        <div className="flex items-start justify-center flex-col gap-3 mt-10 lg:mt-0">
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
        </div>
      </div>
    </div>
  );
}
