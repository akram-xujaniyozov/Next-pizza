import { Ingredient, Product, ProductItem } from "@/prisma/generated/client";

export type ProductWithRelations = Product & {
  items: ProductItem[];
  ingredients: Ingredient[];
};
