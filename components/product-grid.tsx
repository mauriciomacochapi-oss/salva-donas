import { FadeIn } from '@/components/fade-in'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/site-data'

export function ProductGrid() {
  return (
    <section id="donas" aria-labelledby="donas-title" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <FadeIn className="mb-10 text-center md:mb-14">
          <p className="font-display text-lg font-semibold text-caramel">Nuestro menú</p>
          <h2 id="donas-title" className="mt-1 text-balance text-4xl font-bold text-chocolate md:text-5xl">
            Elegí tu dona
          </h2>
        </FadeIn>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product, i) => (
            <li key={product.name}>
              <FadeIn delay={(i % 3) * 0.08} className="h-full">
                <ProductCard product={product} />
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
