import SkillCard, { type SkillCategory } from './SkillCard';

export default function Skills() {
    const skillCategories: SkillCategory[] = [
        {
            category: "Programming Languages",
            skills: ["Python", "TypeScript", "JavaScript", "C", "C++", "Java", "SQL"],
            description: "Strong knowledge of various programming languages. Experience in developing Python scripts, type-safe mobile applications and websites with TypeScript, low-level system modules in C, distributed applications in Java and relational queries using SQL."
        },
        {
            category: "Frontend & Mobile",
            skills: ["React", "React Native", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
            description: "Crafting modern, responsive interfaces for both web and mobile platforms. Specialized in building cross-platform apps with React Native and utility-first web designs."
        },
        {
            category: "Backend & API Architecture",
            skills: ["Django", "Flask", "Spring Boot", "GraphQL", "REST API", "Node.js"],
            description: "Designing robust server-side logic and scalable architectures. Proficient in building flexible data fetching with GraphQL and standardizing communication through RESTful APIs."
        },
        {
            category: "Data Science & AI",
            skills: ["PyTorch", "Pandas", "Matplotlib", "Scikit-learn", "Keras", "TensorFlow"],
            description: "Analyzing complex datasets and engineering Machine Learning models. Experienced in data visualization with Matplotlib and training neural networks for predictive insights."
        },
        {
            category: "Cloud & Databases",
            skills: ["PostgreSQL", "MySQL", "MongoDB", "Azure", "AWS", "Docker"],
            description: "Managing scalable data storage and cloud infrastructure. Experienced with relational systems like PostgreSQL and containerization for consistent deployment environments."
        },
        {
            category: "CI/CD & Automation",
            skills: ["GitHub Actions", "GitLab CI/CD", "Azure DevOps", "Jenkins"],
            description: "Automating software delivery pipelines to ensure rapid and reliable deployments. Experienced in building continuous integration workflows with modern platforms like GitHub Actions and Azure DevOps, alongside foundational knowledge of Jenkins."
        },
        {
            category: "Design & Collaboration",
            skills: ["Figma", "Git", "GitHub", "Slack", "Microsoft Teams"],
            description: "Collaborating effectively in professional environments. Using Figma for UI/UX handoff and leveraging modern communication tools to maintain high-velocity team workflows."
        }
    ];

    return (
        <div className="container mx-auto px-6 max-w-6xl py-12">
            <div className="text-center mb-12 animate-fade-in-down">
                <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
                    <span className="bg-clip-text text-zinc-900">Technical Skills & Expertise</span>
                </h2>
                <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-2xl">
                    Here’s an overview of my technical skills and tools I regularly work with. They cover programming, cloud computing, data analysis, and development tools.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {skillCategories.map((cat, index) => (
                    <SkillCard 
                        key={index} 
                        cat={cat} 
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