"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronLeft, QrCode, Info, X, Heart, Leaf, Clock, Sparkles, AlertCircle, ChefHat, Flame, LayoutGrid, Croissant, Cake, Cookie, Coffee } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  allergens: string[];
  isPopular?: boolean;
}

export default function Menu() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showQrModal, setShowQrModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [currentUrl, setCurrentUrl] = useState("https://aytemurpastanesi.vercel.app/menu");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.origin + "/menu");
    }
  }, []);

  const categories = [
    { key: "all", label: t("menuPage.categories.all", "Tümü"), icon: LayoutGrid },
    { key: "bakery", label: t("menuPage.categories.bakery", "Fırın"), icon: Croissant },
    { key: "pastry", label: t("menuPage.categories.pastry", "Pastacılık"), icon: Cake },
    { key: "desserts", label: t("menuPage.categories.desserts", "Tatlılar"), icon: Cookie },
    { key: "drinks", label: t("menuPage.categories.drinks", "İçecekler"), icon: Coffee },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Ekşi Mayalı Avanos Ekmeği",
      category: "Fırın",
      description: "Doğal maya ile 48 saat fermente edilmiş, taş tabanlı fırında pişmiş geleneksel ekşi mayalı ekmek.",
      price: 85,
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600",
      allergens: ["Gluten"],
      isPopular: true
    },
    {
      id: 2,
      name: "Sade Fransız Kruvasanı",
      category: "Fırın",
      description: "%100 Fransız tereyağı ile hazırlanmış, dışı çıtır içi yumuşak kat kat artizan kruvasan.",
      price: 95,
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
      allergens: ["Gluten", "Süt Ürünü"]
    },
    {
      id: 3,
      name: "Bademli & Franjipan Kruvasan",
      category: "Fırın",
      description: "Badem kremalı dolgusu ve file badem kaplamasıyla fırınlanmış gurme kruvasan.",
      price: 130,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
      allergens: ["Gluten", "Süt Ürünü", "Kuruyemiş"],
      isPopular: true
    },
    {
      id: 4,
      name: "Mahlep Kokulu Paskalya Çöreği",
      category: "Fırın",
      description: "1978'den beri değişmeyen orijinal reçete. Damla sakızı ve mahlep kokulu örgü çörek.",
      price: 110,
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80&w=600",
      allergens: ["Gluten", "Süt Ürünü", "Yumurta"]
    },
    {
      id: 5,
      name: "Belçika Çikolatalı Ekler",
      category: "Pastacılık",
      description: "Özel pastacı kreması dolgulu, üzerinde premium Belçika çikolatası ganajı ile.",
      price: 90,
      image: "https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&q=80&w=600",
      allergens: ["Gluten", "Süt Ürünü", "Yumurta"]
    },
    {
      id: 6,
      name: "Çilekli Çıtır Milföy",
      category: "Pastacılık",
      description: "Günlük hazırlanan çıtır milföy katları arasında vanilyalı krema ve taze Avanos çilekleri.",
      price: 120,
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",
      allergens: ["Gluten", "Süt Ürünü"],
      isPopular: true
    },
    {
      id: 7,
      name: "Artizan San Sebastian Cheesecake",
      category: "Tatlılar",
      description: "İçi akışkan kıvamda, hafif yanık üst yüzeyi ile modern İspanyol klasiği cheesecake.",
      price: 140,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600",
      allergens: ["Süt Ürünü", "Yumurta"]
    },
    {
      id: 8,
      name: "Avanos Simidi",
      category: "Fırın",
      description: "Pekmezli sıcak su banyosunda bekletildikten sonra bol susamla kaplanıp taş fırında pişen çıtır simit.",
      price: 35,
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=600",
      allergens: ["Gluten", "Susam"]
    },
    {
      id: 9,
      name: "Flat White",
      category: "İçecekler",
      description: "Double shot espresso ve mikro köpüklü taze süt ile hazırlanan kadifemsi kahve.",
      price: 85,
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600",
      allergens: ["Süt Ürünü"]
    },
    {
      id: 10,
      name: "Ev Yapımı Artizan Limonata",
      category: "İçecekler",
      description: "Taze nane yaprakları ve Bodrum limonlarının soğuk sıkımından elde edilen ferahlatıcı içecek.",
      price: 80,
      image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?auto=format&fit=crop&q=80&w=600",
      allergens: []
    }
  ];

  const filteredItems = menuItems.filter((item) => {
    const itemName = t(`menuItems.${item.id}.name`, item.name);
    const itemDesc = t(`menuItems.${item.id}.desc`, item.description);
    const matchesSearch =
      itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      itemDesc.toLowerCase().includes(searchTerm.toLowerCase());
      
    const categoryKeyMap: Record<string, string> = {
      "Tümü": "all",
      "Fırın": "bakery",
      "Pastacılık": "pastry",
      "Tatlılar": "desserts",
      "İçecekler": "drinks"
    };
    
    const itemCategoryKey = categoryKeyMap[item.category] || "all";
    
    const matchesCategory = activeCategory === "all" || itemCategoryKey === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryLabel = (categoryName: string) => {
    const categoryKeyMap: Record<string, string> = {
      "Fırın": "bakery",
      "Pastacılık": "pastry",
      "Tatlılar": "desserts",
      "İçecekler": "drinks"
    };
    const key = categoryKeyMap[categoryName];
    return key ? t(`menuPage.categories.${key}`, categoryName) : categoryName;
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#1a1c1c]/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors">
              <ChevronLeft className="w-5 h-5 text-black" />
            </Link>
            <span className="font-sans text-[11px] font-semibold tracking-widest text-gray-500 uppercase">
              {t("nav.home", "Anasayfa")}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowQrModal(true)}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-none hover:bg-black/80 transition-colors"
            >
              <QrCode className="w-4 h-4" />
              <span className="font-sans text-[11px] font-semibold tracking-widest uppercase hidden md:inline">
                {t("nav.qrCode", "QR Kod")}
              </span>
            </button>
            <LanguageSwitcher dropdownAlign="right" />
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <div className="bg-white border-b border-gray-100 py-10 px-6 text-center">
        <div className="flex justify-center mb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Aytemur Pastanesi" className="h-14 w-auto object-contain" />
        </div>
        <h2 className="font-display text-4xl mt-2 mb-4 italic" style={{ color: '#735c00' }}>{t("nav.digitalMenu", "Günlük Menümüz")}</h2>
        <div className="w-12 h-[1px] bg-black mx-auto mb-6"></div>
        
        {/* Search Input */}
        <div className="max-w-md mx-auto relative">
          <input
            type="text"
            placeholder={t("menuPage.searchPlaceholder", "Menüde arayın...")}
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-none font-sans text-sm text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-gray-400" />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-3.5 text-gray-400 hover:text-black"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-[73px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-100/60 overflow-x-auto hide-scrollbar py-3 px-4 flex gap-3 md:justify-center">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex-shrink-0 px-5 py-2 text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 ${
                activeCategory === cat.key
                  ? "bg-black text-white"
                  : "bg-white text-gray-600 border border-gray-200/50 hover:bg-gray-50"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Menu List */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 text-gray-500 font-sans text-sm">
            {t("menuPage.notFound", "Aradığınız kriterde ürün bulunamadı.")}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item, idx) => (
              <ScrollReveal
                key={item.id}
                delay={idx * 0.1}
                className="bg-white border border-gray-100 flex flex-col sm:flex-row relative group hover:shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow duration-500 cursor-pointer"
              >
                <div onClick={() => setSelectedItem(item)} className="w-full flex flex-col sm:flex-row h-full">
                {/* Popular Badge */}
                {item.isPopular && (
                  <span className="absolute top-3 left-3 bg-[#e9c349] text-black text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 z-10">
                    Popüler
                  </span>
                )}
                
                {/* Product Image */}
                <div className="w-full sm:w-1/3 aspect-[4/3] sm:aspect-square relative overflow-hidden bg-gray-50 flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                    src={item.image}
                  />
                </div>

                {/* Product Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="font-display text-xl text-black font-semibold mb-2 group-hover:text-[#735c00] transition-colors">{t(`menuItems.${item.id}.name`, item.name)}</h3>
                    </div>
                    <p className="font-sans text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                      {t(`menuItems.${item.id}.desc`, item.description)}
                    </p>
                  </div>

                  {/* Allergens / Footnote */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-50 pt-3 mt-auto">
                    <span className="font-sans text-lg font-bold text-black">{item.price} ₺</span>
                    {item.isPopular && (
                      <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold text-[#735c00] bg-amber-50 px-2 py-1">
                        <Flame className="w-3 h-3 text-orange-500 fill-orange-500" />
                        {t("menuPage.popular", "Popüler")}
                      </span>
                    )}
                    <span className="font-sans text-[10px] uppercase tracking-wider text-gray-400">
                      {getCategoryLabel(item.category)}
                    </span>
                  </div>
                </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </main>

      {/* Bottom Floating Info Banner */}
      <footer className="bg-white border-t border-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center justify-center gap-4 border-t border-gray-200 mt-12">
          <div className="flex items-center gap-2 text-gray-400 font-sans text-xs">
            <Info className="w-4 h-4" />
            <span>{t("menuPage.taxInfo", "Fiyatlarımıza KDV dahildir. Alerjiniz varsa lütfen sipariş vermeden önce personelimize bilgi veriniz.")}</span>
          </div>
          <p className="font-sans text-[10px] text-gray-400 tracking-widest uppercase">
            {t("menuPage.copy", "© 1978 Aytemur Pastanesi. Tüm hakları saklıdır.")}
          </p>
        </div>
      </footer>

      {/* QR Code Modal */}
      {showQrModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
          <div className="bg-white max-w-sm w-full p-8 border border-black flex flex-col items-center relative">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-display text-2xl text-center text-black italic mb-6">{t("menuPage.qrTitle", "Menü QR Kodu")}</h3>
            <div className="bg-white p-6 rounded-2xl shadow-inner border border-gray-50 mb-6 flex justify-center">
              <QRCodeSVG
                value={currentUrl}
                size={200}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"Q"}
                includeMargin={false}
              />
            </div>
            <p className="font-sans text-[10px] text-gray-400 break-all select-all border border-gray-100 bg-gray-50 p-2 text-center w-full uppercase tracking-wider">
              {currentUrl}
            </p>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white max-w-xl md:max-w-4xl w-full max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible border border-black flex flex-col md:flex-row relative rounded-none shadow-xl">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 border border-black/10 p-1.5 hover:bg-black hover:text-white transition-all animate-fade-in"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Product Image */}
            <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-square relative bg-gray-50 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={selectedItem.name}
                className="w-full h-full object-cover"
                src={selectedItem.image}
              />
              {selectedItem.isPopular && (
                <span className="absolute top-4 left-4 bg-[#e9c349] text-black text-[9px] font-bold tracking-widest uppercase px-2.5 py-1">
                  Popüler
                </span>
              )}
            </div>

            {/* Product Details */}
            <div className="p-5 md:p-8 flex-1 flex flex-col justify-between bg-white">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#735c00] font-semibold">
                  {getCategoryLabel(selectedItem.category)}
                </span>
                <h3 className="font-display text-3xl italic text-black mt-2 mb-4 leading-tight">
                  {t(`menuItems.${selectedItem.id}.name`, selectedItem.name)}
                </h3>
                <div className="font-sans font-bold text-2xl text-black mb-6">
                  {selectedItem.price} ₺
                </div>
                <div className="w-8 h-[1px] bg-black mb-6"></div>
                <p className="font-sans text-[14px] font-light text-gray-600 leading-relaxed mb-6">
                  {t(`menuItems.${selectedItem.id}.desc`, selectedItem.description)}
                </p>
              </div>

              {/* Extra Badges & Allergens */}
              <div className="border-t border-black/5 pt-6 mt-auto">
                <div className="flex items-center gap-2 text-[#735c00]">
                  <ChefHat className="w-4 h-4" />
                  <span className="font-sans text-xs font-medium">{t("menuPage.fresh", "Her sabah Avanos fırınımızda taze hazırlanır.")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
