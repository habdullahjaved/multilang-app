import NavigationLink from "@/app/components/NavigationLink";
import { Bus, getBuses } from "@/app/lib/api";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function BusesPage({ params }: Props) {
  const { locale } = await params;
  const buses: Bus[] = await getBuses(locale);

  return (
    <div className="grid gap-6 p-8">
      {buses.map((bus) => (
        <div key={bus.id} className="border rounded-xl p-4">
          {bus.image && (
            <img src={bus.image.url} alt={bus.title} className="rounded-xl" />
          )}
          <h2 className="font-bold mt-2">{bus.title}</h2>
          <p>{bus.description}</p>
          <NavigationLink href={`/buses/${bus.slug}`}>
            {bus.title}
          </NavigationLink>
        </div>
      ))}
    </div>
  );
}
