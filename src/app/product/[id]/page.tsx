"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useState, use } from "react";
import { Menu as MenuIcon, X, ChevronLeft } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Data map for categories based on home page slider
  const productData: Record<string, any> = {
    cakes: {
      titleKey: "products.p1Title",
      defaultTitle: "Tasarım Pastalar",
      descKey: "products.p1Desc",
      defaultDesc: "Zanaatın lüksle buluştuğu nokta. Özel günleriniz için tasarlanan butik pastalar.",
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1200",
      contentKey: "productDetail.cakesContent",
      defaultContent: "Tasarım pastalarımız, sadece bir tatlı değil, aynı zamanda görsel bir şölendir. Özel günlerinizde sevdiklerinize unutulmaz anlar yaşatmak için her detayı özenle çalışıyoruz. İster düğün, ister doğum günü veya kurumsal etkinlikleriniz için kişiselleştirilebilir pasta siparişlerinizi ustalıkla hazırlıyoruz."
    },
    pastries: {
      titleKey: "products.p2Title",
      defaultTitle: "Geleneksel Hamur İşleri",
      descKey: "products.p2Desc",
      defaultDesc: "Meşhur mahlep kokulu Paskalya çöreğimiz ve taş fırın geleneğiyle hazırlanan klasik reçetelerimiz.",
      img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80&w=1200",
      contentKey: "productDetail.pastriesContent",
      defaultContent: "1978'den beri ustalarımızın ellerinden çıkan geleneksel hamur işleri, asırlık taş fırınımızda odun ateşiyle pişiyor. Ekşi mayalı köy ekmeklerinden susamlı çıtır simitlere kadar her bir ürün, en kaliteli yerli buğday unları kullanılarak uzun fermantasyon süreçleriyle hazırlanıyor."
    },
    desserts: {
      titleKey: "products.p3Title",
      defaultTitle: "Sütlü Tatlılar",
      descKey: "products.p3Desc",
      defaultDesc: "Geleneksel yöntemlerle hazırlanan, hafif ve lezzetli sütlü tatlılarımız.",
      img: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=1200",
      contentKey: "productDetail.dessertsContent",
      defaultContent: "Anadolu'nun zengin mutfak kültüründen ilham alan sütlü tatlılarımız, taze günlük çiftlik sütü ve doğal pancar şekeri ile hazırlanıyor. Fırın sütlaç, kazandibi ve muhallebi gibi klasikler, hafifliği ve damakta bıraktığı kalıcı lezzet ile vazgeçilmeziniz olacak."
    },
    gifts: {
      titleKey: "products.p4Title",
      defaultTitle: "Butik Hediyelikler",
      descKey: "products.p4Desc",
      defaultDesc: "Sevdiklerinize özel anlar yaşatacak, özenle paketlenmiş premium lezzetler.",
      img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1200",
      contentKey: "productDetail.giftsContent",
      defaultContent: "Özel kutlamalar, tebrikler veya sadece sevdiklerinizi mutlu etmek için tasarlanan butik hediye setlerimiz, makaronlardan el yapımı çikolatalara kadar en seçkin lezzetlerimizi barındırıyor. Şık kurdeleler ve kişiye özel not kartlarıyla taçlandırılan bu setler, zarif bir armağan arayanlar için ideal."
    }
  };

  const product = productData[id];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="font-display text-4xl italic text-black mb-4">Ürün Bulunamadı</h1>
          <Link href="/" className="text-gray-500 hover:text-black transition-colors font-sans text-[11px] uppercase tracking-widest font-semibold">Anasayfaya Dön</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-[100] bg-white/70 backdrop-blur-xl border-b border-gray-100 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center gap-2 group">
              <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
              <span className="font-sans text-[11px] font-semibold tracking-widest text-gray-500 hover:text-black transition-colors uppercase">
                {t("nav.home", "Anasayfa")}
              </span>
            </Link>
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
        {/* Hero Section */}
        <div className="w-full h-[40vh] md:h-[60vh] relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={product.img} 
            alt={t(product.titleKey, product.defaultTitle)} 
            className="w-full h-full object-cover grayscale-[10%]"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content Section */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-24 text-center">
          <span className="font-sans text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-4 block">Aytemur Pastanesi</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-black italic mb-12">
            {t(product.titleKey, product.defaultTitle)}
          </h1>
          <div className="w-12 h-px bg-black mx-auto mb-16"></div>
          
          <div className="prose prose-lg mx-auto text-left font-sans text-[15px] md:text-[16px] text-gray-500 font-light leading-relaxed mb-16">
            <p className="mb-6 font-medium text-gray-900 text-center">
              {t(product.descKey, product.defaultDesc)}
            </p>
            <p className="text-justify md:text-center">
              {t(product.contentKey, product.defaultContent)}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center border border-black bg-black text-white px-10 py-4 font-sans text-[11px] font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 w-full sm:w-auto"
            >
              {t("nav.menu", "Tüm Menüyü İncele")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-gray-200 px-10 py-4 font-sans text-[11px] font-semibold uppercase tracking-widest text-black hover:border-black transition-all duration-500 w-full sm:w-auto"
            >
              {t("nav.contact", "Bize Ulaşın")}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
