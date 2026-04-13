"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProjectsProps, PromosProps } from "@/src/interface/interface";
import {addProject} from "@/src/db/lib/actions";
import { ProjectSchema } from "@/src/db/lib/zod-schemas";
import * as z from "zod";

type ProjectFormData = z.infer<typeof ProjectSchema>;

interface FormProps {
    promos : PromosProps[],
    adaProjects : ProjectsProps[]
}

export default function AddProjectForm({ promos, adaProjects} : FormProps) {
    const [clicked, setClicked] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState : { errors, isSubmitting}, reset } = useForm<ProjectFormData>({resolver : zodResolver(ProjectSchema) as any, defaultValues: {
        name: "",
        description: "",
        github: "",
        demo: "",
        promo_id: promos[0]?.id,
        ada_project_id: adaProjects[0]?.id
    }});

    const processForm = async (data: ProjectFormData) => {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (value !== undefined && value !== null)
            {formData.append(key, value.toString())}
        })
        
        await addProject(formData);
        reset();
        setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false);
            setClicked(false);
        }, 3000)
        ;
    }

    return (
        <div>
            {clicked ? (
                <div className="fixed inset-0 z-100 w-screen h-screen bg-black/60 backdrop-blur-sm overflow-y-auto flex justify-center items-start pt-4 sm:pt-20">
                    <div className="relative bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl w-full max-w-lg shadow-2xl mx-4 mb-10">
                        {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <span className="text-4xl">✅</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Projet envoyé !
                </h3>
                <p className="text-slate-500">
                  Merci pour votre contribution. Votre projet a été ajouté avec succès.
                </p>
              </div>
            ) : (
                <>
                        <button 
                            onClick={() => setClicked(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 transition-colors"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold mb-6 text-slate-900">Proposer un projet</h2>

                        <form onSubmit={handleSubmit(processForm)} className="flex flex-col gap-5">
                            <div>
                                <input
                                {...register("name")}
                                placeholder="Le titre de votre projet"
                                className={`w-full bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 `}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>}
                            </div>

                            <div>
                                <textarea
                                {...register("description")}
                                placeholder="Décrivez votre projet"
                                className={`w-full bg-slate-50 border ${errors.description ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all min-h-30 text-slate-900`}
                                />
                                {errors.description && <p className="text-red-500 text-xs mt-1 ml-1">{errors.description.message}</p>}
                            </div>

                            <div>
                                <input
                                {...register("github")}
                                placeholder="Votre URL github"
                                className={`w-full bg-slate-50 border ${errors.github ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900`}
                                />
                                {errors.github && <p className="text-red-500 text-xs mt-1 ml-1">{errors.github.message}</p>}
                            </div>

                            <div>
                                <input
                                {...register("demo")}
                                placeholder="L'URL de votre demo (optionnel)"
                                className={`w-full bg-slate-50 ${errors.demo ? 'border-red-500' : 'border-slate-200 '} rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900`}
                                />
                                {errors.demo && <p className="text-red-500 text-xs mt-1 ml-1">{errors.demo.message}</p>}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                <select
                                    {...register("promo_id")}
                                    className="w-full bg-slate-50    border border-slate-200   rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900   "
                                >
                                    {promos.map((promo) => (
                                    <option key={promo.id} value={promo.id}>
                                        {promo.name}
                                    </option>
                                    ))}
                                </select>
                                </div>
                                <div>
                                <select
                                    {...register("ada_project_id")}
                                    className="w-full bg-slate-50    border border-slate-200   rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900   "
                                >
                                    {adaProjects.map((project) => (
                                    <option key={project.id} value={project.id}>
                                        {project.name}
                                    </option>
                                    ))}
                                </select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/30 transition-all active:scale-95 mt-2 flex justify-center items-center"
                            >
                                {isSubmitting ? (
                                <span className="animate-pulse">Envoi...</span>
                                ) : (
                                "Envoyer"
                                )}
                            </button>
                            </form> 
                            </> )}
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