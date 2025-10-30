import { useTranslations } from "next-intl";
import React from "react";

const HeroSection = () => {
  const t = useTranslations("HomePage");

  return (
    <section id="hero" className="hero-section">
      <div className="flex justify-between my-5 ">
        <div className="flex-1 p-5">
          <h1 className="text-2xl font-bold mb-2">{t("title")}</h1>
          <p>{t("description")}</p>
          <a href="#contact" className="btn btn-primary">
            {t("btn-title")}
          </a>
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
};

export default HeroSection;
