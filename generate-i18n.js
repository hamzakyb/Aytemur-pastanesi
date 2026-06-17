const fs = require('fs');
const path = require('path');

const tr = {
  nav: {
    about: "Hakkımızda",
    products: "Ürünlerimiz",
    menu: "Menü",
    contact: "İletişim",
    home: "Anasayfa",
    digitalMenu: "Dijital Menü",
    qrCode: "QR Kod"
  },
  hero: {
    titleTop: "1978'den Beri",
    titleBottom: "Artizan Lezzetler.",
    desc: "Avanos'un kalbinde, yarım asra yaklaşan sessiz bir adanmışlık. Usta-çırak geleneğiyle yoğrulan, Kapadokya'nın eşsiz ruhunu taşıyan bir zanaat mirası. Her tarifimiz, nesiller boyu aktarılan geleneksel reçetelerin ve butik pastacılık anlayışının birer yansımasıdır."
  },
  homeMenu: {
    title: "Günlük Fırın Menümüz",
    desc: "Avanos fırınımızdan her sabah taze çıkan artizan ekmekler, sıcak kruvasanlar ve günlük hazırlanan butik tatlı seçkimizi keşfedin.",
    btn: "Menüyü İncele"
  },
  homeProducts: {
    title: "Ürünlerimiz",
    swipe: "Kaydırarak İnceleyin",
    btn: "Tüm Ürünleri Gör"
  },
  testimonials: {
    title: "müdavimlerimizin kaleminden"
  },
  instagram: {
    title: "kadrajımızdan lezzetler",
    desc: "@aytemurpastanesi — anlarımızı ve artizan hikayelerimizi instagram'da takip edin.",
    btn: "Takip Edin"
  },
  footer: {
    locationTitle: "Konum & İletişim",
    address: "İnönü Caddesi, No: 16",
    city: "Avanos / Kapadokya",
    hoursTitle: "Çalışma Saatleri",
    weekdays: "Hafta İçi",
    saturday: "Cumartesi",
    sunday: "Pazar",
    copy: "© 1978 Aytemur Pastanesi. Avanos'tan Lezzet Mirası."
  },
  menuPage: {
    searchPlaceholder: "Menüde arayın...",
    notFound: "Aradığınız kriterde ürün bulunamadı.",
    popular: "Popüler",
    allergen: "Alerjen",
    taxInfo: "Fiyatlarımıza KDV dahildir. Alerjiniz varsa lütfen sipariş vermeden önce personelimize bilgi veriniz.",
    copy: "© 1978 Aytemur Pastanesi. Tüm hakları saklıdır.",
    qrTitle: "Menü QR Kodu",
    fresh: "Her sabah Avanos fırınımızda taze hazırlanır.",
    allergenWarningTitle: "Alerjen Uyarısı",
    allergenWarningDesc: "Bu ürün şunları içermektedir:",
    naturalTitle: "Doğal ve Katkısız",
    naturalDesc: "Bu ürün herhangi bir yapay koruyucu veya kimyasal katkı maddesi içermez.",
    categories: {
      all: "Tümü",
      bakery: "Fırın",
      pastry: "Pastacılık",
      desserts: "Tatlılar",
      drinks: "İçecekler"
    }
  },
  aboutPage: {
    subtitle: "Mirasımız",
    title: "Yarım Asırlık Bir Lezzet Hikayesi",
    p1: "1978 yılında Kapadokya'nın kalbi Avanos'ta küçük bir fırın olarak yola çıktık. O günden bugüne değişmeyen tek şey, artizan fırıncılığa olan tutkumuz ve kaliteden asla ödün vermeyen duruşumuz oldu.",
    p2: "Bizim için pastacılık sadece bir meslek değil, nesilden nesile aktarılan bir zanaat. Her sabah gün ağarmadan yanan fırınlarımızda, ekşi mayalı ekmeklerimiz, çıtır kruvasanlarımız ve nostaljik mahlep kokulu çöreklerimiz hazırlanıyor.",
    p3: "En iyi malzemeleri bulmak, yerel üreticiyi desteklemek ve mevsiminde taze ürünler kullanmak bizim en büyük prensibimiz. Fransız tereyağı, Belçika çikolatası ve Avanos'un verimli topraklarından gelen meyveleri harmanlayarak, hem modern pastacılık tekniklerini hem de geleneksel lezzetleri bir araya getiriyoruz.",
    p4: "Sizleri bu sessiz adanmışlık ve lezzet yolculuğunun bir parçası olmaya davet ediyoruz."
  },
  contactPage: {
    subtitle: "İletişim",
    title: "Bize Ulaşın",
    addressTitle: "Adresimiz",
    addressFull: "İnönü Caddesi, No: 16\nAvanos / Nevşehir, Kapadokya",
    phoneTitle: "Telefon",
    emailTitle: "E-Posta",
    formTitle: "Bize Yazın",
    nameLabel: "Adınız Soyadınız",
    emailLabel: "E-Posta Adresiniz",
    msgLabel: "Mesajınız",
    namePlaceholder: "Örn. Selim Aksoy",
    emailPlaceholder: "hello@example.com",
    msgPlaceholder: "Size nasıl yardımcı olabiliriz?",
    submitBtn: "Gönder"
  }
};

const en = {
  nav: {
    about: "About Us",
    products: "Our Products",
    menu: "Menu",
    contact: "Contact",
    home: "Home",
    digitalMenu: "Digital Menu",
    qrCode: "QR Code"
  },
  hero: {
    titleTop: "Since 1978",
    titleBottom: "Artisan Flavors.",
    desc: "In the heart of Avanos, a silent dedication spanning nearly half a century. An artisanal heritage kneaded with the master-apprentice tradition, carrying the unique spirit of Cappadocia. Each of our recipes is a reflection of traditional recipes passed down through generations and a boutique pastry approach."
  },
  homeMenu: {
    title: "Daily Bakery Menu",
    desc: "Discover artisan breads, hot croissants, and our selection of boutique desserts prepared daily, fresh from our Avanos bakery every morning.",
    btn: "View Menu"
  },
  homeProducts: {
    title: "Our Products",
    swipe: "Swipe to Explore",
    btn: "See All Products"
  },
  testimonials: {
    title: "from our regulars"
  },
  instagram: {
    title: "flavors from our lens",
    desc: "@aytemurpastanesi — follow our moments and artisan stories on instagram.",
    btn: "Follow Us"
  },
  footer: {
    locationTitle: "Location & Contact",
    address: "Inonu Street, No: 16",
    city: "Avanos / Cappadocia",
    hoursTitle: "Working Hours",
    weekdays: "Weekdays",
    saturday: "Saturday",
    sunday: "Sunday",
    copy: "© 1978 Aytemur Patisserie. Flavor Heritage from Avanos."
  },
  menuPage: {
    searchPlaceholder: "Search menu...",
    notFound: "No products found matching your criteria.",
    popular: "Popular",
    allergen: "Allergen",
    taxInfo: "Prices include VAT. If you have allergies, please inform our staff before ordering.",
    copy: "© 1978 Aytemur Patisserie. All rights reserved.",
    qrTitle: "Menu QR Code",
    fresh: "Prepared fresh every morning in our Avanos bakery.",
    allergenWarningTitle: "Allergen Warning",
    allergenWarningDesc: "This product contains:",
    naturalTitle: "Natural & Additive-Free",
    naturalDesc: "This product does not contain any artificial preservatives or chemical additives.",
    categories: {
      all: "All",
      bakery: "Bakery",
      pastry: "Pastry",
      desserts: "Desserts",
      drinks: "Drinks"
    }
  },
  aboutPage: {
    subtitle: "Our Heritage",
    title: "A Flavor Story of Half a Century",
    p1: "We started out as a small bakery in Avanos, the heart of Cappadocia, in 1978. The only thing that hasn't changed since then is our passion for artisan baking and our uncompromising stance on quality.",
    p2: "For us, pastry making is not just a profession, but a craft passed down from generation to generation. In our ovens that burn before dawn every morning, our sourdough breads, crispy croissants, and nostalgic mahaleb-scented buns are prepared.",
    p3: "Finding the best ingredients, supporting local producers, and using fresh seasonal products are our biggest principles. By blending French butter, Belgian chocolate, and fruits from the fertile soils of Avanos, we bring together modern pastry techniques and traditional flavors.",
    p4: "We invite you to be a part of this silent dedication and journey of flavor."
  },
  contactPage: {
    subtitle: "Contact",
    title: "Get in Touch",
    addressTitle: "Our Address",
    addressFull: "Inonu Street, No: 16\nAvanos / Nevsehir, Cappadocia",
    phoneTitle: "Phone",
    emailTitle: "Email",
    formTitle: "Write to Us",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    msgLabel: "Your Message",
    namePlaceholder: "e.g. John Doe",
    emailPlaceholder: "hello@example.com",
    msgPlaceholder: "How can we help you?",
    submitBtn: "Send"
  }
};

const de = JSON.parse(JSON.stringify(en).replace(/Our Products/g, "Unsere Produkte").replace(/Menu/g, "Speisekarte").replace(/About Us/g, "Über Uns").replace(/Contact/g, "Kontakt"));
const fr = JSON.parse(JSON.stringify(en).replace(/Our Products/g, "Nos Produits").replace(/Menu/g, "Menu").replace(/About Us/g, "À Propos").replace(/Contact/g, "Contact"));
const es = JSON.parse(JSON.stringify(en).replace(/Our Products/g, "Nuestros Productos").replace(/Menu/g, "Menú").replace(/About Us/g, "Sobre Nosotros").replace(/Contact/g, "Contacto"));
const pt = JSON.parse(JSON.stringify(en).replace(/Our Products/g, "Nossos Produtos").replace(/Menu/g, "Menu").replace(/About Us/g, "Sobre Nós").replace(/Contact/g, "Contato"));
const ru = JSON.parse(JSON.stringify(en).replace(/Our Products/g, "Наши продукты").replace(/Menu/g, "Меню").replace(/About Us/g, "О нас").replace(/Contact/g, "Контакт"));
const ar = JSON.parse(JSON.stringify(en).replace(/Our Products/g, "منتجاتنا").replace(/Menu/g, "القائمة").replace(/About Us/g, "معلومات عنا").replace(/Contact/g, "اتصل"));
const zh = JSON.parse(JSON.stringify(en).replace(/Our Products/g, "我们的产品").replace(/Menu/g, "菜单").replace(/About Us/g, "关于我们").replace(/Contact/g, "联系"));
const ja = JSON.parse(JSON.stringify(en).replace(/Our Products/g, "当社の製品").replace(/Menu/g, "メニュー").replace(/About Us/g, "私たちについて").replace(/Contact/g, "連絡先"));
const ko = JSON.parse(JSON.stringify(en).replace(/Our Products/g, "우리의 제품").replace(/Menu/g, "메뉴").replace(/About Us/g, "우리에 대해").replace(/Contact/g, "연락처"));
const hi = JSON.parse(JSON.stringify(en).replace(/Our Products/g, "हमारे उत्पाद").replace(/Menu/g, "मेनू").replace(/About Us/g, "हमारे बारे में").replace(/Contact/g, "संपर्क करें"));
const id = JSON.parse(JSON.stringify(en).replace(/Our Products/g, "Produk Kami").replace(/Menu/g, "Menu").replace(/About Us/g, "Tentang Kami").replace(/Contact/g, "Kontak"));
const it = JSON.parse(JSON.stringify(en).replace(/Our Products/g, "I Nostri Prodotti").replace(/Menu/g, "Menu").replace(/About Us/g, "Chi Siamo").replace(/Contact/g, "Contatto"));

const locales = { tr, en, de, fr, es, pt, ru, ar, zh, ja, ko, hi, id, it };

for (const [lang, data] of Object.entries(locales)) {
  const dir = path.join(__dirname, 'src', 'i18n', 'locales', lang);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'common.json'), JSON.stringify(data, null, 2));
}
console.log('Locales generated successfully.');
