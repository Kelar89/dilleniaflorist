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
    id: "luxury-orchid-glass-vase",
    title: "Luxury Orchid Glass Vase",
    price: 950000,
    category: "bunga-meja",
    color: "Kuning",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1200&auto=format&fit=crop"
    ],
    badge: "Best Seller",
    rating: 5.0,
    reviews: 82,
    description: "Rangkaian anggrek bulan kuning mewah dengan kelopak premium pilihan, dipadukan dalam vas kaca elegan untuk menyempurnakan interior sudut ruangan.",
    scarcity: "Hanya tersedia 2 slot perangkaian untuk hari ini.",
    stockStatus: "Tersedia",
    variants: [
      { id: "std", name: "Standard", price: 750000, desc: "2 Tangkai Anggrek" },
      { id: "dlx", name: "Deluxe (Premium)", price: 950000, desc: "4 Tangkai Anggrek + Pita Biru Muda" },
      { id: "prm", name: "Premium Luxe", price: 1450000, desc: "6 Tangkai Anggrek + Vas Kristal" }
    ],
    details: [
      { title: "Kisah Rangkaian (Story)", content: "Terinspirasi dari keanggunan botani istana, melambangkan kemakmuran dan rasa hormat yang mendalam." },
      { title: "Komposisi Bunga", content: "Anggrek Phalaenopsis Kuning, Vas Kaca Heavy Crystalline, pita satin biru muda." },
      { title: "Perawatan Bunga", content: "Berikan air jernih pada media tanam seminggu sekali, hindari paparan matahari langsung." }
    ]
  },
  {
    id: "midnight-sapphire",
    title: "Midnight Sapphire Layout",
    price: 1250000,
    category: "bunga-meja",
    color: "Biru",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1200&auto=format&fit=crop"],
    badge: "New",
    rating: 4.9,
    reviews: 124,
    description: "Rangkaian anggrek eksklusif berwarna biru safir malam dalam vas keramik mewah, dirancang khusus untuk memancarkan aura elegan.",
    scarcity: "Hanya tersedia 1 slot perangkaian untuk hari ini.",
    stockStatus: "Tersedia",
    variants: [
      { id: "std", name: "Standard", price: 1250000, desc: "3 Tangkai Anggrek Utama" },
      { id: "prm", name: "Premium Luxe", price: 2150000, desc: "8 Tangkai Anggrek + Vas Seni Tinggi" }
    ],
    details: [
      { title: "Kisah Rangkaian (Story)", content: "Membawa ketenangan malam bertabur bintang ke dalam ruang kerja ekssekutif Anda." },
      { title: "Komposisi Bunga", content: "Anggrek Phalaenopsis Biru Safir, Hydrangea Impor, Kelopak Eukaliptus." },
      { title: "Perawatan Bunga", content: "Cukup semprotkan air tipis pada area akar setiap 3 hari." }
    ]
  },
  {
    id: "ocean-whisper",
    title: "Ocean Whisper Arrangement",
    price: 850000,
    category: "bunga-meja",
    color: "Putih",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1200&auto=format&fit=crop"],
    badge: "",
    rating: 4.8,
    reviews: 45,
    description: "Mawar putih Avalanche premium dengan aksen hydrangea biru pastel lembut bergaya editorial eropa.",
    scarcity: "",
    stockStatus: "Tersedia",
    variants: [{ id: "std", name: "Standard", price: 850000, desc: "Dimensi Jamak Klasik" }],
    details: [{ title: "Detail", content: "Kombinasi mawar putih melambangkan ketulusan murni." }]
  },
  {
    id: "elegance-navy",
    title: "Elegance Navy Special",
    price: 950000,
    category: "bunga-meja",
    color: "Putih",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop"],
    badge: "",
    rating: 4.7,
    reviews: 31,
    description: "Rangkaian bunga meja struktural asimetris modern untuk estetika ruang kontemporer.",
    scarcity: "",
    stockStatus: "Tersedia",
    variants: [{ id: "std", name: "Standard", price: 950000, desc: "Vas Editorial Modern" }],
    details: [{ title: "Struktur", content: "Dirangkai menggunakan teknik kontemporer eropa barat." }]
  },
  {
    id: "bridal-cascade",
    title: "Bridal Cascade Bouquet",
    price: 2150000,
    category: "wedding",
    color: "Putih",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop"],
    badge: "Promo",
    rating: 5.0,
    reviews: 198,
    description: "Hand bouquet pengantin model menjuntai (cascade) mewah menggunakan anggrek bulan murni dan mawar Avalanche.",
    scarcity: "Pemesanan wajib dilakukan minimal H-3 acara.",
    stockStatus: "Pre-Order",
    variants: [{ id: "std", name: "Standard", price: 2150000, desc: "Gaya Menjuntai Klasik" }],
    details: [{ title: "Durabilitas", content: "Dilengkapi dengan penampung hidrasi mikro agar bunga tetap segar selama resepsi." }]
  },
  {
    id: "corporate-grandeur",
    title: "Corporate Grandeur Stand",
    price: 3500000,
    category: "corporate",
    color: "Kuning",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55ef6?q=80&w=800&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1561181286-d3fee7d55ef6?q=80&w=1200&auto=format&fit=crop"],
    badge: "",
    rating: 4.9,
    reviews: 67,
    description: "Standing flower prestisius tiga tingkat untuk upacara pembukaan perusahaan atau grand opening toko mewah.",
    scarcity: "",
    stockStatus: "Tersedia",
    variants: [{ id: "std", name: "Standard", price: 3500000, desc: "Tinggi 1.8 Meter Tri-Tier" }],
    details: [{ title: "Impresi", content: "Menggunakan material kokoh dengan dominasi bunga impor penarik atensi bisnis." }]
  },
  {
    id: "sweet-blush",
    title: "Sweet Blush Box",
    price: 650000,
    category: "bunga-meja",
    color: "Pink",
    image: "https://images.unsplash.com/photo-1589136777351-fdc9c9cb164f?q=80&w=800&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1589136777351-fdc9c9cb164f?q=80&w=1200&auto=format&fit=crop"],
    badge: "",
    rating: 4.8,
    reviews: 54,
    description: "Rangkaian mawar merah muda (pink pastel) romantis dalam kotak beludru bundar yang manis.",
    scarcity: "",
    stockStatus: "Tersedia",
    variants: [{ id: "std", name: "Standard", price: 650000, desc: "Velvet Round Box" }],
    details: [{ title: "Filosofi", content: "Mewakili kekaguman, kelembutan kasih sayang, dan kebahagiaan." }]
  },
  {
    id: "white-avalanche",
    title: "White Avalanche Vase",
    price: 750000,
    category: "bunga-meja",
    color: "Putih",
    image: "https://images.unsplash.com/photo-1596435019842-8c8714cc26bb?q=80&w=800&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1596435019842-8c8714cc26bb?q=80&w=1200&auto=format&fit=crop"],
    badge: "",
    rating: 4.9,
    reviews: 41,
    description: "Loli mawar putih berukuran besar dengan dedaunan silver dollar impor dalam vas kaca silinder minimalis.",
    scarcity: "",
    stockStatus: "Tersedia",
    variants: [{ id: "std", name: "Standard", price: 750000, desc: "Vas Kaca Silinder" }],
    details: [{ title: "Kesegaran", content: "Mawar lokal grade super dari perkebunan dataran tinggi tervalidasi." }]
  },
  {
    id: "crimson-velvet",
    title: "Crimson Velvet Handtied",
    price: 550000,
    category: "wedding",
    color: "Merah",
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=800&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=1200&auto=format&fit=crop"],
    badge: "Best Seller",
    rating: 5.0,
    reviews: 312,
    description: "Bukket tangan mawar merah tua beludru isi 20 tangkai dengan pembungkus premium kain matte hitam hitam.",
    scarcity: "Sangat diminati pada hari peringatan (anniversary).",
    stockStatus: "Tersedia",
    variants: [{ id: "std", name: "Standard", price: 550000, desc: "20 Tangkai Matte Black Wrap" }],
    details: [{ title: "Karakter", content: "Mawar merah tua berkarakter tebal dengan wangi aromatik klasik yang menawan." }]
  },
  {
    id: "golden-hour",
    title: "Golden Hour Luxury Stand",
    price: 1800000,
    category: "corporate",
    color: "Kuning",
    image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=800&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=1200&auto=format&fit=crop"],
    badge: "",
    rating: 4.8,
    reviews: 29,
    description: "Rangkaian bunga berdiri (standing) bernuansa kuning emas cerah menggunakan krisan matahari dan mawar kuning.",
    scarcity: "",
    stockStatus: "Tersedia",
    variants: [{ id: "std", name: "Standard", price: 1800000, desc: "Iron Frame Gold Stand" }],
    details: [{ title: "Tema", content: "Sangat direkomendasikan untuk selebrasi pencapaian target bisnis tahunan." }]
  },
  {
    id: "blush-serenade",
    title: "Blush Serenade Table",
    price: 1650000,
    category: "wedding",
    color: "Pink",
    image: "https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?q=80&w=800&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?q=80&w=1200&auto=format&fit=crop"],
    badge: "",
    rating: 4.9,
    reviews: 84,
    description: "Dekorasi bunga meja panjang (long table runner) untuk meja VIP pengantin dengan nuansa blush pink mewah.",
    scarcity: "Harga per meter lari struktur dekorasi.",
    stockStatus: "Pre-Order",
    variants: [{ id: "std", name: "Standard (Per Meter)", price: 1650000, desc: "Kepadatan Bunga Tinggi" }],
    details: [{ title: "Fleksibilitas", content: "Panjang susunan mengikuti ukuran meja banquet utama venue." }]
  },
  {
    id: "emerald-bloom",
    title: "Emerald Forest Vase",
    price: 1100000,
    category: "bunga-meja",
    color: "Putih",
    image: "https://images.unsplash.com/photo-1587334206506-ee21e3ca8f59?q=80&w=800&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1587334206506-ee21e3ca8f59?q=80&w=1200&auto=format&fit=crop"],
    badge: "",
    rating: 4.6,
    reviews: 19,
    description: "Perpaduan bunga lily putih dengan juntaian daun pakis pakis eksotis dalam wadah pot keramik hijau zamrud.",
    scarcity: "",
    stockStatus: "Tersedia",
    variants: [{ id: "std", name: "Standard", price: 1100000, desc: "Pot Keramik Emerald" }],
    details: [{ title: "Aroma", content: "Bunga lily putih impor memiliki aroma harum alami semerbak yang menyegarkan seisi rumah." }]
  },
  {
    id: "pastel-dreams",
    title: "Pastel Dreams Bouquet",
    price: 480000,
    category: "wedding",
    color: "Pink",
    image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=800&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=1200&auto=format&fit=crop"],
    badge: "",
    rating: 4.7,
    reviews: 93,
    description: "Rangkaian buket bunga campur carnation dan mawar bergradasi warna pastel yang kalem dan lembut.",
    scarcity: "",
    stockStatus: "Tersedia",
    variants: [{ id: "std", name: "Standard", price: 480000, desc: "Korean Style Cello Wrap" }],
    details: [{ title: "Gaya", content: "Menggunakan kertas cellophane korea premium waterproof anti lecek." }]
  },
  {
    id: "royal-tulip",
    title: "Royal Tulip Glass Cylinder",
    price: 1350000,
    category: "bunga-meja",
    color: "Merah",
    image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=800&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1200&auto=format&fit=crop"],
    badge: "New",
    rating: 4.9,
    reviews: 58,
    description: "10 Tangkai bunga tulip merah Belanda impor berstruktur kokoh dalam semi-aquatic vas silinder bening mewah.",
    scarcity: "Stok bergantung kedatangan cargo impor mingguan.",
    stockStatus: "Tersedia",
    variants: [{ id: "std", name: "Standard", price: 1350000, desc: "10 Tangkai Tulip Impor" }],
    details: [{ title: "Temperatur", content: "Wajib diletakkan di ruangan ber-AC dingin atau diberikan es batu mikro harian." }]
  },
  {
    id: "majestic-lily",
    title: "Majestic Lily Double Stand",
    price: 2800000,
    category: "corporate",
    color: "Putih",
    image: "https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?q=80&w=800&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?q=80&w=1200&auto=format&fit=crop"],
    badge: "Sold Out",
    rating: 5.0,
    reviews: 34,
    description: "Standing flower kembar kanan-kiri berisikan lily putih Casablanca dan mawar putih untuk upacara formal.",
    scarcity: "",
    stockStatus: "Sold Out",
    variants: [{ id: "std", name: "Standard (Sepasang)", price: 2800000, desc: "2 Unit Standing Ukuran Besar" }],
    details: [{ title: "Logistik", content: "Pengantaran menggunakan armada tertutup khusus untuk mencegah layu angin jalan tol." }]
  }
];