import { motion } from "framer-motion";
import { GALLERY } from "../../data/site";
import { SectionHeader } from "../shared/SectionHeader";

export function HomeGallery() {
  return (
    <section className="relative bg-luxury py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="معرض الصور"
          title="لحظات من رحلات عملائنا"
          subtitle="مشاهد تلهم الثقة وتذكّر بجمال الرحلة الروحية والسياحية."
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {GALLERY.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl shadow-luxury ${
                index === 0 || index === 5 ? "md:row-span-1" : ""
              } ${index % 3 === 0 ? "aspect-[4/5] md:aspect-[4/3]" : "aspect-square md:aspect-[4/3]"}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-3 right-3 left-3 translate-y-2 text-sm font-bold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                {item.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
