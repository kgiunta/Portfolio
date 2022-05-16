import React from "react";

import boatbreaker from "../../images/boatbreakers.png";
import quiz from "../../images/quiz.png";
import meal from "../../images/meal planner.png";
import note from "../../images/notetaker.png";
import tunes from "../../images/tunes.png";
import weather from "../../images/weather.png";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div id="gallery">
        {/* display none and on hover show two links??? */}
        <img src={boatbreaker} alt="website for vloggers" />
        {/* https://github.com/kgiunta/BoatBreakers */}
        {/* https://kgiunta.github.io/BoatBreakers/ */}
        <img src={quiz} alt="Home page of a quiz" />
        {/* https://github.com/kgiunta/timedQuiz */}
        {/* https://kgiunta.github.io/timedQuiz/ */}
        <img src={meal} alt="grocery list with recipes application" />
        {/* https://github.com/kgiunta/daily-meal-planner */}
        {/* https://kgiunta.github.io/daily-meal-planner/ */}
        <img src={note} alt="online notebook with to do tasks" />
        {/* https://github.com/kgiunta/newNoteTaker */}
        {/* https://safe-hollows-67860.herokuapp.com/ */}
        <img src={tunes} alt="a playlist app with songs generated" />
        {/* https://github.com/kgiunta/nostalgia-tunes */}
        {/* https://glacial-thicket-15224.herokuapp.com/ */}
        <img src={weather} alt=" weather application showing NYC weather" />
        {/* https://github.com/kgiunta/WeatherWizard */}
        {/* https://github.com/kgiunta/WeatherWizard */}
      </div>
    </div>
  );
}
