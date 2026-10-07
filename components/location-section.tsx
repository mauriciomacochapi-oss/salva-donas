import { Clock, MapPin, ShoppingBag } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'
import { orderHours } from '@/lib/site-data'

const details = [
  { icon: MapPin, title: 'Dónde estamos', text: 'Consultanos la dirección exacta al hacer tu pedido.' },
  { icon: Clock, title: 'Horario de atención', text: `Todos los días de ${orderHours}.` },
  { icon: ShoppingBag, title: 'Retiro', text: 'Coordinamos el retiro de tu pedido para que llegue fresquito.' },
]

function MapPlaceholder() {
  return (
    <div
      role="img"
      aria-label="Mapa ilustrativo de la ubicación de SALVA-DONAS"
      className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-vanilla/50 shadow-[0_20px_40px_-24px_rgba(90,48,37,0.5)] ring-1 ring-border"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(#fff8ef 2px, transparent 2px), linear-gradient(90deg, #fff8ef 2px, transparent 2px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div aria-hidden="true" className="absolute left-0 top-1/3 h-6 w-full -rotate-6 bg-cream" />
      <div aria-hidden="true" className="absolute left-2/3 top-0 h-full w-6 rotate-12 bg-cream" />
      <div aria-hidden="true" className="absolute bottom-6 left-6 size-20 rounded-3xl bg-pink/80" />
      <div aria-hidden="true" className="absolute right-8 top-8 size-16 rounded-full bg-caramel/30" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center">
        <span className="mb-2 rounded-full bg-chocolate px-4 py-1.5 font-display text-sm font-semibold text-cream shadow-lg">
          SALVA-DONAS
        </span>
        <span className="grid size-12 place-items-center rounded-full bg-strawberry shadow-lg ring-4 ring-cream">
          <MapPin className="size-6 text-cream" aria-hidden="true" />
        </span>
      </div>
    </div>
  )
}

export function LocationSection() {
  return (
    <section id="ubicacion" aria-labelledby="ubicacion-title" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-14">
        <FadeIn x={-24} y={0}>
          <MapPlaceholder />
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="font-display text-lg font-semibold text-caramel">Vení a buscarlas</p>
          <h2 id="ubicacion-title" className="mt-1 text-balance text-4xl font-bold text-chocolate md:text-5xl">
            Ubicación
          </h2>
          <ul className="mt-8 flex flex-col gap-4">
            {details.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-4 rounded-3xl bg-card p-5 ring-1 ring-border/60">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-pink">
                  <Icon className="size-5 text-chocolate" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-chocolate">{title}</h3>
                  <p className="mt-0.5 leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
