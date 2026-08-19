import { Container, Title, TopBar, Filters, ProductsGroupList } from '@/shared/components/shared'
import { Suspense } from 'react'
import { findPizzas, type GetSearchParams } from '@/shared/lib/find-pizzas'

export default async function Home({ searchParams }: { searchParams: Promise<GetSearchParams> }) {
  const categories = await findPizzas(await searchParams)

  return (
    <>
      <Container className="mt-8">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar categories={categories.filter((cat) => cat.products.length > 0)} />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
