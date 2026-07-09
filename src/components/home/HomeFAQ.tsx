import { FAQ_ITEMS } from "../../data/site";
import { SectionHeader } from "../shared/SectionHeader";
import { Accordion } from "../ui/accordion";

export function HomeFAQ() {
  return (
    <section
      className="relative py-20 md:py-28"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="الأسئلة الشائعة"
          title="إجابات تهم الباحثين عن وكالة أسفار طنجة"
          subtitle="محتوى مُحسّن لمقتطفات Google الغنية (FAQ rich results) حول العمرة والحج والطيران والتأشيرات."
        />
        <h2 id="faq-heading" className="sr-only">
          الأسئلة الشائعة حول وكالة الجزيرة ترافيل بطنجة
        </h2>
        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
