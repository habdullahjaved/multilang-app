export function localizedPath(
  path: string,
  locale: string,
  defaultLocale = "en",
  options?: { ignoreLocale?: boolean }
) {
  const cleanPath = path.replace(/^\//, "");

  if (options?.ignoreLocale) {
    return `/${cleanPath}`;
  }

  if (locale === defaultLocale) {
    return `/${cleanPath}`;
  }

  return `/${locale}/${cleanPath}`;
}
