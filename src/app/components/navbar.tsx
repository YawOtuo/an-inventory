"use client";
import { styled } from "@stitches/react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import SearchSheet from "./SearchSheet";
import { IoIosArrowUp, IoIosNotifications } from "react-icons/io";
import { MdOutlineInventory } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import UserProfileSheet from "./UserProfileSheet";

type NavProps = {
  name: string;
  icon: React.ReactNode;
  link: string;
};

const NavItem = ({ name, icon, link }: NavProps) => {
  return (
    <div className=" hover:bg-[#e4a95133] px-4 py-2 cursor-pointer hover:scale-[1.05]">
      <Link href={link} className="flex gap-3 items-center">
        {icon}
        {name}
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [hidden, setHidden] = useState(window.screenX < 1024 && true);
  return (
    <Root className=" relative flex  bg-[#e4a95116] w-full h-full flex-col lg:flex-row items-start justify-center lg:items-center">
      <div
        className={` flex flex-col items-start lg:items-center lg:flex-row gap-2 p-4 max-w-[1728px] justify-start w-full h-full
        ${hidden && "max-h-[50px] overflow-hidden"}
        `}>
        <div className="absolute right-[10px] lg:hidden">
          {hidden && (
            <button onClick={(e) => setHidden((init) => !init)} className="]">
              <IoIosArrowDown size="30" color="#E4A951" />
            </button>
          )}
          {!hidden && (
            <button onClick={(e) => setHidden((init) => !init)} className="]">
              <IoIosArrowUp size="30" color="#E4A951" />
            </button>
          )}
        </div>
        <SearchSheet />
        <NavItem
          link="/"
          name={"Dashboard"}
          icon={<AiOutlineHome size="25" color="#E4A951" />}
        />
        <NavItem
          link="/items"
          name={"Items"}
          icon={<MdProductionQuantityLimits size="25" color="#E4A951" />}
        />
        <NavItem
          link="/users"
          name={"Users"}
          icon={<HiMiniUsers size="25" color="#E4A951" />}
        />{" "}
        <NavItem
          link="/inventory"
          name={"Inventory"}
          icon={<MdOutlineInventory size="25" color="#E4A951" />}
        />
        <NavItem
          link="/notifications"
          name={"Notifications"}
          icon={<IoIosNotifications size="25" color="#E4A951" />}
        />
        
      </div>
      <div>
        <UserProfileSheet/>
      </div>
    </Root>
  );
};

export default Navbar;

const Root = styled("div", {});
