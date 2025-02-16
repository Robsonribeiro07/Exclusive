import { SectionContent } from "@/components/home/section-one/section-content";
import { SectionContentTodays } from "@/components/home/section-today/section-content";
import { StickyHeader } from "@/components/home/StickyHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home',
};

export default function Home() {
  return (
    <div className="w-full text-black h-screen flex-1 max-w-[1170px] mx-auto">
       <SectionContent/>

       <SectionContentTodays/>


       <div className="min-h-svh"></div>
    </div>
  );
}
