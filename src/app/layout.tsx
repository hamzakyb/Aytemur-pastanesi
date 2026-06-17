import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aytemur Pastanesi | Avanos'tan Lezzet Mirası",
  description: "1978'den beri Kapadokya'nın kalbi Avanos'ta artizan pastacılık ve geleneksel fırın lezzetleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-black bg-white selection:bg-gray-200 selection:text-black">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
