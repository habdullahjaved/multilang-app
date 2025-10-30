import { NextRequest, NextResponse } from "next/server";

// Load your JSON messages
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";
import fr from "@/messages/fr.json";

// Map locale to messages
const messages: Record<string, any> = { en, ar, fr };

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const locale = searchParams.get("locale") || "en";

  // Fallback to English if locale not found
  const localeMessages = messages[locale] || messages["en"];

  // Return the buses list
  const buses = localeMessages.BusesPage.list;

  return NextResponse.json(buses);
}
