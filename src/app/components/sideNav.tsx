import { styled } from "@stitches/react";
import { AiOutlineHome } from "react-icons/ai";

type NavProps = {
  name: string;
  icon: React.ReactNode;
};

const NavItem = ({ name, icon }: NavProps) => {
  return (
    <div className="flex gap-3 items-center hover:bg-[#e4a95133] p-4 cursor-pointer hover:scale-[1.05]">
      {icon}
      {name}
    </div>
  );
};

const SideNav = () => {
  return (
    <Root className="hidden lg:flex flex-col gap-2 p-4 bg-[#e4a95116] h-full">
      <SearchInput type="text" placeholder="Search for item" />
      <NavItem
        name={"Dashboard"}
        icon={<AiOutlineHome size="25" color="#E4A951" />}
      />
      <NavItem
        name={"Items"}
        icon={<AiOutlineHome size="25" color="#E4A951" />}
      />
      <NavItem
        name={"Users"}
        icon={<AiOutlineHome size="25" color="#E4A951" />}
      />
      <NavItem
        name={"Accounts"}
        icon={<AiOutlineHome size="25" color="#E4A951" />}
      />
    </Root>
  );
};

export default SideNav;

const Root = styled("div", {
});

const SearchInput = styled("input", {
  maxHeight:"73px",
  height:"100%",
  flexShrink:"0",
  backgroundColor: "#E4A95133",
  borderRadius:"30px",
  paddingInline:"1rem",
});
