import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GrAdd } from "react-icons/gr";
import { AddInventory } from "../../../../lib/api/inventory";
import { styled, keyframes } from "@stitches/react";
import { AddItems } from "../../../../lib/api/items";
import IconButton from "../Buttons/IconButton";
import ItemCard from "../ItemCard";
import SearchOneDetails from "../SearchOneDetails";

type Props = {
  item: any;
};

const SearchItemSmModal = ({ item }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className="w-full">
        <div className="w-full">
          <ItemCard name={item?.type} category="CLOTH" count={item?.count} />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 bg-[#00000028]" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[80vw]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[4000]">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">Details</Dialog.Title>
          <SearchOneDetails item={item} />

          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SearchItemSmModal;

const FormDiv = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "10px",

  ".form-input": {
    border: "1px solid #E4A951",
    paddingInline: "1rem",
    paddingBlock: "1rem",
    maxHeight: "40px",
  },
});
