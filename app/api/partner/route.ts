import { NextResponse } from "next/server";

/**
 * Placeholder partnerships endpoint. Validates the partner inquiry form
 * payload and logs it server-side. Wire this up to email/CRM once a
 * backend is available — the form contract (fields below) is designed to
 * stay stable across that change.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { organization, partnerType, contactName, phone, email, message } = body as Record<
    string,
    string | undefined
  >;

  if (!organization?.trim() || !contactName?.trim() || !email?.trim() || !phone?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Organization, contact person, email and phone are required." },
      { status: 400 }
    );
  }

  // TODO: replace with real delivery (email, CRM) once available.
  console.log("[Suraksha24 partner inquiry]", {
    organization,
    partnerType,
    contactName,
    phone,
    email,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
