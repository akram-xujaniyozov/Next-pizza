import React from "react";
import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";

interface PriceRange {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceRange {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export interface Filters {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceRange;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceRange, value: number) => void;
  setPizzaTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  const [selectedIngredients, { toggle: setSelectedIngredients }] = useSet(
    new Set<string>(
      new Set<string>(searchParams.get("ingredients")?.split(",")),
    ),
  );

  const [sizes, { toggle: setSizes }] = useSet(
    new Set<string>(searchParams.get("sizes")?.split(",") || []),
  );
  const [pizzaTypes, { toggle: setPizzaTypes }] = useSet(
    new Set<string>(searchParams.get("pizzaTypes")?.split(",") || []),
  );

  const [prices, setPrices] = React.useState<PriceRange>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const handlePriceChange = (key: keyof PriceRange, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return React.useMemo(
    () => ({
      sizes,
      pizzaTypes,
      selectedIngredients,
      prices,
      setPrices: handlePriceChange,
      setPizzaTypes,
      setSizes,
      setSelectedIngredients,
    }),
    [sizes, pizzaTypes, selectedIngredients, prices],
  );
};
