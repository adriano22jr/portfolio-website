import { FaGithub } from "react-icons/fa";
import type { ReactNode } from "react";

interface Props {
    projectName: string;
    projectDate: string;
    projectDescription: ReactNode;
    technologies: string[];
    projectLink: string;
    index: number;
}

function ProjectCard({ projectName, projectDate, projectDescription, technologies, projectLink, index }: Props) {
    return (
        <div 
            className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up flex flex-col h-full"
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
        >

            <div className="mb-4">
                <h5 className="text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {projectName}
                </h5>
                <p className="text-sm text-slate-700 leading-relaxed grow">
                {projectDate}
            </p>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-4 grow">
                {projectDescription}
            </p>

            <div className="flex flex-wrap gap-2 py-4 border-t border-gray-100 animate-fade-in-down justify-center text-center">
                {technologies.map((tech, index) => (
                    <span 
                        key={index} 
                        className="bg-white text-blue-700 text-[10px] font-bold px-2 py-1 rounded-md border border-blue-200 shadow-sm uppercase tracking-wider"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            
            <div className="border-t border-gray-50 pt-5">
                <a 
                    href={projectLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-xl transition-colors duration-200"
                >
                    <FaGithub className="text-lg" /> 
                    <span>View on GitHub</span>
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;