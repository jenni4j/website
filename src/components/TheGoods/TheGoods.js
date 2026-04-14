import { useInView } from "../../hooks/useInView";
import "./TheGoods.css";

const categories = [
  {
    emoji: "👩‍🏫",
    title: "Courses",
    blurb:
      "These are courses that I have worked through and have made an impact on me.",
    items: [
      { text: "Anything by Sebastian Raschka, but in particular Deep Learning Fundamentals", url: "https://lightning.ai/courses/deep-learning-fundamentals/" },
      { text: "Alignment Research Engineer Accelerator Curriculum", url: "https://www.arena.education/curriculum" },
      { text: "CS336: Language Modeling from Scratch from Stanford", url: "https://stanford-cs336.github.io/spring2025/" },
      { text: "Introduction to ML Safety from CSAIL, an interactive introduction to AI alignment", url: "https://course.mlsafety.org/" },
      { text: "Grokking the System Design Interview", url: "https://www.designgurus.io/course/grokking-the-system-design-interview" },
      { text: "How To Solve It With Code, or anything by Jeremy Howard", url: "https://solve.it.com/" }
    ],
    cardBg: "#F8EFF4",
    accent: "#C87FA4",
  },
  {
    emoji: "🎙️",
    title: "Podcast Picks",
    blurb: "Usually have something in my ears; here are some episodes I keep coming back to.",
    items: [
      { text: "Boyd Varty - The Art of Tracking from Invest Like the Best", url: "https://www.joincolossus.com/episodes/37418582/varty-the-art-of-tracking" },
      { text: "Ed Thorp - A Man for All Markets from Founders", url: "https://www.founderspodcast.com/episodes/93-ed-thorp-a-man-for-all-markets" },
      { text: "Discovering Your Hidden Genius with Polina Pompliano from We Study Billionaires", url: "https://www.theinvestorspodcast.com/episodes/discovering-your-hidden-genius-w-polina-pompliano/" },
      { text: "Josh Kushner - Building Thrive Capital from Invest Like the Best", url: "https://colossus.com/episode/kushner-building-thrive-capital/" },
      { text: "Kevin Kelly - Excellent Advice for Living from The Knowledge Project", url: "https://fs.blog/knowledge-project-podcast/kevin-kelly/" },
    ],
    cardBg: "#EEF2F8",
    accent: "#3D5A80",
  },
  {
    emoji: "📚",
    title: "Favorite Reads",
    blurb: "I'm an absolute pro at starting a book and not finishing it, but these are ones I couldn't put down.",
    items: [
      { text: "Man's Search for Meaning - Viktor E. Frankl" },
      { text: "Broken Money - Lyn Alden" },
      { text: "The Pleasure of Finding Things Out - Richard P. Feynman" },
      { text: "Ender's Game - Orson Scott Card" },
      { text: "Our Mathematical Universe - Max Tegmark" },
      { text: "Sum: Forty Tales from the Afterlives - David Eagleman" },
    ],
    cardBg: "#F0FDF4",
    accent: "#4A7C59",
  },
];

function TheGoods() {
  const [ref, inView] = useInView();

  return (
    <section id="thegoods" className="thegoods-section">
      <div className="section-container" ref={ref}>
        <div className={`section-header fade-up ${inView ? "visible" : ""}`}>
          <span className="section-tag">The Goods</span>
          <div className="section-divider" />
          <p className="thegoods-subtitle">
            A few things that feed my curiosity - reach out if you want even more recommendations!
          </p>
        </div>

        <div className="goods-grid">
          {categories.map((cat, i) => (
            <GoodsCard key={cat.title} cat={cat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GoodsCard({ cat, index, inView }) {
  const delay = Math.min(index + 1, 5);
  return (
    <div
      className={`goods-card fade-up fade-up-delay-${delay} ${inView ? "visible" : ""}`}
      style={{ "--card-bg": cat.cardBg, "--card-accent": cat.accent }}
    >
      <div className="goods-card-top">
        <span className="goods-emoji">{cat.emoji}</span>
        <h3 className="goods-title" style={{ color: cat.accent }}>{cat.title}</h3>
      </div>
      <p className="goods-blurb">{cat.blurb}</p>
      <ul className="goods-items">
        {cat.items.map((item) => (
          <li key={item.text} className="goods-item">
            <span className="goods-item-dot" style={{ background: cat.accent }} />
            {item.url ? (
              <a href={item.url} target="_blank" rel="noreferrer" className="goods-link" style={{ color: cat.accent }}>
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TheGoods;
