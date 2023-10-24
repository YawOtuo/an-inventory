"use client";
import { useQuery } from "@tanstack/react-query";
import { CautionCard } from "./components/cautionCard";
import { fetchItems } from "../../lib/api/items";
import { JustFilledCard } from "./components/JustFilledCard";

import SideNav from "./components/sideNav";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "@stitches/react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import RecentlySold from "./components/RecentlySold";
import TotalSales from "./components/TotalSales";

const Page = () => {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["inventory"], () => fetchItems());

  return (
    <Root className="grid grid-cols-5 gap-10 ">
      <div className="lg:col-span-1">
        <SideNav />
      </div>
      <div className="col-span-5 lg:col-span-4 pt-5 px-5 lg:px-0">
        <p>Cautions</p>
        <div className="">
          <Swiper
            spaceBetween={50}
            className="h-full"
            // navigation
            // modules={[Navigation]}
          >
            <SwiperSlide className="h-full w-full">
              <div className="grid grid-cols-2 xl:grid-cols-3 px-2 gap-y-3">
                {items?.slice(0, 9).map((r: any, index: any) => (
                  <div className="col-span-3 md:col-span-1" key={index}>
                    {" "}
                    <CautionCard
                      variant="caution"
                      key={index}
                      type={r?.type}
                      count={r?.quantity}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="grid grid-cols-2 xl:grid-cols-3 px-2 gap-y-3">
                {items?.slice(9, 18).map((r: any, index: any) => (
                  <div className="col-span-3 md:col-span-1" key={index}>
                    {" "}
                    <CautionCard
                      key={index}
                      type={r?.type}
                      variant="caution"
                      count={r?.quantity}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="pt-5">Just Filled</div>
        <div className="">
          <Swiper
            // navigation
            // modules={[Navigation]}
            className="ml-5"
            slidesPerView={1}
            breakpoints={{
              768:{
                slidesPerView:3
              }
            }}
            
            >
            {items?.map((r: any, index: any) => (
              <SwiperSlide key={index} className="px-2">
                <CautionCard
                  key={index}
                  type={r?.type}
                  variant="success"
                  count={r?.quantity}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="grid grid-cols-3 gap-4 py-7">
          <div className="col-span-3 md:col-span-2">
            <RecentlySold />
          </div>{" "}
          <div className="flex flex-col justify-center items-center col-span-3 md:col-span-1">
            <TotalSales />
            <TotalSales />

          </div>{" "}
        </div>
      </div>
    </Root>
  );
};

const Root = styled("div", {
  swiper: {
    paddingInline: "2rem !important",
  },
});
export default Page;
