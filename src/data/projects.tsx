import type { ReactNode } from "react";

export interface Project {
  name: string;
  date: string;
  description: ReactNode;
  technologies: string[];
  link: string;
}

export const projects: Project[] = [
  {
    name: "Serverless Crawling on Dark Web",
    date: "March 2025 - March 2026",
    description: (
      <>
        <strong>Design</strong>, <strong>development</strong> and{" "}
        <strong>deployment</strong> of a <strong>serverless crawler</strong>{" "}
        built on <strong>Microsoft Azure</strong>, capable of navigating and
        extracting data from <strong>dark web</strong> pages through the{" "}
        <strong>Tor</strong> network. The system was architected around{" "}
        <strong>Azure Durable Functions</strong> to orchestrate the crawling
        pipeline in a scalable, event-driven fashion, with data persisted
        across <strong>Cosmos DB</strong> and <strong>Azure SQL</strong>. The
        core objective of the project was to evaluate the feasibility and
        performance of a <strong>serverless architecture</strong> for
        large-scale crawling tasks, benchmarking it against a traditional{" "}
        <strong>on-premise</strong> implementation in terms of cost,
        scalability, and execution time.
      </>
    ),
    technologies: [
      "Python", "Docker", "Flask", "Git", "Tor", "Azure Durable Functions",
      "Azure Storage", "Azure Container Registry", "Azure Cosmos DB",
      "Azure SQL", "Azure VNet", "Azure App Service"
    ],
    link: "https://github.com/adriano22jr/crator-web"
  },
  {
    name: "Classical-Quantum NLP",
    date: "March 2023 - September 2023",
    description: (
        <>
        Study and experimentation with <strong>Quantum Natural Language
        Processing (QNLP)</strong> techniques using the{" "}
        <strong>Lambeq</strong> library, applied to the{" "}
        <strong>binary classification</strong> of{" "}
        <strong>security-related non-functional requirements (NFRs)</strong>.
        The project involved studying and benchmarking Lambeq's
        functionalities, then comparing <strong>classical</strong> models
        against <strong>quantum</strong> ones across different
        hyperparameter combinations. Classical models achieved more
        consistent results (50–55% on the best configuration), while quantum
        models were less stable, scoring around 30% with occasional peaks up
        to 70%.
        </>
    ),
    technologies: ["Python", "scikit-learn", "Lambeq", "Qiskit", "NumPy", "Pandas", "Docker"],
    link: "https://github.com/adriano22jr/Tesi-Quantum-NLP"
    },
  {
    name: "Notepad-AI",
    date: "February 2024 - March 2024",
    description: (
      <>
        Notepad-AI is an online <strong>note-taking</strong> cloud platform
        entirely based on <strong>Microsoft Azure</strong> infrastructure.
        Users can register and immediately create notes in classic format or
        using <strong>Markdown</strong> and <strong>HTML</strong> syntax.
        The platform also integrates <strong>AI-based services</strong> —{" "}
        <strong>text summarization</strong>,{" "}
        <strong>text translation</strong>, and{" "}
        <strong>text generation</strong> — to enhance the study and research
        experience, with the ability to export notes locally.
      </>
    ),
    technologies: [
      "Python", "Flask", "Git", "Docker", "CI/CD Pipelines",
      "Azure App Service", "Azure Storage", "Azure-AI", "Azure-KeyVault"
    ],
    link: "https://github.com/adriano22jr/Notepad-AI"
  },
  {
    name: "SYCL-Bench (DPCTL Integration)",
    date: "November 2025 - January 2026",
    description: (
      <>
        Integration and testing of the <strong>DPCTL</strong> Python library
        within the <strong>SYCL Benchmark Suite</strong>, aimed at creating a
        high-level entry point for <strong>GPU benchmarking</strong>. The
        core contribution was a <strong>compatibility layer</strong> between
        DPCTL, Python, and the sycl-bench C++ library, built with{" "}
        <strong>pybind11</strong>, enabling sycl-bench's C++ benchmarks and
        tools to be converted into fully usable{" "}
        <strong>Python modules</strong>.
      </>
    ),
    technologies: [
      "Python", "C++", "SYCL", "dpctl", "pybind11", "IntelONE API",
      "Git", "CMake", "Linux/Shell Scripting"
    ],
    link: "https://github.com/adriano22jr/sycl-bench"
  },
  {
    name: "Light-Field Compression",
    date: "November 2024 - February 2025",
    description: (
      <>
        Comparative analysis between traditional{" "}
        <strong>data compression</strong> techniques and{" "}
        <strong>Principal Component Analysis</strong>,{" "}
        <strong>Singular Value Decomposition</strong>, and{" "}
        <strong>CNNs</strong>, applied to{" "}
        <strong>Light-Field Images</strong>. The project compared standard
        video codecs — <strong>AV1</strong>, <strong>HEVC</strong>, and
        others — against these more modern approaches, evaluating their
        respective strengths and potential applications.
      </>
    ),
    technologies: [
      "Python", "C++", "Docker", "CMake", "NumPy", "scikit-learn",
      "TensorFlow/Keras", "OpenCV", "Pandas"
    ],
    link: "https://github.com/adriano22jr/light-field-compression"
  },
  {
    name: "MedGraph",
    date: "June 2024 - July 2024",
    description: (
      <>
        MedGraph is a project aimed at applying{" "}
        <strong>Knowledge Graphs</strong>{" "}
        in the domain of biomedical papers. To achieve this goal, MedGraph leverages{" "}
        <strong>Named Entity Recognition (NER)</strong>{" "}
        technologies to identify and classify entities mentioned in the
        abstracts of biomedical papers. These entities, along with their
        connections, are then represented in a knowledge graph. The
        resulting graph not only facilitates the understanding of existing
        relationships between the papers but also allows for interactive
        and dynamic exploration of the data through a dedicated web app.
      </>
    ),
    technologies: [
      "Python", "spaCy", "scikit-learn", "NetworkX", "Neo4j",
      "Matplotlib", "Hugging Face", "Flask"
    ],
    link: "https://github.com/adriano22jr/MedGraph"
  },
  {
  name: "Graph pagerank analysis",
  date: "December 2023 - January 2024",
  description: (
    <>
      Development of a tool for building <strong>citation graphs</strong>{" "}
      from a dataset of <strong>18,770 research papers</strong> (extracted
      from <strong>Scopus</strong>), applying{" "}
      <strong>PageRank</strong> to rank papers by relevance within the
      network. The tool also supports <strong>subgraph generation</strong>{" "}
      to trace the citation history of a given paper, and a{" "}
      <strong>Flask</strong> web app with <strong>vis.js</strong> for
      interactive graph exploration. As an extension, a{" "}
      <strong>Semantic PageRank</strong> variant was implemented, using a{" "}
      <strong>BERT-based</strong> sentence transformer to compute{" "}
      <strong>cosine similarity</strong> between paper titles and weight
      graph edges accordingly, comparing its ranking behavior against
      classic PageRank.
    </>
  ),
  technologies: ["NetworkX", "Pandas", "Matplotlib", "Docker", "BeautyfulSoup4", "Flask"],
  link: "https://github.com/adriano22jr/graph-pagerank-analysis"
},
{
  name: "DSD+",
  date: "February 2024 - March 2024",
  description: (
    <>
      DSD+ extends <strong>DSD (Data Smell Detection)</strong>, a{" "}
      <strong>rule-based</strong> tool built on{" "}
      <strong>Great Expectations</strong> for identifying{" "}
      <strong>data smells</strong> in datasets. The project introduced two
      new smell detectors — <strong>Spacing</strong> and{" "}
      <strong>Special Character</strong> — implemented as custom
      regex-based expectations, and added a mechanism for calculating{" "}
      <strong>Data Quality Dimension metrics</strong> (Completeness,
      Uniqueness, Validity) derived directly from detected smells. The
      reporting system was also redesigned to support dataset{" "}
      <strong>grouping</strong>, historical <strong>trend charts</strong>{" "}
      of the computed metrics, and per-column smell breakdowns. All
      additions were validated with dedicated test suites and applied to
      real-world datasets (e.g. SF Salaries, Chicago Food Inspections, The
      Met's open collection).
    </>
  ),
  technologies: ["Pandas", "SQLAlchemy", "Django", "Docker", "Great Expectations"],
  link: "https://github.com/CpDant/DSD-plus"
}
];