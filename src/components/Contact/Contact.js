import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

function Contact() {

  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
      <section id='contact'>
          <span className="contactContent">
              <FaGithub onClick={() => handleIconClick('https://github.com/jenni4j')} className="icon" />
              <FaLinkedin onClick={() => handleIconClick('https://linkedin.com/in/jenniferjordache')} className="icon" />
              <FaTwitter onClick={() => handleIconClick('https://twitter.com/JennJordache')} className="icon" />
              <FaEnvelope onClick={() => handleIconClick('mailto:jordachejennifer@gmail.com')} className="icon" />
          </span>
      </section>        
  );
}

export default Contact;