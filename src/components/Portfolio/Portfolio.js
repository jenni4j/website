import { useInView } from "../../hooks/useInView";
import "./Portfolio.css";
import FloodImage from "./flood-image.jpeg";
import FoxImage from "./fox.jpeg";
import BarImage from "./bar-icon.jpeg";
import CancerImage from "./malignant.jpeg";
import PaperImage from "./paperbot.png";
import NotionImage from "./notion-search.png";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Investly.dev",
    description:
      "Personal investment dashboard developed to assist my own investing process. Used to track my portfolio holdings, analyze stocks and interact with an agent that makes investing as easy as using Claude Code.",
    image: BarImage,
    tags: ["Full-stack", "Typescript", "React"],
    color: "#4A7C59",
    url: "https://github.com/jenni4j/investly",
    liveUrl: "https://investly.dev",
  },
  {
    title: "Real-Time Animal Classification",
    description:
      "Set up a Raspberry Pi to run a pretrained MobileNetV2 model for real-time image classification — part of a multi-discipline project at Georgia Tech. The goal: detect foxes and distribute vaccine biscuits.",
    image: FoxImage,
    tags: ["Image Classification", "Fine-tuning", "Raspberry Pi", "Computer Vision"],
    color: "#C4546A",
    url: "https://github.com/jenni4j/Real-Time-Animal-Classification",
  },
  {
    title: "Flood Detection in Satellite Images",
    description:
      "Deep learning final project: implemented and trained multiple convolutional network architectures to create segmentation maps of flooded areas from satellite imagery.",
    image: FloodImage,
    tags: ["Deep Learning", "Segmentation", "CNN", "PyTorch"],
    color: "#2E80AA",
    url: "https://github.com/jenni4j/Satellite-Flooding-Segmentation",
  },
  {
    title: "PDF ChatBot",
    description:
      "Upload a PDF, ask questions, get answers in real time. Built because reading papers was my life in school and I wanted a better way to interact with them. Stack: React, Python, LangChain.",
    image: PaperImage,
    tags: ["LLM", "RAG", "Langchain", "React", "Python",],
    color: "#245534",
    url: "https://github.com/jenni4j/Research-Paper-Bot",
  },
  {
    title: "Notion Semantic Search",
    description:
      "Keyword search across hundreds of saved Notion links is painful. This tool lets you search by topic and meaning instead. Built with the Cohere API, React, and Python.",
    image: NotionImage,
    tags: ["LLM", "Semantic Search", "Cohere", "Python"],
    color: "#C87FA4",
    url: "https://github.com/jenni4j/Notion-Search-Tool",
  },
  {
    title: "Breast Cancer Auto-Diagnosis",
    description:
      "Kaggle competition submission: experimenting with both CNN and logistic regression models to discriminates malignant from benign lesions in breast ultrasound images.",
    image: CancerImage,
    tags: ["CNN", "Logistic Regression", "Keras", "Scikit-Learn"],
    color: "#5c6bb4",
    url: "https://github.com/jenni4j/Kaggle-Breast-Cancer/",
  },
];

function Portfolio() {
  const [ref, inView] = useInView();

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-container" ref={ref}>
        <div className={`section-header fade-up ${inView ? "visible" : ""}`}>
          <span className="section-tag">Projects</span>
          <div className="section-divider" style={{ background: "linear-gradient(90deg, #2E80AA, #4A7C59)" }} />
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, inView }) {
  const delay = Math.min(index % 3 + 1, 5);

  return (
    <article
      className={`project-card fade-up fade-up-delay-${delay} ${inView ? "visible" : ""}`}
      onClick={() => window.open(project.url, "_blank")}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && window.open(project.url, "_blank")}
    >
      <div className="project-img-wrap" style={{ "--accent": project.color }}>
        <img src={project.image} alt={project.title} className="project-img" />
        <div className="project-overlay">
          <FiExternalLink size={24} color="#fff" />
        </div>
      </div>
      <div className="project-body">
        <div className="project-tags">
          {project.tags.map((t) => (
            <span key={t} className="project-tag" style={{ color: project.color, background: `${project.color}18` }}>
              {t}
            </span>
          ))}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-links">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            onClick={(e) => e.stopPropagation()}
            style={{ color: project.color }}
          >
            <FiGithub size={15} />
            View on GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link"
              onClick={(e) => e.stopPropagation()}
              style={{ color: project.color }}
            >
              <FiArrowUpRight size={15} />
              Try it
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Portfolio;
