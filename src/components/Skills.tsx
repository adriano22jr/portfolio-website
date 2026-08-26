import SkillCard, { type SkillCategory } from './SkillCard';

export default function Skills() {
    const skillCategories: SkillCategory[] = [
        {
            category: "Programming Languages",
            skills: ["Python", "Java", "C", "C++", "TypeScript", "JavaScript"],
            description: "Strong knowledge of various programming languages with Python as primary language, used across cloud automation, AI/ML development, and general-purpose scripting. Experience in building microservices with Java Spring Boot and FastAPI, type-safe mobile applications and websites with TypeScript, low-level system modules in C and distributed applications in Java."
        },
        {
            category: "Backend & API Architecture",
            skills: ["Flask", "Django", "Spring Boot", "FastAPI", "GraphQL", "Node.js"],
            description: "Designing robust server-side logic and scalable architectures. Proficient in building flexible data fetching with GraphQL and standardizing communication through RESTful APIs."
        },
        {
            category: "Cloud & Databases",
            skills: ["PostgreSQL", "SQL", "MongoDB", "Microsoft Azure", "NoSQL", "DBEaver"],
            description: "Managing scalable data storage and cloud infrastructure. Experienced with relational systems like PostgreSQL and containerization for consistent deployment environments."
        },
        {
            category: "Data Science & AI",
            skills: ["PyTorch", "Pandas", "Matplotlib", "Scikit-learn", "Keras", "TensorFlow", "NetworkX"],
            description: "Analyzing complex datasets and engineering Machine Learning models. Experienced in data visualization with Matplotlib and training neural networks for predictive insights."
        },
        {
            category: "CI/CD & Automation",
            skills: ["GitHub Actions", "GitLab CI/CD", "Azure DevOps", "Jenkins", "Rancher", "Docker", "Kubernetes"],
            description: "Automating software delivery pipelines to ensure rapid and reliable deployments. Experienced in building continuous integration workflows with modern platforms like GitHub Actions and Azure DevOps, alongside foundational knowledge of Jenkins."
        },
        {
            category: "Frontend & Mobile",
            skills: ["React", "React Native", "Tailwind CSS", "HTML5", "CSS3"],
            description: "Crafting modern and responsive interfaces for both web and mobile platforms. Specialized in building cross-platform apps with React Native and utility-first web designs."
        },
        {
            category: "Design & Collaboration",
            skills: ["Figma", "Git", "GitHub", "Slack", "Microsoft Teams"],
            description: "Collaborating effectively in professional environments. Using Figma for UI/UX handoff and leveraging modern communication tools to maintain high-velocity team workflows."
        }
    ];

    return (
        <div className="mx-auto px-8 max-w-8xl py-12">
            <div className="border-b border-slate-200 pb-8 mb-8 animate-fade-in-down">
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    <span className="bg-clip-text text-zinc-900">Technical Skills & Expertise</span>
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                    Here’s a curated overview of the technologies I work with daily, spanning full-stack development, cloud infrastructure and AI/ML.
                </p>
            </div>

            <div className="flex flex-col gap-4">
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