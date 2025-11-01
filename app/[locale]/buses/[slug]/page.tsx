import { getBusBySlug, Bus } from "@/app/lib/api";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function BusPage({ params }: Props) {
  const { locale, slug } = await params;
  console.log(locale, "    =|=   ", slug);
  const bus: Bus | null = await getBusBySlug(slug, locale);

  if (!bus) return <p>Bus not found</p>;

  return (
    <article className="p-8">
      {bus.image && (
        <img src={bus.image.url} alt={bus.title} className="rounded-xl" />
      )}
      <h1 className="text-3xl font-bold mt-4">{bus.title}</h1>
      <p className="mt-2">{bus.description}</p>
      {bus.content && <div className="mt-6">{bus.content?.text}</div>}
    </article>
  );
}
