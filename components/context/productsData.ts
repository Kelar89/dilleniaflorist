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
    description: "Rayakan pencapaiannya dengan pelukan hangat. Kombinasi mawar pink segar dan baby breath ini dilengkapi boneka Teddy wisuda eksklusif. Hadiah sempurna yang menyampaikan rasa bangga tanpa perlu banyak kata. Jadikan hari spesialnya makin berkesan, wujudkan momen ini sekarang!",
    scarcity: "Kapasitas perangkaian terbatas setiap harinya demi menjaga kualitas. Pastikan pesanan Anda masuk hari ini.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Standard Bouquet", price: 400000, desc: "Buket Mawar Pink + Boneka Teddy Wisuda" }],
    details: [
      { title: "Keistimewaan (Highlight)", content: "Tampilan soft & elegant menggunakan fresh pink roses. Simbol manis, hangat, dan penuh ucapan bangga di hari kelulusan." },
      { title: "Saran Pengiriman", content: "Sangat cocok dikirim langsung ke lokasi perayaan. Jadwalkan pengiriman Anda hari ini untuk memastikan ketepatan waktu." }
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
    description: "Hadirkan energi positif dan semangat baru! Perpaduan cerah Bunga Matahari (Sunflower) dan Lily Putih segar yang dibalut dalam wrapping vintage bernuansa hangat. Pilihan paling tepat untuk mencerahkan harinya. Berikan senyuman terindah untuknya, atur pengiriman hari ini!",
    scarcity: "Demi menjaga kesegaran murni dan detail rangkaian, jumlah pesanan kami batasi setiap harinya. Amankan jadwal pengiriman Anda hari ini.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Standard Bouquet", price: 475000, desc: "Sunflower + White Lily Rustic Wrap" }],
    details: [
      { title: "Keistimewaan (Highlight)", content: "Menggunakan bunga segar pilihan dengan estetika rustic yang hangat dan kekinian. Menghadirkan kesan personal yang mendalam." },
      { title: "Cocok Untuk", content: "Kado ulang tahun, penyemangat teman, atau momen perayaan. Jangan biarkan momen berlalu, jadwalkan pengiriman Anda." }
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
    description: "Setiap kelopak mawar membawa pesan manis yang tak selalu bisa diucapkan dengan kata-kata. Rangkaian mawar pink lembut dan baby breath ini memancarkan pesona feminin yang elegan dan berkelas. Sampaikan rasa sayang Anda dengan cara terindah, jadwalkan pengirimannya sekarang!",
    scarcity: "Kapasitas perangkaian terbatas setiap harinya demi menjaga kualitas. Pastikan pesanan Anda masuk hari ini.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Standard Bouquet", price: 400000, desc: "Buket Mawar Pink Soft & Feminine" }],
    details: [
      { title: "Keistimewaan (Highlight)", content: "Fresh flower dengan tampilan soft & feminine. Memberikan kesan hangat, eksklusif, dan personal." },
      { title: "Cocok Untuk", content: "Gift personal untuk pasangan, hadiah anniversary, atau relasi corporate. Hubungi layanan kurasi kami hari ini." }
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
    badge: "Premium",
    rating: 5.0,
    reviews: 73,
    description: "Keanggunan putih yang membawa kesan mewah dan penuh ketulusan. 5 tangkai anggrek bulan premium mekar sempurna di dalam pot marble soft green berhias pita emas. Hadiah prestisius untuk VIP Anda. Tunjukkan kelas dan profesionalisme Anda, pesan mahakarya ini sekarang!",
    scarcity: "Demi menjaga kesegaran murni dan detail rangkaian, jumlah pesanan kami batasi setiap harinya. Amankan jadwal pengiriman Anda hari ini.",
    stockStatus: "Pre-Order",
    variants: [{ id: "v1", name: "Premium (5 Tangkai)", price: 1150000, desc: "5 Tangkai Anggrek Bulan + Pot Marble" }],
    details: [
      { title: "Keistimewaan (Highlight)", content: "Full Fresh Flower dengan Elegant & Exclusive Look. Dirangkai khusus saat ada pesanan (Ready by order) untuk menjaga kualitas tingkat tinggi." },
      { title: "Layanan Kustom & Pemesanan", content: "Bisa custom kartu ucapan perusahaan. Sangat cocok untuk dekorasi kantor atau corporate gifting kelas atas." }
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
    badge: "Exclusive",
    rating: 4.8,
    reviews: 45,
    description: "Curi perhatian di setiap perayaan besar! Standing flower berkelas ini mengombinasikan pesona White Lily, Mawar Merah, dan Pink dengan sentuhan arsitektur modern. Representasi sempurna untuk ucapan selamat yang megah. Jadikan kehadiran Anda tak terlupakan, amankan pesanan ini sekarang!",
    scarcity: "Kapasitas perangkaian terbatas setiap harinya demi menjaga kualitas. Pastikan pesanan Anda masuk hari ini.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Standard Standing", price: 1025000, desc: "Besi Standing Modern + Bunga Premium" }],
    details: [
      { title: "Fasilitas Kustomisasi", content: "Layanan personalisasi: Warna bunga, teks ucapan di papan, tema warna ribbon, dan ukuran standing flower." },
      { title: "Cocok Untuk", content: "Happy wedding, Grand Opening bisnis, atau Congratulation VIP. Pastikan pengiriman Anda terjadwal dengan baik." }
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
    description: "Penghormatan tertinggi yang penuh ketulusan. Papan bunga duka cita premium ini merangkai bunga putih dan kuning sebagai lambang doa terbaik bagi keluarga yang ditinggalkan. Sampaikan rasa simpati mendalam Anda dengan penuh kehormatan. Atur pengiriman prioritas hari ini.",
    scarcity: "Demi menjaga kesegaran murni dan detail rangkaian, jumlah pesanan kami batasi setiap harinya. Amankan jadwal pengiriman Anda hari ini.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Premium Board", price: 725000, desc: "Papan Bunga Duka Cita Eksklusif" }],
    details: [
      { title: "Fasilitas Eksklusif", content: "Desain rapi & elegan menggunakan premium fresh flowers. Gratis konsultasi desain dan personalisasi tulisan ucapan belasungkawa." },
      { title: "Jangkauan", content: "Area pengiriman meliputi Medan & sekitarnya. Kami memprioritaskan ketepatan waktu untuk momen penting ini." }
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
    badge: "Favorite",
    rating: 5.0,
    reviews: 102,
    description: "Ledakan kebahagiaan dalam satu mahakarya! Perpaduan mawar kuning cerah, mawar merah merona, dan lily pink premium yang menciptakan harmoni visual penuh kehangatan. Cocok untuk merayakan momen terbaik dalam hidup. Bagikan kebahagiaan ini, kirimkan mahakarya ini untuk mereka!",
    scarcity: "Kapasitas perangkaian terbatas setiap harinya demi menjaga kualitas. Pastikan pesanan Anda masuk hari ini.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Premium Arrangement", price: 525000, desc: "Mix Roses & Lily Pink" }],
    details: [
      { title: "Keistimewaan (Highlight)", content: "Dirangkai dengan gaya 'Elegant Luxury' menggunakan fresh flower kelas A. Sempurna sebagai dekorasi meja utama yang memikat." },
      { title: "Momen Terbaik", content: "Hadiah ulang tahun, anniversary romantis, atau perayaan Grand Opening. Jadwalkan pengirimannya sekarang." }
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
    badge: "Elegant",
    rating: 4.8,
    reviews: 55,
    description: "Hadirkan keindahan taman bunga Eropa langsung ke ruangannya. Rangkaian basket mewah bernuansa soft pink dan putih ini memancarkan kehangatan dan kelas yang tak terbantahkan. Berikan kejutan manis yang menenangkan hati, jadwalkan pengiriman keranjang cantik ini sekarang!",
    scarcity: "Demi menjaga kesegaran murni dan detail rangkaian, jumlah pesanan kami batasi setiap harinya. Amankan jadwal pengiriman Anda hari ini.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Elegant Basket", price: 525000, desc: "Basket Bunga Soft Pink & Putih" }],
    details: [
      { title: "Keistimewaan (Highlight)", content: "Perpaduan mawar premium dan lily pink di dalam keranjang estetis (Elegant basket arrangement). Hadiah berkelas yang menyentuh hati." },
      { title: "Layanan Pemesanan", content: "Gratis penyusunan kartu ucapan eksklusif. Atur pengiriman Anda hari ini." }
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
    description: "Pernyataan cinta dan apresiasi yang paling nyata. Rangkaian memukau dengan dominasi mawar merah tebal dan lily pink yang menyuarakan rasa sayang paling tulus. Jangan hanya disimpan dalam hati, nyatakan perasaan Anda secara elegan melalui Rosabelle. Kirimkan kejutan ini untuk si dia!",
    scarcity: "Kapasitas perangkaian terbatas setiap harinya demi menjaga kualitas. Pastikan pesanan Anda masuk hari ini.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Premium Table", price: 525000, desc: "Rangkaian Bunga Merah & Pink" }],
    details: [
      { title: "Keistimewaan (Highlight)", content: "Bunga segar pilihan yang dirangkai padat, mewah, dan elegan. Wangi naturalnya memancarkan romantisme sejati." },
      { title: "Cocok Untuk", content: "Anniversary pernikahan, perayaan momen romantis, atau kado ulang tahun pasangan. Jadwalkan pengiriman eksklusif ini." }
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
    scarcity: "Demi menjaga kesegaran murni dan detail rangkaian, jumlah pesanan kami batasi setiap harinya. Amankan jadwal pengiriman Anda hari ini.",
    stockStatus: "Pre-Order",
    variants: [{ id: "v1", name: "Luxury Arrangement", price: 975000, desc: "Anggrek Putih + Mawar Biru Eksotis" }],
    details: [
      { title: "Komposisi Eksotis", content: "Premium white orchid, lily, mawar biru langka, pompom, eucalyptus, dan monstera leaf. Visualisasi yang kuat dan modern." },
      { title: "Layanan Pemesanan", content: "Sangat direkomendasikan untuk kado VIP, relasi eksekutif, atau Grand Opening berkelas. Pastikan jadwal pengiriman Anda terpesan hari ini." }
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
    badge: "Timeless",
    rating: 4.8,
    reviews: 40,
    description: "Kedamaian dalam keanggunan putih abadi. Rangkaian syahdu dari mawar putih, lily, wangi semerbak sedap malam, dan baby breath yang memancarkan ketulusan tingkat tinggi. Sampaikan simpati atau doa terbaik Anda dengan cara paling terhormat. Atur pengiriman Anda hari ini.",
    scarcity: "Kapasitas perangkaian terbatas setiap harinya demi menjaga kualitas. Pastikan pesanan Anda masuk hari ini.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Timeless White", price: 525000, desc: "Rangkaian Putih Klasik & Sedap Malam" }],
    details: [
      { title: "Aroma Terapi & Visual", content: "Elegant & timeless arrangement. Perpaduan visual murni dan aroma sedap malam yang memberikan efek relaksasi yang hangat." },
      { title: "Cocok Untuk", content: "Penghormatan terakhir (Condolences/Sympathy), dekorasi sakral, atau kado spesial yang menenangkan." }
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
    description: "Volume besar, kebahagiaan maksimal! Buket premium yang menyatukan kecantikan mawar pink pilihan dengan awan kelopak hydrangea. Menciptakan efek kejutan visual yang memukau saat diterima. Buat dia merasa sangat spesial hari ini, wujudkan momen tersebut sekarang!",
    scarcity: "Demi menjaga kesegaran murni dan detail rangkaian, jumlah pesanan kami batasi setiap harinya. Amankan jadwal pengiriman Anda hari ini.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Premium Size", price: 475000, desc: "Buket Besar Mawar Pink + Hydrangea" }],
    details: [
      { title: "Fasilitas & Kustomisasi", content: "Garansi kesegaran bunga premium. Layanan personalisasi warna pembungkus (wrapping) dan kartu ucapan eksklusif." },
      { title: "Cocok Untuk", content: "Hadiah ulang tahun, perayaan pencapaian mewah, atau kejutan spesial yang tak terlupakan." }
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
    description: "Berani tampil beda dan mencuri perhatian! Buket spektakuler ini mengombinasikan mawar biru yang memikat dengan kelembutan mawar pink dan hydrangea. Kado unik untuk pribadi yang tidak tergantikan. Jangan berikan kado yang biasa saja, jadwalkan pengiriman mahakarya ini hari ini!",
    scarcity: "Kapasitas perangkaian terbatas setiap harinya demi menjaga kualitas. Pastikan pesanan Anda masuk hari ini.",
    stockStatus: "Tersedia",
    variants: [{ id: "v1", name: "Premium Size", price: 475000, desc: "Buket Besar Mawar Biru & Pink" }],
    details: [
      { title: "Fasilitas Tambahan", content: "Kombinasi warna out-of-the-box yang berani. Termasuk fasilitas personalisasi kartu ucapan." },
      { title: "Cocok Untuk", content: "Pribadi yang unik, hadiah pencapaian karir, atau sosok spesial yang menyukai sentuhan artistik." }
    ]
  }
];