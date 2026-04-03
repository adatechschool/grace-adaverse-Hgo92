import { db } from '@/src';
import { studentsProjects, promos, adaProjects } from '@/src/db/schema';
import { eq } from 'drizzle-orm';
import Navbar from '@/app/_components/Navbar';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;

    const [project, promosAda, projectsAda] = await Promise.all([
        db.select().from(studentsProjects).where(eq(studentsProjects.weblink, slug)),
        db.select().from(promos),
        db.select().from(adaProjects)
    ]);

    if (project.length === 0) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <Navbar
            projectsAda = {projectsAda}
            promosAda={promosAda}
            />

            <img src={project[0].img} alt={project[0].name}/>
            <span>{promosAda.find(p => p.id === project[0].promo_id)?.name}</span>
            <h3>{project[0].name}</h3>
            <span>{project[0].publicationDate.toDateString()}</span>
            <p>{project[0].description}</p>
            {project[0].demo !=null ? (<div><a target="_blank" href={project[0].github}>GitHub</a>
            <a target="_blank" href={project[0].demo}>Demo</a></div>) : (<a target="_blank" href={project[0].github}>GitHub</a>)
            }
        </div>
    )
}