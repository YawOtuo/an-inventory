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
import SearchItemSmModal from "./modals/SearchItemSm";
import SearchOneDetails from "./SearchOneDetails";
import { IoIosArrowBack } from "react-icons/io";

export default function SearchSheet() {
  const [results, setResults] = useState([]);
  const [oneData, setOneData] = useState();
  const [searching, setSearching] = useState();
  const [hide, setHide] = useState(false);

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
        <SheetContent side={"left"} className="w-full lg:w-[90%]">
          <SheetHeader>
            <SheetTitle>
              <input
                className="bg-[#c7ae8a33] font-[400] px-5 py-2"
                placeholder="Search for item"
                onChange={(e) => {
                  setSearching(true);
                  searchItems(e.target.value);
                }}
              />
            </SheetTitle>
            <SheetDescription className="">
              <div className={`grid grid-cols-4 gap-5 text-black `}>
                {searching && <p>Loading</p>}
                <div
                  className={`${
                    hide && "hidden lg:flex flex-col lg:col-span-2"
                  } col-span-4 overflow-y-scroll max-h-[80vh] no-scrollbar `}>
                  Results
                  {results?.map((r, index) => (
                    <div
                      onClick={() => {
                        setHide(true);
                        setOneData(r);
                      }}
                      className="col-span-4 md:col-span-2 lg:col-span-1 "
                      key={index}>
                      <ItemCard
                        category={r?.category}
                        name={r?.name}
                        count={r?.quantity}
                      />
                    </div>
                  ))}
                </div>
                {oneData && (
                  <div
                    className={`${
                      !hide && "hidden"
                    } col-span-4 lg:col-span-2 flex flex-col items-start px:6 lg:px-10 justify-between order-1 lg:order-2 text-black`}>
                    <button className="lg:hidden " onClick={
                      ()=> setHide(false)
                    }>
                      <IoIosArrowBack size={35} color="#e4a951" />
                    </button>

                    <div className="flex flex-col relative items-start">
                      <p className="text-3xl font-semibold capitalize">
                        {oneData?.name}
                      </p>

                      <p className="font-[400] capitalize">
                        {oneData?.category}
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
                    <div className="flex flex-col gap-5 justify-start items-start w-full ">
                      <div className="flex gap-5 items-center justify-start">
                        <Refill id={oneData?.id} />
                        <Sell id={oneData?.id} />
                      </div>
                      <Link href={`/items/${oneData?.id}`} className="w-full">
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
              {/* <div className="lg:hidden w-full">
                {results?.map((r, index) => (
                  <div
                  className="w-full"
                    key={index}>
                    <SearchItemSmModal item={r}/>
                  </div>
                ))}
              </div> */}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
