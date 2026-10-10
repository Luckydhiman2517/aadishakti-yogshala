import type { NextRequest } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  batch?: string;
  interest?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[\d\s+()-]{8,18}$/;

export async function POST(request: NextRequest) {
  let body: Payload;

  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const errors: Record<string, string> = {};

  if (name.length < 2) errors.name = "Please tell us your name.";
  if (!EMAIL_RE.test(email)) errors.email = "That email address does not look right.";
  if (!PHONE_RE.test(phone)) errors.phone = "Please add a phone number we can reach you on.";

  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 422 });
  }

  // Where a mailer, CRM or sheet integration would go. Logged for now so the
  // enquiry is not silently dropped during development.
  console.info("[enquiry]", {
    name,
    email,
    phone,
    batch: body.batch,
    interest: body.interest,
    message: body.message?.slice(0, 2000),
    at: new Date().toISOString(),
  });

  return Response.json({
    ok: true,
    message: "Received — we will call you within one working day.",
  });
}
