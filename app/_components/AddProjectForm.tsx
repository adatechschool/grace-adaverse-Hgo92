"use client";
import { useState } from "react";
import { ProjectsProps, PromosProps } from "@/src/interface/interface";
import addProject from "@/src/db/actions";

interface FormProps {
    promos : PromosProps[],
    adaProjects : ProjectsProps[]
}

export default function AddProjectForm({ promos, adaProjects} : FormProps) {
    const [clicked, setClicked] = useState(false)

    return (
        <div>
            {clicked ? (
                <div className="fixed inset-0 z-100 w-screen h-screen bg-black/60 backdrop-blur-sm overflow-y-auto flex justify-center items-start pt-4 sm:pt-20">
                    <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl w-full max-w-lg shadow-2xl mx-4 mb-10">
                        <button 
                            onClick={() => setClicked(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white p-2 transition-colors"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Proposer un projet</h2>

                        <form action={addProject} className="flex flex-col gap-5">
                            <input 
                                required 
                                name="name" 
                                placeholder="Le titre de votre projet"
                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 dark:text-white"
                            />
                            <textarea 
                                required 
                                name="description" 
                                placeholder="Décrivez votre projet"
                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all min-h-[120px] text-slate-900 dark:text-white"
                            />
                            <input 
                                required 
                                name="github" 
                                placeholder="Votre URL github"
                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 dark:text-white"
                            />
                            <input 
                                name="demo" 
                                placeholder="L'URL de votre demo"
                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 dark:text-white"
                            />
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <select 
                                    required 
                                    name="promo_id"
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 dark:text-white"
                                >
                                    {promos.map((promo) => (
                                        <option key={promo.id} value={promo.id}>{promo.name}</option>
                                    ))}
                                </select>
                                <select 
                                    required 
                                    name="ada_project_id"
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 dark:text-white"
                                >
                                    {adaProjects.map((project) => (
                                        <option key={project.id} value={project.id}>{project.name}</option>
                                    ))}
                                </select>
                            </div>

                            <button 
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/30 transition-transform active:scale-95 mt-2"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            ) : ( 
                <button 
                    onClick={() => setClicked(true)}
                    className="bg-indigo-600/10 text-indigo-600 hover:bg-indigo-600 hover:text-white border border-indigo-600/20 px-6 py-2 rounded-full transition-all font-medium"
                >
                    Proposer un projet
                </button>
            )}  
        </div>
    )
}