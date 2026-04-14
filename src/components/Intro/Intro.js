import React, { useEffect, useState } from "react";
import pic from "./profile-pic.png";
import "./Intro.css";
import { FiMapPin, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

const titles = [
  "Computer Science Graduate",
  "Investing Enthusiast",
  "Nature Lover",
  "Sourdough Baker",
];

function Intro() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const target = titles[titleIndex];
    let timeout;

    if (phase === "typing") {
      if (displayed.length < target.length) {
        timeout = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          60
        );
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1800);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("erasing"), 400);
    } else if (phase === "erasing") {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          35
        );
      } else {
        setTitleIndex((i) => (i + 1) % titles.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, titleIndex]);

  return (
    <section id="intro" className="hero">
      {/* Animated background blobs */}
      <div className="blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      <div className="hero-inner">
        {/* Text side */}
        <div className="hero-text">
          <p className="hero-location">
            <FiMapPin size={12} />
            Vancouver, Canada
          </p>
          <h1 className="hero-name">Jenn Jordache</h1>
          <div className="hero-typewriter">
            <span className="typewriter-text">{displayed}</span>
            <span className="typewriter-cursor" />
          </div>
          <p className="hero-tagline">
            “Now I'm a scientific expert; that means I know nothing about absolutely everything.”
― Arthur C. Clarke, 2001: A Space Odyssey
          </p>
          <div className="hero-socials">
            <a href="https://linkedin.com/in/jenniferjordache" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/jenni4j" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub"><FaGithub /></a>
            <a href="https://substack.com/@jennjordache" target="_blank" rel="noreferrer" className="social-btn" aria-label="Substack"><SiSubstack /></a>
            <a href="https://twitter.com/JennJordache" target="_blank" rel="noreferrer" className="social-btn" aria-label="Twitter"><FaTwitter /></a>
            <a href="mailto:jordachejennifer@gmail.com" className="social-btn" aria-label="Email"><FiMail /></a>
          </div>
        </div>

        {/* Picture side */}
        <div className="hero-pic-wrap">
          <div className="pic-ring">
            <img src={pic} alt="Jenn Jordache" className="hero-pic" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-goat">🐐</span>
      </div>
    </section>
  );
}

export default Intro;
