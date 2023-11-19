"use client";
import { styled } from "@stitches/react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import SearchSheet from "./SearchSheet";

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
  return (
    <Root className="flex  bg-[#e4a95116] w-full h-full justify-center">
      <div className="flex flex-col items-start lg:items-center lg:flex-row gap-2 p-4 max-w-[1728px] justify-start w-full h-full">
        <SearchSheet/>
        <NavItem
          link="/"
          name={"Dashboard"}
          icon={<AiOutlineHome size="25" color="#E4A951" />}
        />
        <NavItem
          link="/items"
          name={"Items"}
          icon={<AiOutlineHome size="25" color="#E4A951" />}
        />
        <NavItem
          link="/users"
          name={"Users"}
          icon={<AiOutlineHome size="25" color="#E4A951" />}
        />{" "}
        <NavItem
          link="/inventory"
          name={"Inventory"}
          icon={<AiOutlineHome size="25" color="#E4A951" />}
        />
        <NavItem
          link="/"
          name={"Account"}
          icon={<AiOutlineHome size="25" color="#E4A951" />}
        />
      </div>
    </Root>
  );
};

export default Navbar;

const Root = styled("div", {});

