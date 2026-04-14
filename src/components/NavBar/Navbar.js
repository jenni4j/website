import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../NavBar/Navbar.css";

const navLinks = [
  { label: "Home",       to: "intro"      },
  { label: "About",      to: "about"      },
  { label: "Experience", to: "experience" },
  { label: "Projects",   to: "portfolio"  },
  { label: "The Goods",  to: "thegoods"    },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link to="intro" smooth duration={500} className="navbar-logo">
          jj
        </Link>

        <button
          className={`navbar-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <div className={`navbar-links ${menuOpen ? "navbar-links--open" : ""}`}>
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              activeClass="active"
              to={to}
              spy
              smooth
              offset={-80}
              duration={500}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
