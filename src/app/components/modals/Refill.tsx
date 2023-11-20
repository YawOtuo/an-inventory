import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GrAdd } from "react-icons/gr";
import { AddInventory } from "../../../../lib/api/inventory";
import { styled, keyframes } from "@stitches/react";
import { AddItems } from "../../../../lib/api/items";
import IconButton from "../Buttons/IconButton";
import { ComboSelectItem } from "../ComboSelectItem";

type Props = {
  id?: number;
  open: any;
  setOpen: any;
};

const Refill = ({ id, open, setOpen }: Props) => {
  const queryClient = useQueryClient();
  const [itemId, setItemId] = useState();

  const mutation = useMutation((newItem) => AddInventory(newItem), {
    onSuccess: () => {
      queryClient.invalidateQueries(`inventory-${id}`);
    },
  });

  const handleRefill = async (newItem) => {
    mutation.mutate(newItem);
  };
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild className="w-fit">
        <div className="w-fit">
          <IconButton label="refill" variant="refill" />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 bg-[#00000028]" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] min-w-[300px] w-fit max-w-[50vw]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[6100]">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Refill
          </Dialog.Title>
          <div className="flex flex-col gap-3 items-start lg:items-end">
            <Formik
              initialValues={{
                action: "refill",
                date: new Date().toLocaleDateString(),
                quantity: 0,
              }}
              onSubmit={(values) => {
                values.itemId = id || itemId;
                handleRefill(values);
                setOpen(false);
              }}>
              <Form className="flex flex-col items-start gap-5 w-full">
                <div className="flex gap-5 flex-col w-full">
                  <FormDiv>
                    <label htmlFor="date">Date</label>
                    <Field
                      type="text"
                      name="date"
                      placeholder="Enter date"
                      className="form-input"
                    />
                    <ErrorMessage
                      name="type"
                      component="div"
                      className="error"
                    />
                  </FormDiv>
                  {!id && (
                    <ComboSelectItem
                      onChange={(value) => {
                        setItemId(() => value);
                      }}
                    />
                  )}
                  <FormDiv>
                    <label htmlFor="date">quantity</label>
                    <Field
                      type="text"
                      name="quantity"
                      placeholder="Enter quantity"
                      className="form-input"
                    />
                    <ErrorMessage
                      name="type"
                      component="div"
                      className="error"
                    />
                  </FormDiv>
                </div>

                <button
                  type="submit"
                  className="w-full   max-h-[50px] bg-[#E4A951] p-2 font-semibold text-white"
                  // aria-label="Close"
                >
                  Refill
                </button>
              </Form>
            </Formik>
          </div>

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

export default Refill;

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
