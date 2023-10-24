import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GrAdd } from "react-icons/gr";
import { AddInventory } from "../../../../lib/api/inventory";
import { styled, keyframes } from "@stitches/react";
import { AddItems } from "../../../../lib/api/items";

type Props = {
    open: any;
    setOpen: any;
  };

const DialogDemo = () => {
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
    
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex gap-3">
        <GrAdd /> Add Item
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Add Item
          </Dialog.Title>
          <div className="flex flex-col gap-3 items-start lg:items-end">
            <Formik
              initialValues={{
                type: "",
                quantity: null,
                price: "",
                vairants: [],
              }}
              onSubmit={(values) => {
                addItem(values);
              }}>
              <Form className="flex flex-col items-start gap-5 w-full">
                <FormDiv>
                  <label htmlFor="date">Type</label>
                  <Field
                    type="text"
                    name="type"
                    placeholder="Enter type"
                    className="form-input"
                  />
                  <ErrorMessage name="type" component="div" className="error" />
                </FormDiv>
                <FormDiv>
                  <label htmlFor="date">Quantity</label>
                  <Field
                    type="number"
                    id="song"
                    name="quantity"
                    placeholder="Enter quanitity"
                    className="form-input"
                  />
                  <ErrorMessage name="song" component="div" className="error" />
                </FormDiv>
                <FormDiv>
                  <label htmlFor="date">Price</label>
                  <Field
                    type="number"
                    id="song"
                    name="price"
                    placeholder="Enter price"
                    className="form-input"
                  />
                  <ErrorMessage name="song" component="div" className="error" />
                </FormDiv>
                <FormDiv>
                  <label htmlFor="date">Variants</label>
                  <Field
                    type="number"
                    id="song"
                    name="variants"
                    placeholder="Enter song"
                    className="form-input"
                  />
                  <ErrorMessage name="song" component="div" className="error" />
                </FormDiv>
                <button
                  type="submit"
                  className="w-full  max-h-[50px] bg-[#E4A951] p-2 font-semibold text-white"
                  // aria-label="Close"
                >
                  Add
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

export default DialogDemo;

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
