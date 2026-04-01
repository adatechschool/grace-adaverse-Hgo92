import Navbar from "../_components/Navbar";
import { ProjectsProps, PromosProps, StudentProjectsProps } from "@/src/interface/interface";

interface ProjectPageProps {
    projectsAda : ProjectsProps[];
    promosAda : PromosProps[]
    studentsProjects : StudentProjectsProps[]
    promoId : number,
    projectId : number
}

export default function projects({projectsAda, promosAda, projectId, promoId, studentsProjects} : ProjectPageProps) {

    return(
        <div>
            <Navbar/>

        </div>
    )
}