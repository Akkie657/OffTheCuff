"use client"

import { useState } from "react"
import { format, addDays } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Calendar } from "./ui/calendar"
import { cn } from "../utils/cn"

interface DateRange {
  from: Date
  to?: Date
}

interface DatePickerWithRangeProps {
  className?: string
}

export function DatePickerWithRange({ className }: DatePickerWithRangeProps) {
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: addDays(new Date(), 7),
  })

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start rounded-full border-2 border-funky-green px-4 py-6 text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-5 w-5 text-funky-green" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate as any}
            numberOfMonths={2}
            className="rounded-lg border-2 border-funky-blue p-3"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

