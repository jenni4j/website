import { useInView } from "../../hooks/useInView";
import "./Experience.css";

const jobs = [
  {
    role: "M.S. Computer Science",
    company: "Georgia Institute of Technology",
    period: "2021 - 2025",
    description:
      "Specialization in Machine Learning and Interactive Intelligence. Coursework spanned deep learning, natural language processing, machine learning for investing, artificial intelligence, computer vision for robotics and software development processes.",
    tag: "Education",
    color: "#C4546A",
  },
  {
    role: "Software Developer - Ed Tech",
    company: "Georgia Tech Design Intelligence Lab",
    period: "2024 - 2025",
    description:
      "Continued development of an AI agent that assisted professors with answering student queries. Improved the retrieval augmented generation (RAG) process and vector embeddings storage, while developing speech and audio capabilities for the agent.",
    tag: "Education",
    color: "#254d91",
  },
  {
    role: "Software Engineer Intern - Ecommerce",
    company: "AbeBooks",
    period: "Spring 2025",
    description:
      "Led the migration of legacy backend components to cloud-based microservices. Contributed to resolving user experience issues across the website stack.",
    tag: "Industry",
    color: "#d37c8d",
  },
  {
    role: "Data Science Intern - Aerospace",
    company: "Boeing",
    period: "Spring 2023",
    description:
      "Developed and evaluated machine learning models to accurately predict aircraft takeoff duration. Improved production tools used to deliver analytical results to clients.",
    tag: "Industry",
    color: "#3b6748",
  },
  {
    role: "Data & Process Engineer - Quantitative Finance",
    company: "Connor, Clark & Lunn Investment Management",
    period: "2017 - 2021",
    description:
      "Built data pipelines and analytical tools to support quantitative equity strategies. Collaborated closely with software developers and researchers to incorporate new signals into quantitative investment model.",
    tag: "Industry",
    color: "#3D5A80",
  },
  {
    role: "Equity Analyst - Sales & Trading",
    company: "Bank of America",
    period: "2015 - 2016",
    description:
      "Pitched sell-side research to institutional clients, working alongside traders and sales teams in a fast-paced environment.",
    tag: "Industry",
    color: "#C87FA4",
  },
  {
    role: "B.Com, Finance",
    company: "University of British Columbia",
    period: "2011 - 2015",
    description:
      "Studied business with a focus on finance and analytics. Graduated with Honors.",
    tag: "Education",
    color: "#4A7C59",
  },
];

function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="experience-section">
      <div className="section-container" ref={ref}>
        <div className={`section-header fade-up ${inView ? "visible" : ""}`}>
          <span className="section-tag">Experience</span>
          <div className="section-divider" style={{ background: "linear-gradient(90deg, #3D5A80, #C4546A)" }} />
        </div>

        <div className="timeline">
          {jobs.map((job, i) => (
            <div
              key={i}
              className={`timeline-item fade-up fade-up-delay-${Math.min(i + 1, 5)} ${inView ? "visible" : ""} ${i % 2 === 0 ? "timeline-item--left" : "timeline-item--right"}`}
            >
              <div className="timeline-dot" style={{ background: job.color }} />
              <div className="timeline-card">
                <span className="timeline-tag" style={{ color: job.color, background: `${job.color}18` }}>
                  {job.tag}
                </span>
                <h3 className="timeline-role">{job.role}</h3>
                <p className="timeline-company">{job.company}</p>
                <p className="timeline-period">{job.period}</p>
                <p className="timeline-desc">{job.description}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
}

export default Experience;
