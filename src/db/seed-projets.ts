import { db } from "../index";
import 'dotenv/config';
import { studentsProjects } from "./schema";
import { sql } from "drizzle-orm";

async function main() {
    const projet : typeof studentsProjects.$inferInsert[] = [
        {
            ada_project_id : 4,
            promo_id : 1,
            name: "Adashboard - Hugo M.",
            description : "Un dashboard pour afficher mes compétences et les faire évoluer au fil de ma formation.",
            img : "https://github.com/adatechschool/grace-adashboard-Hgo92/blob/main/thumbnail.png?raw=true",
            weblink: "grace-adashboard-hugo",
            github: "https://github.com/adatechschool/grace-adashboard-Hgo92",
            demo : "https://grace-adashboard-hgo92.vercel.app/",
            publicationDate : sql`now()` as unknown as Date
        },
                {
            ada_project_id : 3,
            promo_id : 1,
            name: "Grace Hopper",
            description : "Un page réalisée en React pour découvrir la vie passionnante de Grace Hopper, pionnière de l'informatique qui a donné son nom à notre promotion.",
            img : "https://github.com/Hgo92/adapage-zineb-hugo/blob/main/thumbnail.png?raw=true",
            weblink: "grace-adapage-hopper",
            github: "https://github.com/Hgo92/adapage-zineb-hugo/tree/main",
            demo : "https://adapage-zineb-hugo.vercel.app/",
            publicationDate : sql`now()` as unknown as Date
        },
                {
            ada_project_id : 5,
            promo_id : 1,
            name: "La Mémoire de Paris",
            description : "Pour ce projet de Dataviz, j'ai choisi les plaques commémoratives. A Paris, ce sont 2 575 plaques qui ornent murs et monuments. Découvrez-les ! Un projet réalisé par Hugo Monier.",
            img : "https://github.com/Hgo92/grace-adataviz-hgo92/blob/main/thumbnail.png?raw=true",
            weblink: "grace-adataviz-memoire",
            github: "https://github.com/Hgo92/grace-adataviz-hgo92",
            demo : "https://grace-adataviz-hgo92.vercel.app/",
            publicationDate : sql`now()` as unknown as Date
        },
                {
            ada_project_id : 4,
            promo_id : 1,
            name: "Learn With Me",
            description : "Un application de flashcards pour aider à l'apprentissage des langues ! Un projet réalisé par Hugo Monier.",
            img : "https://github.com/Hgo92/learn-with-me-hgo92/blob/main/front/learn-with-me/thumbnail.png?raw=true",
            weblink: "grace-learnwithme-hugo",
            github: "https://github.com/Hgo92/learn-with-me-hgo92/tree/main",
            demo : "https://learn-with-me-hgo92.vercel.app/",
            publicationDate : sql`now()` as unknown as Date
        },
        {
            ada_project_id : 5,
            promo_id : 1,
            name: "Arbres remarquables de Paris",
            description : "Cette application web interactive permet d'afficher les cartes d'identité des arbres remarquables de Paris.",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
            weblink: "grace-arbres",
            github: "https://github.com/egainon/Adataviz-emilie",
            demo : "",
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
            publicationDate : sql`now()` as unknown as Date
        }, 
        {
            ada_project_id : 13,
            promo_id : 1,
            name: "Pokedex - Gabriel",
            description : "Pokedex développé par Gabriel",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
            weblink:"grace-pokedex-gabriel",
            github: "https://github.com/gab-hono/Pokedex",
            demo : "",
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
            publicationDate : sql`now()` as unknown as Date
        }
    ];

    const mockProjects : typeof studentsProjects.$inferInsert[] = [
    // --- ADAVERSE (ID 12) ---
    {
        ada_project_id: 12,
        promo_id: 2,
        name: "Adaverse - Florian, Guillaume, Xinzhu, Ursula",
        description: "Projet Adaverse de Florian, Guillaume, Xinzhu et Ursula.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-adaverse-fgxu",
        github: "https://github.com/adatechschool/frida-adaverse-2-0-florian-guillaume-xinzhu-ursula",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },
    {
        ada_project_id: 12,
        promo_id: 2,
        name: "Adaverse - Felix, Matteo, Vincent, Yannick",
        description: "Projet Adaverse de Felix, Matteo, Vincent et Yannick.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-adaverse-fmvy",
        github: "https://github.com/adatechschool/frida-adaverse-2-0-felix_matteo_vincent_yannick",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },
    {
        ada_project_id: 12,
        promo_id: 2,
        name: "Adaverse - Nasra, Meriem, Salem, Abdel",
        description: "Projet Adaverse de Nasra, Meriem, Salem et Abdel.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-adaverse-nmsa",
        github: "https://github.com/adatechschool/frida-adaverse-2-0-nasra-metiem-salem-abdel",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },
    {
        ada_project_id: 12,
        promo_id: 2,
        name: "Adaverse - Alexis, Samir, Josephine, Sofia",
        description: "Projet Adaverse de Alexis, Samir, Josephine et Sofia.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-adaverse-asjs",
        github: "https://github.com/adatechschool/frida-adaverse-2-0-alexis-sarnir-josephine-sofia",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },

    // --- ADA CHECK EVENT (ID 11) ---
    {
        ada_project_id: 11,
        promo_id: 2,
        name: "Ada Check Event - Josephine, Sofia",
        description: "Projet Ada Check Event de Josephine et Sofia.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-adacheckevent-js",
        github: "https://github.com/adatechschool/frida-adaCheckEvent-Josephine-Sofia",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },
    {
        ada_project_id: 11,
        promo_id: 2,
        name: "Ada Check Event - Ursula, Florian",
        description: "Projet Ada Check Event de Ursula et Florian.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-adacheckevent-uf",
        github: "https://github.com/adatechschool/frida-paris-projet-AdaCheckEvent-ursula_florian",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },

    // --- ADATAVIZ (ID 5) ---
    {
        ada_project_id: 5,
        promo_id: 2,
        name: "Adataviz - Iris, Xinzhu, Abdel",
        description: "Projet Adataviz de Iris, Xinzhu et Abdel.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-adataviz-ixa",
        github: "https://github.com/adatechschool/frida-paris-dataviz-iris_xinzhu-abdel",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },
    {
        ada_project_id: 5,
        promo_id: 2,
        name: "Adataviz - Florian, Meyko, Matteo",
        description: "Projet Adataviz de Florian, Meyko et Matteo.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-adataviz-fmm",
        github: "https://github.com/adatechschool/frida-paris-dataviz-florian-meyko-matteo-1",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },
    {
        ada_project_id: 5,
        promo_id: 2,
        name: "Adataviz - Sofia, Samir, Salem",
        description: "Projet Adataviz de Sofia, Samir et Salem.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-adataviz-sss",
        github: "https://github.com/adatechschool/frida-paris-dataviz-sofia-samir-salem",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },
    {
        ada_project_id: 5,
        promo_id: 2,
        name: "Adataviz - Josephine, Vincent, Nasra",
        description: "Projet Adataviz de Josephine, Vincent et Nasra.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-adataviz-jvn",
        github: "https://github.com/adatechschool/frida-paris-dataviz-josephine-vincent-nasra",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },
    {
        ada_project_id: 5,
        promo_id: 2,
        name: "Adataviz - Felix, Ursula, Guillaume",
        description: "Projet Adataviz de Felix, Ursula et Guillaume.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-adataviz-fug",
        github: "https://github.com/adatechschool/frida-paris-dataviz-projet-api-felix_ursula_guillaume",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },

    // --- ADA QUIZ (ID 1) ---
    {
        ada_project_id: 1,
        promo_id: 2,
        name: "Ada Quiz - Jofexin",
        description: "Projet Ada Quiz de Jofexin.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-quiz-jofexin",
        github: "https://github.com/adatechschool/frida-quiz-jofexin",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },
    {
        ada_project_id: 1,
        promo_id: 2,
        name: "Ada Quiz - Ursula, Matteo, Samir",
        description: "Projet Ada Quiz de Ursula, Matteo et Samir.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-quiz-ums",
        github: "https://github.com/adatechschool/frida-quiz-quizz_ursula-matteo-et-samir",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },
    {
        ada_project_id: 1,
        promo_id: 2,
        name: "Ada Quiz - Vincent, Iris, Guillaume",
        description: "Projet Ada Quiz de Vincent, Iris et Guillaume.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-quiz-vig",
        github: "https://github.com/adatechschool/frida-quiz-vincent_iris_guillaume",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },
    {
        ada_project_id: 1,
        promo_id: 2,
        name: "Ada Quiz - Sofia, Salem, Florian",
        description: "Projet Ada Quiz de Sofia, Salem et Florian.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-quiz-ssf",
        github: "https://github.com/adatechschool/Frida-quiz-sofia_salem_florian",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },
    {
        ada_project_id: 1,
        promo_id: 2,
        name: "Ada Quiz - Meyko, Nasra, Abdel",
        description: "Projet Ada Quiz de Meyko, Nasra et Abdel.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-quiz-mna",
        github: "https://github.com/adatechschool/frida-quiz-meyko-nasra-abdel",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },

    // --- ADAOPTE (ID 9) ---
    {
        ada_project_id: 9,
        promo_id: 2,
        name: "Adaopte - Josephine",
        description: "Projet Adaopte de Josephine.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-adaopte-josephine",
        github: "https://github.com/adatechschool/frida-adaopte-adaence-josephinegoursaud",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },
    {
        ada_project_id: 9,
        promo_id: 2,
        name: "Adaopte - Xinzhu",
        description: "Projet Adaopte de Xinzhu.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-adaopte-xinzhu",
        github: "https://github.com/adatechschool/frida-adaopte-adaence-Xinzhu99",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },
    {
        ada_project_id: 9,
        promo_id: 2,
        name: "Adaopte - Sosow20",
        description: "Projet Adaopte de Sosow20.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-adaopte-sosow20",
        github: "https://github.com/adatechschool/frida-adaopte-adaence-Sosow20",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },

    // --- ADACTION (ID 10) ---
    {
        ada_project_id: 10,
        promo_id: 2,
        name: "Adaction - Sophia, Ursula, Xinzhu",
        description: "Projet Adaction de Sophia, Ursula et Xinzhu.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-adaction-sux",
        github: "https://github.com/adatechschool/frida-adaction-sophia_ursula-xinzhu",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },
    {
        ada_project_id: 10,
        promo_id: 2,
        name: "Adaction - Vincent, Iris, Guillaume",
        description: "Projet Adaction de Vincent, Iris et Guillaume.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-adaction-vig",
        github: "https://github.com/adatechschool/frida-adaction-vincentirisguillaume",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    },
    {
        ada_project_id: 10,
        promo_id: 2,
        name: "Adaction - Samir, Meriem, Josephine",
        description: "Projet Adaction de Samir, Meriem et Josephine.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDhSvsPo_gyNKqiT72SSEPGpJx5QrDdv0XA&s",
        weblink: "frida-adaction-smj",
        github: "https://github.com/adatechschool/frida-adaction-samirmeriemjosephine",
        demo: "",
        publicationDate: sql`now()` as unknown as Date
    }
]

await db.insert(studentsProjects).values(mockProjects);
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
        //     publicationDate : sql`now()` as unknown as Date
        // }
