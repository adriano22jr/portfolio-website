function Home() {
    return (
        <div className="container my-5">
            <div className="text-center mb-5">
                <h1 className="fw-bold">Hi, I'm <span className="text-primary">Adriano Emanuele Califano</span></h1>
                <h4 className="text-muted">Computer Science Master's Student • Developer</h4>
                <p className="mt-3 text-secondary">
                    I specialize in <strong>cloud computing</strong> and <strong>serverless architectures</strong>, and I also develop and work with <strong>AI models</strong>.<br />I’m currently working on a mix of personal and academic projects. Feel free to explore my portfolio!
                </p>
            </div>

            <div className="mb-5">
                <h2 className="fw-bold mb-3 text-center">🙋 About Me</h2>
                <p className="lead text-center text-secondary mx-auto">
                    I'm a passionate Computer Science student with a strong interest in <strong>cloud technologies</strong>, 
                    <strong> serverless architectures</strong>, and <strong>AI models</strong>.  
                    Beyond academics, I enjoy building creative projects, exploring new technologies, and continuously challenging myself.  
                    I believe in combining technical expertise with creativity to make a real impact and to combine several disciplines of computer science in order to solve complex problems, particularly in the realm of AI and cloud computing.
                </p>
            </div>

            <div className="mb-5">
                <h2 className="fw-bold mb-4 text-center">📚 Education</h2>
                <div className="timeline position-relative ms-4">

                    <div className="timeline-item mb-4 position-relative">
                        <div className="timeline-dot bg-success"></div>
                        <div className="timeline-content ps-4">
                            <h5 className="fw-bold">BSc in Computer Science</h5>
                            <p className="text-muted mb-1">Università degli Studi di Salerno — <em>Sept 2020 - Oct 2023</em></p>
                            <p>Focus on algorithms, databases, web development, operating systems, software engineering and development methodologies.</p>
                            <p><strong>Final Grade: </strong> 110/110 cum laude</p>
                        </div>
                    </div>

                    <div className="timeline-item mb-4 position-relative">
                        <div className="timeline-dot bg-primary"></div>
                        <div className="timeline-content ps-4">
                            <h5 className="fw-bold">MSc in Computer Science - Cloud Computing</h5>
                            <p className="text-muted mb-1">Università degli Studi di Salerno — <em>Oct 2023 - Present</em></p>
                            <p>Specializing in cloud computing, AI models and other technologies.</p>
                        </div>
                    </div>

                    <div className="timeline-item mb-4 position-relative">
                        <div className="timeline-dot bg-warning"></div>
                        <div className="timeline-content ps-4">
                            <h5 className="fw-bold">Erasmus Traineeship+</h5>
                            <p className="text-muted mb-1">Jheronimus Academy of Data Science, 's-Hertogenbosch — <em>Mar 2025 - Jun 2025</em></p>
                            <p>Erasmus project carried out as an extracurricular activity for the completion of the master's thesis project.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="mb-5 text-center">
                <h2 className="fw-bold mb-4">🗣 Language Skills</h2>
                <div className="d-flex justify-content-center gap-5 flex-wrap">

                    <div>
                        <h5 className="fw-bold mb-1">Italian</h5>
                        <p className="text-muted mb-0"><em>Mother tongue</em></p>
                    </div>

                    <div>
                        <h5 className="fw-bold mb-1">English</h5>
                        <p className="text-muted mb-1">FCE Certificate — B2 level (Score: 168)</p>
                    </div>
                </div>
            </div>

            <div className="mb-5">
                <h2 className="fw-bold mb-3 text-center">✨ Technology & Research</h2>
                <p className="text-secondary text-center mx-auto" style={{ maxWidth: "800px" }}>
                    My academic path led me to explore the intersection between <strong>cloud computing</strong> and <strong>data science</strong>.  
                    I'm fascinated by the possibilities of <strong>serverless architectures</strong> and how distributed systems can be designed 
                    to operate efficiently at scale. I enjoy experimenting with <strong>crawlers</strong>, <strong>knowledge graphs</strong>, 
                    and applying <strong>machine learning</strong> to real-world problems.
                </p>
            </div>

            <div className="mb-5">
                <h2 className="fw-bold mb-3 text-center">🎶 Creativity & Personal Growth</h2>
                <p className="text-secondary text-center mx-auto" style={{ maxWidth: "800px" }}>
                    Outside the academic and professional world, I find balance through <strong>music</strong> and <strong>sports</strong>.  
                    Playing guitar and piano helps me channel creativity, while volleyball keeps me grounded in teamwork and discipline.  
                    These passions shape not only my personal growth but also my approach to problem-solving in technology.
                </p>
            </div>

            <div className="mb-5">
                <h2 className="fw-bold mb-3 text-center">🌍 My Interests</h2>
                <div className="row text-center">
                    <div className="col-md-4 mb-3">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">💻 Technology</h5>
                                <p className="card-text">I'm passionate about technology in general, especially in pc/console hardware and software.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">🎮 Gaming</h5>
                                <p className="card-text">I enjoy playing video games of various genres, with a particular focus on soulslike games, sport and story-driven ones.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">🏐 Sports</h5>
                                <p className="card-text">Volleyball enthusiast, which I practice regularly to stay active and competitive.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
