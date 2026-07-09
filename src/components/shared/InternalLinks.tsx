import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card } from "../ui/card";

type Item = { to: string; label: string; desc?: string };

export function InternalLinks({
  title = "روابط مفيدة",
  items,
}: {
  title?: string;
  items: Item[];
}) {
  return (
    <section className="py-10" aria-labelledby="internal-links-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="internal-links-title"
          className="mb-5 text-xl font-extrabold text-emerald-deep"
        >
          {title}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link key={item.to} to={item.to} className="group">
              <Card className="h-full p-4 transition hover:border-primary/30">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-foreground group-hover:text-primary">
                    {item.label}
                  </span>
                  <ArrowLeft className="h-4 w-4 text-gold transition group-hover:-translate-x-1" />
                </div>
                {item.desc && (
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">
                    {item.desc}
                  </p>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
