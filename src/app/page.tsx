"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MoveLeft, MoveRight, MoveHorizontal, Heart, Menu as MenuIcon, X, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function Home() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Listener for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Slider controls
  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const offset = direction === "left" ? -400 : 400;
      sliderRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  // Drag-to-scroll implementation
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeftState - walk;
  };

  const products = [
    {
      id: "cakes",
      title: t("products.p1Title", "Tasarım Pastalar"),
      desc: t("products.p1Desc", "Zanaatın lüksle buluştuğu nokta. Özel günleriniz için tasarlanan butik pastalar."),
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "pastries",
      title: t("products.p2Title", "Geleneksel Hamur İşleri"),
      desc: t("products.p2Desc", "Meşhur mahlep kokulu Paskalya çöreğimiz ve taş fırın geleneğiyle hazırlanan klasik reçetelerimiz."),
      img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "desserts",
      title: t("products.p3Title", "Sütlü Tatlılar"),
      desc: t("products.p3Desc", "Geleneksel yöntemlerle hazırlanan, hafif ve lezzetli sütlü tatlılarımız."),
      img: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "gifts",
      title: t("products.p4Title", "Butik Hediyelikler"),
      desc: t("products.p4Desc", "Sevdiklerinize özel anlar yaşatacak, özenle paketlenmiş premium lezzetler."),
      img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=600",
    },
  ];

  const instagramPosts = [
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600",
  ];

  const googleReviews = [
    {
      text: t("reviews.r1", "Avanos'ta tatlı krizlerimizin tek adresi. Özellikle pastaları harika, personeli de çok güler yüzlü."),
      author: "Ahmet Y.",
    },
    {
      text: t("reviews.r2", "Uzun yıllardır kalitesini hiç bozmayan mekan. Sütlü tatlıları gerçekten muazzam. Kesinlikle tavsiye ederim."),
      author: "Zeynep K.",
    },
    {
      text: t("reviews.r3", "Nişanımız için özel tasarım pasta yaptırdık, hem görseli hem de lezzeti efsaneydi. Emeğinize sağlık."),
      author: "Mehmet D.",
    },
    {
      text: t("reviews.r4", "Geleneksel lezzetlerin adresi. Ekşi mayalı köy ekmekleri ve simitleri sabah kahvaltılarımızın vazgeçilmezi oldu."),
      author: "Ayşe Ç.",
    },
    {
      text: t("reviews.r5", "Personelin ilgisi ve mekanın ferahlığı çok güzel. Butik hediyelikleri denemelisiniz, misafirliğe giderken harika oluyor."),
      author: "Burak E.",
    },
    {
      text: t("reviews.r6", "Kalite, lezzet ve güler yüz bir arada. 1978'den beri aynı lezzet, her geldiğimizde aynı tazeliği bulabiliyoruz."),
      author: "Merve A.",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-gray-100 shadow-sm"
          : "bg-transparent border-transparent md:bg-white/70 md:backdrop-blur-xl md:border-gray-100"
      }`}>
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
                {t("nav.about")}
              </Link>
              <Link
                className="font-sans text-[11px] font-medium tracking-widest text-gray-500 hover:text-black transition-colors uppercase"
                href="/products"
              >
                {t("nav.products")}
              </Link>
            </nav>
          </div>
          <div className="flex-shrink-0">
            <a className="block h-16 w-auto" href="#hero">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Aytemur Logo"
                className="h-full w-auto object-contain"
                src="/logo.png"
              />
            </a>
          </div>
          <div className="flex-1 flex justify-end items-center gap-6">
            <nav className="hidden md:flex gap-8 items-center">
              <Link
                className="font-sans text-[11px] font-medium tracking-widest text-gray-500 hover:text-black transition-colors uppercase"
                href="/menu"
              >
                {t("nav.menu")}
              </Link>
              <Link
                className="font-sans text-[11px] font-medium tracking-widest text-gray-500 hover:text-black transition-colors uppercase"
                href="/contact"
              >
                {t("nav.contact")}
              </Link>
            </nav>
            <LanguageSwitcher />
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
              {t("nav.about")}
            </Link>
            <Link
              className="font-sans text-lg font-medium tracking-wider text-black uppercase"
              href="/products"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.products")}
            </Link>
            <Link
              className="font-sans text-lg font-medium tracking-wider text-black uppercase"
              href="/menu"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.menu")}
            </Link>
            <Link
              className="font-sans text-lg font-medium tracking-wider text-black uppercase"
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
          </nav>
        </div>
      )}



      <main className="mt-24 flex-1">
        {/* Split Screen Hero */}
        <section className="relative min-h-[100vh] md:min-h-[calc(100vh-6rem)] w-full flex flex-col md:flex-row" id="hero">
          
          {/* Background Image for Mobile Only */}
          <div className="absolute inset-0 z-0 md:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Aytemur Pastanesi Interior"
              className="w-full h-full object-cover object-center grayscale-[10%]"
              src="/hero-bg.png"
            />
          </div>

          {/* Text Section: Glass Card on Mobile, Solid White on Desktop */}
          <div className="flex-1 flex flex-col items-center justify-center px-5 md:p-32 text-center md:text-left relative z-10 md:bg-white pt-24 md:pt-32">
            <ScrollReveal className="max-w-md w-full bg-white/85 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none p-10 md:p-0 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] md:shadow-none border border-white/60 md:border-none" yOffset={20}>
              <span className="md:hidden font-sans text-[10px] tracking-[0.2em] text-[#735c00] uppercase mb-6 block font-bold">Aytemur Pastanesi</span>
              <h1 className="font-display text-[38px] md:text-[64px] font-bold leading-[1.15] mb-6 md:mb-12 text-black tracking-tight">
                {t("hero.titleTop")}<br />
                <span className="italic text-gray-500 font-normal">{t("hero.titleBottom")}</span>
              </h1>
              <p className="font-sans text-[14px] md:text-[16px] font-light leading-relaxed text-gray-600 md:px-0">
                {t("hero.desc")}
              </p>
            </ScrollReveal>
          </div>
          
          {/* Image Section: Hidden on Mobile, Right on Desktop */}
          <div className="hidden md:block w-full h-[50vh] md:h-auto md:flex-1 relative overflow-hidden bg-gray-50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Aytemur Pastanesi Interior"
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[10%]"
              src="/hero-bg.png"
            />
          </div>
        </section>

        {/* Menu CTA Section */}
        <section className="py-32 w-full bg-[#f9f9f9] border-t border-b border-gray-100 flex flex-col items-center justify-center text-center px-6" id="menu">
          <ScrollReveal className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl mb-8 text-black italic">{t("homeMenu.title")}</h2>
            <p className="font-sans text-[16px] font-light text-gray-500 leading-relaxed mb-12">
              {t("homeMenu.desc")}
            </p>
            <Link
              className="inline-flex items-center justify-center border border-black px-10 py-4 font-sans text-[11px] font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-500"
              href="/menu"
            >
              {t("homeMenu.btn")}
            </Link>
          </ScrollReveal>
        </section>

        {/* Products Slider */}
        <section className="py-40 w-full bg-white overflow-hidden relative" id="products">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <ScrollReveal className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 md:mb-24 gap-8">
              <div className="text-center md:text-left mx-auto md:mx-0">
                <h2 className="font-display text-4xl md:text-6xl text-black italic">{t("homeProducts.title")}</h2>
              </div>
            </ScrollReveal>
          </div>
          <div className="w-full relative overflow-hidden group">
            <div className="flex w-max slider-marquee">
              {[...products, ...products, ...products, ...products].map((prod, idx) => (
                <Link
                  href={`/product/${prod.id}`}
                  key={idx}
                  className="w-[85vw] md:w-[400px] flex-shrink-0 flex flex-col items-center mx-4 md:mx-6 cursor-pointer group/item block"
                >
                  <div className="w-full aspect-[4/5] overflow-hidden mb-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={prod.title}
                      className="w-full h-full object-cover grayscale-[10%] group-hover/item:scale-105 transition-transform duration-[2s] ease-out"
                      src={prod.img}
                    />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-black italic mb-4 text-center group-hover/item:text-gray-600 transition-colors">{prod.title}</h3>
                  <p className="font-sans text-[14px] text-gray-500 text-center px-4 leading-relaxed">{prod.desc}</p>
                </Link>
              ))}
            </div>
            <ScrollReveal className="flex justify-center mt-24">
              <Link
                href="/products"
                className="inline-flex items-center justify-center border border-black px-12 py-5 font-sans text-[11px] font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500"
              >
                {t("homeProducts.btn")}
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-40 w-full bg-[#f3f3f4] border-t border-gray-100" id="testimonials">
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
            <ScrollReveal className="text-center flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4 justify-center">
                <div className="flex bg-white px-4 py-2 rounded-full shadow-sm items-center gap-2 border border-gray-100">
                  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="font-sans text-[12px] font-bold text-gray-700">Google Yorumları</span>
                </div>
              </div>
              <h2 className="font-display text-4xl md:text-6xl text-black italic mb-6">Müşteri Deneyimleri</h2>
              <div className="w-12 h-px bg-black mx-auto"></div>
            </ScrollReveal>
          </div>
            
          <div className="relative w-full overflow-hidden">
              <div className="flex w-max animate-none hover:[animation-play-state:paused] slider-marquee">
                {[...googleReviews, ...googleReviews, ...googleReviews, ...googleReviews].map((review, idx) => (
                  <div 
                    key={idx}
                    className="flex flex-col w-[300px] md:w-[400px] mx-4 shrink-0 bg-white p-8 border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] cursor-pointer hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-shadow duration-500"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                      ))}
                    </div>
                    <p className="font-sans text-[15px] font-light text-gray-500 italic leading-relaxed mb-6 flex-1">
                      "{review.text}"
                    </p>
                    <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-black flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-sans text-[10px]">{review.author.charAt(0)}</div>
                      {review.author}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
        </section>

        {/* Instagram Feed */}
        <section className="py-40 w-full bg-white border-t border-gray-100" id="instagram-feed">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal className="text-center mb-24">
              <h2 className="font-display text-4xl md:text-6xl text-black italic mb-6">{t("instagram.title")}</h2>
              <p className="font-sans text-[16px] font-light text-gray-500 max-w-2xl mx-auto mb-8">
                {t("instagram.desc")}
              </p>
              <div className="w-12 h-px bg-black mx-auto"></div>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-24">
              {instagramPosts.map((post, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1} className="group relative aspect-square overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Instagram Post"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    src={post}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Heart className="text-white w-8 h-8 fill-white" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal className="flex justify-center mt-24">
              <a
                className="inline-flex items-center gap-4 border border-black px-12 py-5 font-sans text-[11px] font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t("instagram.btn")}</span>
                <MoveRight className="w-4 h-4" />
              </a>
            </ScrollReveal>
          </div>
        </section>

      </main>

      <Footer showMap={true} />
    </div>
  );
}
