import ProjectCard from "./ProjectCard";

function Projects() {
    const projects = [
        {
            name: "Serverless Crawling on Dark Web",
            description: "Design, development and deployment of a serverless crawler on Microsoft Azure cloud platform, designed to extract and process data from dark web pages.",
            technologies: ["Python", "Azure Durable Functions", "Azure Storage", "Azure Container Registry", "Azure Cosmos DB", "Azure SQL", "Azure VNet", "Azure App Service", "Tor", "Docker"],
            link: "https://github.com/adriano22jr/crator-web"
        },
        {
            name: "Classical-Quantum NLP",
            description: "Development of classical and quantum binary classiﬁcation models for non-functional requirements with Lambeq python library.",
            technologies: ["Python", "scikit-learn", "Lambeq", "Qiskit", "NumPy", "Pandas", "Docker"],
            link: "https://github.com/adriano22jr/Tesi-Quantum-NLP"
        },
        {
            name: "Notepad-AI",
            description: "Design and development of an online note-taking cloud platform, entirely based on Microsoft Azure infrastructure.",
            technologies: ["Python", "Flask", "Azure App Service", "Azure Storage", "Azure-AI", "Azure-KeyVault", "JavaScript"],
            link: "https://github.com/adriano22jr/Notepad-AI"
        },
        {
            name: "MedGraph",
            description: "Project focused on applying knowledge graphs to the domain of biomedical literature, leveraging Named Entity Recognition (NER) to identify and classify entities mentioned in paper abstracts.",
            technologies: ["Python", "spaCy", "scikit-learn", "NetworkX", "Neo4j", "Matplotlib", "Hugging Face", "Flask"],
            link: "https://github.com/adriano22jr/MedGraph"
        },
        {
            name: "Light-Field Compression",
            description: "Comparative analysis between traditional data compression techniques with Principal Component Analysis, Singular Value Decomposition and CNNs applied in the context of LightField Images.",
            technologies: ["NumPy", "scikit-learn", "TensorFlow/Keras", "OpenCV", "Matplotlib", "Docker"],
            link: "https://github.com/adriano22jr/light-field-compression"
        },
        {
            name: "Graph pagerank analysis",
            description: "Design and development of a tool for constructing knowledge graphs from paper citations, incorporating PageRank analysis.",
            technologies: ["NetworkX", "Pandas", "Matplotlib", "Docker", "BeautyfulSoup4", "Flask"],
            link: "https://github.com/adriano22jr/graph-pagerank-analysis"
        },
        {
            name: "SoundPy",
            description: "A Python-based soundboard application featuring a default set of popular sounds and support for adding custom audio for a fully personalized experience.",
            technologies: ["Python", "Tkinter", "Wave/Audio libraries"],
            link: "https://github.com/adriano22jr/SoundPy"
        },
        {
            name: "DSD+",
            description: "An open-source tool that detects data issues using rule-based techniques, enhancing reporting, integrating quality metrics, and tracking dataset changes over time.",
            technologies: ["Pandas", "SQLAlchemy", "Django", "Docker"],
            link: "https://github.com/CpDant/DSD-plus"
        },
        {
            name: "SYCL-Bench (DPCTL Integration)",
            description: "Integration and testing of DPCTL Python library on SYCL Benchmark Suite.",
            technologies: ["Python", "C++", "SYCL", "dpctl", "pybind11", "IntelONE API"],
            link: "https://github.com/adriano22jr/sycl-bench"
        }
    ];

    return (
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12 animate-fade-in-down">
                <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
                    <span className="bg-clip-text text-zinc-900">Featured Projects</span>
                </h2>
                <p className="text-lg text-gray-600 mx-auto leading-relaxed">
                    Here’s a showcase of projects from my academic path and personal experiments, reflecting my growth and passion for development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                    >
                        <ProjectCard 
                            projectName={project.name} 
                            projectDescription={project.description} 
                            technologies={project.technologies} 
                            projectLink={project.link} 
                        />
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out;
                }
                .animate-fade-in-down {
                    animation: fadeInDown 0.6s ease-out;
                }
            `}</style>
        </div>
    );
}

export default Projects;