import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function PathnamesPage({
  params,
}: PageProps<"/[locale]/about">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations("AboutPage");

  return (
    <section id="hero" className="hero-section">
      <div className="flex justify-between my-5 ">
        <div className="flex-1 p-5">
          <h1 className="text-2xl font-bold mb-2">{t("title")}</h1>
          <p>{t("description")}</p>
        </div>
        <div className="flex-1">
          <img
            src="/luxury-bus-services.png"
            className="rounded-md"
            alt="Luxury Yutong Bus Dubai"
          />
        </div>
      </div>
    </section>
  );
}
