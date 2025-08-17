function Contacts() {
    const contactButtons = [
        {
            href: "mailto:califanoadriano22@gmail.com",
            icon: "bi bi-envelope-fill",
            label: "Email"
        },
        {
            href: "https://github.com/adriano22jr",
            icon: "bi bi-github",
            label: "GitHub"
        },
        {
            href: "https://www.linkedin.com/in/adriano-califano/",
            icon: "bi bi-linkedin",
            label: "LinkedIn"
        }
    ];

    return (
        <div className="container my-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold mb-4">📬 Contacts</h2>
                <p className="text-secondary mx-auto" style={{ maxWidth: "700px" }}>
                    Feel free to reach out for collaborations, opportunities, or just a friendly chat!
                </p>
            </div>

            <div className="row justify-content-center">
                {contactButtons.map((btn, index) => (
                    <div key={index} className="col-md-3 mb-3">
                        <a
                            href={btn.href}
                            target={btn.href.startsWith("http") ? "_blank" : undefined}
                            rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="btn btn-dark d-flex align-items-center justify-content-center gap-2 w-100 shadow-sm"
                            style={{ minHeight: "50px", transition: "all 0.2s" }}
                        >
                            <i className={`${btn.icon} fs-4`}></i>
                            <span className="fw-bold">{btn.label}</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contacts;
