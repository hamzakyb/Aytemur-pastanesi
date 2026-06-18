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
    titleTopLine1: "1978'den",
    titleTopLine2: "Beri.",
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
  faq: {
    subtitle: "Merak Edilenler",
    title: "Sıkça Sorulan Sorular",
    q1: "Özel gün ve doğum günü pastaları yapıyor musunuz?",
    a1: "Evet, tamamen sizin isteklerinize ve konseptinize özel tasarım pastalar hazırlıyoruz. Detaylı planlama ve sipariş için en az 3-4 gün önceden bizimle iletişime geçmenizi rica ederiz.",
    q2: "Alerjen hassasiyeti olanlar için seçenekleriniz var mı?",
    a2: "Menümüzde glutensiz un ve doğal tatlandırıcılarla hazırladığımız alternatifler bulunmaktadır. Ancak üretim alanımızda gluten içeren ürünler de işlendiği için çapraz bulaşma riskini göz önünde bulundurmanızı öneririz.",
    q3: "Avanos dışındaki bölgelere paket servisiniz bulunuyor mu?",
    a3: "Avanos içi tüm bölgelere hızlı paket servis hizmetimiz mevcuttur. Çevre ilçe ve bölgeler için minimum sipariş tutarı veya teslimat detayları hakkında bilgi almak için bizimle telefonla iletişime geçebilirsiniz.",
    q4: "Çalışma saatleriniz nedir ve haftanın her günü açık mısınız?",
    a4: "Haftanın her günü sabah 07:00 ile gece 23:00 saatleri arasında Avanos'taki pastanemizde sizleri ağırlamaktan mutluluk duyuyoruz.",
    q5: "Ürünleriniz günlük mü üretiliyor?",
    a5: "Evet, tezgahımızda yer alan tüm fırın ve pastacılık ürünlerimiz her sabah kendi imalathanemizde ustalarımız tarafından taze olarak hazırlanır. Bayat veya dondurulmuş ürün satışı yapmıyoruz.",
    q6: "Toplu organizasyonlar veya catering hizmeti sunuyor musunuz?",
    a6: "Nişan, kına, toplantı veya özel kutlamalarınız için toplu tatlı/tuzlu ikramlık tepsileri ve özel pastalar hazırlıyoruz. Kişi sayısı ve menü planlaması için bizimle en az bir hafta önceden görüşebilirsiniz.",
    q7: "Kullandığınız malzemelerin kalite standartları nelerdir?",
    a7: "Ürünlerimizde her zaman en üst sınıf malzemeleri tercih ediyoruz. Gerçek Fransız tereyağı, hakiki Belçika çikolatası ve Avanos'un yerel üreticilerinden temin ettiğimiz taze mevsim meyveleriyle üretim yapıyoruz. Yapay koruyucu veya kimyasal katkı maddesi kullanmıyoruz.",
    q8: "Telefon veya internet üzerinden sipariş verebiliyor muyuz?",
    a8: "Web sitemizdeki dijital menüyü inceledikten sonra, sipariş hattımızı arayarak veya WhatsApp numaramız üzerinden bizimle iletişime geçerek siparişinizi hızlıca oluşturabilirsiniz."
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
  },
  menuItems: {
    "1": {
      name: "Ekşi Mayalı Avanos Ekmeği",
      desc: "Doğal maya ile 48 saat fermente edilmiş, taş tabanlı fırında pişmiş geleneksel ekşi mayalı ekmek."
    },
    "2": {
      name: "Sade Fransız Kruvasanı",
      desc: "%100 Fransız tereyağı ile hazırlanmış, dışı çıtır içi yumuşak kat kat artizan kruvasan."
    },
    "3": {
      name: "Bademli & Franjipan Kruvasan",
      desc: "Badem kremalı dolgusu ve file badem kaplamasıyla fırınlanmış gurme kruvasan."
    },
    "4": {
      name: "Mahlep Kokulu Paskalya Çöreği",
      desc: "1978'den beri değişmeyen orijinal reçete. Damla sakızı ve mahlep kokulu örgü çörek."
    },
    "5": {
      name: "Belçika Çikolatalı Ekler",
      desc: "Özel pastacı kreması dolgulu, üzerinde premium Belçika çikolatası ganajı ile."
    },
    "6": {
      name: "Çilekli Çıtır Milföy",
      desc: "Günlük hazırlanan çıtır milföy katları arasında vanilyalı krema ve taze Avanos çilekleri."
    },
    "7": {
      name: "Artizan San Sebastian Cheesecake",
      desc: "İçi akışkan kıvamda, hafif yanık üst yüzeyi ile modern İspanyol klasiği cheesecake."
    },
    "8": {
      name: "Avanos Simidi",
      desc: "Pekmezli sıcak su banyosunda bekletildikten sonra bol susamla kaplanıp taş fırında pişen çıtır simit."
    },
    "9": {
      name: "Flat White",
      desc: "Double shot espresso ve mikro köpüklü taze süt ile hazırlanan kadifemsi kahve."
    },
    "10": {
      name: "Ev Yapımı Artizan Limonata",
      desc: "Taze nane yaprakları ve Bodrum limonlarının soğuk sıkımından elde edilen ferahlatıcı içecek."
    }
  },
  products: {
    p1Title: "Tasarım Pastalar",
    p1Desc: "Zanaatın lüksle buluştuğu nokta. Özel günleriniz için tasarlanan butik pastalar.",
    p2Title: "Geleneksel Hamur İşleri",
    p2Desc: "Meşhur mahlep kokulu Paskalya çöreğimiz ve taş fırın geleneğiyle hazırlanan klasik reçetelerimiz.",
    p3Title: "Sütlü Tatlılar",
    p3Desc: "Geleneksel yöntemlerle hazırlanan, hafif ve lezzetli sütlü tatlılarımız.",
    p4Title: "Butik Hediyelikler",
    p4Desc: "Sevdiklerinize özel anlar yaşatacak, özenle paketlenmiş premium lezzetler."
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
    titleTopLine1: "Since",
    titleTopLine2: "1978.",
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
  faq: {
    subtitle: "Frequently Asked Questions",
    title: "FAQ",
    q1: "Do you make special occasion and birthday cakes?",
    a1: "Yes, we prepare custom design cakes entirely according to your wishes and concept. We kindly request you to contact us at least 3-4 days in advance for detailed planning and ordering.",
    q2: "Do you have options for those with allergen sensitivity?",
    a2: "Our menu includes alternatives prepared with gluten-free flour and natural sweeteners. However, since products containing gluten are also processed in our production area, we recommend considering the risk of cross-contamination.",
    q3: "Do you have delivery service outside of Avanos?",
    a3: "We have fast delivery service to all regions within Avanos. You can contact us by phone to get information about minimum order amounts or delivery details for surrounding districts and regions.",
    q4: "What are your opening hours and are you open every day of the week?",
    a4: "We are happy to welcome you at our patisserie in Avanos every day of the week between 07:00 in the morning and 23:00 at night.",
    q5: "Are your products freshly prepared daily?",
    a5: "Yes, all our bakery and pastry products displayed on our shelves are freshly prepared by our chefs every morning in our own workshop. We do not sell stale or frozen products.",
    q6: "Do you offer bulk orders or catering services?",
    a6: "We prepare bulk sweet/savory treat trays and special cakes for your engagements, henna nights, meetings or special celebrations. You can contact us at least one week in advance for guest count and menu planning.",
    q7: "What are the quality standards of the ingredients you use?",
    a7: "We always prefer top-class ingredients in our products. We produce using 100% natural French butter, genuine Belgian chocolate and fresh seasonal fruits obtained from local producers of Avanos. We do not use artificial preservatives or chemical additives.",
    q8: "Can we order over the phone or online?",
    a8: "After reviewing the digital menu on our website, you can quickly create your order by calling our order line or contacting us via our WhatsApp number."
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
  },
  menuItems: {
    "1": {
      name: "Sourdough Avanos Bread",
      desc: "Traditional sourdough bread fermented for 48 hours with natural yeast, baked in a stone oven."
    },
    "2": {
      name: "Plain French Croissant",
      desc: "Artisan croissant with 100% French butter, crispy outside and soft layered inside."
    },
    "3": {
      name: "Almond & Frangipane Croissant",
      desc: "Gourmet croissant baked with almond cream filling and sliced almond coating."
    },
    "4": {
      name: "Mahaleb Scented Easter Bun",
      desc: "Original recipe unchanged since 1978. Braided bun with mastic gum and mahaleb scent."
    },
    "5": {
      name: "Belgian Chocolate Eclair",
      desc: "Filled with special pastry cream, topped with premium Belgian chocolate ganache."
    },
    "6": {
      name: "Strawberry Crispy Mille-Feuille",
      desc: "Vanilla cream and fresh Avanos strawberries between daily prepared crispy puff pastry layers."
    },
    "7": {
      name: "Artisan San Sebastian Cheesecake",
      desc: "Modern Spanish classic cheesecake with a flowing center and slightly burnt top surface."
    },
    "8": {
      name: "Avanos Simit",
      desc: "Crispy bagel soaked in hot water with molasses, covered in plenty of sesame and baked in a stone oven."
    },
    "9": {
      name: "Flat White",
      desc: "Velvety coffee prepared with double shot espresso and micro-foamed fresh milk."
    },
    "10": {
      name: "Homemade Artisan Lemonade",
      desc: "Refreshing drink made from cold-pressed Bodrum lemons and fresh mint leaves."
    }
  },
  products: {
    p1Title: "Custom Cakes",
    p1Desc: "Where craftsmanship meets luxury. Boutique cakes designed for your special days.",
    p2Title: "Traditional Pastries",
    p2Desc: "Our famous mahaleb scented Easter bun and classic recipes prepared with stone oven tradition.",
    p3Title: "Milk Desserts",
    p3Desc: "Our light and delicious milk desserts prepared with traditional methods.",
    p4Title: "Boutique Gifts",
    p4Desc: "Carefully packaged premium flavors that will give your loved ones special moments."
  }
};

fs.writeFileSync(path.join(__dirname, 'src/i18n/locales/tr/common.json'), JSON.stringify(tr, null, 2));
fs.writeFileSync(path.join(__dirname, 'src/i18n/locales/en/common.json'), JSON.stringify(en, null, 2));
console.log('Saved TR and EN locales base with menuItems.');
