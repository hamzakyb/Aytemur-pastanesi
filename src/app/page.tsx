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



      <main className="flex-1">
        {/* Premium Light Hero Section */}
        <section className="relative w-full h-screen min-h-[800px] flex items-center overflow-hidden bg-white" id="hero">
          <div 
            className="absolute right-0 top-0 w-[80%] md:w-[60%] h-full bg-cover bg-center grayscale opacity-25"
            style={{ 
              backgroundImage: "url('https://lh3.googleusercontent.com/aida/AP1WRLsxdGQXvguN966RY7B313VA6Ux3vqRYBmOabPPNfpTfv7cTjogpRYcEJyWUI8i2p27NZcHUfUy4-haqhyKUQodBQmGndeyiqOFhmgluJk0mc9IgDTSyeLo61ileRQa4gcg85UkVO4WG0p_PGyslQ-Cezlrw4FyZtokMx6KXsRaX-JJ557MqqX7SiMXRaY3CMaahw2kOX2ZXJ8sGw6xr_PWGkxc2yF1QpvsP5LWklhpKLhfogDILjpIuE1k')",
              WebkitMaskImage: "linear-gradient(to left, black, transparent)",
              maskImage: "linear-gradient(to left, black, transparent)"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
          <div className="relative z-20 px-6 md:px-24 w-full flex flex-col justify-center mt-20">
            <ScrollReveal yOffset={30}>
              <h1 className="font-display text-[#735c00] bleed-text italic mb-4 opacity-90 drop-shadow-sm">
                1978'den
              </h1>
            </ScrollReveal>
            <ScrollReveal yOffset={30} delay={0.15}>
              <h1 className="font-display text-gray-900 bleed-text ml-12 md:ml-32 mb-12">
                Beri.
              </h1>
            </ScrollReveal>
            <ScrollReveal yOffset={30} delay={0.3} className="max-w-xl md:ml-32 relative">
              <div className="absolute -left-8 top-0 w-px h-full bg-[#735c00]/30"></div>
              <h2 className="text-2xl md:text-4xl font-display text-gray-900 mb-6 font-light italic">
                {t("hero.titleBottom", "Tutkuyla Yoğrulan Tatlar.")}
              </h2>
              <p className="font-sans text-sm md:text-base text-gray-600 mb-12 font-light leading-relaxed tracking-wide">
                {t("hero.desc", "Gerçek lezzetin sırrı, detaylara gösterilen özende gizlidir. Yarım asırdır Avanos'ta her güne aynı heyecanla başlıyor; ince bir işçilikle hazırladığımız ürünlerle size sadece bir tat değil, özel bir deneyim sunuyoruz.")}
              </p>
              <Link 
                className="inline-flex items-center gap-4 text-xs font-sans uppercase tracking-[0.2em] text-gray-900 hover:text-[#735c00] group transition-all duration-500"
                href="/menu"
              >
                {t("homeMenu.btn", "Menüyü İncele")}
                <span className="w-12 h-px bg-black/30 group-hover:bg-[#735c00] transition-all duration-500 group-hover:w-20"></span>
              </Link>
            </ScrollReveal>
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

        {/* Testimonials (Staggered Premium Minimalist Layout) */}
        <section className="py-40 px-6 md:px-24 max-w-[1600px] mx-auto" id="testimonials">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="md:w-1/3">
              <ScrollReveal yOffset={20}>
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-[#735c00] block mb-4">
                  {t("testimonials.label", "Google Yorumları")}
                </span>
                <h2 className="text-5xl font-display text-gray-900 tracking-tighter italic">
                  {t("testimonials.title", "Deneyimler.")}
                </h2>
              </ScrollReveal>
            </div>
            <div className="md:w-2/3 grid gap-16 md:gap-20">
              {googleReviews.slice(0, 3).map((review, idx) => {
                const mlClasses = ["", "md:ml-12", "md:ml-24"];
                const mlClass = mlClasses[idx % 3];
                return (
                  <ScrollReveal 
                    key={idx} 
                    delay={idx * 0.15} 
                    className={`border-l border-black/10 pl-8 relative ${mlClass}`}
                  >
                    <span className="absolute -top-6 -left-2 text-[5rem] text-black/5 font-display select-none pointer-events-none">"</span>
                    <p className="text-lg md:text-xl font-display text-gray-800 italic mb-6 leading-relaxed">
                      "{review.text}"
                    </p>
                    <span className="text-xs font-sans tracking-[0.2em] text-gray-400 uppercase font-medium">
                      {review.author}
                    </span>
                  </ScrollReveal>
                );
              })}
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
                    className="w-full h-full object-cover grayscale-0 md:grayscale-[20%] md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-700"
                    src={post}
                  />
                  <div className="absolute inset-0 bg-black/15 md:bg-black/20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Heart className="text-white w-6 h-6 md:w-8 md:h-8 fill-white" />
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
