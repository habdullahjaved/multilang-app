import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";
import Image from "next/image";

export default function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-white px-4">
        <NavigationLink href={"/"} activeClassName="text-black">
          <h2>BusesDubai</h2>
        </NavigationLink>
        <div>
          <NavigationLink href="/">{t("home")}</NavigationLink>
          <NavigationLink href="/about">{t("about")}</NavigationLink>
          <NavigationLink href="/buses">{t("buses")}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
