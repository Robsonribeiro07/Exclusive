"use client"
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/teste";
import { usePathname } from "next/navigation";

export default function Page() {

    const pathname = usePathname()
    
    const pathnames = '/auth/sign-in/dashboard'
    return (
        <div className="flex w-full max-w-[1170px] mx-auto">
            <Breadcrumbs pathname={pathnames} />
           
        </div>
    )
}