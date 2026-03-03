import { useState } from 'react';
import { FaGithub } from "react-icons/fa";

interface Props {
    projectName: string;
    projectDescription: string;
    technologies: string[];
    projectLink: string;
}

function ProjectCard({ projectName, projectDescription, technologies, projectLink }: Props) {
    const [showTech, setShowTech] = useState<boolean>(false);

    return (
        <div className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
            <div className="mb-4">
                <h5 className="text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {projectName}
                </h5>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-6 grow">
                {projectDescription}
            </p>

            <div className="text-center mt-auto mb-6">
                <button 
                    onClick={() => setShowTech(!showTech)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full inline-flex items-center justify-center gap-2"
                >
                    {showTech ? 'Show Less' : 'Show Technologies'}
                    <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${showTech ? 'rotate-180' : 'rotate-0'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {showTech && (
                <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-gray-100 animate-fade-in-down">
                    {technologies.map((tech, index) => (
                        <span 
                            key={index} 
                            className="bg-white text-blue-700 text-[10px] font-bold px-2 py-1 rounded-md border border-blue-200 shadow-sm uppercase tracking-wider"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}
            
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