"use client";
import { ProjectsProps, PromosProps, StudentProjectsProps } from "@/src/interface/interface";
import { SelectType } from "../ButtonHome";

interface SelectProps {
    projectsAda : ProjectsProps[];
    projectId : SelectType;
    setProjectId : (id: SelectType) => void;
    promosAda : PromosProps[];
    promoId : SelectType;
    setPromoId : (id: SelectType) => void;
    studentsProjects : StudentProjectsProps[]
}

export default function SelectBonusTest({projectsAda, projectId, setProjectId, promosAda, promoId, setPromoId, studentsProjects} : SelectProps) {

    return ( 
        <div className="flex flex-row gap-3">
            <select value={projectId} onChange={(e) => {
            if (e.target.value==="tous") {
                setProjectId("tous")}
            else {
                setProjectId(parseInt(e.target.value))
            }}}>
                <option value="tous">Tous les projets</option>
                {projectsAda
                .filter((projet) => {
                    if (promoId === "tous") return true;
                    return studentsProjects.some(project => 
                    project.ada_project_id === projet.id && 
                    project.promo_id === promoId
                    );})
                .map((project) => {
                    return (
                        <option key={project.id} value={project.id}>{project.name}</option>
                    )
                })}
            </select>
            <select value={promoId} onChange={(e) => {
                if (e.target.value==="tous") {
                    setPromoId("tous")}
                else {
                    setPromoId(parseInt(e.target.value))
                }}}>
                <option value="tous">Toutes les promos</option>
                {promosAda
                .filter((promo) => {
                    if (projectId === "tous") return true;
                    return studentsProjects.some(project => 
                    project.promo_id === promo.id && 
                    project.ada_project_id === projectId
                    );})
                .map((promo) => {
                    return (
                        <option key={promo.id} value={promo.id}>{promo.name}</option>
                    )
                })}
            </select>
            </div>
)
}