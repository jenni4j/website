import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import "./Contact.css";

const links = [
  { Icon: FaLinkedin, href: "https://linkedin.com/in/jenniferjordache", label: "LinkedIn" },
  { Icon: FaGithub,   href: "https://github.com/jenni4j", label: "GitHub"   },
  { Icon: SiSubstack, href: "https://substack.com/@jennjordache", label: "Substack "},
  { Icon: FaTwitter,  href: "https://twitter.com/JennJordache", label: "Twitter" },
  { Icon: FaEnvelope, href: "mailto:jordachejennifer@gmail.com", label: "Email" },
];

function Contact() {
  return (
    <footer id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-blob contact-blob-1" aria-hidden="true" />
        <div className="contact-blob contact-blob-2" aria-hidden="true" />
        
        <div className="contact-icons">
          {links.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="contact-icon-wrap"
              aria-label={label}
              title={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className="contact-copy">
          &copy; {new Date().getFullYear()} Jennifer Jordache · Built with React
        </p>
      </div>
    </footer>
  );
}

export default Contact;
