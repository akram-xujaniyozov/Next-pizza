import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
            className,
          )}
        >
          <ArrowUpDown size={16} />
        </div>
      </PopoverTrigger>
      <PopoverContent></PopoverContent>
    </Popover>
  );
};
