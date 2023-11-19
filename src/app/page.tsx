"use client";
import { useQuery } from "@tanstack/react-query";
import { CautionCard } from "./components/cautionCard";
import { fetchItems } from "../../lib/api/items";

import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "@stitches/react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import RecentlySold from "./components/RecentlySold";
import TotalSales from "./components/TotalSales";
import Navbar from "./components/navbar";
import LowStockItems from "./components/LowStockItems";
import JustFilled from "./components/JustFilled";
import { useState } from "react";
import IconButton from "./components/Buttons/IconButton";
import AddItem from "./components/modals/AddItem";
import Refill from "./components/modals/Refill";
import Sell from "./components/modals/sell";
import Link from "next/link";

const Page = () => {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["inventory"], () => fetchItems());
  const [lowStockItems, setLowStockItems] = useState(false);
  const [justFilledItems, setJustFilledItems] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center items-center px-5 lg:px-10 py-5">
      <div className="w-full ">
        {lowStockItems && (
          <div>
            <p>Cautions</p>
            <LowStockItems />
          </div>
        )}
        {lowStockItems && (
          <div>
            <p>Just Filled</p>
            <JustFilled />
          </div>
        )}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-[40px] font-bold">Welcome Mrs. Anokye,</p>
            <p>What would you like to do today?</p>
          </div>
          <div className="flex gap-5 flex-col lg:flex-row items-start lg:items-center">
            <AddItem />
            <Refill />
            <Sell />
            <Link href={"/inventory"}>
              <IconButton
                reverse
                variant={"inventories"}
                label={"View All Inventories"}
              />
            </Link>
            <Link href={"/users"}>
              <IconButton reverse variant={"users"} label={"View All Users"} />
            </Link>{" "}
          </div>
        </div>
        <div className="flex justify-start items-center gap-10 mt-10 flex-wrap">
          <TotalSales filter="today" amount={30} />
          <TotalSales filter="This week" amount={300} />
          <TotalSales filter="this month" amount={500} />
        </div>
        <div className="w-full">
          <RecentlySold />
        </div>{" "}
      </div>
    </div>
  );
};

export default Page;
