import { navLinks } from '@/lib/site-data'

export function Footer() {
  return (
    <footer className="bg-chocolate text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-2xl font-bold">SALVA-DONAS</p>
          <p className="mt-1 text-cream/75">El sabor que salva tu día</p>
        </div>
        <nav aria-label="Pie de página">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-semibold text-cream/80 hover:text-pink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-sm text-cream/60">
        © {new Date().getFullYear()} SALVA-DONAS
      </div>
    </footer>
  )
}
