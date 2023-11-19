import Image from "next/image";
import { TbIroning2 } from "react-icons/tb";

type Props = {
  name: string;
  category: string;
  count: string | number;
  actionType: string;
  date: any;
};

export default function InventoryCard({
  name,
  category,
  count,
  actionType,
  date,
}: Props) {
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
            <p className="whitespace-nowrap">{name}</p>{" "}
          </div>
          <div className="bg-slate-100 px-10 rounded-md py-1">{category}</div>{" "}
        </div>
        <div className="flex gap-5 lg:gap-16  items-end lg:items-start justify-end w-full">
          <div className="text-yellow1 font-semibold">{actionType}</div>
          <div>{count || 30}</div>
          <div>{date || "Jan 26"}</div>

          <div>{count || 300}</div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
