import ButtonHome from "./components/ButtonHome";
import { db } from "@/src";
import { studentsProjects, promos, adaProjects } from "../src/db/schema";

export  default async function Home() {

const promosAda = await db.select().from(promos);
const projectsAda = await db.select().from(adaProjects);
const studentsProjectsAda = await db.select().from(studentsProjects);
  
return (
    <div>
      <h1>Adaverse</h1>
      <p>Découvrez les projets des différentes promotions d'Ada Tech School !</p>
      <ButtonHome 
        projectsAda={projectsAda}
        promosAda={promosAda}
        />
    </div>
  );
}
