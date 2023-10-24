import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../../lib/api/items";
import { Swiper, SwiperSlide } from "swiper/react";
import { CautionCard } from "./cautionCard";

export default function JustFilled() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["inventory"], () => fetchItems());
  return (
    <div className="">
    <Swiper
      // navigation
      // modules={[Navigation]}
      spaceBetween={15}
      slidesPerView={"auto"}
      breakpoints={{
    
      }}>
      {items?.map((r: any, index: any) => (
        <SwiperSlide key={index} className=" max-w-fit">
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
  );
}
