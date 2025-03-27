import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tekoälykoulutus",
  description: "Valmistaudu tulevaisuuden teknologiaan ja oppi hyödyntämään tekoälyä",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className={inter.className}>
        <nav className="bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl font-bold hover:text-blue-400 transition duration-300">
                Tekoälykoulutus
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="hover:text-blue-400 transition duration-300">Etusivu</Link>
                <Link href="/kurssit" className="hover:text-blue-400 transition duration-300">Kurssit</Link>
                <Link href="#" className="hover:text-blue-400 transition duration-300">Tietoa</Link>
                <Link href="#" className="hover:text-blue-400 transition duration-300">Yhteystiedot</Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Tekoälykoulutus. Kaikki oikeudet pidätetään.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
