"use client";
import { useState } from "react";

interface PromosProps {
    id: number;
    name: string;
    startdate: string;
};

interface ProjectsProps {
    id: number;
    name: string;
};

interface HomeProps {
    projectsAda : ProjectsProps[];
    promosAda : PromosProps[]
}


export default function ButtonHome({projectsAda, promosAda} : HomeProps) {
    const [projectId, setProjectId] = useState(0);
    const [promoId, setPromoId] = useState(0);


    return (
        <div>
            <select onChange={(e) => {setProjectId(parseInt(e.target.value))}}>
            {projectsAda.map((project) => {
                return (
                    <option value={project.id}>{project.name}</option>
                )
            })}
            </select>
            <select onChange={(e) => {setPromoId(parseInt(e.target.value))}}>
            {promosAda.map((promo) => {
                return (
                    <option value={promo.id}>{promo.name}</option>
                )
            })}
            </select>
            <button>Voir</button>            
        </div>
    )

}