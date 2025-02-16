import { NavigationContent } from "../side-navigation/navigation-content";

import BannerImg from '../../../../public/image.png'
import Image from "next/image";
import { CarouselImage } from "./carousel-image";

export function SectionContent() {
    return (
        <div className="w-full h-full max-h-[24.5rem] grid grid-cols-[15.625rem_1fr] text-black  ">
            <NavigationContent/> 

            <CarouselImage/>
        </div>
    )
}