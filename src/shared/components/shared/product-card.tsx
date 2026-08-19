import * as React from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { Title } from '@/shared/components/shared'
import { Button } from '@/shared/components/ui'
import type { Ingredient } from '@/prisma/generated/client'

interface Props {
  id: number
  name: string
  price: number
  imageUrl: string
  ingredients?: Ingredient[]
  count?: number
  className?: string
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  count,
  imageUrl,
  ingredients,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`} className="flex flex-col h-full">
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="size-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          {ingredients?.map((ingredient) => ingredient.name).join(', ')}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  )
}
