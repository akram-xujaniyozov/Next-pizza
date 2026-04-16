import {
  Container,
  Title,
  TopBar,
  Filters,
  ProductsGroupLits,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-8">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupLits
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11eed73c6b01e9ecab89410716435740.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11eed73c6b01e9ecab89410716435740.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11eed73c6b01e9ecab89410716435740.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11eed73c6b01e9ecab89410716435740.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11eed73c6b01e9ecab89410716435740.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11eed73c6b01e9ecab89410716435740.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11eed73c6b01e9ecab89410716435740.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />
              <ProductsGroupLits
                title="Комбо"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11eed73c6b01e9ecab89410716435740.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11eed73c6b01e9ecab89410716435740.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11eed73c6b01e9ecab89410716435740.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11eed73c6b01e9ecab89410716435740.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11eed73c6b01e9ecab89410716435740.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11eed73c6b01e9ecab89410716435740.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11eed73c6b01e9ecab89410716435740.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
