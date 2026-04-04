// page.tsx
import Navbar from "../_components/Navbar";
import { ProjectsProps, PromosProps, StudentProjectsProps } from "@/src/interface/interface";
import { db } from "@/src";
import { studentsProjects, promos, adaProjects } from "@/src/db/schema";
import { eq, and } from "drizzle-orm";

function isNumber(prop : number | "tous") : prop is number {
    return typeof prop === "number"
}

type RawSearchParams = { projectId: string; promoId: string };

export default async function projects({ searchParams }: { searchParams: Promise<RawSearchParams> ;}) {
    const params  =  await searchParams;
    
    const projectId = params.projectId != "tous" ? parseInt(params.projectId) : "tous";
    const promoId = params.promoId != "tous" ? parseInt(params.promoId) : "tous";
    const filters = [];

    const promosAda : PromosProps[] = await db.select().from(promos);
    const projectsAda : ProjectsProps[] = await db.select().from(adaProjects);

    if (isNumber(projectId)) { filters.push(eq(studentsProjects.ada_project_id, projectId));} 
    if (isNumber(promoId)) { filters.push(eq(studentsProjects.promo_id, promoId))}
    
    const studentsProjectsAda : StudentProjectsProps[] = await db.select().from(studentsProjects).where(and(...filters));

    return(
        <div className="min-h-screen bg-background">
            <Navbar
                projectsAda={projectsAda}
                promosAda={promosAda}
            />
            
            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col gap-16">
                {projectsAda
                .filter(project => projectId === "tous" || project.id === projectId)
                .map((project) => {
                    const filtreProjets = studentsProjectsAda.filter((sp) => sp.ada_project_id === project.id)
                    
                    if (filtreProjets.length === 0) return null; 

                    return (
                        <section key={project.id} className="space-y-8">
                            <div className="flex items-center gap-4">
                                <h2 className="text-3xl font-bold tracking-tight">{project.name}</h2>
                                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filtreProjets.map((studentProject) => {
                                    return (
                                        <div key={studentProject.id} className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
                                            <a href={`./projects/${studentProject.weblink}`} className="block">
                                                <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                                                    <img 
                                                        src={studentProject.img} 
                                                        alt={studentProject.name}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>

                                                <div className="p-5 space-y-3">
                                                    <div className="flex justify-between items-center">
                                                        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent rounded-full">
                                                            {promosAda.find(p => p.id === studentProject.promo_id)?.name}
                                                        </span>
                                                        <span className="text-xs text-slate-500">
                                                            {studentProject.publicationDate.toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                    
                                                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                                                        {studentProject.name}
                                                    </h3>
                                                
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                    )
                })}
                </div>
            </main>
        </div>
    )
}