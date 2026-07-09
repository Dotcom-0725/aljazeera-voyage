export const SITE = {
  name: "وكالة الجزيرة ترافيل",
  shortName: "الجزيرة ترافيل",
  tagline: "رحلتك إلى بيت الله تبدأ معنا",
  description:
    "وكالة أسفار طنجة — وكالة الجزيرة ترافيل لتنظيم رحلات العمرة والحج ورحلات تركيا ودبي وحجز الطيران واستخراج التأشيرات. دوار النجمة · 0671872273.",
  city: "طنجة",
  country: "المغرب",
  address: "دوار النجمة، طنجة، المغرب",
  phone: "0671872273",
  phoneDisplay: "06 71 87 22 73",
  phoneIntl: "212671872273",
  email: "contact@aljazeera-travel.ma",
  contactPerson: "محمد عثمان",
  workingHours: {
    weekdays: "الإثنين – السبت: 09:00 – 19:00",
    friday: "الجمعة: 09:00 – 12:00 / 15:00 – 19:00",
    sunday: "الأحد: بموعد مسبق",
  },
  mapsEmbed:
    "https://maps.google.com/maps?q=%D8%AF%D9%88%D8%A7%D8%B1%20%D8%A7%D9%84%D9%86%D8%AC%D9%85%D8%A9%D8%8C%20%D8%B7%D9%86%D8%AC%D8%A9%D8%8C%20%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=دوار+النجمة+طنجة+المغرب",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    tiktok: "https://tiktok.com",
  },
} as const;

export const whatsappLink = (message?: string) => {
  const text =
    message ||
    "السلام عليكم، أرغب في الاستفسار عن برامج وكالة الجزيرة ترافيل";
  return `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(text)}`;
};

export const NAV_LINKS = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/umrah", label: "العمرة" },
  { to: "/hajj", label: "الحج" },
  { to: "/tours", label: "الرحلات" },
  { to: "/flights", label: "الطيران" },
  { to: "/visa", label: "التأشيرات" },
  { to: "/blog", label: "المدونة" },
  { to: "/contact", label: "اتصل بنا" },
] as const;

export type PackageItem = {
  id: string;
  name: string;
  destination: string;
  price: string;
  duration: string;
  departure: string;
  hotel: string;
  image: string;
  tag?: string;
  features: string[];
  category: "umrah" | "hajj" | "tour";
};

export const UMRAH_PACKAGES: PackageItem[] = [
  {
    id: "umrah-gold",
    name: "عمرة الذهبي",
    destination: "مكة المكرمة والمدينة المنورة",
    price: "18.900 درهم",
    duration: "10 أيام",
    departure: "15 أبريل 2026",
    hotel: "فنادق 5 نجوم قرب الحرم",
    image:
      "https://images.pexels.com/photos/2895295/pexels-photo-2895295.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "الأكثر طلباً",
    category: "umrah",
    features: [
      "إقامة في مكة والمدينة",
      "مرشد روحي متخصص",
      "تنقلات خاصة مكيفة",
      "وجبات مختارة",
      "تأشيرة ومتابعة كاملة",
    ],
  },
  {
    id: "umrah-family",
    name: "عمرة العائلة",
    destination: "مكة المكرمة والمدينة المنورة",
    price: "14.500 درهم",
    duration: "12 يوماً",
    departure: "02 مايو 2026",
    hotel: "فنادق عائلية مريحة",
    image:
      "https://images.pexels.com/photos/12721555/pexels-photo-12721555.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "مناسب للعائلات",
    category: "umrah",
    features: [
      "غرف عائلية واسعة",
      "برنامج مرن للأطفال",
      "زيارات منظمة",
      "دعم على مدار الساعة",
      "تأمين سفر شامل",
    ],
  },
  {
    id: "umrah-vip",
    name: "عمرة VIP",
    destination: "مكة المكرمة والمدينة المنورة",
    price: "29.900 درهم",
    duration: "8 أيام",
    departure: "20 يونيو 2026",
    hotel: "أجنحة فاخرة بإطلالة",
    image:
      "https://images.pexels.com/photos/35332385/pexels-photo-35332385.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "تجربة استثنائية",
    category: "umrah",
    features: [
      "خدمة كونسيرج خاصة",
      "مواصلات خاصة فاخرة",
      "وجبات راقية",
      "أولوية في الإجراءات",
      "مرافقة شخصية",
    ],
  },
  {
    id: "umrah-economy",
    name: "عمرة الاقتصادية",
    destination: "مكة المكرمة",
    price: "11.900 درهم",
    duration: "7 أيام",
    departure: "10 يوليو 2026",
    hotel: "فنادق 3–4 نجوم قريبة",
    image:
      "https://images.pexels.com/photos/35446836/pexels-photo-35446836.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "قيمة ممتازة",
    category: "umrah",
    features: [
      "طيران ذهاب وإياب",
      "تأشيرة عمرة",
      "تنقلات جماعية",
      "مرشد للمجموعة",
      "متابعة قبل السفر",
    ],
  },
];

export const HAJJ_PACKAGES: PackageItem[] = [
  {
    id: "hajj-comfort",
    name: "حج الراحة",
    destination: "مكة · منى · عرفات · مزدلفة · المدينة",
    price: "89.000 درهم",
    duration: "18 يوماً",
    departure: "مايو 2026",
    hotel: "فنادق 4–5 نجوم + مخيم مميز",
    image:
      "https://images.pexels.com/photos/35332382/pexels-photo-35332382.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "موصى به",
    category: "hajj",
    features: [
      "إشراف ميداني متخصص",
      "مخيم قريب من الجمرات",
      "وجبات طيلة أيام المشاعر",
      "مرافقة طبية",
      "تسهيلات لكبار السن",
    ],
  },
  {
    id: "hajj-premium",
    name: "حج البلاتينيوم",
    destination: "مكة · المشاعر · المدينة",
    price: "125.000 درهم",
    duration: "20 يوماً",
    departure: "مايو 2026",
    hotel: "فنادق فاخرة بإطلالة + مخيم VIP",
    image:
      "https://images.pexels.com/photos/33169789/pexels-photo-33169789.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "فاخر",
    category: "hajj",
    features: [
      "غرف واسعة وإطلالات مميزة",
      "مواصلات خاصة",
      "خدمة كونسيرج",
      "برنامج روحاني مكثف",
      "أولوية في الإجراءات",
    ],
  },
  {
    id: "hajj-family",
    name: "حج العائلات",
    destination: "مكة والمشاعر والمدينة",
    price: "95.000 درهم",
    duration: "19 يوماً",
    departure: "مايو 2026",
    hotel: "إقامة عائلية منظمة",
    image:
      "https://images.pexels.com/photos/11259857/pexels-photo-11259857.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "للعائلات",
    category: "hajj",
    features: [
      "غرف عائلية",
      "مرافقة خاصة للنساء",
      "تنظيم دقيق للمناسك",
      "دعم لغوي مغربي",
      "تواصل دائم مع الأهل",
    ],
  },
];

export const TOUR_PACKAGES: PackageItem[] = [
  {
    id: "tour-istanbul",
    name: "سحر إسطنبول",
    destination: "إسطنبول، تركيا",
    price: "7.900 درهم",
    duration: "7 أيام",
    departure: "كل أسبوعين",
    hotel: "فنادق 4–5 نجوم وسط المدينة",
    image:
      "https://images.pexels.com/photos/11956061/pexels-photo-11956061.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "الأكثر مبيعاً",
    category: "tour",
    features: [
      "طيران ذهاب وإياب",
      "جولات يومية منظمة",
      "مرشد ناطق بالعربية",
      "إفطار يومي",
      "تأشيرة/إجراءات حسب الحاجة",
    ],
  },
  {
    id: "tour-dubai",
    name: "دبي الفاخرة",
    destination: "دبي، الإمارات",
    price: "6.500 درهم",
    duration: "5 أيام",
    departure: "كل شهر",
    hotel: "فنادق فاخرة بدبي مارينا",
    image:
      "https://images.pexels.com/photos/36738857/pexels-photo-36738857.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "عائلي",
    category: "tour",
    features: [
      "زيارة برج خليفة",
      "سفاري صحراوي",
      "مول دبي والنافورة",
      "فندق راقٍ",
      "تنقلات خاصة",
    ],
  },
  {
    id: "tour-paris",
    name: "باريس الأنيقة",
    destination: "باريس، فرنسا",
    price: "9.800 درهم",
    duration: "6 أيام",
    departure: "موسمي",
    hotel: "فنادق وسط باريس",
    image:
      "https://images.pexels.com/photos/29667766/pexels-photo-29667766.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "رومانسي",
    category: "tour",
    features: [
      "برج إيفل ومتحف اللوفر",
      "نزهة على نهر السين",
      "إقامة مركزية",
      "مساعدة التأشيرة",
      "برنامج مرن للتسوق",
    ],
  },
  {
    id: "tour-medina",
    name: "زيارة المدينة",
    destination: "المدينة المنورة",
    price: "5.900 درهم",
    duration: "4 أيام",
    departure: "حسب الطلب",
    hotel: "فنادق قرب المسجد النبوي",
    image:
      "https://images.pexels.com/photos/11259857/pexels-photo-11259857.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tag: "روحي",
    category: "tour",
    features: [
      "قرب من الحرم النبوي",
      "زيارات تاريخية",
      "مرشد روحي",
      "إقامة مريحة",
      "متابعة كاملة",
    ],
  },
];

export const SERVICES = [
  {
    id: "umrah",
    title: "برامج العمرة",
    desc: "باقات عمرة متكاملة للعائلات والمجموعات مع إقامة قريبة من الحرمين.",
    to: "/umrah",
    icon: "kaaba",
  },
  {
    id: "hajj",
    title: "برامج الحج",
    desc: "تنظيم حج مريح وآمن بإشراف متخصصين ومتابعة دقيقة للمناسك.",
    to: "/hajj",
    icon: "moon",
  },
  {
    id: "tours",
    title: "رحلات سياحية",
    desc: "جولات دولية مختارة إلى أجمل الوجهات ببرامج مرنة وتجربة فاخرة.",
    to: "/tours",
    icon: "globe",
  },
  {
    id: "flights",
    title: "حجز الطيران",
    desc: "أفضل عروض تذاكر الطيران الداخلية والدولية بأسعار تنافسية.",
    to: "/flights",
    icon: "plane",
  },
  {
    id: "visa",
    title: "خدمات التأشيرات",
    desc: "استشارات ومتابعة إجراءات التأشيرات السياحية والعمرة باحترافية.",
    to: "/visa",
    icon: "passport",
  },
] as const;

export const WHY_US = [
  {
    title: "خبرة موثوقة",
    desc: "سنوات من تنظيم رحلات العمرة والحج للعائلات المغربية من طنجة.",
    icon: "shield",
  },
  {
    title: "أسعار شفافة",
    desc: "باقات واضحة بدون مفاجآت، مع خيارات تناسب مختلف الميزانيات.",
    icon: "badge",
  },
  {
    title: "مرافقة إنسانية",
    desc: "فريق يهتم براحتكم قبل السفر وأثناء الرحلة وبعد العودة.",
    icon: "heart",
  },
  {
    title: "خدمة سريعة",
    desc: "رد عبر واتساب، حجز مرن، ومتابعة شخصية لملفك.",
    icon: "zap",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "عائلة بنعلي",
    city: "طنجة",
    text: "تجربة عمرة راقية من البداية للنهاية. التنظيم ممتاز والفريق متعاون جداً. نشكر وكالة الجزيرة ترافيل.",
    rating: 5,
  },
  {
    name: "محمد الإدريسي",
    city: "تطوان",
    text: "حجزنا رحلة إلى إسطنبول وكانت فوق التوقعات. الفنادق ممتازة والبرنامج متوازن.",
    rating: 5,
  },
  {
    name: "فاطمة الزهراء",
    city: "القنيطرة",
    text: "خدمة التأشيرات سريعة وواضحة. شرحوا لنا كل خطوة بصبر. وكالة تستحق الثقة.",
    rating: 5,
  },
  {
    name: "يوسف المرابط",
    city: "أصيلة",
    text: "تعامل راقٍ مع السيد محمد عثمان. الشفافية والاهتمام بالتفاصيل شيء نادر.",
    rating: 5,
  },
] as const;

export const GALLERY = [
  {
    src: "https://images.pexels.com/photos/35446836/pexels-photo-35446836.jpeg?auto=compress&cs=tinysrgb&w=1000",
    alt: "الكعبة المشرفة والحجاج",
  },
  {
    src: "https://images.pexels.com/photos/12721555/pexels-photo-12721555.jpeg?auto=compress&cs=tinysrgb&w=1000",
    alt: "منظر جوي للكعبة",
  },
  {
    src: "https://images.pexels.com/photos/11259857/pexels-photo-11259857.jpeg?auto=compress&cs=tinysrgb&w=1000",
    alt: "المسجد النبوي",
  },
  {
    src: "https://images.pexels.com/photos/11956061/pexels-photo-11956061.jpeg?auto=compress&cs=tinysrgb&w=1000",
    alt: "إسطنبول",
  },
  {
    src: "https://images.pexels.com/photos/36738857/pexels-photo-36738857.jpeg?auto=compress&cs=tinysrgb&w=1000",
    alt: "دبي ليلاً",
  },
  {
    src: "https://images.pexels.com/photos/14011664/pexels-photo-14011664.jpeg?auto=compress&cs=tinysrgb&w=1000",
    alt: "ضيافة فاخرة",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "ما أفضل وكالة أسفار في طنجة للعمرة والحج؟",
    a: "وكالة الجزيرة ترافيل بدوار النجمة بطنجة متخصصة في العمرة والحج والرحلات السياحية مع متابعة شخصية عبر واتساب 0671872273.",
  },
  {
    q: "كيف أحجز برنامج عمرة أو حج من المغرب؟",
    a: "تواصل عبر واتساب أو نموذج الاتصال، وسنقترح الباقة الأنسب حسب تاريخك وميزانيتك وعدد المرافقين خلال وقت قصير.",
  },
  {
    q: "هل أسعار العمرة والحج تشمل التأشيرة والطيران؟",
    a: "معظم برامج العمرة والحج تشمل التأشيرة والطيران والإقامة والتنقلات. نوضح التفاصيل كتابيًا قبل الحجز.",
  },
  {
    q: "هل تنظمون رحلات تركيا ودبي من المغرب؟",
    a: "نعم، نوفر رحلات تركيا من المغرب ورحلات دبي من المغرب وبرامج عائلية بأسعار واضحة.",
  },
  {
    q: "هل يمكن حجز تذاكر الطيران فقط من طنجة؟",
    a: "نعم، نوفر حجز تذاكر الطيران طنجة إلى جدة والمدينة وإسطنبول ودبي ووجهات أخرى.",
  },
  {
    q: "هل تساعدون في استخراج التأشيرات بطنجة؟",
    a: "نعم، نقدم استشارات ومتابعة لملفات تأشيرات العمرة والسياحة (تركيا، الإمارات، شنغن...) حسب الوجهة.",
  },
  {
    q: "أين يقع مقر الوكالة ومن المسؤول؟",
    a: "المقر: دوار النجمة، طنجة، المغرب. المسؤول عن المتابعة: السيد محمد عثمان.",
  },
  {
    q: "ما أوقات العمل؟",
    a: "الإثنين–السبت 09:00–19:00، الجمعة 09:00–12:00 و15:00–19:00، الأحد بموعد مسبق.",
  },
] as const;

export const BLOG_POSTS = [
  {
    id: "umrah-guide",
    title: "دليل العمرة الأول للمغاربة: نصائح ذهبية قبل السفر",
    excerpt:
      "كل ما تحتاج معرفته عن الاستعداد الروحي والعملي لرحلة عمرة مريحة ومباركة.",
    date: "12 مارس 2026",
    category: "العمرة",
    image:
      "https://images.pexels.com/photos/35446836/pexels-photo-35446836.jpeg?auto=compress&cs=tinysrgb&w=1000",
    readTime: "6 دقائق",
  },
  {
    id: "hajj-package",
    title: "كيف تختار باقة الحج المناسبة لعائلتك؟",
    excerpt:
      "معايير مهمة تساعدك على اختيار البرنامج الأمثل من حيث الراحة والسعر والخدمات.",
    date: "28 فبراير 2026",
    category: "الحج",
    image:
      "https://images.pexels.com/photos/35332382/pexels-photo-35332382.jpeg?auto=compress&cs=tinysrgb&w=1000",
    readTime: "5 دقائق",
  },
  {
    id: "family-destinations",
    title: "أفضل الوجهات العائلية من طنجة هذا الموسم",
    excerpt:
      "اكتشف وجهات سياحية مثالية للعائلات المغربية مع برامج مرنة وتجارب لا تُنسى.",
    date: "5 فبراير 2026",
    category: "السفر",
    image:
      "https://images.pexels.com/photos/13142301/pexels-photo-13142301.jpeg?auto=compress&cs=tinysrgb&w=1000",
    readTime: "4 دقائق",
  },
  {
    id: "visa-tips",
    title: "نصائح لرفع فرص قبول التأشيرة السياحية",
    excerpt:
      "مستندات مهمة وأخطاء شائعة يجب تجنبها عند التقديم على التأشيرات.",
    date: "18 يناير 2026",
    category: "التأشيرات",
    image:
      "https://images.pexels.com/photos/15129287/pexels-photo-15129287.jpeg?auto=compress&cs=tinysrgb&w=1000",
    readTime: "7 دقائق",
  },
] as const;

export const FLIGHT_OFFERS = [
  {
    from: "طنجة",
    to: "جدة",
    airline: "رحلات متعددة",
    price: "من 3.200 درهم",
    type: "ذهاب وإياب",
  },
  {
    from: "الدار البيضاء",
    to: "المدينة",
    airline: "رحلات مباشرة / مريحة",
    price: "من 3.600 درهم",
    type: "ذهاب وإياب",
  },
  {
    from: "طنجة",
    to: "إسطنبول",
    airline: "شركات متعددة",
    price: "من 2.100 درهم",
    type: "ذهاب وإياب",
  },
  {
    from: "طنجة",
    to: "دبي",
    airline: "عروض موسمية",
    price: "من 2.800 درهم",
    type: "ذهاب وإياب",
  },
] as const;

export const VISA_SERVICES = [
  {
    title: "تأشيرة العمرة",
    desc: "إجراءات سريعة ومتابعة كاملة حتى إصدار التأشيرة.",
  },
  {
    title: "تأشيرات شنغن",
    desc: "مساعدة في ملفات أوروبا مع توجيه دقيق للمستندات.",
  },
  {
    title: "تأشيرة تركيا والإمارات",
    desc: "حلول سريعة للوجهات الأكثر طلباً لدى العائلات.",
  },
  {
    title: "استشارة شخصية",
    desc: "تقييم ملفك ورفع فرص القبول قبل التقديم.",
  },
] as const;

export const IMAGES = {
  hero: "https://images.pexels.com/photos/35446836/pexels-photo-35446836.jpeg?auto=compress&cs=tinysrgb&w=1800",
  about:
    "https://images.pexels.com/photos/14011664/pexels-photo-14011664.jpeg?auto=compress&cs=tinysrgb&w=1200",
  medina:
    "https://images.pexels.com/photos/33169789/pexels-photo-33169789.jpeg?auto=compress&cs=tinysrgb&w=1200",
  mosque:
    "https://images.pexels.com/photos/15129287/pexels-photo-15129287.jpeg?auto=compress&cs=tinysrgb&w=1200",
  tangier:
    "https://images.pexels.com/photos/11344766/pexels-photo-11344766.jpeg?auto=compress&cs=tinysrgb&w=1200",
} as const;

export const STATS = [
  { value: "+12", label: "سنة من الخبرة" },
  { value: "+8,500", label: "حاج ومعتمر" },
  { value: "+40", label: "وجهة سياحية" },
  { value: "98%", label: "رضا العملاء" },
] as const;
