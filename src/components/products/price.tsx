import { tv, type VariantProps } from 'tailwind-variants'

const price = tv({
  base: 'text-gray-500 text-base font-medium', // Corrigido "1rem" para "text-base"
  variants: {
    discount: { true: 'text-red-500' }, // Corrigido nome e formato do objeto
    withLine: { true: 'line-through text-gray-500' },
  },
})

type PriceProps = VariantProps<typeof price> & {
  children: React.ReactNode // Permite passar o preço dinamicamente
}

export function Price({ children, discount, withLine }: PriceProps) {
  return <p className={price({ discount, withLine })}>${children}</p>
}
