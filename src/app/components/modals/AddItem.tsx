import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GrAdd } from "react-icons/gr";
import { AddInventory } from "../../../../lib/api/inventory";
import { styled, keyframes } from "@stitches/react";
import { AddItems, UpdateItem } from "../../../../lib/api/items";
import IconButton from "../Buttons/IconButton";

type Props = {
  open: any;
  setOpen: any;
  edit?: boolean;
  item?: any;
};

const AddItem = ({ edit, item, open, setOpen }: Props) => {
  const queryClient = useQueryClient();

  const addItemMutation = useMutation(
    async (body) => {
      return await AddItems(body);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Items");
      },
    }
  );

  // Usage within your component
  const addItem = async (ItemData) => {
    try {
      const response = await addItemMutation.mutateAsync(ItemData);
    } catch (error) {
      console.error(error);
    }
  };

  const editMutation = useMutation((newItem) => UpdateItem(newItem, item?.id), {
    onSuccess: () => {
      queryClient.invalidateQueries(`item`,item?.id);
    },
  });

  const handleEdit = async (newItem) => {
    editMutation.mutate(newItem);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild className="w-fit">
        <div className="w-fit">
          {!edit ? (
            <IconButton label="New Item" variant="add" />
          ) : (
            <IconButton label="Edit Item" variant="edit" />
          )}
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 bg-[#00000028]" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[70vw]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            {!edit ? "Add Item" : "Edit Item"}
          </Dialog.Title>
          <div className="flex flex-col gap-3 items-start lg:items-end">
            <Formik
              initialValues={{
                name: item ? item.name : "",
                category: item ? item.category : "",
                quantity: item ? item.quantity : null,
                unit_price: item ? item.unit_price : "",
              }}
              onSubmit={(values) => {
                !edit ? addItem(values) : handleEdit(values);
                setOpen(false)
              }}>
              <Form className="grid grid-cols-2 items-start gap-5 w-full">
                <div className="col-span-2 lg:col-span-1 flex gap-5 flex-col">
                  <FormDiv>
                    <label htmlFor="date">Name</label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      className="form-input"
                    />
                    <ErrorMessage
                      name="type"
                      component="div"
                      className="error"
                    />
                  </FormDiv>
                  <FormDiv>
                    <label htmlFor="date">Category</label>
                    <Field
                      type="text"
                      name="category"
                      placeholder="Enter category"
                      className="form-input"
                    />
                    <ErrorMessage
                      name="type"
                      component="div"
                      className="error"
                    />
                  </FormDiv>
                </div>
                <div className="col-span-2 lg:col-span-1 flex gap-5 flex-col">
                  <FormDiv>
                    <label htmlFor="date">Quantity</label>
                    <Field
                      type="number"
                      id="song"
                      name="quantity"
                      placeholder="Enter quanitity"
                      className="form-input"
                    />
                    <ErrorMessage
                      name="song"
                      component="div"
                      className="error"
                    />
                  </FormDiv>
                  <FormDiv>
                    <label htmlFor="date">Unit Price</label>
                    <Field
                      type="number"
                      id="song"
                      name="unit_price"
                      placeholder="Enter Unit Price"
                      className="form-input"
                    />
                    <ErrorMessage
                      name="song"
                      component="div"
                      className="error"
                    />
                  </FormDiv>
                </div>

                <button
                  type="submit"
                  className="w-full col-span-2  max-h-[50px] bg-[#E4A951] p-2 font-semibold text-white"
                  // aria-label="Close"
                >
                  {!edit ? "Add" : "Edit"}
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

export default AddItem;

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
