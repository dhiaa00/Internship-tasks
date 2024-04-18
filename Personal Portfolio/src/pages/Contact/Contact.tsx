import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactContainer">
        <h1 className="title">Let's Connect!</h1>
        <p className="description">
          Feel free to reach out to me with any questions or opportunities!
        </p>
        <div className="contactInfo">
          <ul className="infoList">
            <li className="infoItem">
              <FontAwesomeIcon icon={faEnvelope} className="fas" />{" "}
              d_elaziz@estin.dz
            </li>
            <li className="infoItem">
              <FontAwesomeIcon icon={faPhone} className="fas" /> +213550614284
            </li>
          </ul>
          <div className="socialLinks">
            <a
              href="https://www.linkedin.com/in/dhia2004/"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink">
              <FontAwesomeIcon icon={faLinkedin} className="fab" />
            </a>
            <a
              href="https://www.github.com/dhiaa00"
              target="_blank"
              rel="noopener noreferrer"
              className="socialLink">
              <FontAwesomeIcon icon={faGithub} className="fab" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
