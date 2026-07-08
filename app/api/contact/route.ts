import { NextResponse } from "next/server";

/**
 * Placeholder contact endpoint. Validates the callback form payload and
 * logs it server-side. Wire this up to email/CRM/ticketing once a backend
 * is available — the form contract (fields below) is designed to stay
 * stable across that change.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { name, country, phone, bestTime, message } = body as Record<string, string | undefined>;

  if (!name?.trim() || !phone?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Name and phone/WhatsApp number are required." },
      { status: 400 }
    );
  }

  // TODO: replace with real delivery (email, CRM, ticketing) once available.
  console.log("[Suraksha24 callback request]", {
    name,
    country,
    phone,
    bestTime,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
