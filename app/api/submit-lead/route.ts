import { NextResponse } from 'next/server';
import { sendLeadFallbackToMattermost } from '../../../lib/lead-fallback-mattermost';

const personalDomains = new Set(['gmail.com','yahoo.com','hotmail.com','outlook.com','icloud.com','aol.com','proton.me','protonmail.com']);
const MAX_BODY_BYTES = 64 * 1024;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const requestWindows = new Map<string, { count: number; resetAt: number }>();

function allowRequest(request: Request) {
  const key = (request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
  const now = Date.now();
  const current = requestWindows.get(key);
  if (!current || current.resetAt <= now) {
    requestWindows.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  current.count += 1;
  return current.count <= MAX_REQUESTS_PER_WINDOW;
}

export async function POST(request: Request) {
  const statedLength = Number(request.headers.get('content-length') || 0);
  if (statedLength > MAX_BODY_BYTES) return NextResponse.json({ ok: false, message: 'Request is too large.' }, { status: 413 });
  if (!allowRequest(request)) return NextResponse.json({ ok: false, message: 'Please wait before trying again.' }, { status: 429 });
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, message: 'The request could not be read.' }, { status: 400 });
  }
  if (form.get('website_url')) return NextResponse.json({ ok: true });
  const source = String(form.get('source') || '');
  const full = source.startsWith('contact-page');
  const firstName = String(form.get('first_name') || '').trim();
  const lastName = String(form.get('last_name') || '').trim();
  const legacyName = String(form.get('name') || '').trim();
  const email = String(form.get('email') || '').trim().toLowerCase();
  const company = String(form.get('company') || '').trim();
  const companySize = String(form.get('company_size') || '').trim();
  const positions = String(form.get('positions_to_fill') || '').trim();
  const referral = String(form.get('referral_source') || '').trim();
  if (!/^\S+@\S+\.\S+$/.test(email) || (full ? (!firstName || !lastName || !company || !companySize || !positions || !referral) : !legacyName)) {
    return NextResponse.json({ ok: false, message: 'Please complete every required field.' }, { status: 400 });
  }
  if (full && personalDomains.has(email.split('@')[1])) {
    return NextResponse.json({ ok: false, message: 'Please use your business email address.' }, { status: 400 });
  }
  const endpoint = process.env.ACR_LEAD_ENDPOINT;
  if (endpoint) {
    const payload = Object.fromEntries(form.entries());
    delete payload.website_url;
    const forwarded = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) });
    if (!forwarded.ok) return NextResponse.json({ ok: false, message: 'We could not send your request.' }, { status: 502 });
  }
  void sendLeadFallbackToMattermost({
    name: [firstName, lastName].filter(Boolean).join(' ') || legacyName,
    email,
    phone: String(form.get('phone') || ''),
    business: company,
    message: String(form.get('message') || ''),
    companySize,
    positions,
    referral,
    pageUrl: String(form.get('_page_url') || request.headers.get('referer') || ''),
    userAgent: request.headers.get('user-agent') || '',
  });
  return NextResponse.json({ ok: true });
}
