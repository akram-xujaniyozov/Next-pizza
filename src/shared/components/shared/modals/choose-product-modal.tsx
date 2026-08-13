'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import type { ProductWithRelations } from '@/@types/prisma'
import { Dialog, DialogContent, DialogTitle } from '@/shared/components/ui'
import { ChooseProductForm, ChoosePizzaForm } from '@/shared/components/shared'
import { cn } from '@/shared/lib/utils'
import { useCartStore } from '@/shared/store/cart'
import toast from 'react-hot-toast'

interface Props {
  product: ProductWithRelations
  className?: string
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter()
  const firstItem = product?.items[0]
  const isPizzaForm = Boolean(firstItem?.pizzaType)
  const { addCartItem, loading } = useCartStore((state) => state)

  const onAddProduct = () => {
    addCartItem({
      productItemId: firstItem?.id,
    })
  }

  const onAddPizza = (productItemId: number, ingredients: number[]) => {
    try {
      addCartItem({
        productItemId,
        ingredients,
      })
      toast.success(product.name + ' добавлена в корзину')
      router.back()
    } catch (err) {
      toast.error('Не удалось добавить товар в корзину')
      console.error(err)
    }
  }

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}
      >
        <VisuallyHidden.Root>
          <DialogTitle />
        </VisuallyHidden.Root>
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onAddPizza}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            price={firstItem.price}
            onSubmit={onAddProduct}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
