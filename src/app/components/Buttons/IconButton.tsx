import { FaArrowRightLong } from "react-icons/fa6";
import CaRefill from "../icons/CaRefill";
import CaSell from "../icons/CaSell";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { GrAdd } from "react-icons/gr";


type Props = {
  variant: string;
  label: string;
  reverse? : boolean
};

export default function IconButton({ variant, label, reverse} :Props) {
  const options = {
    refill: <CaRefill />,
    sell: <CaSell />,
    delete: <MdDelete  color="#E4A951"/>,
    edit: <MdModeEdit  color="#E4A951" />,
    inventories: <FaArrowRightLong color="#E4A951" />,
    users: <FaArrowRightLong color="#E4A951"/>,
    add : <GrAdd  color="#E4A951"/>
  };
  return (
    <button className={`flex gap-3 items-center justify-center uppercase hover:scale-[1.05] hover:bg-[#e4a95146] ${reverse && "flex-row-reverse"} px-3 py-2`}>
          {options[variant]}
          <p className="text-[15px]">{label}</p>
    </button>
  );
}
