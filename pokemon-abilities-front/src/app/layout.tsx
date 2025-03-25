import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from 'next/font/google';
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-press-start',
});

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-vt323',
});

export const metadata: Metadata = {
  title: "Pokemon Abilities Searcher",
  description: "Search for pokemons and his abilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" className={`${pressStart2P.variable} ${vt323.variable}`}>
      <body>{children}</body>
    </html>
  );
}