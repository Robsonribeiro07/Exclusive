import { SectionContentTodays } from '@/components/pages/home/section-today/section-content'
import { Metadata } from 'next'
import { CategoryContent } from '@/components/pages/home/category/category-content'
import { ContentThisMonth } from '@/components/pages/home/sections/this-month/content'
import { BannerContent } from '@/components/pages/home/banner/banner-category/banner-content'
import { SectionContent } from '@/components/pages/home/sections/section-one/section-content'
import { ContentOurProducts } from '@/components/pages/home/sections/our-products/content'
import { FeatureContent } from '@/components/pages/home/sections/featured/feature-content'
import { FeatureCard } from '@/components/pages/home/sections/featured/feature-card'
import { getProducts } from '@/api/products/get-products'
export const metadata: Metadata = {
  title: 'Home',
  description: 'Home',
}

export default async function Home() {
  const products = await getProducts()

  if (!products) return null

  return (
    <div className="w-full text-black h-screen flex-1 max-w-[1170px] mx-auto pb-[10rem]">
      <SectionContent />
      <SectionContentTodays products={products.products} />
      <CategoryContent />
      <ContentThisMonth products={products.products} />
      <BannerContent />
      <ContentOurProducts products={products.products} />
      <FeatureContent />
      <FeatureCard />
    </div>
  )
}
