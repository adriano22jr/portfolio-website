function Home() {
    return (
        <div className="bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-100">
            <div className="max-w-5xl mx-auto px-8 py-24">
                <header className="border-b border-slate-200 pb-16 mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                        Adriano Emanuele Califano
                    </h1>
                    <p className="mt-4 text-xl text-blue-600 font-medium">
                        Cloud Systems & Distributed Architectures
                    </p>
                    <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                        <strong className="text-slate-900">MSc Computer Science graduate</strong> specializing in the design of high-availability distributed systems. 
                        I have a deep focus on <span className="text-slate-900 font-medium">Cloud and Serverless Computing</span>, 
                        leveraging <strong>Microsoft Azure</strong> for project deployment. My expertise includes 
                        concurrent and parallel programming, data security, and performance optimization 
                        through advanced algorithms and high-performance computing techniques.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-8 space-y-16"> 
                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Education & Research</h2>
                            <div className="space-y-10">
                                <div className="relative pl-8 border-l border-slate-200">
                                    <span className="absolute -left-1.25 top-1 w-2.25 h-2.25 bg-blue-600 rounded-full"></span>
                                    <div className="flex justify-between items-start flex-wrap gap-2">
                                        <h3 className="text-xl font-bold italic">MSc in Computer Science (Cloud Computing)</h3>
                                        <span className="font-mono text-sm bg-slate-100 px-2 py-1 rounded">2023 — 2026</span>
                                    </div>
                                    <p className="text-slate-700 mt-1 font-medium">Final Grade: 110/110 cum laude</p>
                                    <p className="text-slate-500 mt-2 text-sm">
                                        Advanced studies in cloud computing, distributed systems, and software engineering. Focused on designing scalable serverless architectures and cloud-native applications. Master's thesis on a serverless dark web crawler deployed on Microsoft Azure.
                                    </p>
                                </div>

                                <div className="relative pl-8 border-l border-slate-200">
                                    <span className="absolute -left-1.25 top-1 w-2.25 h-2.25 bg-blue-600 rounded-full"></span>
                                    <div className="flex justify-between items-start flex-wrap gap-2">
                                        <h3 className="text-xl font-bold italic">Erasmus Traineeship+ (Thesis Research)</h3>
                                        <span className="font-mono text-sm bg-slate-100 px-2 py-1 rounded">2025</span>
                                    </div>
                                    <p className="text-slate-700 mt-1 text-sm font-semibold">JADS — 's-Hertogenbosch, Netherlands</p>
                                    <p className="text-slate-500 mt-3 text-sm leading-relaxed">
                                        Erasmus project carried out as an extracurricular activity for the completion of the master's thesis project. The project focused on the design and implementation of a serverless cloud architecture for dark web crawling.
                                    </p>
                                </div>

                                <div className="relative pl-8 border-l border-slate-200">
                                    <span className="absolute -left-1.25 top-1 w-2.25 h-2.25 bg-blue-600 rounded-full"></span>
                                    <div className="flex justify-between items-start flex-wrap gap-2">
                                        <h3 className="text-xl font-bold italic">BSc in Computer Science</h3>
                                        <span className="font-mono text-sm bg-slate-100 px-2 py-1 rounded">2020 — 2023</span>
                                    </div>
                                    <p className="text-slate-700 mt-1 font-medium">Final Grade: 110/110 cum laude</p>
                                    <p className="text-slate-500 mt-2 text-sm">
                                        Strong foundation in algorithms, software engineering, and data management. Thesis on the application of NLP and quantum NLP techniques for classification of security requirements.
                                    </p>
                                </div>

                            </div>
                        </section>

                        <section>
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Engineering Focus</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-6 bg-white border border-slate-200 rounded-sm hover:border-blue-400 transition-colors shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-2">Cloud-Native Architectures</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">Designing resilient systems on Azure with a focus on high availability and scalability.</p>
                                </div>
                                <div className="p-6 bg-white border border-slate-200 rounded-sm hover:border-blue-400 transition-colors shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-2">System Optimization</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">Leveraging parallel programming and compression algorithms to maximize resource efficiency.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className="md:col-span-4 space-y-12">
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Technical Stack</h2>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-mono text-blue-600 mb-1">// Cloud & Distributed</p>
                                    <p className="text-sm text-slate-700 font-medium tracking-tight">
                                        Microsoft Azure, Serverless Computing, Distributed Systems, IoT Cloud Integration
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-blue-600 mb-1">// Parallel & Performance</p>
                                    <p className="text-sm text-slate-700 font-medium tracking-tight">
                                        Concurrent Programming, HPC, Data Compression, Advanced Algorithms
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-blue-600 mb-1">// Backend & AI Engineering</p>
                                    <p className="text-sm text-slate-700 font-medium tracking-tight">
                                        Node.js, Python, Data Security, ML Model Integration
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-slate-200">
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Interests</h2>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Music (Guitar & Piano) and competitive volleyball. 
                                Disciplines that shape my focus on precision and collaborative system performance.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default Home;