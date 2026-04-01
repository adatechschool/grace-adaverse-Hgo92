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


export default function ButtonHome({projectsAda, promosAda} : HomeProps) {
    const [projectId, setProjectId] = useState(0);
    const [promoId, setPromoId] = useState(0);

    const handleClick = () => {
        
    }


    return (
        <div>
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
            
            <button>Voir</button>            
        </div>
    )

}