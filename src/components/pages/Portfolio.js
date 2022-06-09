import React from "react";
import "../Styles/portfolio.css";
import finance from "../../images/finance.png";
import boatbreaker from "../../images/boatbreakers.png";
import quiz from "../../images/quiz.png";
import meal from "../../images/meal planner.png";
import note from "../../images/notetaker.png";
import tunes from "../../images/tunes.png";
import weather from "../../images/weather.png";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div id="gallery">
        {/* display none and on hover show two links??? */}
        <div className="link1Container">
          <p className="link1">
            <a href="https://github.com/kgiunta/Finance-Tracker">Repository</a>
            <a href="https://kgiunta.github.io/Finance-Tracker/">
              Deployed Link
            </a>
          </p>
          <motion.img
            className="images"
            src={finance}
            alt="website for vloggers"
          />
        </div>

        {/* https://github.com/kgiunta/BoatBreakers */}
        {/* https://kgiunta.github.io/BoatBreakers/ */}
        <div className="link2Container">
          <p className="link2">
            <a href="https://github.com/kgiunta/timedQuiz">Repository</a>
            <a href="https://kgiunta.github.io/timedQuiz/ ">Deployed Link</a>
          </p>
          <img className="images" src={quiz} alt="Home page of a quiz" />
        </div>

        {/* https://github.com/kgiunta/timedQuiz */}
        {/* https://kgiunta.github.io/timedQuiz/ */}

        <div className="link3Container">
          <p className="link3">
            <a href="https://github.com/kgiunta/daily-meal-planner">
              Repository
            </a>
            <a href="https://kgiunta.github.io/daily-meal-planner/">
              Deployed Link
            </a>
          </p>
          <img
            className="images"
            src={meal}
            alt="grocery list with recipes application"
          />
        </div>
        {/* https://github.com/kgiunta/daily-meal-planner */}
        {/* https://kgiunta.github.io/daily-meal-planner/ */}

        <div className="link4Container">
          <p className="link4">
            <a href="https://github.com/kgiunta/newNoteTaker">Repository</a>
            <a href="https://safe-hollows-67860.herokuapp.com/">
              Deployed Link
            </a>
          </p>
          <img
            className="images"
            src={note}
            alt="online notebook with to do tasks"
          />
        </div>
        {/* https://github.com/kgiunta/newNoteTaker */}
        {/* https://safe-hollows-67860.herokuapp.com/ */}

        <div className="link5Container">
          <p className="link5">
            <a href="https://github.com/kgiunta/nostalgia-tunes">Repository</a>{" "}
            <a href="https://glacial-thicket-15224.herokuapp.com/">
              Deployed Link
            </a>
          </p>
          <img
            className="images"
            src={tunes}
            alt="a playlist app with songs generated"
          />
        </div>
        {/* https://github.com/kgiunta/nostalgia-tunes */}
        {/* https://glacial-thicket-15224.herokuapp.com/ */}

        <div className="link6Container">
          <p className="link6">
            <a href="https://github.com/kgiunta/WeatherWizard">Repository</a>
            <a href="https://kgiunta.github.io/WeatherWizard/">Deployed Link</a>
          </p>
          <img
            className="images"
            src={weather}
            alt=" weather application showing NYC weather"
          />
        </div>
        {/* https://github.com/kgiunta/WeatherWizard */}
        {/* https://kgiunta.github.io/WeatherWizard/ */}
      </div>
    </div>
  );
}
