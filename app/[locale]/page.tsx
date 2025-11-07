import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import Link from "next/link";
import HeroSection from "../components/HeroSection";
import LanguageSwitcher from "../components/LocaleSwitcher";

export default function IndexPage() {
  const locale = useLocale();

  // Enable static rendering
  // setRequestLocale(locale);

  // Once the request locale is set, you
  // can call hooks from `next-intl`
  const t = useTranslations("HomePage");

  return (
    <>
      <HeroSection />
      <div></div>
      <div className="my-10"></div>

      {/* Why Choose Us */}
      {/* About us */}
      {/* Our Buses */}
      {/* Blogs */}
    </>
  );
}
