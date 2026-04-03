'use server'
import { eq } from "drizzle-orm";
import { db } from "..";
import {  promos, adaProjects, studentsProjects } from "./schema";
import * as z from "zod";

const ProjectSchema = z.object({
    promo_id: z.coerce.number(),
    ada_project_id: z.coerce.number(),
    name: z.string().min(1),
    description : z.string().min(1),
    github: z.url(),
    demo: z.url().optional(),
});

export default async function addProject(formData : FormData) {

    // Je recupère des éléments de mon forme pour créer mes propriétés weblink et img correspondantes
    const projectId = await db.select({ name: adaProjects.name }).from(adaProjects).where(eq(adaProjects.id, Number(formData.get('ada_project_id'))));
    const promoId = await db.select({name : promos.name}).from(promos).where(eq(promos.id, Number(formData.get('promo_id'))));
    const promoIdCut = promoId[0].name.split(" ")
    const weblink = (promoIdCut[0] + "-" + projectId[0].name + "-" + formData.get('name')).toLowerCase();
    console.log(weblink)
    const img = formData.get('github') + "/blob/main/thumbnail.png?raw=true";
    console.log(img)

    // Je transforme la date de mon form en objet pour la valider avec Zod

    const dataToValidate = Object.fromEntries(formData.entries());
    const validatedData = ProjectSchema.safeParse(dataToValidate);

    console.log(validatedData.data);
    

    if (validatedData.success) {
        console.log("ça devrait être bon")
        await db.insert(studentsProjects).values({
        ...validatedData.data,
        img: img,
        weblink: weblink,
        valid: false
    });
    } else if (!validatedData.success) {
        console.log("ça a coincé à la validation")
    }



}