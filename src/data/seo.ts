import { SITE } from "./site";

export const SITE_URL = "https://aljazeera-travel.ma";
export const DEFAULT_OG_IMAGE =
  "https://images.pexels.com/photos/35446836/pexels-photo-35446836.jpeg?auto=compress&cs=tinysrgb&w=1200";

/** Replace with real IDs in production */
export const TRACKING = {
  ga4Id: "G-XXXXXXXXXX",
  gtmId: "GTM-XXXXXXX",
  facebookPixelId: "XXXXXXXXXXXXXXX",
  searchConsoleVerification: "google-site-verification-token",
} as const;

export type SeoConfig = {
  title: string;
  description: string;
  keywords: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
};

export const SEO_PAGES: Record<string, SeoConfig> = {
  home: {
    path: "/",
    title: "وكالة أسفار طنجة | وكالة الجزيرة ترافيل — عمرة حج سياحة",
    description:
      "وكالة أسفار طنجة متخصصة في العمرة والحج ورحلات تركيا ودبي وحجز الطيران واستخراج التأشيرات. وكالة الجزيرة ترافيل بدوار النجمة — اتصل 0671872273.",
    keywords:
      "وكالة أسفار طنجة, وكالة عمرة طنجة, رحلات العمرة المغرب, الحج المغرب, وكالة سفر المغرب, وكالة الحج والعمرة, حجز تذاكر الطيران طنجة, استخراج التأشيرات طنجة",
  },
  about: {
    path: "/about",
    title: "من نحن | وكالة أسفار طنجة — وكالة الجزيرة ترافيل",
    description:
      "تعرف على وكالة الجزيرة ترافيل بطنجة: خبرة موثوقة في تنظيم العمرة والحج والرحلات السياحية للعائلات المغربية. دوار النجمة — محمد عثمان.",
    keywords: "وكالة أسفار طنجة, وكالة سفر المغرب, من نحن وكالة سفر طنجة, الجزيرة ترافيل",
  },
  umrah: {
    path: "/umrah",
    title: "وكالة عمرة طنجة | برامج العمرة من المغرب 2026",
    description:
      "أفضل برامج العمرة من طنجة والمغرب: باقات عائلية وVIP مع فنادق قريبة من الحرم، طيران، تأشيرة ومتابعة كاملة. احجز عبر واتساب 0671872273.",
    keywords:
      "وكالة عمرة طنجة, رحلات العمرة المغرب, عمرة من طنجة, باقات عمرة المغرب, سعر العمرة من المغرب",
  },
  hajj: {
    path: "/hajj",
    title: "الحج المغرب 2026 | برامج حج من طنجة — وكالة معتمدة",
    description:
      "برامج الحج من المغرب بطنجة: إقامة مريحة، مخيمات مميزة، إشراف ميداني ومتابعة للعائلات. سجّل مبكراً — وكالة الجزيرة ترافيل.",
    keywords: "الحج المغرب, وكالة الحج والعمرة, حج من طنجة, برامج الحج المغرب 2026",
  },
  tours: {
    path: "/tours",
    title: "رحلات سياحية من المغرب | تركيا دبي باريس من طنجة",
    description:
      "رحلات تركيا من المغرب، رحلات دبي من المغرب، وبرامج باريس والمدينة. وكالة أسفار طنجة بأسعار واضحة وتنظيم راقٍ للعائلات.",
    keywords:
      "رحلات تركيا من المغرب, رحلات دبي من المغرب, رحلات سياحية طنجة, وكالة أسفار طنجة",
  },
  flights: {
    path: "/flights",
    title: "حجز تذاكر الطيران طنجة | أفضل عروض الطيران",
    description:
      "حجز تذاكر الطيران من طنجة والدار البيضاء إلى جدة والمدينة وإسطنبول ودبي. عروض سريعة عبر واتساب — وكالة الجزيرة ترافيل.",
    keywords:
      "حجز تذاكر الطيران طنجة, تذاكر طيران المغرب, طيران طنجة جدة, طيران طنجة إسطنبول",
  },
  visa: {
    path: "/visa",
    title: "استخراج التأشيرات طنجة | عمرة شنغن تركيا الإمارات",
    description:
      "خدمة استخراج التأشيرات بطنجة: تأشيرة عمرة، شنغن، تركيا والإمارات مع متابعة شخصية ونصائح لرفع فرص القبول.",
    keywords:
      "استخراج التأشيرات طنجة, تأشيرة عمرة المغرب, تأشيرة شنغن طنجة, تأشيرة تركيا من المغرب",
  },
  blog: {
    path: "/blog",
    title: "مدونة السفر والعمرة | نصائح الحج والسياحة من طنجة",
    description:
      "مقالات SEO عن العمرة والحج ورحلات تركيا ودبي والتأشيرات ونصائح السفر للمغاربة من وكالة الجزيرة ترافيل بطنجة.",
    keywords: "مدونة عمرة, نصائح الحج, رحلات تركيا, تأشيرات المغرب, سفر من طنجة",
  },
  contact: {
    path: "/contact",
    title: "اتصل بنا | وكالة أسفار طنجة — دوار النجمة 0671872273",
    description:
      "تواصل مع وكالة الجزيرة ترافيل بدوار النجمة طنجة. هاتف وواتساب 0671872273 — المسؤول محمد عثمان. خريطة، أوقات العمل ونموذج تواصل.",
    keywords: "وكالة أسفار طنجة رقم الهاتف, دوار النجمة طنجة, تواصل وكالة سفر طنجة",
  },
  turkey: {
    path: "/destinations/turkey",
    title: "رحلات تركيا من المغرب | إسطنبول من طنجة 2026",
    description:
      "رحلات تركيا من المغرب بأسعار تنافسية: إسطنبول 7 أيام مع فنادق 4–5 نجوم، مرشد عربي وطيران. احجز من طنجة عبر وكالة الجزيرة ترافيل.",
    keywords: "رحلات تركيا من المغرب, رحلة إسطنبول من طنجة, سياحة تركيا للمغاربة",
    ogImage:
      "https://images.pexels.com/photos/11956061/pexels-photo-11956061.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  dubai: {
    path: "/destinations/dubai",
    title: "رحلات دبي من المغرب | عروض عائلية من طنجة",
    description:
      "رحلات دبي من المغرب للعائلات: برج خليفة، سفاري، مول دبي وفنادق فاخرة. برامج 5 أيام بأسعار واضحة — وكالة أسفار طنجة.",
    keywords: "رحلات دبي من المغرب, سياحة دبي من طنجة, رحلة عائلية دبي المغرب",
    ogImage:
      "https://images.pexels.com/photos/36738857/pexels-photo-36738857.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  paris: {
    path: "/destinations/paris",
    title: "رحلة باريس من المغرب | برامج سياحية أنيقة",
    description:
      "اكتشف باريس مع وكالة الجزيرة ترافيل: برج إيفل، اللوفر، إقامة مركزية ومساعدة في التأشيرة من طنجة.",
    keywords: "رحلة باريس من المغرب, سياحة فرنسا للمغاربة, تأشيرة فرنسا طنجة",
    ogImage:
      "https://images.pexels.com/photos/29667766/pexels-photo-29667766.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  medina: {
    path: "/destinations/medina",
    title: "زيارة المدينة المنورة من المغرب | برامج روحية",
    description:
      "برامج زيارة المدينة المنورة من المغرب: إقامة قرب المسجد النبوي، زيارات تاريخية ومرشد روحي مع وكالة عمرة طنجة.",
    keywords: "زيارة المدينة المنورة, عمرة المدينة, رحلة المدينة من المغرب",
    ogImage:
      "https://images.pexels.com/photos/11259857/pexels-photo-11259857.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
};

export function absoluteUrl(path: string) {
  if (path === "/") return `${SITE_URL}/`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}/#${clean}`;
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness", "Organization"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name,
    alternateName: ["الجزيرة ترافيل", "Al Jazeera Travel Tangier"],
    description: SEO_PAGES.home.description,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: DEFAULT_OG_IMAGE,
    telephone: `+${SITE.phoneIntl}`,
    email: SITE.email,
    priceRange: "$$",
    currenciesAccepted: "MAD",
    paymentAccepted: "Cash, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "دوار النجمة",
      addressLocality: "طنجة",
      addressRegion: "طنجة تطوان الحسيمة",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.7595,
      longitude: -5.834,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "15:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "طنجة" },
      { "@type": "Country", name: "المغرب" },
    ],
    sameAs: [
      SITE.social.facebook,
      SITE.social.instagram,
      SITE.social.youtube,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${SITE.phoneIntl}`,
      contactType: "customer service",
      areaServed: "MA",
      availableLanguage: ["ar", "fr"],
      name: SITE.contactPerson,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات السفر",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "برامج العمرة" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "برامج الحج" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "رحلات سياحية" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "حجز الطيران" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "استخراج التأشيرات" } },
      ],
    },
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function buildArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: [article.image],
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: SITE.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: absoluteUrl(article.path),
    inLanguage: "ar-MA",
  };
}

export function buildProductOfferSchema(pkg: {
  name: string;
  description: string;
  image: string;
  price: string;
  path: string;
}) {
  const numeric = pkg.price.replace(/[^\d.]/g, "");
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pkg.name,
    description: pkg.description,
    image: pkg.image,
    brand: { "@type": "Brand", name: SITE.name },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(pkg.path),
      priceCurrency: "MAD",
      price: numeric || undefined,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: SITE.name },
    },
  };
}
