import { FaGithub } from "react-icons/fa";

interface Props {
    projectName: string;
    projectDescription: string;
    technologies: string[];
    projectLink: string;
}

function ProjectCard({ projectName, projectDescription, technologies, projectLink }: Props) {
    return (
        <div className="card h-100 shadow-sm rounded border">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-center mb-3">{projectName}</h5>
                <p className="card-text text-secondary flex-grow-1 text-center">{projectDescription}</p>
                <div className="mt-3 text-center">
                    <h6 className="fw-bold mb-2">Technologies:</h6>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                        {technologies.map((tech, index) => (
                            <span key={index} className="badge bg-primary">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="card-footer bg-white border-0 text-center">
                <a 
                    href={projectLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-dark d-flex align-items-center justify-content-center gap-2 w-100"
                    style={{ transition: "all 0.2s" }}
                >
                    <FaGithub /> View on GitHub
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;
