import ProjectCard from "./ProjectCard";

function Projects() {
    const projects = [
        {
            name: "Serverless Crawling on Dark Web",
            description: "Design, development and deployment of a serverless crawler on Microsoft Azure cloud platform, designed to extract and process data from dark web pages.",
            technologies: ["Python", "Azure Functions", "Durable Functions", "Azure Storage", "Cosmos DB (MongoDB API)", "Tor", "Docker"],
            link: "https://github.com/adriano22jr/crator-web"
        },
        {
            name: "Classical-Quantum NLP",
            description: "Development of classical and quantum binary classiﬁcation models for non-functional requirements with Lambeq python library.",
            technologies: ["scikit-learn", "Lambeq", "Qiskit", "NumPy", "Pandas"],
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
            technologies: ["Python", "spaCy", "scikit-learn", "NetworkX", "Neo4j", "Matplotlib", "Hugging Face"],
            link: "https://github.com/adriano22jr/MedGraph"
        },
        {
            name: "Light-Field Compression",
            description: "Comparative analysis between traditional data compression techniques with Principal Component Analysis, Singular Value Decomposition and CNNs applied in the context of LightField Images.",
            technologies: ["NumPy", "scikit-learn", "TensorFlow/Keras", "OpenCV", "Matplotlib"],
            link: "https://github.com/adriano22jr/light-field-compression"
        },
        {
            name: "Graph pagerank analysis",
            description: "Design and development of a tool for constructing knowledge graphs from paper citations, incorporating PageRank analysis.",
            technologies: ["NetworkX", "Pandas", "Matplotlib"],
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
        }
    ];


    return (
        <div className="container my-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold mb-4">💻 Projects</h2>
                <p className="text-secondary mx-auto" style={{ maxWidth: "800px" }}>
                    Here’s a showcase of projects from my academic path and personal experiments, reflecting my growth and passion for development.
                </p>
            </div>

            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <ProjectCard 
                            projectName={project.name} 
                            projectDescription={project.description} 
                            technologies={project.technologies} 
                            projectLink={project.link} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;