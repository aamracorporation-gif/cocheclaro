/**
 * Clientes de Supabase. SOLO para uso en el servidor (Route Handlers, Server
 * Components, Server Actions): nunca los importes desde un componente
 * marcado "use client". `getAdminSupabaseClient` usa la service role key
 * (bypassa RLS) y por eso comprueba en tiempo de ejecución que no se ejecuta
 * en el navegador.
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let publicClient: SupabaseClient | null = null;
let adminClient: SupabaseClient | null = null;

function assertServer(context: string) {
  if (typeof window !== "undefined") {
    throw new Error(`${context} no debe importarse en código de cliente.`);
  }
}

/** Cliente con la clave anónima: respeta RLS (solo contenido `published`). */
export function getPublicSupabaseClient(): SupabaseClient {
  assertServer("getPublicSupabaseClient");
  if (publicClient) return publicClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY no están configurados. " +
        "Requeridos cuando DATA_PROVIDER=supabase (ver .env.example).",
    );
  }
  publicClient = createClient(url, anonKey, { auth: { persistSession: false } });
  return publicClient;
}

/** Cliente con la service role key: BYPASSA RLS. Solo para /admin y CSV import. */
export function getAdminSupabaseClient(): SupabaseClient {
  assertServer("getAdminSupabaseClient");
  if (adminClient) return adminClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY no están configurados. " +
        "Requeridos para escribir desde /admin con DATA_PROVIDER=supabase (ver .env.example).",
    );
  }
  adminClient = createClient(url, serviceKey, { auth: { persistSession: false } });
  return adminClient;
}
