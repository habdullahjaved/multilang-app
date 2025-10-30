import { notFound } from "next/navigation";

type PageProps = {
  params: { locale: string; slug: string };
};

export default async function BusPage({ params }: PageProps) {
  const { locale, slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/buses?locale=${locale}`,
    { cache: "no-store" } // important for dynamic data
  );
  const buses = await res.json();

  const bus = buses.find((b: any) => b.slug === slug);

  if (!bus) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">{bus.name}</h1>
      <p className="text-gray-700">{bus.description}</p>
    </div>
  );
}
