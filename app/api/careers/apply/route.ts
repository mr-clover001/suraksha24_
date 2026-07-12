import { NextResponse } from "next/server";

/**
 * Placeholder careers endpoint. Validates the application form payload and
 * logs it server-side. Wire this up to an ATS/email/CRM once a backend is
 * available — the form contract (fields below) is designed to stay stable
 * across that change.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, position, experience, resumeLink, message } = body as Record<
    string,
    string | undefined
  >;

  if (!name?.trim() || !email?.trim() || !phone?.trim() || !position?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Name, email, phone and position are required." },
      { status: 400 }
    );
  }

  // TODO: replace with real delivery (ATS, email, CRM) once available.
  console.log("[Suraksha24 career application]", {
    name,
    email,
    phone,
    position,
    experience,
    resumeLink,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
