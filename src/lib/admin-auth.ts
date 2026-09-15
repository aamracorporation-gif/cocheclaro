/**
 * Autenticación mínima para /admin: una contraseña compartida (ADMIN_PASSWORD)
 * y una cookie de sesión firmada con HMAC-SHA256. No es Supabase Auth (que
 * sigue pendiente, ver README), pero cierra el hueco real de seguridad de
 * tener el panel editorial accesible sin ningún control de acceso.
 *
 * Usa Web Crypto (`crypto.subtle`) en vez de el módulo `node:crypto` para que
 * la misma función sirva tanto en middleware (Edge runtime) como en las rutas
 * de API (Node runtime).
 */

export const ADMIN_SESSION_COOKIE = "cc_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 12; // 12 horas

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "ADMIN_SESSION_SECRET no está configurado. Defínelo en .env.local (ver .env.example) antes de usar /admin.",
    );
  }
  return secret;
}

async function hmac(message: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return Buffer.from(signature).toString("base64url");
}

/** Crea el valor de cookie de sesión: `<expiraEpoch>.<firma>`. */
export async function createSessionToken(): Promise<{ value: string; maxAge: number }> {
  const secret = getSecret();
  const expires = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const signature = await hmac(String(expires), secret);
  return { value: `${expires}.${signature}`, maxAge: SESSION_TTL_SECONDS };
}

/** Verifica una cookie de sesión. Comparación en tiempo constante. */
export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const [expiresRaw, signature] = token.split(".");
  if (!expiresRaw || !signature) return false;
  const expires = Number(expiresRaw);
  if (!Number.isFinite(expires) || expires < Math.floor(Date.now() / 1000)) return false;

  let secret: string;
  try {
    secret = getSecret();
  } catch {
    return false;
  }
  const expected = await hmac(expiresRaw, secret);
  return timingSafeEqual(expected, signature);
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return mismatch === 0;
}

export function checkAdminPassword(candidate: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  if (candidate.length !== expected.length) return false;
  let mismatch = 0;
  for (let i = 0; i < candidate.length; i++) mismatch |= candidate.charCodeAt(i) ^ expected.charCodeAt(i);
  return mismatch === 0;
}
