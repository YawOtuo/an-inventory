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

const Page = () => {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["inventory"], () => fetchItems());

  return (
    <div className="w-full flex flex-col justify-center items-center px-10 py-5">
      <div className="w-full ">
        <p>Cautions</p>
        <LowStockItems />
        <div className="pt-5">Just Filled</div>
        <JustFilled />
        <div className="grid grid-cols-3 gap-4 py-7">
          <div className="col-span-3 md:col-span-2">
            <RecentlySold />
          </div>{" "}
          <div className="flex flex-col justify-center items-center col-span-3 md:col-span-1">
            <TotalSales />
            <TotalSales />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
