import Image from "next/image";
import { TbIroning2 } from "react-icons/tb";

type Props = {
  name: string;
  category: string;
  count: string | number;
};

export default function ItemCard({ name, category, count }: Props) {
  return (
    <div
      className="w-full py-3 px-5
    hover:bg-[#e4a9513e] cursor-pointer
    ">
      <div className="flex text-md capitalize justify-between items-center">
        <div className="flex gap-7 justify-center items-center">
          <div className="flex gap-5 items-center">
            <div className="relative aspect-square w-[40px] ">
              <Image src={"/testimage1.png"} fill alt="Image" objectFit="cover" />
            </div>
            {name}
          </div>
          <div className="bg-slate-100 px-5 py-1">{category}</div>{" "}
        </div>

        <div>{count || 30}</div>
      </div>{" "}
    </div>
  );
}
