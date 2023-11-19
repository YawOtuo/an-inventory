import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiSearch } from "react-icons/ci";

import { styled } from "@stitches/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SearchItem, fetchItems } from "../../../lib/api/items";
import ItemCard from "./ItemCard";
import { useState } from "react";
import IconButton from "./Buttons/IconButton";
import Link from "next/link";
import Refill from "./modals/Refill";
import SellModal from "./modals/sell";
import Sell from "./modals/sell";

export default function SearchSheet() {
  const [results, setResults] = useState([]);
  const [oneData, setOneData] = useState();
  const [searching, setSearching] = useState();

  const queryClient = useQueryClient();

  const searchItemsMutation = useMutation(
    async (body) => {
      return await SearchItem(body);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("search");
      },
    }
  );

  // Usage within your component
  const searchItems = async (key) => {
    try {
      const response = await searchItemsMutation.mutateAsync(key);
      setResults(response);
      setSearching(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className="flex gap-2 items-center justify-center">
            <CiSearch color="#E4A951" />
            Search
          </div>
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[90%]">
          <SheetHeader>
            <SheetTitle>
              <input
                className="bg-[#d0a25d33] font-[400] px-5 py-2"
                placeholder="Search for item"
                onChange={(e) => {
                  setSearching(true);
                  searchItems(e.target.value);
                }}
              />
            </SheetTitle>
            <SheetDescription className="">
              <div className="grid grid-cols-4 gap-5 text-black ">
                {searching && <p>Loading</p>}
                <div
                  className={`col-span-2 ${
                    oneData ? "col-span-4 lg:col-span-2" : "col-span-4"
                  } overflow-y-scroll max-h-[80vh] lg:no-scrollbar order-2 lg:order-1`}>
                  Results
                  {results?.map((r, index) => (
                    <div
                      onClick={() => setOneData(r)}
                      className="col-span-4 md:col-span-2 lg:col-span-1 "
                      key={index}>
                      <ItemCard
                        category="cloth"
                        name={r?.type}
                        count={r?.count}
                      />
                    </div>
                  ))}
                </div>
                {oneData && (
                  <div className="col-span-4 lg:col-span-2 flex flex-col items-start px-10 justify-between order-1 lg:order-2">
                    <div className="flex flex-col ">
                      <p className="text-3xl font-semibold capitalize">
                        {oneData?.type}
                      </p>
                      <p>
                        <span className="text-md">Quantity</span> :
                        {oneData?.quantity}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 my-10">
                      <p>Lorem : Lorem ipusm</p>
                      <p>Lorem : Lorem ipusm</p>
                      <p>Lorem : Lorem ipusm</p>
                      <p>Lorem : Lorem ipusm</p>
                      <p>Lorem : Lorem ipusm</p>
                      <p>Lorem : Lorem ipusm</p>
                      <p>Lorem : Lorem ipusm</p>
                      <p>Lorem : Lorem ipusm</p>
                      <p>Lorem : Lorem ipusm</p>
                    </div>

                    <p>{oneData?.description}</p>
                    <div className="flex  gap-5 justify-start items-center w-full flex-wrap">
                      <Refill />
                      <Sell />
                      <Link href={`/items/${oneData?.id}`}>
                        <IconButton
                          variant={"inventories"}
                          label={"Go to Item"}
                          reverse
                        />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
