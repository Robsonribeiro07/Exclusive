import { ComponentProps } from "react";

interface StickyHeaderProps extends ComponentProps<"div"> {}
export function StickyHeader({children}: StickyHeaderProps) {
    return (
        <div className="flex gap-2 w-fit items-center text-redSticker font-semibold" >
            <p className="w-[1.3rem] h-[2.1rem] bg-redSticker rounded" />

            <p>
                {children}
            </p>

        </div>
    )
}