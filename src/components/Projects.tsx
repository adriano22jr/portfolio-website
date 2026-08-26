import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
    return (
        <div className="mx-auto px-8 max-w-8xl py-12">
            <div className="border-b border-slate-200 pb-4 mb-4 animate-fade-in-down">
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    <span className="bg-clip-text text-zinc-900">Featured Projects</span>
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                    Here’s a showcase of projects from my academic path and personal experiments, reflecting my growth and passion.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-slate-600">
                    Featured projects shown: <span className="text-blue-600 font-medium">{projects.length}</span>
                </p>
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={project.name}
                        projectName={project.name} 
                        projectDate={project.date}
                        projectDescription={project.description} 
                        technologies={project.technologies} 
                        projectLink={project.link} 
                        index={index}
                    />
                ))}
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out;
                }
                .animate-fade-in-down {
                    animation: fadeInDown 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}

export default Projects;