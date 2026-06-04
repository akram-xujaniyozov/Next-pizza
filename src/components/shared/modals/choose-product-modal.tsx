"use client";

import React from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/prisma/generated/client";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ChooseProductForm } from "@/components/shared";

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className,
        )}
      >
        <VisuallyHidden.Root>
          <DialogTitle></DialogTitle>
        </VisuallyHidden.Root>
        <ChooseProductForm
          imageUrl={product.imageUrl}
          name={product.name}
          price={350}
        />
      </DialogContent>
    </Dialog>
  );
};
