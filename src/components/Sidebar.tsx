import { Mail, Github, Linkedin, ChevronRight, ArrowDownToLine, PanelLeftClose, PanelRightClose } from "lucide-react";
import curriculum  from "../assets/cv.pdf";
import profile_photo from "../assets/pro-pic.jpg";
import "../assets/main.css"

interface Props {
    activeSection: string;
    setActiveSection: (section: string) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

function Sidebar({activeSection, setActiveSection, isOpen, setIsOpen}: Props) {
    const nav_items = ["Home", "Skills", "Projects"];

    const contactButtons = [
        {
            href: "mailto:califanoadriano22@gmail.com",
            icon: Mail,
            label: "Email"
        },
        {
            href: "https://github.com/adriano22jr",
            icon: Github,
            label: "GitHub"
        },
        {
            href: "https://www.linkedin.com/in/adriano-califano/",
            icon: Linkedin,
            label: "LinkedIn"
        }
    ]

    const handleNavClick = (sectionId: string) => {
        setActiveSection(sectionId);
        if (window.innerWidth < 768) setIsOpen(false);
    };

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="fixed top-2 left-2 z-50 p-2.5 bg-zinc-900 text-white hover:bg-zinc-800 hover:cursor-pointer rounded-lg transition-all duration-200" aria-label="Toggle Menu">
                {isOpen ? <PanelLeftClose size={20} /> : <PanelRightClose size={20} />}
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden" onClick={() => setIsOpen(false)}/>
            )}
            
            <aside className={`
                    fixed top-0 left-0 z-40 h-screen w-80 bg-zinc-900 border-r border-zinc-800 p-6 flex flex-col gap-4
                    transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}>
                <div className="flex flex-col items-center justify-center">
                    <img src={profile_photo} alt="Profile picture" className="w-27.5 h-27.5 mt-3 mb-3 rounded-full object-cover"/>
                    <span className="text-lg font-medium text-white">Adriano Emanuele Califano</span>
                    <span className="text-sm font-normal text-zinc-400">Software Developer</span>
                </div>
                
                <nav className="flex flex-col border-t border-b border-zinc-800">
                    { nav_items.map((item) => (
                        <a key={item} onClick={() => handleNavClick(item.toLowerCase())} href="#" className={`group flex items-center justify-between px-4 py-2 my-1 font-normal text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all duration-200 ${activeSection === item.toLowerCase() ? "active" : ""}`}>
                            {item}
                            <ChevronRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white" />
                        </a>
                    ))}
                </nav>

                <div className="flex justify-between text-center items-center gap-5 px-2 pb-2">
                    <span className="text-base text-zinc-400 tracking-normal font-medium">Contacts</span>
                    <div className="flex items-center gap-1">
                        {contactButtons.map((btn, index) => (
                            <a
                                key={index}
                                href={btn.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-lg text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all"
                                title={btn.label}
                            >
                                <btn.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
        

                <a href={curriculum} download className="group flex items-center justify-between px-2 py-2 mt-auto font-normal text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all duration-200">
                    My Curriculum
                    <ArrowDownToLine size={20} className="opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-white" />    
                </a>

                <div className="border-t pt-4 border-zinc-800 text-center">
                    <span className="text-sm text-zinc-400 tracking-normal font-medium">© 2026 Adriano Emanuele Califano</span>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;