"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchItems, fetchOneItem } from "../../../../lib/api/items";
import { useRouter } from "next/navigation";
import IconButton from "@/app/components/Buttons/IconButton";
import Link from "next/link";
import AddItem from "@/app/components/modals/AddItem";
import { useState } from "react";
import Refill from "@/app/components/modals/Refill";
import Sell from "@/app/components/modals/sell";

type Props = {};

export default function Page({ params }: Props) {
  const itemId = params.id;
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const {
    isLoading: itemLoading,
    error: itemError,
    data: item,
  } = useQuery(["item", itemId], () => fetchOneItem(itemId), {
    enabled: !!itemId,
  });
  return (
    <div className="w-full px-5 lg:px-20 py-10">
      {itemLoading ? <p>Loading...</p> : 
      <div className="flex flex-col items-start justify-center w-full">
        <div className="flex flex-col gap-3 items-start justify-center uppercase w-full">
          <div className="flex gap-5 items-center justify-start">
            <p className="text-3xl font-bold">{item?.name}</p>
            <p className="bg-slate-100 px-5 py-1">{item?.category}</p>
          </div>
          {item && (
            <div className="flex items-center justify-start gap-5 w-full flex-wrap">
              <Link href={"/inventory"}>
                <IconButton
                  label="See related Inventories "
                  variant="inventories"
                  reverse
                />
              </Link>
              <Refill id={item?.id} open={open3} setOpen={setOpen3} />
              <Sell id={item?.id} open={open2} setOpen={setOpen2} />
              <AddItem edit={true} item={item} open={open} setOpen={setOpen} />
            </div>
          )}
        </div>{" "}
        <div className="flex items-start justify-center flex-col gap-3 mt-10 lg:mt-0">
          <p>Quantity: {item?.quantity}</p>
          <p>Unit Price: {item?.unit_price}</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
        </div>
      </div>
}
    </div>
  );
}
