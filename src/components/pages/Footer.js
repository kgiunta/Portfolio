import React from "react";
import linkedin from "../../images/Linkedin-Icon.png";
import github from "../../images/github.png";

function Footer() {
  return (
    <div>
      <footer>
        <a
          href="https://www.linkedin.com/in/kyle-giunta-9a827513b/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="linkedin" src={linkedin} alt="linkedin logo" />
        </a>
        <a href="https://github.com/kgiunta" target="_blank" rel="noreferrer">
          <img className="github" src={github} alt="github logo" />{" "}
        </a>
      </footer>
    </div>
  );
}

export default Footer;
