import Image from "next/image";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

// export const AccordionDemo = () => (
//   <Accordion.Root
//     className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
//     type="single"
//     defaultValue="item-1"
//     collapsible>
//     <AccordionItem value="item-1">
//       <AccordionTrigger>Is it accessible?</AccordionTrigger>
//       <AccordionContent>
//         Yes. It adheres to the WAI-ARIA design pattern.
//       </AccordionContent>
//     </AccordionItem>
//   </Accordion.Root>
// );

export const CAccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={cn(
        "focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]",
        className
      )}
      {...props}
      ref={forwardedRef}>
      {children}
    </Accordion.Item>
  )
);

export const CAccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          "text-violet11 shadow-mauve6 hover:bg-mauve2 group flex flex-1 cursor-default items-center justify-between bg-white px-5 py-5 text-[15px] leading-none shadow-[0_1px_0] outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}>
        {children}
        <ChevronDownIcon
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

export const CAccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn(
        "text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
        className
      )}
      {...props}
      ref={forwardedRef}>
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);

CAccordionContent.displayName = "CAccordionContent"
CAccordionItem.displayName = "CAccordionContent"
CAccordionTrigger.displayName = "CAccordionContent"