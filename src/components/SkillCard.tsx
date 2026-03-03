import { useState } from 'react';

export interface SkillCategory {
    category: string;
    skills: string[];
    description: string;
}

interface SkillCardProps {
    cat: SkillCategory;
    index: number;
}

const SkillCard = ({ cat, index }: SkillCardProps) => {
    const [showSkills, setShowSkills] = useState<boolean>(false);

    return (
        <div 
            className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up flex flex-col h-full"
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
        >

            <div className="mb-4">
                <h5 className="text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {cat.category}
                </h5>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-6 grow">
                {cat.description}
            </p>

            <div className="text-center mt-auto">
                <button 
                    onClick={() => setShowSkills(!showSkills)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full inline-flex items-center justify-center gap-2"
                >
                    {showSkills ? 'Show Less' : 'Show Skills'}
                    <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${showSkills ? 'rotate-180' : 'rotate-0'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {showSkills && (
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-gray-100 animate-fade-in-down">
                    {cat.skills.map((skill: string, idx: number) => (
                        <span 
                            key={idx} 
                            className="bg-white text-blue-700 text-xs font-semibold px-3 py-1 rounded-md border border-blue-200 shadow-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SkillCard;