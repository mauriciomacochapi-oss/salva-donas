import Image from 'next/image'
import { FadeIn } from '@/components/fade-in'
import { Sprinkles } from '@/components/sprinkles'

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden scroll-mt-20">
      <Sprinkles className="opacity-70" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:gap-8 md:pb-24 md:pt-16">
        <FadeIn className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink px-4 py-1.5 text-sm font-bold text-chocolate">
            Donas caseras, hechas con amor
          </p>
          <h1
            id="hero-title"
            className="text-balance text-5xl font-bold leading-none tracking-tight text-chocolate sm:text-6xl lg:text-7xl"
          >
            SALVA-<span className="text-strawberry">DONAS</span>
          </h1>
          <p className="mt-4 text-pretty font-display text-2xl font-medium text-caramel sm:text-3xl">
            El sabor que salva tu día
          </p>
          <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground md:mx-0">
            Glaseadas, con chispitas o bien rellenas. Esponjosas, recién hechas y listas para rescatarte de cualquier
            día gris.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#donas"
              className="rounded-full bg-chocolate px-7 py-3.5 font-bold text-cream shadow-[0_8px_20px_-8px_rgba(90,48,37,0.6)] transition-transform hover:-translate-y-0.5"
            >
              Ver nuestras donas
            </a>
            <a
              href="#pedidos"
              className="rounded-full border-2 border-chocolate bg-transparent px-7 py-3 font-bold text-chocolate transition-colors hover:bg-pink"
            >
              Hacer un pedido
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} x={24} y={0} className="order-1 md:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-md md:max-w-none">
            <div aria-hidden="true" className="absolute inset-4 rounded-full bg-pink" />
            <div aria-hidden="true" className="absolute -right-2 top-6 size-24 rounded-full bg-vanilla md:size-32" />
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-30px_rgba(90,48,37,0.5)]">
              <Image
                src="/images/hero-donut.png"
                alt="Dona glaseada rosa con chispitas de colores"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 rotate-[-4deg] rounded-2xl bg-white px-4 py-3 shadow-lg md:left-0">
              <p className="font-display text-sm font-semibold text-caramel">Desde</p>
              <p className="font-display text-2xl font-bold text-chocolate">$1.000</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
