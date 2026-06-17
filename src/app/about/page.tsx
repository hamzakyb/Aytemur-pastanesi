"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function About() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
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
                className="font-sans text-[11px] font-medium tracking-widest text-black transition-colors uppercase"
                href="/about"
              >
                {t("nav.about", "Hakkımızda")}
              </Link>
              <Link
                className="font-sans text-[11px] font-medium tracking-widest text-gray-500 hover:text-black transition-colors uppercase"
                href="/products"
              >
                {t("nav.products", "Ürünlerimiz")}
              </Link>
            </nav>
          </div>
          <div className="flex-shrink-0">
            <Link className="block h-16 w-auto" href="/">
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

      <main className="mt-24 flex-1">
        <section className="py-24 md:py-40 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <span className="font-sans text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-4 block">{t("aboutPage.subtitle", "Mirasımız")}</span>
            <h1 className="font-display text-4xl md:text-6xl text-black italic mb-12" dangerouslySetInnerHTML={{ __html: t("aboutPage.title", "Yarım Asırlık <br/> Bir Lezzet Hikayesi") }} />
            <div className="w-12 h-px bg-black mx-auto mb-16"></div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="w-full aspect-[16/9] md:aspect-[21/9] mb-16 overflow-hidden bg-gray-50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1200" 
              alt="Pastane Üretim"
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </ScrollReveal>

          <div className="prose prose-lg mx-auto text-left font-sans text-gray-500 font-light leading-relaxed">
            <ScrollReveal delay={0.1}>
              <p className="mb-8">
                {t("aboutPage.p1", "1978 yılında Kapadokya'nın kalbi Avanos'ta küçük bir fırın olarak yola çıktık. O günden bugüne değişmeyen tek şey, artizan fırıncılığa olan tutkumuz ve kaliteden asla ödün vermeyen duruşumuz oldu.")}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mb-8">
                {t("aboutPage.p2", "Bizim için pastacılık sadece bir meslek değil, nesilden nesile aktarılan bir zanaat. Her sabah gün ağarmadan yanan fırınlarımızda, ekşi mayalı ekmeklerimiz, çıtır kruvasanlarımız ve nostaljik mahlep kokulu çöreklerimiz hazırlanıyor.")}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="mb-8">
                {t("aboutPage.p3", "En iyi malzemeleri bulmak, yerel üreticiyi desteklemek ve mevsiminde taze ürünler kullanmak bizim en büyük prensibimiz. Fransız tereyağı, Belçika çikolatası ve Avanos'un verimli topraklarından gelen meyveleri harmanlayarak, hem modern pastacılık tekniklerini hem de geleneksel lezzetleri bir araya getiriyoruz.")}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p>
                {t("aboutPage.p4", "Sizleri bu sessiz adanmışlık ve lezzet yolculuğunun bir parçası olmaya davet ediyoruz.")}
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
