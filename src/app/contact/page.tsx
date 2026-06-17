"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function Contact() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-[100] bg-white/70 backdrop-blur-xl border-b border-gray-100 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          <div className="flex-1 flex justify-start items-center">
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
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
          <div className="flex-1 flex justify-end items-center">
            <nav className="hidden md:flex gap-8 items-center mr-8">
              <Link
                className="font-sans text-[11px] font-medium tracking-widest text-gray-500 hover:text-black transition-colors uppercase"
                href="/menu"
              >
                {t("nav.menu", "Menü")}
              </Link>
              <Link
                className="font-sans text-[11px] font-medium tracking-widest text-black transition-colors uppercase"
                href="/contact"
              >
                {t("nav.contact", "İletişim")}
              </Link>
            </nav>
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <button className="md:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
              <MenuIcon className="w-6 h-6" />
            </button>
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
        <section className="py-24 md:py-40 max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal className="text-center mb-24">
            <span className="font-sans text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-4 block">{t("contactPage.subtitle", "İletişim")}</span>
            <h1 className="font-display text-4xl md:text-6xl text-black italic mb-12">{t("contactPage.title", "Bize Ulaşın")}</h1>
            <div className="w-12 h-px bg-black mx-auto mb-16"></div>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            {/* İletişim Bilgileri */}
            <ScrollReveal delay={0.1} className="flex-1 flex flex-col gap-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center flex-shrink-0 text-black">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-black mb-3">{t("contactPage.addressTitle", "Adresimiz")}</h4>
                  <p className="font-sans text-[14px] text-gray-500 font-light leading-relaxed whitespace-pre-line">
                    {t("contactPage.addressFull", "İnönü Caddesi, No: 16\nAvanos / Nevşehir, Kapadokya")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center flex-shrink-0 text-black">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-black mb-3">{t("footer.hoursTitle", "Çalışma Saatleri")}</h4>
                  <div className="flex justify-between max-w-[200px] mb-2 font-sans text-[14px] text-gray-500 font-light">
                    <span>{t("footer.weekdays", "Hafta İçi")}</span>
                    <span className="text-black">07:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between max-w-[200px] mb-2 font-sans text-[14px] text-gray-500 font-light">
                    <span>{t("footer.saturday", "Cumartesi")}</span>
                    <span className="text-black">07:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between max-w-[200px] font-sans text-[14px] text-gray-500 font-light">
                    <span>{t("footer.sunday", "Pazar")}</span>
                    <span className="text-black">08:00 - 23:00</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center flex-shrink-0 text-black">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-black mb-3">{t("contactPage.phoneTitle", "Telefon")}</h4>
                  <a href="tel:+903845110000" className="font-sans text-[14px] text-gray-500 hover:text-black transition-colors font-light">
                    +90 (384) 511 XX XX
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center flex-shrink-0 text-black">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-black mb-3">{t("contactPage.emailTitle", "E-Posta")}</h4>
                  <a href="mailto:info@aytemurpastanesi.com" className="font-sans text-[14px] text-gray-500 hover:text-black transition-colors font-light">
                    info@aytemurpastanesi.com
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* İletişim Formu */}
            <ScrollReveal delay={0.2} className="flex-1 bg-gray-50 p-8 md:p-12">
              <h4 className="font-display text-2xl text-black italic mb-8">{t("contactPage.formTitle", "Bize Yazın")}</h4>
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-sans text-[11px] font-semibold tracking-widest uppercase text-gray-500">{t("contactPage.nameLabel", "Adınız Soyadınız")}</label>
                  <input type="text" id="name" className="bg-transparent border-b border-gray-300 py-3 text-sm font-sans focus:outline-none focus:border-black transition-colors placeholder-gray-300" placeholder={t("contactPage.namePlaceholder", "Örn. Selim Aksoy")} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans text-[11px] font-semibold tracking-widest uppercase text-gray-500">{t("contactPage.emailLabel", "E-Posta Adresiniz")}</label>
                  <input type="email" id="email" className="bg-transparent border-b border-gray-300 py-3 text-sm font-sans focus:outline-none focus:border-black transition-colors placeholder-gray-300" placeholder={t("contactPage.emailPlaceholder", "hello@example.com")} />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <label htmlFor="message" className="font-sans text-[11px] font-semibold tracking-widest uppercase text-gray-500">{t("contactPage.msgLabel", "Mesajınız")}</label>
                  <textarea id="message" rows={4} className="bg-transparent border-b border-gray-300 py-3 text-sm font-sans focus:outline-none focus:border-black transition-colors resize-none placeholder-gray-300" placeholder={t("contactPage.msgPlaceholder", "Size nasıl yardımcı olabiliriz?")}></textarea>
                </div>
                <button type="submit" className="mt-8 border border-black px-8 py-4 font-sans text-[11px] font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500 w-full md:w-auto self-start">
                  {t("contactPage.submitBtn", "Gönder")}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer showMap={true} />
    </div>
  );
}
