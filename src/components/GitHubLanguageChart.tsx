import githubLangStats from "../githubLangStats.json";

const colorPalette = [
  "#f1e05a", // yellow (JavaScript)
  "#3572A5", // blue (Python)
  "#e34c26", // red (HTML)
  "#563d7c", // purple (CSS)
  "#c6538c", // pink (LaTeX)
  "#6f42c1", // violet
  "#b07219", // brown
  "#2b7489", // teal
  "#000000"  // black fallback
];

function GitHubLanguageBar() {
  const totalBytes = Object.values(githubLangStats).reduce((sum, val) => sum + val, 0);

  const excludeLangs = ["Ruby", "Procfile", "Batchfile", "Shell"];

  const languages = Object.entries(githubLangStats)
    .filter(([lang]) => !excludeLangs.includes(lang))
    .map(([lang, bytes], i) => ({
      lang,
      percent: ((bytes / totalBytes) * 100),
      color: colorPalette[i % colorPalette.length]
    }));

  return (
    <div>
      <div className="d-flex w-100" style={{ height: "10px", overflow: "hidden", borderRadius: "5px", backgroundColor: "#e9ecef" }}>
        {languages.map((lang, i) => (
          <div
            key={i}
            style={{
              width: `${lang.percent}%`,
              backgroundColor: lang.color,
              transition: "width 0.5s"
            }}
            title={`${lang.lang}: ${lang.percent.toFixed(2)}%`}
          />
        ))}
      </div>

      <div className="mt-2 d-flex flex-wrap">
        {languages.map((lang, i) => (
          <div key={i} className="d-flex align-items-center me-3 mb-1">
            <span style={{
              display: "inline-block",
              width: "15px",
              height: "15px",
              backgroundColor: lang.color,
              marginRight: "5px",
              borderRadius: "3px"
            }} />
            <span>{lang.lang} ({lang.percent.toFixed(2)}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GitHubLanguageBar;
