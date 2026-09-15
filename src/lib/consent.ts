/**
 * Puente mínimo entre ConsentBanner y AdSlot. No es una CMP: solo permite que
 * el resto de la app sepa si el usuario ya aceptó/rechazó cookies no
 * necesarias, para no cargar el script de AdSense sin consentimiento.
 *
 * Antes de activar anuncios personalizados en el EEE (§14 del Plan Maestro)
 * esto debe sustituirse por una CMP certificada (Google CMP / TCF de IAB):
 * sustituye `getConsent`/`setConsent`/`subscribeConsent` por las señales que
 * exponga esa plataforma (p. ej. `__tcfapi`).
 */

export const CONSENT_STORAGE_KEY = "cocheclaro.consent.v1";
export const CONSENT_EVENT = "cocheclaro:consent";

export type ConsentChoice = "accepted" | "rejected" | null;

export function getConsent(): ConsentChoice {
  if (typeof window === "undefined") return null;
  try {
    return (localStorage.getItem(CONSENT_STORAGE_KEY) as ConsentChoice) ?? null;
  } catch {
    return null;
  }
}

export function setConsent(value: Exclude<ConsentChoice, null>): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    /* sin almacenamiento disponible: no persiste, se volverá a preguntar */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export function subscribeConsent(callback: (value: ConsentChoice) => void): () => void {
  if (typeof window === "undefined") return () => {};
  const handler = (event: Event) => callback((event as CustomEvent<ConsentChoice>).detail);
  window.addEventListener(CONSENT_EVENT, handler);
  return () => window.removeEventListener(CONSENT_EVENT, handler);
}
