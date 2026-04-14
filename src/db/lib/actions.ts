'use server'
import { eq, sql } from "drizzle-orm";
import { db } from "../..";
import {  promos, adaProjects, studentsProjects } from "../schema";
import { ProjectSchema } from "./zod-schemas";


export async function addProject(formData : FormData) {

    // Je transforme la date de mon form en objet pour la valider avec Zod

    const dataToValidate = Object.fromEntries(formData.entries());
    const validatedData = ProjectSchema.safeParse(dataToValidate);

    if (validatedData.success) {

            // Je recupère des éléments de mon forme pour créer mes propriétés weblink et img correspondantes
        const projectId = await db.select({ name: adaProjects.name }).from(adaProjects).where(eq(adaProjects.id, Number(formData.get('ada_project_id'))));
        const promoId = await db.select({name : promos.name}).from(promos).where(eq(promos.id, Number(formData.get('promo_id'))));
        const promoIdCut = promoId[0].name.split(" ")
        const weblink = (promoIdCut[0] + "-" + projectId[0].name + "-" + formData.get('name')).toLowerCase();
        const img = formData.get('github') + "/blob/main/thumbnail.png?raw=true";
        console.log("ça devrait être bon")
        await db.insert(studentsProjects).values({
        ...validatedData.data,
        img: img,
        weblink: weblink,
    });
    } else if (!validatedData.success) {
        console.log("ça a coincé à la validation")
    }
};

export async function addView(weblink : string) {
    await db.
    update(studentsProjects).
    set({views : sql`${studentsProjects.views} +1`})
    .where(eq(studentsProjects.weblink, weblink))
}

