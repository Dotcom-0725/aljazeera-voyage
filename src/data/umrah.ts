/**
 * محتوى برامج العمرة كما زوّدتنا به الوكالة.
 * لا تُضف هنا أسعاراً أو تواريخ أو أسماء فنادق غير مؤكدة من طرف الوكالة.
 */

export const UMRAH_SECTIONS = [
  { id: "year-round", label: "على مدار السنة" },
  { id: "ramadan", label: "عمرة رمضان" },
  { id: "prices", label: "الأسعار" },
  { id: "vip", label: "الخاصة وVIP" },
  { id: "occasions", label: "العطل والمناسبات" },
  { id: "guidance", label: "المرافقة والإرشاد" },
] as const;

export type UmrahSectionId = (typeof UMRAH_SECTIONS)[number]["id"];

/** رحلات مباشرة مع الخطوط الجوية السعودية */
export const SAUDIA_ROUTES = [
  { from: "طنجة", to: "المدينة المنورة" },
  { from: "الدار البيضاء", to: "جدة" },
] as const;

export const YEAR_ROUND = {
  durations: ["14 يوماً", "21 يوماً"],
  tripsPerMonth: "4 رحلات",
  stay: "4 أيام في المدينة المنورة، وبقية أيام البرنامج في مكة المكرمة، بالنسبة للبرامج المعنية.",
  note: "التفاصيل النهائية (المدة، تاريخ الانطلاق، مدينة المغادرة) تخضع للبرنامج المتاح وتوافر المقاعد عند الحجز.",
} as const;

export const RAMADAN = {
  durations: ["15 يوماً", "30 يوماً", "36 يوماً", "42 يوماً", "مدد أخرى حسب البرامج المتاحة"],
  points: [
    "عدة برامج للعمرة خلال شهر رمضان المبارك، بتواريخ سفر متعددة.",
    "برامج تضم فنادق مصنفة وقريبة من الحرم، بحسب البرنامج المتاح.",
    "مدد إقامة متنوعة تناسب مختلف الاحتياجات.",
  ],
  note: "أسعار برامج رمضان وتواريخها تُحدَّد حسب كل برنامج — تواصلوا معنا للحصول على التفاصيل وعرض السعر.",
} as const;

export const UMRAH_PRICES = [
  { id: "economy", name: "برنامج العمرة الاقتصادي", price: "12,500" },
  { id: "standard", name: "برنامج العمرة المتوسط", price: "16,000" },
  { id: "tourism", name: "برنامج العمرة السياحي", price: "18,500" },
] as const;

export const UMRAH_PRICE_NOTE =
  "الأسعار المذكورة أسعار ابتدائية للشخص الواحد، وقد تختلف حسب تاريخ السفر والبرنامج والخدمات المتاحة. يرجى التواصل مع الوكالة للحصول على السعر النهائي والتفاصيل الكاملة.";

export const VIP_POINTS = [
  "برامج عمرة خاصة حسب الطلب.",
  "إمكانية طلب برنامج يناسب احتياجات المسافر وتفضيلاته والميزانية المتاحة.",
  "التواصل مع الوكالة للحصول على تفاصيل البرنامج وعرض سعر مخصص.",
] as const;

export const OCCASION_PROGRAMS = [
  {
    id: "school",
    title: "العمرة خلال العطل المدرسية",
    desc: "برامج عمرة تتزامن مع العطل المدرسية لتسهيل سفر العائلات.",
    icon: "school",
  },
  {
    id: "new-year",
    title: "العمرة خلال عطلة رأس السنة الميلادية",
    desc: "برامج عمرة خلال عطلة رأس السنة الميلادية.",
    icon: "calendar",
  },
  {
    id: "summer",
    title: "العمرة خلال العطلة الصيفية",
    desc: "برامج عمرة خلال العطلة الصيفية.",
    icon: "sun",
  },
  {
    id: "mawlid",
    title: "عمرة ذكرى المولد النبوي الشريف",
    desc: "برامج عمرة متميزة بأثمنة مناسبة بمناسبة ذكرى المولد النبوي الشريف.",
    icon: "moon",
  },
] as const;

export const GUIDANCE = {
  text: "نوفر مؤطرين ومرشدين أكفاء لمرافقة المعتمرين طوال فترة إقامتهم بالديار المقدسة، في مكة المكرمة والمدينة المنورة، مع الحرص على توفير التوجيه والمواكبة اللازمة خلال الرحلة.",
  features: [
    { title: "مؤطرون ومرشدون أكفاء", icon: "users" },
    { title: "مرافقة المعتمرين خلال فترة الإقامة", icon: "heart" },
    { title: "التوجيه والإرشاد في مكة المكرمة والمدينة المنورة", icon: "compass" },
    { title: "الاهتمام براحة المعتمرين ومساعدتهم خلال رحلتهم", icon: "shield" },
  ],
} as const;

export const UMRAH_IMAGES = {
  kaaba:
    "https://images.pexels.com/photos/35446836/pexels-photo-35446836.jpeg?auto=compress&cs=tinysrgb&w=1200",
  kaabaAerial:
    "https://images.pexels.com/photos/12721555/pexels-photo-12721555.jpeg?auto=compress&cs=tinysrgb&w=1200",
  medina:
    "https://images.pexels.com/photos/11259857/pexels-photo-11259857.jpeg?auto=compress&cs=tinysrgb&w=1200",
} as const;
