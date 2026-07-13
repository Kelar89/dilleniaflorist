export type ProductVariant = {
  id: string;
  name: string;
  price: number;
  desc: string;
};

export type ProductDetailSection = {
  title: string;
  content: string;
};

export type ProductType = {
  id: string;
  title: string;
  price: number;
  category: string;
  color: "Putih" | "Biru" | "Kuning" | "Pink" | "Merah";
  image: string;
  images: string[];
  badge?: string;
  rating: number;
  reviews: number;
  description: string;
  scarcity: string;
  stockStatus: "Tersedia" | "Pre-Order" | "Sold Out";
  variants: ProductVariant[];
  details: ProductDetailSection[];
};

export const allProductsDatabase: ProductType[] = [
  {
    id: "pink-graduation-teddy",
    title: "Pink Graduation Teddy Bouquet",
    price: 400000,
    category: "wedding", 
    color: "Pink",
    image: "/products/Pink Graduation Teddy Bouquet.jpg",
    images: [
      "/products/Pink Graduation Teddy Bouquet.jpg",
      "/products/Pink Graduation Teddy Bouquet1.jpg"
    ],
    badge: "Best Seller",
    rating: 5.0,
    reviews: 124,
    description: "Rayakan kelulusannya dengan pelukan hangat. Kombinasi mawar pink segar dan baby breath ini dilengkapi boneka Teddy wisuda eksklusif. Hadiah sempurna yang menyampaikan rasa bangga tanpa perlu banyak kata. Jadikan hari spesialnya makin berkesan, pesan buket ini sekarang!",
    scarcity: "Tersisa 3 slot perangkaian untuk pengiriman hari ini. Amankan sekarang!",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Standard Bouquet", price: 400000, desc: "Buket Mawar Pink + Boneka Teddy Wisuda" }],
    details: [
      { title: "Keistimewaan (Highlight)", content: "Tampilan soft & elegant menggunakan fresh pink roses. Simbol manis, hangat, dan penuh ucapan bangga di hari kelulusan." },
      { title: "Saran Pengiriman", content: "Sangat cocok dikirim langsung ke lokasi sidang skripsi atau tempat perayaan wisuda. Tambahkan ke keranjang untuk memproses pesanan!" }
    ]
  },
  {
    id: "rustic-sunflower-bloom",
    title: "Rustic Sunflower Bloom",
    price: 475000,
    category: "wedding",
    color: "Kuning",
    image: "/products/Rustic Sunflower Bloom.jpg",
    images: ["/products/Rustic Sunflower Bloom.jpg"],
    badge: "Trending",
    rating: 4.9,
    reviews: 89,
    description: "Hadirkan energi positif dan semangat baru! Perpaduan cerah Bunga Matahari (Sunflower) dan Lily Putih segar yang dibalut dalam wrapping vintage bernuansa hangat. Pilihan paling tepat untuk mencerahkan harinya. Berikan senyuman terindah untuknya, klik Pesan Sekarang!",
    scarcity: "Bunga matahari segar cepat habis. Checkout sebelum jam 14:00 WIB.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Standard Bouquet", price: 475000, desc: "Sunflower + White Lily Rustic Wrap" }],
    details: [
      { title: "Keistimewaan (Highlight)", content: "Menggunakan bunga segar pilihan dengan estetika rustic yang hangat dan kekinian. Sangat instagramable." },
      { title: "Cocok Untuk", content: "Kado ulang tahun, penyemangat teman, atau momen wisuda. Jangan biarkan momen berlalu, jadwalkan pengiriman Anda hari ini." }
    ]
  },
  {
    id: "pink-rose-bouquet",
    title: "Pink Rosé Bouquet",
    price: 400000,
    category: "wedding",
    color: "Pink",
    image: "/products/Pink Rosé Bouquet.jpg",
    images: ["/products/Pink Rosé Bouquet.jpg"],
    badge: "Favorite",
    rating: 4.9,
    reviews: 156,
    description: "Setiap kelopak mawar membawa pesan manis yang tak selalu bisa diucapkan dengan kata-kata. Rangkaian mawar pink lembut dan baby breath ini memancarkan pesona feminin yang elegan dan berkelas. Sampaikan rasa sayang Anda dengan cara terindah, pesan buket manis ini sekarang!",
    scarcity: "Tingkat permintaan tinggi untuk hadiah Anniversary minggu ini.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Standard Bouquet", price: 400000, desc: "Buket Mawar Pink Soft & Feminine" }],
    details: [
      { title: "Keistimewaan (Highlight)", content: "Fresh flower dengan tampilan soft & feminine. Memberikan kesan hangat, eksklusif, dan personal." },
      { title: "Cocok Untuk", content: "Gift personal untuk pasangan, hadiah anniversary, atau relasi corporate. Pesan hari ini untuk jaminan bunga segar sampai di tujuan!" }
    ]
  },
  {
    id: "white-orchid-grandeur",
    title: "White Orchid Grandeur ( 5 tangkai )",
    price: 1150000,
    category: "bunga-meja",
    color: "Putih",
    image: "/products/White Orchid Grandeur ( 5 tangkai ).jpg",
    images: ["/products/White Orchid Grandeur ( 5 tangkai ).jpg"],
    badge: "Promo -50rb",
    rating: 5.0,
    reviews: 73,
    description: "Keanggunan putih yang membawa kesan mewah dan penuh ketulusan. 5 tangkai anggrek bulan premium mekar sempurna di dalam pot marble soft green berhias pita emas. Hadiah prestisius untuk VIP Anda. Tunjukkan kelas dan profesionalisme Anda, pesan mahakarya ini sekarang!",
    scarcity: "Hemat Rp 50.000 dari harga normal Rp 1.200.000 khusus pesanan bulan ini.",
    stockStatus: "Pre-Order",
    variants: [{ id: "v1", name: "Premium (5 Tangkai)", price: 1150000, desc: "5 Tangkai Anggrek Bulan + Pot Marble" }],
    details: [
      { title: "Keistimewaan (Highlight)", content: "Full Fresh Flower dengan Elegant & Exclusive Look. Dirangkai khusus saat ada pesanan (Ready by order) untuk menjaga kualitas premium." },
      { title: "Layanan Kustom & Pemesanan", content: "Bisa custom kartu ucapan perusahaan. Sangat cocok untuk dekorasi kantor atau corporate gifting kelas atas. Hubungi tim kami dengan klik tombol Pesan." }
    ]
  },
  {
    id: "royal-scarlet-lily",
    title: "Royal Scarlet Lily Standing Flower",
    price: 1025000,
    category: "corporate",
    color: "Merah",
    image: "/products/Royal Scarlet Lily Standing Flower.jpg",
    images: ["/products/Royal Scarlet Lily Standing Flower.jpg"],
    badge: "Promo -25rb",
    rating: 4.8,
    reviews: 45,
    description: "Curi perhatian di setiap perayaan besar! Standing flower berkelas ini mengombinasikan pesona White Lily, Mawar Merah, dan Pink dengan sentuhan arsitektur modern. Representasi sempurna untuk ucapan selamat yang megah. Jadikan perusahaan Anda pusat perhatian, amankan pesanan Standing Flower ini sekarang!",
    scarcity: "Harga promo Rp 1.025.000 (Normal Rp 1.050.000). Slot perangkaian standing flower terbatas per hari.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Standard Standing", price: 1025000, desc: "Besi Standing Modern + Bunga Premium" }],
    details: [
      { title: "Fasilitas Kustomisasi", content: "Bebas custom: Warna bunga, teks ucapan di papan, tema warna ribbon, dan ukuran standing flower." },
      { title: "Cocok Untuk", content: "Happy wedding, Grand Opening bisnis, atau Congratulation VIP. Jangan sampai terlambat, jadwalkan pengiriman untuk acara penting Anda." }
    ]
  },
  {
    id: "golden-white-sympathy",
    title: "Golden White Sympathy Board",
    price: 725000,
    category: "corporate",
    color: "Putih",
    image: "/products/Golden White Sympathy Board.jpg",
    images: ["/products/Golden White Sympathy Board.jpg"],
    badge: "Express",
    rating: 4.9,
    reviews: 62,
    description: "Penghormatan tertinggi yang penuh ketulusan. Papan bunga duka cita premium ini merangkai bunga putih dan kuning sebagai lambang doa terbaik bagi keluarga yang ditinggalkan. Sampaikan rasa simpati mendalam Anda dengan pantas. Pesan sekarang untuk pengiriman segera.",
    scarcity: "Diskon khusus (Normal Rp 750.000). Prioritas pengerjaan cepat untuk momen kedukaan.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Premium Board", price: 725000, desc: "Papan Bunga Duka Cita Eksklusif" }],
    details: [
      { title: "Fasilitas Eksklusif", content: "Desain rapi & elegan menggunakan premium fresh flowers. Gratis konsultasi desain dan custom tulisan ucapan belasungkawa." },
      { title: "Jangkauan", content: "Area pengiriman meliputi Medan & sekitarnya. Masukkan ke keranjang untuk mengatur alamat tujuan dengan cepat." }
    ]
  },
  {
    id: "sunshine-rose-harmony",
    title: "Sunshine Rosé Harmony",
    price: 525000,
    category: "bunga-meja",
    color: "Pink",
    image: "/products/Sunshine Rosé Harmony.jpg",
    images: ["/products/Sunshine Rosé Harmony.jpg"],
    badge: "Promo",
    rating: 5.0,
    reviews: 102,
    description: "Ledakan kebahagiaan dalam satu mahakarya! Perpaduan mawar kuning cerah, mawar merah merona, dan lily pink premium yang menciptakan harmoni visual penuh kehangatan. Cocok untuk merayakan momen terbaik dalam hidup. Bagikan kebahagiaan ini, klik Pesan dan kirimkan senyuman untuk mereka!",
    scarcity: "Turun harga dari Rp 550.000. Penawaran terbatas selama ketersediaan bunga lily premium ada.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Premium Arrangement", price: 525000, desc: "Mix Roses & Lily Pink" }],
    details: [
      { title: "Keistimewaan (Highlight)", content: "Dirangkai dengan gaya 'Elegant Luxury' menggunakan fresh flower kelas A. Cocok sebagai dekorasi meja utama." },
      { title: "Momen Terbaik", content: "Hadiah ulang tahun, anniversary romantis, atau perayaan Grand Opening. Sertakan pesan manis Anda saat Checkout." }
    ]
  },
  {
    id: "rose-lily-garden",
    title: "Rosé Lily Garden",
    price: 525000,
    category: "bunga-meja",
    color: "Pink",
    image: "/products/Rosé Lily Garden.jpg",
    images: ["/products/Rosé Lily Garden.jpg"],
    badge: "Promo",
    rating: 4.8,
    reviews: 55,
    description: "Hadirkan keindahan taman bunga Eropa langsung ke ruangannya. Rangkaian basket mewah bernuansa soft pink dan putih ini memancarkan kehangatan dan kelas yang tak terbantahkan. Berikan kejutan manis yang menenangkan hati, jadwalkan pengiriman keranjang cantik ini sekarang!",
    scarcity: "Hemat Rp 25.000 dari harga normal. Pesan hari ini sebelum kehabisan slot.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Elegant Basket", price: 525000, desc: "Basket Bunga Soft Pink & Putih" }],
    details: [
      { title: "Keistimewaan (Highlight)", content: "Perpaduan mawar premium dan lily pink di dalam keranjang estetis (Elegant basket arrangement). Mudah dibawa dan sangat pantas untuk dijadikan hadiah." },
      { title: "Layanan Pemesanan", content: "Gratis custom kartu ucapan. Klik tombol tambah ke keranjang untuk memproses pesanan dengan cepat." }
    ]
  },
  {
    id: "rosabelle-premium",
    title: "Rosabelle Premium",
    price: 525000,
    category: "bunga-meja",
    color: "Merah",
    image: "/products/Rosabelle.jpg",
    images: ["/products/Rosabelle.jpg"],
    badge: "Best Seller",
    rating: 5.0,
    reviews: 130,
    description: "Pernyataan cinta dan apresiasi yang paling nyata. Rangkaian memukau dengan dominasi mawar merah tebal dan lily pink yang menyuarakan rasa sayang paling tulus. Jangan hanya disimpan dalam hati, nyatakan perasaan Anda melalui Rosabelle. Pesan sekarang untuk si dia!",
    scarcity: "Pilihan utama untuk kado kejutan pasangan. Harga promo khusus dari Rp 550.000.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Premium Table", price: 525000, desc: "Rangkaian Bunga Merah & Pink" }],
    details: [
      { title: "Keistimewaan (Highlight)", content: "Bunga segar pilihan yang dirangkai padat, mewah, dan elegan. Wangi naturalnya akan memenuhi sudut ruangan." },
      { title: "Cocok Untuk", content: "Anniversary pernikahan, momen Valentine, kado ulang tahun Istri/Kekasih. Masukkan ke tas belanja Anda hari ini." }
    ]
  },
  {
    id: "orchid-blue-serenity",
    title: "Orchid Blue Serenity Arrangement",
    price: 975000,
    category: "bunga-meja",
    color: "Biru",
    image: "/products/Orchid Blue Serenity Arrangement.jpg",
    images: ["/products/Orchid Blue Serenity Arrangement.jpg"],
    badge: "Luxury",
    rating: 4.9,
    reviews: 67,
    description: "Ketenangan absolut berbalut kemewahan visual. Kombinasi surealis anggrek putih, mawar biru eksotis, lily, dan daun monstera yang menciptakan aura berkelas, tenang, dan sangat eksklusif. Hadiah sempurna untuk sosok yang spesial dan berkarakter. Jadikan momennya tak terlupakan, pesan karya seni floral ini sekarang!",
    scarcity: "Bunga mawar biru sangat terbatas (Rare item). Promo potongan harga dari Rp 1.000.000.",
    stockStatus: "Pre-Order",
    variants: [{ id: "v1", name: "Luxury Arrangement", price: 975000, desc: "Anggrek Putih + Mawar Biru Eksotis" }],
    details: [
      { title: "Komposisi Eksotis", content: "Premium white orchid, lily, mawar biru langka, pompom, eucalyptus, dan monstera leaf. Visualisasi yang kuat dan modern." },
      { title: "Layanan Pemesanan", content: "Sangat direkomendasikan untuk kado atasan (Boss), Grand Opening berkelas, atau Sympathy VIP. Tersedia opsi Custom Request. Klik pesan untuk berkonsultasi." }
    ]
  },
  {
    id: "white-serenity-table",
    title: "White Serenity Table Arrangement",
    price: 525000,
    category: "bunga-meja",
    color: "Putih",
    image: "/products/White Serenity Table Arrangement.jpg",
    images: ["/products/White Serenity Table Arrangement.jpg"],
    badge: "Promo",
    rating: 4.8,
    reviews: 40,
    description: "Kedamaian dalam keanggunan putih abadi. Rangkaian syahdu dari mawar putih, lily, wangi semerbak sedap malam, dan baby breath yang memancarkan ketulusan tingkat tinggi. Sampaikan simpati atau doa terbaik Anda dengan cara paling terhormat. Atur pengiriman Anda dengan mengeklik tombol Pesan sekarang.",
    scarcity: "Diskon khusus dari harga normal Rp 550.000. Ketersediaan bunga sedap malam segar bergantung pada panen harian.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Timeless White", price: 525000, desc: "Rangkaian Putih Klasik & Sedap Malam" }],
    details: [
      { title: "Aroma Terapi & Visual", content: "Elegant & timeless arrangement. Perpaduan visual suci dan aroma sedap malam yang memberikan efek relaksasi yang hangat." },
      { title: "Cocok Untuk", content: "Penghormatan terakhir (Condolences/Sympathy), dekorasi sakral, atau kado spesial yang tenang. Tambahkan ke pesanan Anda sekarang." }
    ]
  },
  {
    id: "premium-pink-rose",
    title: "Buket Mawar Premium Pink",
    price: 475000,
    category: "wedding",
    color: "Pink",
    image: "/products/Buket Mawar Premium Pink.jpg",
    images: ["/products/Buket Mawar Premium Pink.jpg"],
    badge: "Big Size",
    rating: 5.0,
    reviews: 112,
    description: "Volume besar, kebahagiaan maksimal! Buket premium yang menyatukan kecantikan mawar pink pilihan dengan awan kelopak hydrangea. Menciptakan efek kejutan (wow factor) saat diterima. Buat dia merasa sangat spesial hari ini, wujudkan dengan klik Pesan Sekarang!",
    scarcity: "Promo spesial Rp 475.000 (Harga asli Rp 500.000). Pesan hari ini untuk mengamankan harga promo.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Premium Size", price: 475000, desc: "Buket Besar Mawar Pink + Hydrangea" }],
    details: [
      { title: "Fasilitas & Kustomisasi", content: "Fresh flower garansi kesegaran. Bisa request warna pembungkus (wrapping) sesuai selera. Termasuk free kartu ucapan eksklusif." },
      { title: "Cocok Untuk", content: "Hadiah ulang tahun, kado perayaan wisuda mewah, atau kejutan spesial. Proses checkout sangat mudah melalui sistem kami." }
    ]
  },
  {
    id: "premium-blue-pink-rose",
    title: "Buket Mawar Premium Blue Pink",
    price: 475000,
    category: "wedding",
    color: "Biru",
    image: "/products/Buket mawar premium blue pink.jpg",
    images: ["/products/Buket mawar premium blue pink.jpg"],
    badge: "Unique",
    rating: 4.9,
    reviews: 95,
    description: "Berani tampil beda dan mencuri perhatian! Buket spektakuler ini mengombinasikan mawar biru yang misterius dengan kelembutan mawar pink dan hydrangea. Kado unik untuk pribadi yang tidak tergantikan. Jangan berikan kado yang biasa saja, pesan buket ikonik ini sekarang juga!",
    scarcity: "Bunga mawar biru sangat langka di pasaran. Amankan pesanan (Rp 475.000 dari normal Rp 500.000) sebelum kehabisan.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Premium Size", price: 475000, desc: "Buket Besar Mawar Biru & Pink" }],
    details: [
      { title: "Fasilitas Tambahan", content: "Kombinasi warna out-of-the-box yang fresh. Bisa request warna pembungkus dan sudah termasuk free kartu ucapan." },
      { title: "Cocok Untuk", content: "Pribadi yang unik, hadiah pencapaian karir, atau teman yang menyukai seni. Tambahkan produk ini ke keranjang belanja Anda." }
    ]
  }
];