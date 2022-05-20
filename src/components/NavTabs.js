import React from "react";
import header from "../images/header.jpg";
import { motion } from "framer-motion";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <div className="fullHeader">
        <h1 className="nameKyle"> Kyle Giunta</h1>
        <ul className="nav nav-tabs">
          <motion.li
            className="nav-item nav-link-custom"
            whileHover={{ scale: 1.1 }}
          >
            <a
              href="/"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </a>
          </motion.li>
          <li className="nav-item nav-link-custom">
            <a
              href="/portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>

          <li className="nav-item nav-link-custom">
            <a
              href="https://drive.google.com/file/d/1urxbviHRClUhQ-CDShzgh8uHnOhDxtoL/view?usp=sharing"
              target="_blank"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li className="nav-item nav-link-custom">
            <a
              href="/contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
        <img className="headerHero" src={header} alt="motivational image" />
      </div>
    </div>
  );
}

export default NavTabs;
