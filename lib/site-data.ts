export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Donas', href: '#donas' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Pedidos', href: '#pedidos' },
] as const

export type Product = {
  name: string
  price: number
  image: string
  tag?: string
}

export const products: Product[] = [
  { name: 'Glaseado de chocolate', price: 1000, image: '/images/dona-chocolate.png', tag: 'Clásica' },
  { name: 'Vainilla con chispitas', price: 1000, image: '/images/dona-vainilla.png', tag: 'Clásica' },
  { name: 'Glaseado con Oreo', price: 1500, image: '/images/dona-oreo.png' },
  { name: 'Relleno con dulce de leche', price: 1500, image: '/images/dona-dulce-de-leche.png', tag: 'Rellena' },
  { name: 'Relleno con crema bavarian', price: 1500, image: '/images/dona-bavarian.png', tag: 'Rellena' },
]

export const orderHours = '9:00 a 15:00 hs'

export function formatPrice(value: number) {
  return `$${value.toLocaleString('es-AR')}`
}
