'use client'

import React from 'react'
import {
  Button,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CartDrawerItem } from '@/shared/components/shared'
import { getCartItemDetails } from '@/shared/lib'
import { useCartStore } from '@/shared/store'
import type { PizzaSize, PizzaType } from '@/shared/constants/pizza'

type Props = {
  className?: string
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {
  const { totalAmount, items, fetchCartItems, updateItemQuantity, removeCartItem } = useCartStore(
    (state) => state,
  )

  React.useEffect(() => {
    fetchCartItems()
  }, [])

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
    updateItemQuantity(id, newQuantity)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#f4f1ee]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">{items.length || 0} товара</span>
          </SheetTitle>
        </SheetHeader>
        <div className="-mx-6 mt-5 overflow-auto flex-1">
          {items.map((item) => (
            <CartDrawerItem
              key={item.id}
              id={item.id}
              quantity={item.quantity}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              details={getCartItemDetails(
                item.ingredients,
                item.pizzaType as PizzaType,
                item.pizzaSize as PizzaSize,
              )}
              onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
              onClickRemove={() => removeCartItem(item.id)}
              className="mb-2"
            />
          ))}
        </div>
        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <p className="flex flex-1 text-lg text-neutral-500">
                Итого
                <span className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </p>

              <span className="font-bold text-lg">{totalAmount} ₽</span>
            </div>

            <Link href="/checkout">
              <Button type="submit" className="w-full h-12 text-base">
                Оформить заказ
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
