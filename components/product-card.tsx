import Image from 'next/image'
import { formatPrice, type Product } from '@/lib/site-data'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group h-full overflow-hidden rounded-3xl bg-card shadow-[0_12px_30px_-18px_rgba(90,48,37,0.45)] ring-1 ring-border/60 transition-shadow hover:shadow-[0_20px_40px_-18px_rgba(90,48,37,0.55)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-pink">
        <Image
          src={product.image}
          alt={`Dona ${product.name.toLowerCase()}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        {product.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-chocolate">
            {product.tag}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between gap-4 p-5">
        <h3 className="text-pretty text-xl font-semibold leading-tight text-chocolate">{product.name}</h3>
        <p className="shrink-0 rounded-full bg-vanilla px-4 py-1.5 font-display text-lg font-bold text-chocolate">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  )
}
