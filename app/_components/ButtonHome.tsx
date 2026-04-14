"use client";
import { useState } from "react";
import Link from "next/link";
import { ProjectsProps,PromosProps, StudentProjectsProps } from "@/src/interface/interface";
import SelectBonusTest from "./_modules/SelectBonusTest";

interface HomeProps {
    projectsAda : ProjectsProps[];
    promosAda : PromosProps[];
    studentsProjects : StudentProjectsProps[]
}

export type SelectType = number | "tous";

export default function ButtonHome({projectsAda, promosAda, studentsProjects} : HomeProps) {
    const [projectId, setProjectId] = useState<SelectType>("tous");
    const [promoId, setPromoId] = useState<SelectType>("tous");

    return (
        <div className="flex flex-row gap-3">
            <SelectBonusTest 
                projectId = {projectId}
                setProjectId = {setProjectId}
                projectsAda = {projectsAda}
                promoId = {promoId}
                setPromoId = {setPromoId}
                promosAda = {promosAda}
                studentsProjects = {studentsProjects}
            />
            
            <Link className="px-4 py-2 border border-slate-300   rounded-lg hover:bg-[#e74c34] hover:bg-opacity-30" href={`./projects?projectId=${projectId}&promoId=${promoId}`}>Voir</Link>            
        </div>
    )

}