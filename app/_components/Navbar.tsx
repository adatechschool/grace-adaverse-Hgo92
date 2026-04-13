"use client";
import Link from "next/link";
import { useState } from "react";
import { SelectType } from "./ButtonHome";
import { ProjectsProps,PromosProps, StudentProjectsProps } from "@/src/interface/interface";
import SelectBonusTest from "./_modules/SelectBonusTest";
import AddProjectForm from "./AddProjectForm";

interface NavProps {
    projectsAda : ProjectsProps[];
    promosAda : PromosProps[];
    studentsProjects : StudentProjectsProps[]
}


// Navbar.tsx
export default function Navbar({projectsAda, promosAda, studentsProjects} : NavProps ) {
    const [projectId, setProjectId] = useState<SelectType>("tous");
    const [promoId, setPromoId] = useState<SelectType>("tous");

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-300    bg-background/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
                <Link href="/" className="text-3xl font-bold bg-linear-to-r from-[#eb7365] to-[#e63e1f] bg-clip-text text-transparent">
                    Adaverse
                </Link>
                
                <div className="flex items-center gap-3">
                    <SelectBonusTest 
                                    projectId = {projectId}
                                    setProjectId = {setProjectId}
                                    projectsAda = {projectsAda}
                                    promoId = {promoId}
                                    setPromoId = {setPromoId}
                                    promosAda = {promosAda}
                                    studentsProjects = {studentsProjects}
                    />
                    
                    <Link 
                        href={`/projects?projectId=${projectId}&promoId=${promoId}`}
                        className="bg-accent hover:bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                        Voir
                    </Link>
                    
                    <AddProjectForm adaProjects={projectsAda} promos={promosAda} />
                </div>
            </div>
        </nav>
    )
}