"use client";
import Link from "next/link";
import SelectProjects from "./_modules/SelectProjects";
import SelectPromos from "./_modules/SelectPromos";
import { useState } from "react";
import { SelectType } from "./ButtonHome";
import { ProjectsProps,PromosProps } from "@/src/interface/interface";

interface NavProps {
    projectsAda : ProjectsProps[];
    promosAda : PromosProps[]
}


export default function Navbar({projectsAda, promosAda} : NavProps ) {

    const [projectId, setProjectId] = useState<SelectType>("tous");
    const [promoId, setPromoId] = useState<SelectType>("tous");

    return (
        <div>
            <Link href="./">Adaverse</Link>
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
            <Link href={`./projects?projectId=${projectId}&promoId=${promoId}`}>Voir</Link>
        </div>
        
    )
}