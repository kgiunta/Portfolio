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
      <img src={boatbreaker} />
      <img src={quiz} />
      <img src={meal} />
      <img src={note} />
      <img src={tunes} />
      <img src={weather} />
    </div>
  );
}
