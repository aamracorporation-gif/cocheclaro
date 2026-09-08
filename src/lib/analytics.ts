/**
 * Capa de tracking desacoplada de proveedor (§15.1 del Plan Maestro).
 * Enumera los eventos mínimos y ofrece `track()`. En dev, si no hay endpoint,
 * los eventos se registran en consola.
 */

export type AnalyticsEvent =
  | "vehicle_search"
  | "vehicle_select"
  | "engine_select"
  | "calculator_start"
  | "calculator_complete"
  | "comparison_start"
  | "comparison_complete"
  | "source_open"
  | "affiliate_click"
  | "related_vehicle_click";

type Props = Record<string, string | number | boolean | undefined>;

const endpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT ?? "";

export function track(event: AnalyticsEvent, props: Props = {}): void {
  if (typeof window === "undefined") return;

  const payload = { event, props, ts: Date.now(), path: window.location.pathname };

  if (endpoint) {
    try {
      const body = JSON.stringify(payload);
      if (navigator.sendBeacon) {
        navigator.sendBeacon(endpoint, body);
      } else {
        void fetch(endpoint, { method: "POST", body, keepalive: true });
      }
    } catch {
      /* el tracking nunca debe romper la navegación */
    }
    return;
  }

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", payload);
  }
}
