import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home',
};

export default function Home() {
  return (
    <div className="w-full text-black bg-purple-500 flex-1 max-w-[1170px] mx-auto">
      bem vindo 
    </div>
  );
}
