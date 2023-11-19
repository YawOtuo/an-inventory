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
import Image from "next/image";

export default function UserProfileSheet() {
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
          <div className="flex gap-5 items-center px-10">
            <div className="relative aspect-square w-[40px] rounded-full overflow-hidden">
              <Image src={"/person2.png"} fill alt="Image" objectFit="cover" />
            </div>
            <p className="whitespace-nowrap">Alessi Cara</p>
          </div>
        </SheetTrigger>
        <SheetContent side={"right"} className="w-[85%] lg:w-[30%] text-black">
          <SheetHeader>
            <SheetTitle>
              <p className="text-2xl font-semibold">My Details</p>
            </SheetTitle>
            <SheetDescription className="text-black h-full ">
              <div className="flex flex-col gap-10 w-full items-center justify-between h-full pt-20 lg:pt-0">
                <div>
                  <div className="relative aspect-square w-[200px] rounded-full overflow-hidden">
                    <Image
                      src={"/person2.png"}
                      fill
                      alt="Image"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                    <p>Lorem : Lorem</p>
                    <p>Lorem : Lorem</p>
                    <p>Lorem : Lorem</p>
                    <p>Lorem : Lorem</p>
                    <p>Lorem : Lorem</p>
                    <p>Lorem : Lorem</p>

                </div>
                <div>
                    <IconButton label="Edit Details" variant="edit"/>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
