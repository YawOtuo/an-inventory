import { FaArrowRightLong } from "react-icons/fa6";
import CaRefill from "../icons/CaRefill";
import CaSell from "../icons/CaSell";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { GrAdd } from "react-icons/gr";
import { IoAdd } from "react-icons/io5";
import SuccessCircle from "../icons/SuccessCircle";
import { RxCross2 } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";




type Props = {
  variant: string;
  label: string;
  reverse?: boolean;
};

export default function IconButton({ variant, label, reverse }: Props) {
  const options = {
    refill: <CaRefill />,
    sell: <CaSell />,
    delete: <MdDelete color="red" />,
    delete2: <MdDelete color="#E4A951" />,
    edit: <MdModeEdit color="#E4A951" />,
    inventories: <FaArrowRightLong color="#E4A951" />,
    users: <FaArrowRightLong color="#E4A951" />,
    add: <IoAdd size={30} color="#E4A951" />,
    accept: <SuccessCircle  color="#E4A951" />,
    remove: <RxCross2 size={30} color="#E4A951" />,
    reject: <MdDelete size={30} color="red" />,
    permission: <FiUsers size={30} color="grey" />,
    read: <IoCheckmarkDoneSharp size={30} color="#E4A951" />,



  };
  return (
    <button
      className={`flex gap-3 items-center justify-center uppercase hover:scale-[1.05] hover:bg-[#e4a95146] ${
        reverse && "flex-row-reverse"
      } px-3 py-2`}>
      {options[variant]}
      <p className="text-[15px]">{label}</p>
    </button>
  );
}
