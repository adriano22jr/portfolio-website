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

            <p className="text-sm text-gray-500 leading-relaxed mb-4 grow">
                {cat.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 animate-fade-in-down  justify-center text-center">
                {cat.skills.map((skill: string, idx: number) => (
                    <span 
                        key={idx} 
                        className="bg-white text-blue-700 text-xs font-semibold px-3 py-1 rounded-md border border-blue-200 shadow-sm"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;