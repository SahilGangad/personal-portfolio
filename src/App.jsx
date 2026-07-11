import React from "react";
import { Github, Mail, ExternalLink, Linkedin } from "lucide-react";

const CYAN = "#2AC9DE";

const PROJECTS = [
  {
    name: "Document Q&A over RAG",
    tagline: "Local retrieval-augmented generation pipeline, deployed end to end.",
    stack: "Python · ChromaDB · Groq · Streamlit · Docker",
    detail:
      "PDF ingestion \u2192 chunking \u2192 embeddings \u2192 ChromaDB \u2192 retrieval \u2192 Llama 3 generation via Groq. Deployed on Hugging Face Spaces.",
    finding: "Found & documented 3 failure modes: multi-hop retrieval gaps, quantization non-determinism, silent grounding violations.",
    status: "Live",
    demo: "https://huggingface.co/spaces/sam2103/rag-for-pdfs",
  },
  {
    name: "Predictive Maintenance API",
    tagline: "Failure prediction on industrial sensor data, served over FastAPI.",
    stack: "scikit-learn · XGBoost · FastAPI · Docker · Render",
    detail:
      "Random Forest and XGBoost trained on the AI4I dataset with SMOTE for class imbalance, served through FastAPI and deployed live.",
    finding: "XGBoost beat Random Forest on recall for rare failure classes after resampling.",
    status: "Live",
    demo: "https://predictive-maintenance-e00u.onrender.com",
  },
  {
    name: "AI Image Lab",
    tagline: "Image colorization and background removal, in the browser.",
    stack: "OpenCV · Caffe CNN · rembg · Streamlit",
    detail:
      "A Caffe CNN handles colorization through OpenCV's DNN module; rembg handles background removal.",
    finding: "Deployment quirks (encoding, base OS packages) cost more time than the model code.",
    status: "Live",
    demo: "https://grayscale-image-colorization-using-pretrained-transformers-98r.streamlit.app/",
  },
];

const SKILLS = [
  { group: "LANGUAGES", items: "Python, SQL, C, JavaScript, HTML/CSS" },
  { group: "ML / DL", items: "RAG, scikit-learn, TensorFlow/Keras, NNs, Matplotlib, Pandas, NumPy" },
  { group: "FRAMEWORKS", items: "Django, Flask, Streamlit" },
  { group: "BACKEND", items: "FastAPI, Pydantic, REST APIs" },
  { group: "DEPLOY", items: "Docker, Render, HF Spaces, Streamlit Cloud" },
  { group: "LEARNING", items: "LangChain, LlamaIndex" },
];

const NAV_FONT = "'JetBrains Mono', monospace";
const DISPLAY_FONT = "'Arial Black', Arial, sans-serif";

function SpecRow({ label, value, last, valueColor }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "110px 1fr",
        borderBottom: last ? "none" : "1px solid #111",
        padding: "14px 20px",
      }}
    >
      <span style={{ fontFamily: NAV_FONT, fontSize: 12, color: "#8a8a8a", letterSpacing: "0.02em" }}>{label}</span>
      <span style={{ fontFamily: NAV_FONT, fontSize: 14, fontWeight: 600, color: valueColor || "#111" }}>{value}</span>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div style={{ background: "#fff", color: "#111", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        a { text-decoration: none; }
      `}</style>

      {/* Nav */}
      <div style={{ position: "sticky", top: 0, background: "#fff", zIndex: 999, borderBottom: "2px solid #111" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 34, height: 34, background: "#111", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: NAV_FONT, fontWeight: 700, fontSize: 15 }}>
              SG
            </div>
            <span style={{ fontFamily: NAV_FONT, fontWeight: 700, fontSize: 15, letterSpacing: "0.02em" }}>SAHIL GANGAD</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
            <a href="#work" style={{ color: "#111", fontFamily: NAV_FONT, fontSize: 12.5, fontWeight: 600, letterSpacing: "0.06em" }}>WORK</a>
            <a href="#about" style={{ color: "#111", fontFamily: NAV_FONT, fontSize: 12.5, fontWeight: 600, letterSpacing: "0.06em" }}>ABOUT</a>
            <a href="#skills" style={{ color: "#111", fontFamily: NAV_FONT, fontSize: 12.5, fontWeight: 600, letterSpacing: "0.06em" }}>SKILLS</a>
            <a href="#contact" style={{ color: "#111", fontFamily: NAV_FONT, fontSize: 12.5, fontWeight: 600, letterSpacing: "0.06em" }}>CONTACT</a>
            <a
              href="https://drive.google.com/file/d/1idojuD3WB9nmFqgNY3syEhb3rJh-WwKt/view?usp=drive_link"
              style={{
                background: CYAN,
                color: "#111",
                fontFamily: NAV_FONT,
                fontWeight: 700,
                fontSize: 12.5,
                padding: "10px 16px",
                border: "2px solid #111",
                letterSpacing: "0.04em",
              }}
            >
              RESUME &#8594;
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "64px 24px 56px" }}>
        <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 480px", minWidth: 300 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 22 }}>
              <span style={{ width: 10, height: 10, background: CYAN, display: "inline-block" }} />
              <span style={{ fontFamily: NAV_FONT, fontSize: 12.5, fontWeight: 600, letterSpacing: "0.08em", color: "#333" }}>
                AI/ML ENGINEER &middot; LEARNER &middot; BUILDER
              </span>
            </div>
            <h1 style={{ fontFamily: DISPLAY_FONT, fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1.02, margin: 0, letterSpacing: "-0.01em" }}>
              I BUILD MODELS.
              <br />
              <span style={{ background: CYAN, padding: "2px 8px", display: "inline-block" }}>I SHIP THEM.</span>
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, lineHeight: 1.65, color: "#333", maxWidth: 520, margin: "28px 0 32px" }}>
              Engineering student currently in second-year, building and deploying end-to-end ML systems. Currently
              looking for an AI/ML internship.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="https://drive.google.com/file/d/1idojuD3WB9nmFqgNY3syEhb3rJh-WwKt/view?usp=drive_link" style={{ background: CYAN, border: "2px solid #111", color: "#111", padding: "13px 22px", fontFamily: NAV_FONT, fontWeight: 700, fontSize: 13.5, letterSpacing: "0.03em" }}>
                DOWNLOAD RESUME &#8594;
              </a>
              <a href="#work" style={{ background: "#fff", border: "2px solid #111", color: "#111", padding: "13px 22px", fontFamily: NAV_FONT, fontWeight: 700, fontSize: 13.5, letterSpacing: "0.03em" }}>
                SEE THE WORK &#8595;
              </a>
            </div>
          </div>

          <div style={{ flex: "0 0 320px", width: "100%", maxWidth: 340 }}>
            <div style={{ border: "2px solid #111" }}>
              <div style={{ background: CYAN, padding: "12px 20px", borderBottom: "2px solid #111" }}>
                <span style={{ fontFamily: NAV_FONT, fontWeight: 700, fontSize: 13, letterSpacing: "0.04em" }}>ENGINEER SPEC</span>
              </div>
              <SpecRow label="BASED" value="Mumbai, IN" />
              <SpecRow label="YEAR" value="2nd yr, AI/ML" />
              <SpecRow label="UNIVERSITY" value="Mumbai University" />
              <SpecRow label="STACK" value="Python, APIs, SQL, Machine Learning" />
              <SpecRow label="STATUS" value={<span><span style={{ color: "#0ba360" }}>&#9679;</span> Open to Internship</span>} last />
            </div>
          </div>
        </div>
      </div>

      {/* Work */}
      <div id="work" style={{ scrollMarginTop: "100px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "56px 24px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 36 }}>
            <h2 style={{ fontFamily: DISPLAY_FONT, fontSize: 32, margin: 0 }}>WORK</h2>
            <span style={{ fontFamily: NAV_FONT, fontSize: 12.5, color: "#8a8a8a" }}>/ selected projects</span>
          </div>

          <div>
            {PROJECTS.map((p, i) => (
              <div key={p.name} style={{ padding: "28px 0", display: "flex", gap: 32, flexWrap: "wrap", borderTop: i === 0 ? "none" : "2px solid #111" }}>
                <div style={{ flex: "0 0 60px", fontFamily: NAV_FONT, fontSize: 13, color: "#8a8a8a", paddingTop: 3 }}>
                  0{i + 1}
                </div>
                <div style={{ flex: "1 1 400px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                    <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: 20, fontWeight: 700, margin: 0 }}>{p.name}</h3>
                    <span style={{ fontFamily: NAV_FONT, fontSize: 11, fontWeight: 700, background: CYAN, padding: "2px 8px", border: "1px solid #111" }}>
                      {p.status.toUpperCase()}
                    </span>
                  </div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14.5, color: "#333", margin: "0 0 8px", lineHeight: 1.6 }}>{p.tagline}</p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13.5, color: "#666", margin: "0 0 10px", lineHeight: 1.6 }}>{p.detail}</p>
                  <p style={{ fontFamily: NAV_FONT, fontSize: 12, color: "#111", margin: 0, borderLeft: `3px solid ${CYAN}`, paddingLeft: 10 }}>
                    {p.finding}
                  </p>
                </div>
                <div style={{ flex: "0 0 200px", display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: NAV_FONT, fontSize: 11.5, color: "#8a8a8a" }}>{p.stack}</span>
                  <div style={{ display: "flex", gap: 14, marginTop: 4 }}>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" style={{ fontFamily: NAV_FONT, fontSize: 12, color: "#111", display: "flex", alignItems: "center", gap: 5, fontWeight: 600 }}>
                        DEMO <ExternalLink size={12} />
                      </a>
                    )}
                    <a href="https://github.com/SahilGangad" style={{ fontFamily: NAV_FONT, fontSize: 12, color: "#111", display: "flex", alignItems: "center", gap: 5, fontWeight: 600 }}>
                      CODE <Github size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" style={{ background: "#fafafa", scrollMarginTop: "100px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "56px 24px", display: "flex", gap: 48, flexWrap: "wrap" }}>
          <div style={{ flex: "0 0 160px" }}>
            <h2 style={{ fontFamily: DISPLAY_FONT, fontSize: 32, margin: 0 }}>ABOUT</h2>
          </div>
          <div style={{ flex: "1 1 480px", maxWidth: 640 }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#333", margin: "0 0 16px" }}>
              I'm a second-year AI/ML engineering student based in Mumbai. Most of what
              I've learned has come from finishing projects end to end &mdash; not just
              training a model, but wrapping it in a FastAPI backend, containerizing it
              with Docker, and getting it live on Render or Hugging Face Spaces.
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#333", margin: 0 }}>
              I care more about honest, working systems than polished demos &mdash; my RAG
              project's README documents where it actually fails, not just where it
              works. Currently looking for an AI/ML internship.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div id="skills" style={{ scrollMarginTop: "100px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "56px 24px" }}>
          <h2 style={{ fontFamily: DISPLAY_FONT, fontSize: 32, margin: "0 0 32px" }}>SKILLS</h2>
          <div style={{ border: "2px solid #111" }}>
            {SKILLS.map((s, i) => (
              <div
                key={s.group}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  borderTop: i === 0 ? "none" : "1px solid #111",
                  padding: "16px 20px",
                }}
              >
                <span style={{ fontFamily: NAV_FONT, fontSize: 12.5, fontWeight: 700, color: "#111" }}>{s.group}</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14.5, color: "#444" }}>{s.items}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" style={{ background: "#111", color: "#fff", scrollMarginTop: "100px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "64px 24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 28 }}>
          <div style={{ maxWidth: 500 }}>
            <h2 style={{ fontFamily: DISPLAY_FONT, fontSize: 32, margin: "0 0 14px" }}>LET'S TALK.</h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15.5, color: "#bbb", lineHeight: 1.6, margin: 0 }}>
              Open to AI/ML internships and happy to walk through any project in
              detail &mdash; including what broke and how I fixed it.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: NAV_FONT, fontSize: 13.5 }}>
            <a href="mailto:you@example.com" style={{ color: "#fff", display: "flex", alignItems: "center", gap: 8 }}>
              <Mail size={15} /> sahilgangad21@gmail.com
            </a>
            <a href="https://github.com/SahilGangad" style={{ color: "#fff", display: "flex", alignItems: "center", gap: 8 }}>
              <Github size={15} /> GitHub
            </a>
            <a href="#" style={{ color: "#fff", display: "flex", alignItems: "center", gap: 8 }}>
              <Linkedin size={15} /> linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
