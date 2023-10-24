import { styled } from "@stitches/react";

const TotalSales = () => {
  return (
    <Root className="flex flex-col items-center justify-center gap-3 w-full md:max-w-[182px] 
    max-h-[101px] md:max-h-[109px] rounded-[14px]">
      <p>Total Sales Today</p>

      <p className="text-[#E4A951] font-bold">100000</p>
    </Root>
  );
};

const Root = styled("div", {
  aspectRatio: "182/109",
  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
});
export default TotalSales;
