import ButtonHome from "./_components/ButtonHome";
import { eq, isNotNull } from "drizzle-orm";
import { db } from "@/src";
import { promos, adaProjects, studentsProjects } from "../src/db/schema";

export  default async function Home() {

const studentsProjectsAda = await db.select().from(studentsProjects).where(isNotNull(studentsProjects.publicationDate));
const promosAda = await db.select().from(promos);
const projectsAda = await db
    .select({
      id: adaProjects.id,
      name: adaProjects.name,
    })
    .from(adaProjects)
    .innerJoin(
      studentsProjects, 
      eq(adaProjects.id, studentsProjects.ada_project_id)
    )
    .groupBy(adaProjects.id);

return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-8">
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Bienvenue sur <span className="text-accent">Ada</span>verse
        </h1>
        <p className="text-lg text-slate-500">
          Découvrez les projets des différentes promos d'Ada Tech School. 
        </p>
      </div>
      
      <div className="bg-white  p-8 rounded-3xl shadow-xl border border-slate-200  w-full max-w-min">
        <ButtonHome 
            projectsAda={projectsAda}
            promosAda={promosAda}
            studentsProjects = {studentsProjectsAda}
        />
      </div>
    </main>
);
}