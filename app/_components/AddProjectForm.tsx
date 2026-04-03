"use client";
import { useState } from "react";
import {ProjectsProps, PromosProps} from "@/src/interface/interface";
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
            <div>
                <form action={addProject}>
                    <input required name="name" placeholder="Le titre de votre projet"/>
                    <input required name="description" placeholder="Décrivez votre projet"/>
                    <input required name="github" placeholder="Votre URL github"/>
                    <input name="demo" placeholder="L'URL de votre demo"/>
                    <select required name="promo_id">
                        {promos.map((promo) => {
                            return (
                                <option key={promo.id} value={promo.id}>{promo.name}</option>
                            )
                        })}
                    </select>
                    <select required name="ada_project_id">
                        {adaProjects.map((project) => {
                            return (
                                <option key={project.id} value={project.id}>{project.name}</option>
                            )
                        })}
                    </select>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        ) : ( 
            <button onClick={() => setClicked(!clicked)}>Proposer un projet</button>
        )}  
        </div>
    )
}