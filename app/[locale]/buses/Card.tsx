"use client";

import NavigationLink from "@/app/components/NavigationLink";
import Link from "next/link";

interface BusCardProps {
  bus: {
    name: string;
    slug: string;
    description: string;
  };
  viewDetails: string;
}

export default function Card({ bus, viewDetails }: BusCardProps) {
  return (
    <NavigationLink
      href={`/buses/${bus.slug}`}
      className="block border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{bus.name}</h2>
      <p className="text-gray-600 text-sm">{bus.description}</p>
      <span className="mt-4 inline-block text-red-500 font-medium">
        {viewDetails}
      </span>
    </NavigationLink>
  );
}
