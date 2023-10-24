import { TbIroning2 } from "react-icons/tb";

type Props = {
  type: string;
  count: string | number;
};

export default function ItemCard({ type, count }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-10
    hover:bg-[#e4a9513e] cursor-pointer
    " >
      <TbIroning2 color="#E4A951" size="50" />
      <div className="flex text-md capitalize">
        {type}
        <div>{count}</div>
      </div>{" "}
    </div>
  );
}


