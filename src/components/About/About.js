import "./About.css";
import { useInView } from "../../hooks/useInView";
import { Link } from "react-scroll";

const highlights = [
  { label: "M.S. Computer Science", sub: "Georgia Tech · Machine Learning" , color: "#C4546A" },
  { label: "Quantitative Finance",  sub: "CPP Investments · CCL · BofA",    color: "#3D5A80" },
  { label: "Tinkerer",         sub: "Side Projects · Courses · Podcasts ",     color: "#2E80AA" },
];

function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="about-section">
      <div className="section-container" ref={ref}>
        <div className={`section-header fade-up ${inView ? "visible" : ""}`}>
          <span className="section-tag">About</span>
          <div className="section-divider" />
        </div>

        <div className="about-layout">
          <div className={`about-text fade-up fade-up-delay-1 ${inView ? "visible" : ""}`}>
            <p>
              I'm a Computer Science graduate from {" "}
              <a href="https://omscs.gatech.edu/" className="about-link">Georgia Tech</a>{" "}
              where I focused on machine learning and interactive intelligence. The courses were a ride from the basics of data-driven learning methods 
              to the most novel deep learning architectures. The program also allowed me to seek out ways to apply the theory I was learning
              to challenging engineering problems, from building an AI teaching assistant to writing software for a device that dispensed animal vaccines.
            </p>
            <p>
              Before grad school, I studied finance at the {" "}
              <a href="https://mybcom.sauder.ubc.ca/courses-money-enrolment/options/finance" className="about-link">University of British Columbia</a>
              {" "}and pursued opportunities at the intersection of investing and technology, from
              selling equities on the trading floor at Bank of America to working as a data & process engineer on the
              quantitative investing team at {" "}<a href="https://cclinvest.cclgroup.com/" className="about-link">Connor, Clark & Lunn</a>.
            </p>
            <p>
              I enjoy thinking about how technology can be applied to improving people's lives and protecting our planet.
              Putting my thoughts into practice has resulted in <Link to="portfolio" className="about-link">side projects</Link> that have explored automated cancer detection, supporting disaster relief through
              deep learning powered satellite image segmentation and creating simple productivity tools.
            </p>
            <p>
              When I'm not at a computer, you can find me in nature (usually on a bike or skis), listening to a podcast, baking bread or playing Chopin on the piano.{" "}
              I particularly love sharing things that I get enjoyment from or teach me something new, check out <Link to="thegoods" smooth offset={-80} duration={500} className="about-link">the goods</Link> below!
            </p>
          </div>

          <div className={`about-highlights fade-up fade-up-delay-2 ${inView ? "visible" : ""}`}>
            {highlights.map(({ label, sub, color }) => (
              <div
                key={label}
                className="about-highlight-card"
                style={{ borderLeftColor: color }}
              >
                <span className="highlight-label">{label}</span>
                <span className="highlight-sub">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
