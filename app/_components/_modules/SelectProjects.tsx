"use client";
import { ProjectsProps } from "@/src/interface/interface";
import { SelectType } from "../ButtonHome";

interface SelectProjectsProps {
    projectsAda : ProjectsProps[];
    projectId : SelectType;
    setProjectId : (id: SelectType) => void
}

export default function SelectProjects({projectsAda, projectId, setProjectId} : SelectProjectsProps) {

    return ( 
    <select value={projectId} onChange={(e) => {
        if (e.target.value==="tous") {
            setProjectId("tous")}
        else {
            setProjectId(parseInt(e.target.value))
        }}}>
            <option value="tous">Tous les projets</option>
            {projectsAda.map((project) => {
                return (
                    <option key={project.id} value={project.id}>{project.name}</option>
                )
            })}
            </select>
)
}