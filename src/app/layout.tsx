import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Header from "@/components/layouts/Header";



const bowlby = localFont({
  src: '../../public/fonts/BowlbyOneSC-Regular.ttf',
  variable: '--font-bowlby'
})

const dmMono = localFont({
  src: '../../public/fonts/DMMono-Regular.ttf',
  variable: '--font-dmMono'
})

const playWright = localFont({
  src: '../../public/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf',
  variable: '--font-playWright'
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Career Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowlby.variable} ${dmMono.variable} ${playWright.variable} antialiased overflow-x-hidden bg-base-color text-white-color`}
      >
          <Header/>
            {children}
      </body>
    </html>
  );
}
