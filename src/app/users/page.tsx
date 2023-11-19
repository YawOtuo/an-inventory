"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../../lib/api/items";
import ItemCard from "../components/ItemCard";
import UserCard from "../components/UserCard";
import * as Accordion from "@radix-ui/react-accordion";
import {
  CAccordionContent,
  CAccordionItem,
  CAccordionTrigger,
} from "../components/Accordion";
import Image from "next/image";
import IconButton from "../components/Buttons/IconButton";

export default function Page() {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["inventory"], () => fetchItems());
  return (
    <div className="flex flex-col gap-5 w-full px-5 lg:px-20 py-10">
      <div className="flex flex-col gap-5">
        <p>Unanswered Invites</p>
        <div className="grid grid-cols-2   py-10 gap-x-10 gap-y-10">
          {Array.from({ length: 5 }).map((r, index) => (

            <Accordion.Root
              key={index}
              className="col-span-2 lg:col-span-1 bg-mauve6  rounded-md"
              type="single"
              defaultValue="item-1"
              collapsible>
              <CAccordionItem value={`item-${index}`}>
                <CAccordionTrigger>
                  <div className="flex gap-5 justify-start items-center">
                    <div className="relative aspect-square w-[100px] rounded-full overflow-hidden ">
                      <Image src={"/person1.png"} fill alt="Image" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-lg">Phillly Jani </p>
                      <p>abc@gmail.com</p>
                    </div>{" "}
                  </div>
                </CAccordionTrigger>
                <CAccordionContent>
                  <div className="flex gap-5 flex-wrap">
                    <IconButton label="Accept" variant="accept" />
                    <IconButton label="Reject" variant="reject" />
                    <IconButton label="Remove" variant="remove" />
                    <IconButton
                      label="Change Permission"
                      variant="permission"
                    />
                  </div>
                </CAccordionContent>
              </CAccordionItem>
            </Accordion.Root>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <p>All Users</p>
        <div className="grid grid-cols-2   py-10 gap-x-10 gap-y-10">
          {Array.from({ length: 5 }).map((r, index) => (
            <Accordion.Root
              key={index}
              className="col-span-2 lg:col-span-1  bg-mauve6  rounded-md"
              type="single"
              defaultValue="item-1"
              collapsible>
              <CAccordionItem value={`item-${index}`}>
                <CAccordionTrigger>
                  <div className="flex gap-5 justify-start items-center">
                    <div className="relative aspect-square w-[100px] rounded-full overflow-hidden ">
                      <Image src={"/person1.png"} fill alt="Image" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-lg">Phillly Jani </p>
                      <p>abc@gmail.com</p>
                    </div>{" "}
                  </div>
                </CAccordionTrigger>
                <CAccordionContent>
                  <div className="flex gap-5 flex-wrap">
                    <IconButton label="Accept" variant="accept" />
                    <IconButton label="Reject" variant="reject" />
                    <IconButton label="Remove" variant="remove" />
                    <IconButton
                      label="Change Permission"
                      variant="permission"
                    />
                  </div>
                </CAccordionContent>
              </CAccordionItem>
            </Accordion.Root>
          ))}

        </div>
      </div>
    </div>
  );
}
