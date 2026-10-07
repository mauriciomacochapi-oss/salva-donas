export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#inicio" className={`group inline-flex items-center gap-2 ${className}`} aria-label="SALVA-DONAS, ir al inicio">
      <span
        aria-hidden="true"
        className="relative grid size-9 place-items-center rounded-full bg-strawberry shadow-[inset_0_-3px_0_rgba(90,48,37,0.25)] transition-transform group-hover:rotate-12"
      >
        <span className="size-3 rounded-full bg-cream" />
        <span className="absolute left-2 top-2 h-1 w-2 rotate-45 rounded-full bg-vanilla" />
        <span className="absolute right-2 top-3 h-1 w-2 -rotate-12 rounded-full bg-cream" />
        <span className="absolute bottom-2 left-3 h-1 w-2 rotate-[70deg] rounded-full bg-chocolate/70" />
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-chocolate">SALVA-DONAS</span>
    </a>
  )
}
