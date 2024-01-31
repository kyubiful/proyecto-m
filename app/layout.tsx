import type { Metadata } from "next";
import { Onest } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proyecto M",
  description: "Web del evento Proyecto M de SouzaCarlosTV realizado para la comunidad de World of Warcraft en español.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-stone-900">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script id="wowhead-script">
          {
            `const whTooltips = {
            colorLinks: true,
            iconizeLinks: true,
            renameLinks: false,
            iconSize: "medium",
          }`
          }
        </Script>
        <Script src="https://wow.zamimg.com/js/tooltips.js" />
      </head>
      <body className={cn(onest.className, "bg-[#4f4b49]")}>
        <nav className="border border-black flex justify-center h-14 bg-[#1a1816]">
          <div className=" flex justify-start items-center pl-7 xl:pl-0 max-w-[1350px] w-full">
            <h1 className="text-3xl text-center animate-fade-in text-yellow-400 font-bold">Proyecto M</h1>
          </div>
        </nav>
        {children}
        <footer className="bg-[#1a1816] h-10 flex items-center justify-between px-12 text-white">
          <p className="text-sm">Evento hecho por <a className="text-blue-500" target="_blank" href="https://twitter.com/SouzaCarlosTV">@SouzaCarlosTV</a></p>
          <p className="text-sm">Web para la comunidad por creada por <a className="text-blue-500" target="_blank" href="https://github.com/kyubiful">@Kyubiful</a> ♥️</p>
        </footer>
      </body>
    </html>
  )
}
