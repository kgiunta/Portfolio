import React from "react";
import { motion } from "framer-motion";
import linkedin from "../../images/Linkedin-Icon.png";
import github from "../../images/github.png";
import emails from "../../images/email-logo-png.png";

function Footer() {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/kyle-giunta-9a827513b/"
        target="_blank"
        rel="noreferrer"
      >
        <motion.img
          className="linkedin"
          src={linkedin}
          alt="linkedin logo"
          whileHover={{ scale: 1.2 }}
        />
      </a>
      <a href="https://github.com/kgiunta" target="_blank" rel="noreferrer">
        <motion.img
          className="github"
          src={github}
          alt="github logo"
          whileHover={{ scale: 1.2 }}
        />{" "}
      </a>
      <a href="mailto:developerkylegiunta@gmail.com?subject=Saw Your Portfolio!">
        <motion.img
          className="emails"
          src={emails}
          alt="email Kyle link"
          whileHover={{ scale: 1.2 }}
        />
      </a>
    </footer>
  );
}

export default Footer;
