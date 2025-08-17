import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import "./assets/main.css"

function App() {
    const [activeSection, setActiveSection] = useState("home");

    const renderSection = () => {
        switch(activeSection){
            case "home": return <Home />;
            case "skills": return <Skills />;
            case "projects": return <Projects />;
            case "contacts": return <Contacts />;
            default: return <Home />;
        }
    };

    return (
        <>
            <div style={{ paddingBottom: "60px" }}>
                <Navbar activeSection = {activeSection} setActiveSection = {setActiveSection} />
                <div style={{ height: '50px' }}></div> 
                <div className="container my-4">
                    {renderSection()}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App;