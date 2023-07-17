import './helpers/styles/globals.css';
import "./helpers/styles/reset.css"
import type { Metadata } from 'next'
import {Noto_Sans} from "@next/font/google";

const notoSans = Noto_Sans({
 style: ["normal"],
  weight: ["400", "700", "600"],
  subsets: ["cyrillic"],
})

export const metadata: Metadata = {
  title: 'OwlTop - лучший тор',
  description: 'Лучший сайт отзывов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSans.className}>{children}</body>
    </html>
  )
}
