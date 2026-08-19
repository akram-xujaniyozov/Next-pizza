'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import type { ProductWithRelations } from '@/@types/prisma'
import { Dialog, DialogContent, DialogTitle } from '@/shared/components/ui'
import { ProductForm } from '@/shared/components/shared'
import { cn } from '@/shared/lib/utils'

interface Props {
  product: ProductWithRelations
  className?: string
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter()

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
        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  )
}
