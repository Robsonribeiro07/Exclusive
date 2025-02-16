import Link from "next/link";
import { ComponentProps } from "react";
import { tv } from "tailwind-variants";


interface NavigationProps extends ComponentProps<typeof Link> {
    href: string      

}

const link = tv({   
    base: "flex items-center gap-2 text-sm font-medium text-black 1rem capitalize font-regular",
})
export function Navigation({href, ...props}: NavigationProps) {
    return (
        
        <Link href={href} {...props} className={link()}/>
    
    )
}