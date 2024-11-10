import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { Button } from "@/shared/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/popover"
import { cn } from "@/lib/utils"
import { Calendar } from "@/shared/calendar"

const CarFormDate = ({ date, setDate }: any) => {
    return (
        <div className={cn("grid gap-2 mb-3")}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "p-2 w-fll justify-start text-left bg-[#f2f4f8] font-medium   border-none text-placeholder  hover:text-placeholder",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className='w-5 h-5 mr-2 text-placeholder' />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
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
                        onSelect={setDate}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default CarFormDate