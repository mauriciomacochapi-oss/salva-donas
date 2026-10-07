import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ProductGrid } from '@/components/product-grid'
import { BrandStatement } from '@/components/brand-statement'
import { LocationSection } from '@/components/location-section'
import { OrderCTA } from '@/components/order-cta'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <BrandStatement />
        <LocationSection />
        <OrderCTA />
      </main>
      <Footer />
    </>
  )
}
