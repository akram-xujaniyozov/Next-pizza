import React from "react";
import { useSet } from "react-use";

import { Api } from "@/services/api-client";
import type { Ingredient } from "@/prisma/generated/client";

interface ReturnValues {
  ingredients: Ingredient[];
  loading: boolean;
}

export const useIngredients = (): ReturnValues => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchIngredients = async () => {
      setLoading(true);
      try {
        const data = await Api.ingredients.getAll();
        setIngredients(data);
      } catch (error) {
        console.error("Failed to fetch ingredients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, []);

  return { ingredients, loading };
};
