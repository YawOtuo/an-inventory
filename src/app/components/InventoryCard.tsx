import Image from "next/image";
import { TbIroning2 } from "react-icons/tb";
import IconButton from "./Buttons/IconButton";
import Link from "next/link";

type Props = {
  item: any;
};

export default function InventoryCard({ item }: Props) {
  return (
    <div
      className="w-full py-3 px-5
    hover:bg-[#e4a9513e] cursor-pointer
    ">
      <div className="flex  flex-col lg:flex-row text-md capitalize justify-between items-center gap-5 lg:gap-0 ">
        <div className="flex gap-16 justify-between lg:justify-between items-center w-full lg:w-fit">
          <div className="flex gap-5 items-center">
            <div className="relative aspect-square w-[40px] ">
              <Image
                src={"/testimage1.png"}
                fill
                alt="Image"
                objectFit="cover"
              />
            </div>
            <p className="whitespace-nowrap">{item?.Item?.name}</p>{" "}
          </div>
          <div className="bg-slate-100 px-10 rounded-md py-1">{item?.Item?.category}</div>{" "}
        </div>
        <div className="flex gap-5 lg:gap-16  items-end lg:items-center justify-end w-full">
          <div className="text-yellow1 font-semibold">{item?.action}</div>
          <div>{item?.quantity || 0}</div>
          <div>{item?.date || "N/A"}</div>

          <div>{item?.Item?.quantity || 0}</div>
          <Link href={`/items/${item?.Item?.id}`}>
            <IconButton label="Go to item" variant="inventories" reverse />
          </Link>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
