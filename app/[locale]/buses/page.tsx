"use client";

import { useTranslations } from "next-intl";
import Card from "./Card";

export default function BusesPage() {
  const t = useTranslations("BusesPage");
  const buses = t.raw("list"); // get raw array from JSON

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{t("title")}</h1>
      <p className="text-gray-600 mb-8">{t("description")}</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {buses.map((bus: any) => (
          <Card key={bus.slug} bus={bus} viewDetails={t("viewDetails")} />
        ))}
      </div>
    </section>
  );
}
