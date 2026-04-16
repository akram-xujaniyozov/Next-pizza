"use client";

import * as React from "react";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store";

import { ProductCard, Title } from "@/components/shared";

import { cn } from "@/lib/utils";

type Props = {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
};

export const ProductsGroupLits: React.FC<Props> = ({
  title,
  items,
  categoryId,
  className,
  listClassName,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef<HTMLDivElement>(null);
  const intersection = useIntersection(
    intersectionRef as React.RefObject<HTMLDivElement>,
    {
      threshold: 0.4,
    },
  );

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [title, categoryId, intersection?.isIntersecting]);

  return (
    <div id={title} ref={intersectionRef} className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={i}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
