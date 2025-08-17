import "../assets/main.css"
import cvFile from "../assets/cv.pdf";

interface Props {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

function Navbar({activeSection, setActiveSection}: Props) {
    const nav_items = ["Home", "Skills", "Projects", "Contacts"];

    const handleNavClick = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <nav className="navbar bg-dark navbar-expand-lg navbar-dark fixed-top">
                <div className="container-fluid bg-dark">
                    <a className="navbar-brand text-light" href="#">Adriano Emanuele Califano</a>
                    
                        
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            { nav_items.map((item) => (<a className={`nav-link text-light ${activeSection === item.toLowerCase() ? "active" : ""}`} aria-current="page" key={item} onClick={() => handleNavClick(item.toLowerCase())} href="#">{item}</a>) )}

                            <a href={cvFile} download className="btn btn-dark d-flex align-items-center justify-content-center gap-2 ms-3"
                              style={{
                                backgroundColor: "#343a40",
                                color: "white",
                                border: "1px solid #343a40",
                                transition: "all 0.2s"
                            }}>Download CV</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;