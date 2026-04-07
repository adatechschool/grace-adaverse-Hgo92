import { db } from '@/src';
import { studentsProjects, promos, adaProjects } from '@/src/db/schema';
import { eq, isNotNull, and } from 'drizzle-orm';
import Navbar from '@/app/_components/Navbar';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const [projectResult, promosAda, projectsAda] = await Promise.all([
        db.select().from(studentsProjects).where(and(eq(studentsProjects.weblink, slug), isNotNull(studentsProjects.publicationDate))),
        db.select().from(promos),
        db.select().from(adaProjects)
    ]);

    if (projectResult.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">Projet introuvable</h1>
            </div>
        );
    }

    const project = projectResult[0];
    const promoName = promosAda.find(p => p.id === project.promo_id)?.name;

    return (
        <div className="min-h-screen bg-background">
            <Navbar projectsAda={projectsAda} promosAda={promosAda} />

            <main className="max-w-5xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                            <img 
                                src={project.img} 
                                alt={project.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-accent/10 text-accent rounded-lg">
                                    {promoName}
                                </span>
                                <span className="text-sm text-slate-400">
                                    Publié le {project.publicationDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                                {project.name}
                            </h1>
                        </div>

                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div className="pt-6 flex flex-wrap gap-4">
                            <a 
                                target="_blank" 
                                href={project.github}
                                className="flex-1 min-w-35 text-center px-6 py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-slate-500/20 transition-all"
                            >
                                Voir sur GitHub
                            </a>
                            
                            {project.demo && (
                                <a 
                                    target="_blank" 
                                    href={project.demo}
                                    className="flex-1 min-w-35 text-center px-6 py-3 bg-accent text-white rounded-xl font-bold hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
                                >
                                    Démo Live
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}