import * as z from "zod";

export const ProjectSchema = z.object({
    promo_id: z.coerce.number("Veuillez choisir une promo"),
    ada_project_id: z.coerce.number("Veuillez choisir un projet"),
    name: z.string().min(1, "Le nom est requis"),
    description : z.string().min(1, "La description est requise"),
    github: z.url("URL GitHub invalide"),
    demo: z.url().optional().or(z.literal("").transform(() => undefined)),
});