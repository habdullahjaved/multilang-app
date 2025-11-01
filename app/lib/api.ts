import { hygraph } from "../utils/hygraph";
import { GET_BUSES, GET_BUS_BY_SLUG } from "./queries";

export type Content = {
  html: string;
  text: string;
};
export type Bus = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content?: Content;
  image?: { url: string };
};

export async function getBuses(locale: string): Promise<Bus[]> {
  const { buses } = await hygraph.request<{ buses: Bus[] }>(GET_BUSES, {
    locale,
  });
  return buses;
}

export async function getBusBySlug(
  slug: string,
  locale: string
): Promise<Bus | null> {
  const { bus } = await hygraph.request<{ bus: Bus | null }>(GET_BUS_BY_SLUG, {
    slug,
    locale,
  });
  return bus;
}
