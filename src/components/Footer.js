import { socialLinks } from "../data";
import { footerLinks } from "../data";
const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          {footerLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="footer-icons">
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-icon"
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
};
export default Footer;
