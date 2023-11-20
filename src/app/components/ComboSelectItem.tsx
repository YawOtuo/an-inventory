"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  
} from "@/components/ui/popover"
import { SearchItem, fetchItems } from "../../../lib/api/items"
import { useQuery } from "@tanstack/react-query"

type Props = {
  onChange : any
}

export function ComboSelectItem({onChange} : Props) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState()
  const [keyword , setKeyWord] = React.useState()


  React.useEffect(()=>{
    onChange(value)
  }, [value])


  const {
    isLoading,
    error: itemError,
    data: results,
  } = useQuery(["items"], () => fetchItems(), {
  });

  // React.useEffect(()=>{
  //   r
  // }, [results])
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? results?.find((result) => result.id === value)?.name
            : "Select item..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 z-[7100] overflow-y-scroll">
        <Command>
          <CommandInput placeholder="Search item..." />
          <CommandEmpty>No item found.</CommandEmpty>
          <CommandGroup>
            {results?.map((result) => (
              <CommandItem
                key={result.id}
                value={result.id}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : result.id)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === result.id ? "opacity-100" : "opacity-0"
                  )}
                />
                {result.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
