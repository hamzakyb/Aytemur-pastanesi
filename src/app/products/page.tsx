"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function ProductsPage() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const products = [
    {
      id: "cakes",
      title: t("products.p1Title", "Tasarım Pastalar"),
      desc: t("products.p1Desc", "Zanaatın lüksle buluştuğu nokta. Özel günleriniz için tasarlanan butik pastalar."),
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "pastries",
      title: t("products.p2Title", "Geleneksel Hamur İşleri"),
      desc: t("products.p2Desc", "Meşhur mahlep kokulu Paskalya çöreğimiz ve taş fırın geleneğiyle hazırlanan klasik reçetelerimiz."),
      img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "desserts",
      title: t("products.p3Title", "Sütlü Tatlılar"),
      desc: t("products.p3Desc", "Geleneksel yöntemlerle hazırlanan, hafif ve lezzetli sütlü tatlılarımız."),
      img: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "gifts",
      title: t("products.p4Title", "Butik Hediyelikler"),
      desc: t("products.p4Desc", "Sevdiklerinize özel anlar yaşatacak, özenle paketlenmiş premium lezzetler."),
      img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9f9]">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-[100] bg-white/70 backdrop-blur-xl border-b border-gray-100 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          <div className="flex-1 flex justify-start">
            <nav className="hidden md:flex gap-8 items-center">
              <Link
                className="font-sans text-[11px] font-medium tracking-widest text-gray-500 hover:text-black transition-colors uppercase"
                href="/"
              >
                {t("nav.home", "Anasayfa")}
              </Link>
              <Link
                className="font-sans text-[11px] font-medium tracking-widest text-gray-500 hover:text-black transition-colors uppercase"
                href="/about"
              >
                {t("nav.about", "Hakkımızda")}
              </Link>
              <Link
                className="font-sans text-[11px] font-medium tracking-widest text-black uppercase"
                href="/products"
              >
                {t("nav.products", "Ürünlerimiz")}
              </Link>
            </nav>
          </div>
          <div className="flex-shrink-0 absolute left-1/2 -translate-x-1/2">
            <Link className="block h-12 md:h-16 w-auto" href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Aytemur Logo"
                className="h-full w-auto object-contain"
                src="/logo.png"
              />
            </Link>
          </div>
          <div className="flex-1 flex justify-end">
            <nav className="hidden md:flex gap-8 items-center">
              <Link
                className="font-sans text-[11px] font-medium tracking-widest text-gray-500 hover:text-black transition-colors uppercase"
                href="/menu"
              >
                {t("nav.menu", "Menü")}
              </Link>
              <Link
                className="font-sans text-[11px] font-medium tracking-widest text-gray-500 hover:text-black transition-colors uppercase"
                href="/contact"
              >
                {t("nav.contact", "İletişim")}
              </Link>
            </nav>
            <div className="flex items-center gap-4 ml-8">
              <LanguageSwitcher />
              <button className="md:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-[200] flex flex-col p-6">
          <div className="flex justify-between items-center h-24">
            <div className="h-10 w-auto flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Aytemur Logo"
                className="h-full w-auto object-contain"
                src="/logo.png"
              />
            </div>
            <button className="text-black" onClick={() => setMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-8 items-center justify-center flex-1 text-center">
            <Link
              className="font-sans text-lg font-medium tracking-wider text-black uppercase"
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.home", "Anasayfa")}
            </Link>
            <Link
              className="font-sans text-lg font-medium tracking-wider text-black uppercase"
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.about", "Hakkımızda")}
            </Link>
            <Link
              className="font-sans text-lg font-medium tracking-wider text-black uppercase"
              href="/products"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.products", "Ürünlerimiz")}
            </Link>
            <Link
              className="font-sans text-lg font-medium tracking-wider text-black uppercase"
              href="/menu"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.menu", "Menü")}
            </Link>
            <Link
              className="font-sans text-lg font-medium tracking-wider text-black uppercase"
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.contact", "İletişim")}
            </Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 mt-24">
        <section className="py-24 w-full flex flex-col items-center justify-center text-center px-6">
          <ScrollReveal className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 text-black italic">
              {t("nav.products", "Ürünlerimiz")}
            </h1>
            <p className="font-sans text-[15px] md:text-[16px] font-light text-gray-500 leading-relaxed max-w-2xl mx-auto">
              {t("products.heroDesc", "Ustalıkla hazırlanan seçkin lezzetlerimizi inceleyin. Yılların getirdiği deneyimle, en kaliteli malzemeleri kullanarak oluşturduğumuz özel koleksiyonumuz.")}
            </p>
          </ScrollReveal>
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {products.map((prod, idx) => (
              <ScrollReveal
                key={prod.id}
                delay={idx * 0.15}
                className="group flex flex-col items-center text-center"
              >
                <Link href={`/product/${prod.id}`} className="flex flex-col items-center w-full">
                  <div className="w-full aspect-[4/5] overflow-hidden mb-8 relative bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={prod.title}
                      className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-[2s] ease-out"
                      src={prod.img}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl text-black italic mb-4 group-hover:text-gray-600 transition-colors duration-500">{prod.title}</h2>
                  <div className="w-12 h-px bg-black mx-auto mb-6 group-hover:w-24 transition-all duration-500"></div>
                  <p className="font-sans text-[15px] text-gray-500 leading-relaxed px-4 max-w-md mx-auto mb-8">
                    {prod.desc}
                  </p>
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-widest border-b border-black pb-1 group-hover:text-gray-500 group-hover:border-gray-500 transition-colors duration-500">
                    {t("common.viewDetails", "Detayları İncele")}
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
