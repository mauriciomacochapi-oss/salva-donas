import { FadeIn } from '@/components/fade-in'
import { orderHours } from '@/lib/site-data'

export function OrderCTA() {
  return (
    <section id="pedidos" aria-labelledby="pedidos-title" className="scroll-mt-20 px-5 pb-16 md:pb-24">
      <FadeIn className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-pink px-6 py-14 text-center md:px-16 md:py-20">
        <div aria-hidden="true" className="absolute -left-10 -top-10 size-40 rounded-full bg-vanilla/70" />
        <div aria-hidden="true" className="absolute -bottom-14 -right-6 size-48 rounded-full bg-strawberry/50" />
        <div className="relative">
          <p className="font-display text-lg font-semibold text-caramel">Pedidos</p>
          <h2 id="pedidos-title" className="mt-2 text-balance text-4xl font-bold text-chocolate md:text-5xl">
            Tus consultas no son una molestia.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-lg leading-relaxed text-chocolate/80">
            Haz tu pedido o consulta de <strong className="font-bold text-chocolate">{orderHours}</strong>.
          </p>
          <a
            href="#pedidos"
            className="mt-8 inline-flex rounded-full bg-chocolate px-8 py-4 text-lg font-bold text-cream shadow-[0_10px_24px_-10px_rgba(90,48,37,0.7)] transition-transform hover:-translate-y-0.5"
          >
            Hacer un pedido
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
