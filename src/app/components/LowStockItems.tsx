import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../../lib/api/items";
import { Swiper, SwiperSlide } from "swiper/react";
import { CautionCard } from "./cautionCard";
import { styled } from "@stitches/react";

export default function LowStockItems() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["inventory"], () => fetchItems());
  return (
    <Root className="flex justify-center">
      <Swiper className="justify-evenly">
        <SwiperSlide className="">
          <div className="flex flex-wrap justify-center lg:justify-start  px-2 gap-3">
            {items?.slice(0, 9).map((r: any, index: any) => (
              <div className="col-span-3 md:col-span-1 flex justify-center" key={index}>
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
          <div className="flex flex-wrap justify-center lg:justify-start px-2 gap-3 w-full">
            {items?.slice(9, 18).map((r: any, index: any) => (
              <div className="" key={index}>
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
    </Root>
  );
}

const Root = styled("div", {
    "swiper": {

    },
  });
