import React from "react";
import { FilterCheckbox, FilterChecboxProps } from "@/components/shared";
import { Input } from "@/components/ui";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
}

export const CheckboxFiltersGroup: React.FC<Props> = ({ className }) => {
  return <div className={className}>fff</div>;
};
