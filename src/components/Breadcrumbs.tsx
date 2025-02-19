'use client'

import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const BreadcrumbsStyle = tv({
  base: 'flex gap-2 text-[0.8rem] capitalize',
  variants: {
    isRouterProps: {
      true: 'text-black',
      false: 'text-gray-500',
    },
  },
})

type BreadcrumbsProps = ComponentProps<'div'> &
  VariantProps<typeof BreadcrumbsStyle> & {
    pathname: string
  }

export function Breadcrumbs({ pathname, ...rest }: BreadcrumbsProps) {
  const pathnames = pathname.split('/').filter((path) => path !== '')

  return (
    <div className="flex gap-2" {...rest}>
      {pathnames.map((path, index) => {
        const isRouter = index === pathnames.length - 1
        return (
          <div key={path} className=" flex items-center gap-2">
            {index > 0 && (
              <p className={BreadcrumbsStyle({ isRouterProps: isRouter })}>/</p>
            )}
            <span className={BreadcrumbsStyle({ isRouterProps: isRouter })}>
              {path}
            </span>
          </div>
        )
      })}
    </div>
  )
}
