import { FadeIn } from '@/components/fade-in'
import { Sprinkles } from '@/components/sprinkles'

function DonutRing({ className }: { className: string }) {
  return (
    <div aria-hidden="true" className={`absolute rounded-full border-[18px] md:border-[28px] ${className}`} />
  )
}

export function BrandStatement() {
  return (
    <section aria-labelledby="brand-title" className="relative overflow-hidden bg-chocolate py-20 md:py-28">
      <Sprinkles />
      <DonutRing className="-left-16 -top-16 size-48 border-strawberry/80 md:size-72" />
      <DonutRing className="-bottom-20 -right-12 size-56 border-caramel/80 md:size-80" />
      <FadeIn className="relative mx-auto max-w-4xl px-5 text-center">
        <h2
          id="brand-title"
          className="text-balance text-5xl font-bold leading-none text-pink sm:text-6xl md:text-8xl"
        >
          Salva tu antojo
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-cream/85 md:text-xl">
          Cuando el día se pone pesado, una dona lo arregla todo. Masa esponjosa, glaseados brillantes y rellenos
          generosos.
        </p>
      </FadeIn>
    </section>
  )
}
