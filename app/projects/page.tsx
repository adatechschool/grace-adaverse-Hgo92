import Navbar from "../_components/Navbar";
import { ProjectsProps, PromosProps, StudentProjectsProps } from "@/src/interface/interface";
import { db } from "@/src";
import { studentsProjects, promos, adaProjects } from "@/src/db/schema";
import { eq, and, isNotNull } from "drizzle-orm";
import Link from "next/link";

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
    const projectsAda : ProjectsProps[] = await db
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
    console.log(projectsAda);

    if (isNumber(projectId)) { filters.push(eq(studentsProjects.ada_project_id, projectId));} 
    if (isNumber(promoId)) { filters.push(eq(studentsProjects.promo_id, promoId))}
    
    const studentsProjectsAda : StudentProjectsProps[] = await db.select().from(studentsProjects).where(and(...filters, isNotNull(studentsProjects.publicationDate)));

    const filteredCategories = projectsAda.filter((project) => projectId === "tous" || project.id === projectId);
    const hasResults = filteredCategories.some(project => studentsProjectsAda.some(sp => sp.ada_project_id === project.id));


    return(
        <div className="min-h-screen bg-background">
            <Navbar
                projectsAda={projectsAda}
                promosAda={promosAda}
                studentsProjects = {studentsProjectsAda}
            />
            
            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col gap-6">
                    {!hasResults ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-slate-200    rounded-3xl">
                        <span className="text-5xl mb-4">🔍</span>
                        <h2 className="text-2xl font-bold text-slate-900   ">
                            Aucun projet trouvé
                        </h2>
                        <p className="text-slate-500    mt-2">
                            Il n'y a pas encore de projets publiés pour ces critères de recherche.
                        </p>
                        <Link className="bg-accent hover:bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors mt-4" href="/projects?projectId=tous&promoId=tous">Voir tous les projets</Link>
                    </div>
                ) : (
                    filteredCategories.map((project) => {
                    const filtreProjets = studentsProjectsAda.filter((sp) => sp.ada_project_id === project.id)
                    if (filtreProjets.length === 0) return null;

                    return (
                        <section key={project.id} className="space-y-4">
                            <div className="flex items-center gap-4">
                                <h2 className="text-3xl font-bold tracking-tight">{project.name}</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filtreProjets.map((studentProject) => {
                                    return (
                                        <div key={studentProject.id} className="group relative bg-white    rounded-2xl border border-slate-200    overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
                                            <Link href={`./projects/${studentProject.weblink}`} className="block">
                                                <div className="aspect-video overflow-hidden bg-slate-100   ">
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
                                                            {studentProject.publicationDate?.toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                    
                                                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                                                        {studentProject.name}
                                                    </h3>
                                                
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                        );
                    })
                )}
                </div>
            </main>
        </div>
    )
}