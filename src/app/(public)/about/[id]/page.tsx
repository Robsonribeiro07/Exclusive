"use client"
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/teste";
import { usePathname } from "next/navigation";

export default function Page() {

    const pathname = usePathname()
    return (
        <div>
            <Breadcrumbs pathname={pathname} />
            <h1>Sobre</h1>
            <Button variant="secondary">
                Click me
            </Button>
        </div>
    )
}