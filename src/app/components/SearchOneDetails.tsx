import Link from "next/link";
import Refill from "./modals/Refill";
import Sell from "./modals/sell";
import IconButton from "./Buttons/IconButton";

type Props = {
  item: any;
};

export default function SearchOneDetails({ item }: Props) {
  return (
    <div>
      <div className="col-span-4 lg:col-span-2 flex flex-col items-start px-10 justify-between order-1 lg:order-2">
        <div className="flex flex-col ">
          <p className="text-3xl font-semibold capitalize">{item?.type}</p>
          <p>
            <span className="text-md">Quantity</span> :{item?.quantity}
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

        <p>{item?.description}</p>
        <div className="flex flex-col gap-5 justify-start items-center w-full ">
          <div className="flex gap-5 items-center justify-center">
            <Refill />
            <Sell />
          </div>
          <Link href={`/items/${item?.id}`} className="w-full">
            <IconButton variant={"inventories"} label={"Go to Item"} reverse />
          </Link>
        </div>
      </div>
    </div>
  );
}
