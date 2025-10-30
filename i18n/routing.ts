import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar", "fr"], // ✅ All locales
  defaultLocale: "en", // ✅ English without prefix
  localePrefix: "as-needed", // 🚫
  localeDetection: true,
});
