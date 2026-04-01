import Navbar from "../_components/Navbar";
import { ProjectsProps, PromosProps, StudentProjectsProps } from "@/src/interface/interface";

interface ProjectPageProps {
    projectsAda : ProjectsProps[];
    promosAda : PromosProps[]
    studentsProjects : StudentProjectsProps[]
    promoId : number | string,
    projectId : number | string
}

export default function projects({projectsAda, promosAda, projectId, promoId, studentsProjects} : ProjectPageProps) {

    return(
        <div>
            <Navbar/>
            {projectsAda.map((project) => {
                if (project.id === projectId || projectId === "tous") {
                return (
                    <div>
                        <h2>{project.name}</h2>
                        {studentsProjects.map((studentProject) => {
                            if (studentProject.promo_id === promoId && studentProject.ada_project_id === project.id) {
                                return (
                                    <div>
                                        <img src={studentProject.img}></img>
                                        <span>{promosAda[promoId-1].name}</span>
                                        <h3>{studentProject.name}</h3>
                                        <span>{studentProject.publicationDate.toDateString()}</span>
                                    </div>
                                )}
                        })}
                    </div>
                )}
            })}
        </div>
    )
}