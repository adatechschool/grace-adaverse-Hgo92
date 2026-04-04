import ButtonHome from "./_components/ButtonHome";
import { db } from "@/src";
import { promos, adaProjects } from "../src/db/schema";

export  default async function Home() {

const promosAda = await db.select().from(promos);
const projectsAda = await db.select().from(adaProjects);

return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-8">
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Bienvenue sur <span className="text-accent">Ada</span>verse
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">
          Découvrez les projets des différentes promos d'Ada Tech School. 
        </p>
      </div>
      
      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 w-full max-w-md">
        <ButtonHome 
            projectsAda={projectsAda}
            promosAda={promosAda}
        />
      </div>
    </main>
);
}