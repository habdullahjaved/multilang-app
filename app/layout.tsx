import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
//https://www.madebydesignesia.com/themes/rentaly/index.html
//https://preview.themeforest.net/item/carento-auto-dealer-car-rental-nextjs-template/full_screen_preview/55251731?_ga=2.259949384.316688268.1746426202-631461092.1721229237
//https://themewagon.github.io/pinwheel/
// https://themewagon.github.io/chefs-kitchen-nextjs-free/
export default function RootLayout({ children }: Props) {
  return children;
}
//
