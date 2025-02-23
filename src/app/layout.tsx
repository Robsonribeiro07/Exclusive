import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import './globals.css'
import { SubHeader } from '@/components/header/sub-header'
import { Header } from '@/components/header/header/header'
import { Separator } from '@/components/separator'
import { Toaster } from 'sonner'
import { ContentFooter } from '@/components/footer/content'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from '@/lib/queryclient'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased   bg-white`}
        >
          <div className="flex flex-col items-center justify-center w-screen min-h-screen">
            <SubHeader />
            <Header />
            <Separator />

            <main className="flex-1 flex w-screen flex-col px-2 lg:px-0 min-h-screen ">
              <Toaster position="top-center" richColors />
              {children}
            </main>

            <footer className="w-full  bg-[#000000] min-h-[23.5rem] flex items-center justify-center relative">
              <ContentFooter />
            </footer>
          </div>
        </body>
      </html>
    </QueryClientProvider>
  )
}
