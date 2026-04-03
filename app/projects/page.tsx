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
        <div>
            <Navbar
            projectsAda = {projectsAda}
            promosAda={promosAda}/>
            <div className="flex flex-col gap-6 m-8">
            {projectsAda
            .filter(project => projectId === "tous" || project.id === projectId)
            .map((project) => {
                const filtreProjets = studentsProjectsAda.filter((sp) => sp.ada_project_id === project.id)
                return (
                    <div key={project.id} className="flex flex-col">
                        <h2>{project.name}</h2>
                        <div className="flex flex-row gap-4">
                        {filtreProjets.map((studentProject) => {
                                 return (
                                    <div className="flex flex-col" key={studentProject.id}>
                                        <a href={`./projects/${studentProject.weblink}`}>
                                        <img src={studentProject.img} alt={studentProject.name}></img>
                                        <span>{promosAda.find(p => p.id === studentProject.promo_id)?.name}</span>
                                        <h3>{studentProject.name}</h3>
                                        <span>{studentProject.publicationDate.toDateString()}</span>
                                    </a></div>
                                )
                        })}
                        </div>
                    </div>
                )
            })}</div>
        </div>
    )
}