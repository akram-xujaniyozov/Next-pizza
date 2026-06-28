import React from 'react'
import type { Ingredient, ProductItem } from '@/prisma/generated/client'
import { cn } from '@/shared/lib/utils'
import { GroupVariants, PizzaImage, Title, IngredientItem } from '@/shared/components/shared'
import { Button } from '@/shared/components/ui'
import { pizzaSizes, pizzaTypes, type PizzaSize, type PizzaType } from '@/shared/constants'
import { useSet } from 'react-use'

interface Props {
  imageUrl: string
  name: string
  ingredients: Ingredient[]
  items: ProductItem[]
  loading?: boolean
  onSubmit?: (itemId: number, ingredients: number[]) => void
  className?: string
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  imageUrl,
  items,
  ingredients,
  loading,
  onSubmit,
  className,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(20)
  const [type, setType] = React.useState<PizzaType>(1)

  const [selectedIngredients, { toggle: toggleIngredient }] = useSet(new Set<number>([]))

  const textDetaills = '30 см, традиционное тесто, 620 г'
  const totalPrice = 350

  return (
    <div className={cn(className, 'flex flex-1')}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetaills}</p>

        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants
            items={pizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>
        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                onClick={() => toggleIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  )
}
