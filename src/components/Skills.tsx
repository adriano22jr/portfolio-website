import GitHubLanguageChart from "./GitHubLanguageChart";

function Skills() {
    const skillCategories = [
        {
            category: "Programming Languages",
            skills: ["Python", "TypeScript", "JavaScript", "C", "Java"]
        },
        {
            category: "Frontend & UI",
            skills: ["React", "Bootstrap", "HTML", "CSS"]
        },
        {
            category: "Cloud & DevOps",
            skills: ["Microsoft Azure", "Amazon Web Services", "Docker"]
        },
        {
            category: "Data & AI",
            skills: ["pytorch", "pandas", "scikit-learn", "keras", "tensorflow"]
        },
        {
            category: "Tools & Version Control",
            skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"]
        },
        {
            category: "Database Management Systems",
            skills: ["MySQL", "MongoDB", "Cosmos DB", "DynamoDB"]
        }
    ];

    return (
        <div className="container my-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold mb-4">🛠 Skills</h2>
                <p className="text-secondary mx-auto" style={{ maxWidth: "800px" }}>
                    Here’s an overview of my technical skills and tools I regularly work with. 
                    They cover programming, cloud computing, data analysis, and development tools.
                </p>
            </div>

            <div className="row justify-content-center">
                {skillCategories.map((cat, index) => (
                    <div key={index} className="col-md-6 mb-4">
                        <div className="card h-100 shadow-sm border p-3 text-center">
                            <h5 className="fw-bold">{cat.category}</h5>
                            <div className="d-flex flex-wrap justify-content-center gap-2 mb-2">
                                {cat.skills.map((skill, idx) => (
                                    <span key={idx} className="badge bg-primary">{skill}</span>
                                ))}
                            </div>
                            <p className="small text-muted">
                                {cat.category === "Programming Languages" && "Experience writing clean, maintainable code in multiple languages."}
                                {cat.category === "Frontend & UI" && "Building responsive and interactive web interfaces."}
                                {cat.category === "Cloud & DevOps" && "Deploying scalable applications on cloud platforms with CI/CD."}
                                {cat.category === "Data & AI" && "Analyzing data, building ML models, and working with AI pipelines."}
                                {cat.category === "Tools & Version Control" && "Using essential development tools to maintain projects efficiently."}
                                {cat.category === "Database Management Systems" && "Managing and querying databases for application data storage."}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-5">
                <GitHubLanguageChart />
            </div>
        </div>
    );
}

export default Skills;
