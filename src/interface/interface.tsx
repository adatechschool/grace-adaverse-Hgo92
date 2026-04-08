// Interface pour ma data de promo

export interface PromosProps {
    id: number;
    name: string;
    startdate: string;
};

// Interface pour ma data des types de projets

export interface ProjectsProps {
    id: number;
    name: string;
};

// Interface pour ma data des projets

export interface StudentProjectsProps {
    id: number;
    ada_project_id: number;
    promo_id: number;
    name: string;
    description: string;
    img: string;
    weblink: string;
    github: string;
    demo: string | null;
    creationDate: Date;
    publicationDate: Date | null;
}

