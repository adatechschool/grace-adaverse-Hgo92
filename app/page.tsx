import ButtonHome from "./_components/ButtonHome";
import { db } from "@/src";
import { promos, adaProjects } from "../src/db/schema";

export  default async function Home() {

const promosAda = await db.select().from(promos);
const projectsAda = await db.select().from(adaProjects);

  
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
