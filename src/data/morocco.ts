/**
 * وجهات الرحلات السياحية داخل المغرب.
 * الأوصاف معلومات سياحية عامة عن كل وجهة، ولا تتضمن أسعاراً أو مدداً أو فنادق،
 * لأن تفاصيل البرامج تُحدَّد عند الطلب.
 */

export type MoroccoDestination = {
  id: string;
  name: string;
  region: string;
  image: string;
  imageAlt: string;
  desc: string;
};

export const MOROCCO_DESTINATIONS: MoroccoDestination[] = [
  {
    id: "merzouga",
    name: "مرزوكة",
    region: "الجنوب الشرقي",
    image: "/images/morocco/merzouga.webp",
    imageAlt: "كثبان عرق الشبي الذهبية بمرزوكة",
    desc: "كثبان عرق الشبي الذهبية في قلب الصحراء، ووجهة مميزة لمشاهدة شروق الشمس وغروبها وسط الرمال.",
  },
  {
    id: "ouarzazate",
    name: "ورزازات",
    region: "درعة تافيلالت",
    image: "/images/morocco/ouarzazate.webp",
    imageAlt: "قصر آيت بنحدو قرب ورزازات",
    desc: "بوابة الصحراء ومدينة القصبات، وعلى مقربة منها قصر آيت بنحدو المصنف تراثاً عالمياً لدى اليونسكو.",
  },
  {
    id: "marrakech",
    name: "مراكش",
    region: "مراكش آسفي",
    image: "/images/morocco/marrakech.webp",
    imageAlt: "ساحة جامع الفنا وصومعة الكتبية بمراكش عند الغروب",
    desc: "المدينة الحمراء بساحة جامع الفنا وصومعة الكتبية وأسواقها التقليدية وحدائقها الشهيرة.",
  },
  {
    id: "agadir",
    name: "أكادير",
    region: "سوس ماسة",
    image: "/images/morocco/agadir.webp",
    imageAlt: "شاطئ أكادير وكورنيشها عند الغروب",
    desc: "شاطئ طويل على المحيط الأطلسي وكورنيش واسع، مع مناخ معتدل في معظم فصول السنة.",
  },
  {
    id: "essaouira",
    name: "الصويرة",
    region: "مراكش آسفي",
    image: "/images/morocco/essaouira.webp",
    imageAlt: "قوارب الصيد الزرقاء في ميناء الصويرة",
    desc: "مدينة ساحلية هادئة بأسوارها التاريخية ومينائها وقواربها الزرقاء، ومدينتها العتيقة المصنفة تراثاً عالمياً.",
  },
  {
    id: "fes-meknes",
    name: "فاس ومكناس",
    region: "فاس مكناس",
    image: "/images/morocco/fes-meknes.webp",
    imageAlt: "إطلالة على المدينة العتيقة بفاس ودار الدباغة",
    desc: "مدينة فاس العتيقة وجامع القرويين ودور الدباغة التقليدية، ومكناس الإسماعيلية بباب منصور ومعالمها التاريخية.",
  },
  {
    id: "ifrane",
    name: "إفران",
    region: "الأطلس المتوسط",
    image: "/images/morocco/ifrane.webp",
    imageAlt: "تمثال الأسد الحجري الشهير في إفران",
    desc: "جوهرة الأطلس المتوسط بطابعها المعماري الأوروبي وغابات الأرز المحيطة بها وثلوجها في فصل الشتاء.",
  },
  {
    id: "other",
    name: "مدن ووجهات أخرى",
    region: "في مختلف أنحاء المغرب",
    image: "/images/morocco/chefchaouen.webp",
    imageAlt: "أزقة شفشاون الزرقاء",
    desc: "شفشاون ومدن الشمال ووجهات سياحية أخرى داخل المغرب — أخبرونا بالوجهة التي ترغبون في زيارتها.",
  },
];

/** مصادر الصور (ويكيميديا كومنز) — يلزم ذكرها وفق التراخيص */
export const MOROCCO_IMAGE_CREDITS = [
  { place: "مرزوكة", author: "Mustang Joe", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:The_Merzouga_dunes_of_Morocco.jpg" },
  { place: "ورزازات", author: "Maureen from Buffalo, USA", license: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Ait_Benhaddou_Qsar_(588071549).jpg" },
  { place: "مراكش", author: "Herokk", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Jemaa_el-Fnaa_Marrakech_at_sunset.jpg" },
  { place: "أكادير", author: "Ideophagous", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:Plage_d%27Agadir_-_from_Dunes_d%27Or_Hotel_2.jpg" },
  { place: "الصويرة", author: "Mustang Joe", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:Fishing_boats_of_Essaouira_-_Morocco.jpg" },
  { place: "فاس", author: "Pawel Ryszawa", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Morocco_-_Fes_-_MedinaView.jpg" },
  { place: "إفران", author: "Bernard Gagnon", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Ifrane_lion.jpg" },
  { place: "شفشاون", author: "Allenfleming", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Chefchaouen_(Blue_City).jpg" },
] as const;
