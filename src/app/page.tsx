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
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
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
        <div className="hidden lg:flex justify-center items-center gap-10 mb-6 flex-wrap">
          <TotalSales filter="today" amount={30} />
          <TotalSales filter="This week" amount={300} />
          <TotalSales filter="this month" amount={500} />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-[40px] font-bold">Welcome Mrs. Anokye,</p>
            <p>What would you like to do today?</p>
          </div>
          <div className="flex gap-5 flex-wrap flex-row items-start lg:items-center">
            <AddItem open={open1} setOpen={setOpen1} />
            <Refill open={open2} setOpen={setOpen2} />
            <Sell open={open3} setOpen={setOpen3} />
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
          <div className="lg:hidden flex justify-start items-center gap-10 my-10 flex-wrap">
            <TotalSales filter="today" amount={30} />
            <TotalSales filter="This week" amount={300} />
            <TotalSales filter="this month" amount={500} />
          </div>
        </div>
        <div className="w-full">
          <RecentlySold />
        </div>{" "}
      </div>
    </div>
  );
};

export default Page;
