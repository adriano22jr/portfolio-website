import { useState } from 'react'
import Sidebar from './components/Sidebar';
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import './assets/main.css'

function App() {
	const [activeSection, setActiveSection] = useState("home");
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const renderSection = () => {
        switch(activeSection){
            case "home": return <Home />;
            case "skills": return <Skills />;
            case "projects": return <Projects />;
            default: return <Home />;
        }
    };
	

	return (
		<div className="flex min-h-screen">
			<Sidebar activeSection = {activeSection} setActiveSection = {setActiveSection} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>
			<main className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? "md:pl-80" : "pl-0"}`}>
				<div className="p-8 pt-24 md:pt-8 min-h-screen flex flex-col">
					<div className="container mx-auto my-auto">
						{renderSection()}
					</div>
				</div>
			</main>
		</div>
	)
}

export default App;
