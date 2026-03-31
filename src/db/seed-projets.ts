import { db } from "../index";
import 'dotenv/config';
import { studentsProjects } from "./schema";
import { sql } from "drizzle-orm";

async function main() {
    const projet : typeof studentsProjects.$inferInsert[] = [
        {
            ada_project_id : 5,
            promo_id : 1,
            name: "Arbres remarquables de Paris",
            description : "Cette application web interactive permet d'afficher les cartes d'identité des arbres remarquables de Paris.",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
            weblink: "grace-arbres",
            github: "https://github.com/egainon/Adataviz-emilie",
            demo : "",
            valid : true,
            publicationDate : sql`now()` as unknown as Date
        },
                    {
            ada_project_id : 1,
            promo_id : 1,
            name: "Ghibliquiz",
            description : "This repository is the result of a group project completed during my 4th week of training as a full-stack web developer.",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
            weblink:"grace-ghibliquiz",
            github: "https://github.com/gab-hono/Quiz-Ghibli",
            demo : "",
            valid : true,
            publicationDate : sql`now()` as unknown as Date
        }, 
        {
            ada_project_id : 10,
            promo_id : 1,
            name: "Pokedex - Gabriel",
            description : "Pokedex développé par Gabriel",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
            weblink:"grace-pokedex-gabriel",
            github: "https://github.com/gab-hono/Pokedex",
            demo : "",
            valid : true,
            publicationDate : sql`now()` as unknown as Date
        }, 
                {
            ada_project_id : 5,
            promo_id : 1,
            name: "Piscines de Paris",
            description : "Explorer et afficher les piscines publiques de Paris à partir de l'API officielle ParisData (Open Data Paris).",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
            weblink:"grace-piscines",
            github: "https://github.com/gab-hono/PiscinesParis-Frontend",
            demo : "",
            valid : true,
            publicationDate : sql`now()` as unknown as Date
        }, 
        {
            ada_project_id : 3,
            promo_id : 1,
            name: "Sofia Coppola",
            description : "Page sur Sofia Coppola par Emilie et Gabriel",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
            weblink:"grace-adapage-gabriel-emilie",
            github: "https://github.com/adatechschool/grace-adapage-gabriel-emilie",
            demo : "",
            valid : true,
            publicationDate : sql`now()` as unknown as Date
        },
        {
            ada_project_id : 6,
            promo_id : 1,
            name: "Adatabase - Emilie",
            description : "Adatabase est un projet SQL dont l'objectif est de concevoir et manipuler une base de données de gestion de ressources pédagogiques.",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
            weblink:"grace-adatabase-emilie",
            github: "https://github.com/egainon/Adatabase-Em",
            demo : "",
            valid : true,
            publicationDate : sql`now()` as unknown as Date
        }
    ];

    const mockProjects : typeof studentsProjects.$inferInsert[] = [
  {
    ada_project_id: 1,
    promo_id: 1,
    name: "Eco-Track Paris",
    description: "Une application interactive pour suivre l'empreinte carbone des transports en commun parisiens en temps réel. Développé par Thomas.",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500",
    weblink: "eco-track-1",
    github: "https://github.com/example/eco-track",
    demo: "https://eco-track.vercel.app",
    valid: true,
    publicationDate: new Date()
  },
  {
    ada_project_id: 2,
    promo_id: 2,
    name: "Cyber-Safe Quiz",
    description: "Apprenez les bases de la cybersécurité en vous amusant avec ce générateur de quiz dynamiques. Développé par Sarah.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500",
    weblink: "cyber-safe",
    github: "https://github.com/example/cyber-safe",
    demo: "",
    valid: true,
    publicationDate: new Date()
  },
  {
    ada_project_id: 3,
    promo_id: 3,
    name: "Météo des Sommets",
    description: "Comparateur de conditions météo pour les stations de ski françaises, incluant l'état de l'enneigement. Développé par Marc.",
    img: "https://images.unsplash.com/photo-1551524164-687a55ea112c?w=500",
    weblink: "meteo-sommets",
    github: "https://github.com/example/meteo",
    demo: "https://meteo-sommets.fr",
    valid: true,
    publicationDate: new Date()
  },
  {
    ada_project_id: 4,
    promo_id: 1,
    name: "Recipe-Mixer",
    description: "Trouvez des recettes de cuisine en fonction des ingrédients qu'il vous reste dans le frigo. Développé par Julie.",
    img: "https://images.unsplash.com/photo-1505935428862-767bd82e23e2?w=500",
    weblink: "recipe-mixer",
    github: "https://github.com/example/recipes",
    demo: "",
    valid: true,
    publicationDate: new Date()
  },
  {
    ada_project_id: 5,
    promo_id: 2,
    name: "Arbres remarquables",
    description: "Exploration des arbres historiques de la capitale avec carte interactive Mapbox. Développé par Emilie.",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500",
    weblink: "arbres-paris",
    github: "https://github.com/egainon/Adataviz-emilie",
    demo: "",
    valid: true,
    publicationDate: new Date()
  },
  {
    ada_project_id: 6,
    promo_id: 3,
    name: "Adopt-a-Pet",
    description: "Mise en relation entre refuges locaux et futurs adoptants avec filtres par type d'animal et âge. Développé par Lucas.",
    img: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=500",
    weblink: "adopt-pet",
    github: "https://github.com/example/adopt",
    demo: "https://adopt-a-pet.org",
    valid: true,
    publicationDate: new Date()
  },
  {
    ada_project_id: 7,
    promo_id: 1,
    name: "Zen-Timer",
    description: "Application de méditation guidée avec sons d'ambiance personnalisables (pluie, forêt, café). Développé par Léa.",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500",
    weblink: "zen-timer",
    github: "https://github.com/example/zen",
    demo: "",
    valid: true,
    publicationDate: new Date()
  },
  {
    ada_project_id: 8,
    promo_id: 2,
    name: "Retro-Game Catalog",
    description: "Bibliothèque collaborative pour lister et noter ses jeux vidéo rétro préférés. Développé par Kevin.",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500",
    weblink: "retro-games",
    github: "https://github.com/example/retro",
    demo: "",
    valid: true,
    publicationDate: new Date()
  },
  {
    ada_project_id: 9,
    promo_id: 3,
    name: "Art-Gallery Hub",
    description: "Une plateforme pour permettre aux artistes locaux d'exposer virtuellement leurs œuvres durant le confinement. Développé par Chloé.",
    img: "https://images.unsplash.com/photo-1460661419201-fd4ce186860d?w=500",
    weblink: "art-gallery",
    github: "https://github.com/example/art",
    demo: "https://art-hub.fr",
    valid: true,
    publicationDate: new Date()
  },
  {
    ada_project_id: 10,
    promo_id: 1,
    name: "Task-Master Pro",
    description: "Gestionnaire de tâches minimaliste basé sur la méthode Kanban pour une productivité accrue. Développé par Antoine.",
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500",
    weblink: "task-master",
    github: "https://github.com/example/tasks",
    demo: "",
    valid: true,
    publicationDate: new Date()
  },
  {
    ada_project_id: 1,
    promo_id: 2,
    name: "Vino-Select",
    description: "Aide au choix du vin selon le plat préparé, avec base de données de plus de 500 références. Développé par Sophie.",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500",
    weblink: "vino-select",
    github: "https://github.com/example/wine",
    demo: "",
    valid: true,
    publicationDate: new Date()
  },
  {
    ada_project_id: 2,
    promo_id: 3,
    name: "Loca-Bike",
    description: "Trouvez le vélo en libre-service le plus proche et comparez les tarifs des différents opérateurs. Développé par Maxime.",
    img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500",
    weblink: "loca-bike",
    github: "https://github.com/example/bike",
    demo: "",
    valid: true,
    publicationDate: new Date()
  },
  {
    ada_project_id: 3,
    promo_id: 1,
    name: "Study-Buddy",
    description: "Plateforme de rencontre entre étudiants pour réviser des matières spécifiques en groupe. Développé par Inès.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500",
    weblink: "study-buddy",
    github: "https://github.com/example/study",
    demo: "",
    valid: true,
    publicationDate: new Date()
  },
  {
    ada_project_id: 4,
    promo_id: 2,
    name: "Garden-Help",
    description: "Conseils de jardinage calendrier par mois pour savoir quand planter ses légumes de saison. Développé par Pierre.",
    img: "https://images.unsplash.com/photo-1416872834457-4b6150a998e0?w=500",
    weblink: "garden-help",
    github: "https://github.com/example/garden",
    demo: "",
    valid: true,
    publicationDate: new Date()
  },
  {
    ada_project_id: 5,
    promo_id: 3,
    name: "Budget-Wise",
    description: "Outil simple de suivi de budget mensuel avec export PDF et visualisation par camembert. Développé par Clara.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500",
    weblink: "budget-wise",
    github: "https://github.com/example/budget",
    demo: "https://budgetwise.app",
    valid: true,
    publicationDate: new Date()
  }
];

// await db.insert(studentsProjects).values(mockProjects);
await db.insert(studentsProjects).values(projet);
}

main()



        // {
        //     ada_project_id : ,
        //     promo_id : 1,
        //     name: "",
        //     description : "",
        //     img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        //     weblink:"",
        //     github: "",
        //     demo : "",
        //     valid : true,
        //     publicationDate : sql`now()` as unknown as Date
        // }
