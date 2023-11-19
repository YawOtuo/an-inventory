import Image from "next/image";
import { TbIroning2 } from "react-icons/tb";

type Props = {
  name: string;
  category: string;
  count: string | number;
  actionType: string;
};

export default function InventoryCard({
  name,
  category,
  count,
  actionType,
}: Props) {
  return (
    <div
      className="w-full py-3 px-5
    hover:bg-[#e4a9513e] cursor-pointer
    ">
      <div className="flex text-md capitalize justify-between items-center flex-wrap gap-5 lg:gap-0 ">
        <div className="flex gap-16 justify-center items-center ">

          <div className="flex gap-5 items-center">
            <div className="relative aspect-square w-[40px] ">
              <Image src={"/testimage1.png"} fill alt="Image" />
            </div>
            {name}
          </div>

          <div className="bg-slate-100 px-10 rounded-md py-1">{category}</div>{" "}
        </div>


        <div className="flex gap-16 justify-end ">
          <div className="text-yellow1">{actionType}</div>
          <div>{count || 30}</div>
          <div>{count || 300}</div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
