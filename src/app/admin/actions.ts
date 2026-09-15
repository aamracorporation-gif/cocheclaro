"use server";

/**
 * Server Actions del panel editorial. Solo tienen efecto con
 * `DATA_PROVIDER=supabase`: el proveedor local (`src/data/*.ts`) es código
 * fuente, no una base de datos, y no se puede escribir en tiempo de
 * ejecución (§8.2 del Plan Maestro — el CRUD real requiere un backend).
 */
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import {
  updateComparisonStatus,
  updateGenerationStatus,
  upsertKnownIssue,
  upsertSource,
  type KnownIssueInput,
  type SourceInput,
} from "@/lib/db/supabase-admin";

const PUBLISH_STATUS = z.enum(["draft", "needs_review", "published"]);

function assertSupabaseProvider() {
  if (process.env.DATA_PROVIDER !== "supabase") {
    throw new Error(
      "Esta acción requiere DATA_PROVIDER=supabase. El proveedor local es de solo lectura (ver README).",
    );
  }
}

/** Revalida todo el contenido público tras un cambio editorial. Los cambios
 *  de publicación son poco frecuentes; invalidar todo el árbol es más simple
 *  y más seguro que intentar deducir qué rutas exactas se ven afectadas. */
function revalidatePublicContent() {
  revalidatePath("/", "layout");
}

export async function setGenerationStatusAction(formData: FormData) {
  assertSupabaseProvider();
  const id = z.string().min(1).parse(formData.get("id"));
  const status = PUBLISH_STATUS.parse(formData.get("status"));
  await updateGenerationStatus(id, status);
  revalidatePublicContent();
}

export async function setComparisonStatusAction(formData: FormData) {
  assertSupabaseProvider();
  const id = z.string().min(1).parse(formData.get("id"));
  const status = PUBLISH_STATUS.parse(formData.get("status"));
  await updateComparisonStatus(id, status);
  revalidatePublicContent();
}

const sourceSchema = z.object({
  id: z
    .string()
    .min(1)
    .regex(/^[a-z0-9-]+$/, "El id debe ser slug: minúsculas, números y guiones."),
  url: z.string().url(),
  title: z.string().min(1),
  publisher: z.string().min(1),
  publishedAt: z.string().optional(),
  accessedAt: z.string().min(1),
  sourceType: z.enum([
    "fabricante", "homologacion", "boletin-tecnico", "medio-tecnico", "organismo-publico", "comunidad",
  ]),
});

export interface ActionState {
  error?: string;
}

export async function saveSourceAction(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  assertSupabaseProvider();
  const parsed = sourceSchema.safeParse({
    id: formData.get("id"),
    url: formData.get("url"),
    title: formData.get("title"),
    publisher: formData.get("publisher"),
    publishedAt: formData.get("publishedAt") || undefined,
    accessedAt: formData.get("accessedAt"),
    sourceType: formData.get("sourceType"),
  });
  if (!parsed.success) return { error: parsed.error.issues.map((i) => i.message).join("; ") };

  try {
    await upsertSource(parsed.data as SourceInput);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Error al guardar la fuente." };
  }
  revalidatePublicContent();
  redirect("/admin/fuentes");
}

const optionalInt = z.preprocess(
  (v) => (v === "" || v === null || v === undefined ? undefined : Number(v)),
  z.number().int().optional(),
);

const knownIssueSchema = z
  .object({
    id: z
      .string()
      .min(1)
      .regex(/^[a-z0-9-]+$/, "El id debe ser slug: minúsculas, números y guiones."),
    engineId: z.string().optional(),
    generationId: z.string().optional(),
    title: z.string().min(1),
    symptoms: z.string().min(1),
    cause: z.string().min(1),
    severity: z.enum(["baja", "media", "alta"]),
    mileageMin: optionalInt,
    mileageMax: optionalInt,
    costMin: optionalInt,
    costMax: optionalInt,
    confidence: z.enum(["anecdotica", "moderada", "solida"]),
    status: PUBLISH_STATUS,
    sourceIds: z.array(z.string()),
  })
  .refine((v) => v.engineId || v.generationId, {
    message: "Debe asociarse a un motor o a una generación.",
  })
  .refine((v) => v.status !== "published" || v.sourceIds.length > 0, {
    message: "No se puede publicar una avería sin ninguna fuente (§8 del Plan Maestro).",
  })
  .refine((v) => v.costMin === undefined || v.costMax === undefined || v.costMin <= v.costMax, {
    message: "El coste mínimo no puede ser mayor que el máximo.",
  });

export async function saveKnownIssueAction(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  assertSupabaseProvider();
  const parsed = knownIssueSchema.safeParse({
    id: formData.get("id"),
    engineId: formData.get("engineId") || undefined,
    generationId: formData.get("generationId") || undefined,
    title: formData.get("title"),
    symptoms: formData.get("symptoms"),
    cause: formData.get("cause"),
    severity: formData.get("severity"),
    mileageMin: formData.get("mileageMin"),
    mileageMax: formData.get("mileageMax"),
    costMin: formData.get("costMin"),
    costMax: formData.get("costMax"),
    confidence: formData.get("confidence"),
    status: formData.get("status"),
    sourceIds: formData.getAll("sourceIds").map(String),
  });
  if (!parsed.success) return { error: parsed.error.issues.map((i) => i.message).join("; ") };

  try {
    await upsertKnownIssue(parsed.data as KnownIssueInput);
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Error al guardar la avería." };
  }
  revalidatePublicContent();
  redirect("/admin/averias");
}
