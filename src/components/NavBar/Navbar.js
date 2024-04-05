import React from "react";
import { Link } from "react-scroll";
import "../NavBar/Navbar.css";


function Navbar() {

  return (
    <div className="navbar">
      <div className="navbarMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="linksItem"> Home </Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="linksItem"> About </Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className="linksItem"> Portfolio </Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="linksItem"> Contact </Link>
      </div>
    </div>
  );
}

export default Navbar;