'use client'
import { Navigation } from './navigation'

export function NavigationContent() {
  const navigation = [
    'woman fashion',
    'man',
    'kids',
    'home',
    'sale',
    'about',
    'contact',
  ]
  return (
    <div className="lg:w-[13.5625rem] w-full h-[21.5em] border-r border-collapse py-[2.09375rem] gap-[1rem] flex flex-col">
      {navigation.map((item) => (
        <Navigation key={item} href={`/category/${item}`}>
          {item}
        </Navigation>
      ))}
    </div>
  )
}
