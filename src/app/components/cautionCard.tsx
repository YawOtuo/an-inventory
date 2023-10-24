import { AiFillInfoCircle } from "react-icons/ai";

type Props = {
  type: string;
  count: number;
  variant: "caution" | "success";
};
import { styled } from "@stitches/react";
import { type } from "os";
import SuccessCircle from "./icons/SuccessCircle";

export const CautionCard = ({ type, count, variant }: Props) => {
  return (
    <Root
      className="flex max-w-[253px] max-h-[51px] w-full   aspect-[253/51]  min-w-[300px]
           justify-between items-center
           gap-5 capitalize  px-10 rounded-[15px]
           hover:bg-[#e4a9514c] hover:font-bold hover:scale-[1.03] cursor-pointer
           ">
      <div className="flex gap-3 items-center">
        {variant == "caution" ? (
          <AiFillInfoCircle color="#E4A951" size={35} />
        ) : (
          <SuccessCircle />
        )}{" "}
        <p className="">{type}</p>
      </div>
      <div className="font-semibold">{count}</div>
    </Root>
  );
};

const Root = styled("div", {
  boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.25)",
});
