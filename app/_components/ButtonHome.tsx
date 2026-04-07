"use client";
import { useState } from "react";
import Link from "next/link";
import { ProjectsProps,PromosProps } from "@/src/interface/interface";
import SelectProjects from "./_modules/SelectProjects";
import SelectPromos from "./_modules/SelectPromos";

interface HomeProps {
    projectsAda : ProjectsProps[];
    promosAda : PromosProps[]
}

export type SelectType = number | "tous";

export default function ButtonHome({projectsAda, promosAda} : HomeProps) {
    const [projectId, setProjectId] = useState<SelectType>("tous");
    const [promoId, setPromoId] = useState<SelectType>("tous");

    return (
        <div className="flex flex-row gap-3">
            <SelectProjects 
                projectId = {projectId}
                setProjectId = {setProjectId}
                projectsAda = {projectsAda}
                />
            <SelectPromos
                promoId = {promoId}
                setPromoId = {setPromoId}
                promosAda = {promosAda}
            />
            
            <Link className="p-2" href={`./projects?projectId=${projectId}&promoId=${promoId}`}>Voir</Link>            
        </div>
    )

}