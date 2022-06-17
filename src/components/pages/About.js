import React from "react";
import self from "../../images/me.jpg";

export default function About() {
  return (
    <div style={{ "background-color": "black" }}>
      <h1>About Me</h1>
      <img className="self" src={self} alt="Picture of Kyle" />
      <p>
        Thank you for checking out my page and welcome to my portfolio! My name
        is Kyle Giunta, if the header wasn't obvious enough. I have a background
        in analytics for several Fortune 500 companies in the retail sector. I
        like to deep dive into datasets to find the "story" they are telling and
        create an actionable plan to help turn business around or drive results.
        After the pandemic I saw how to job landscape shifted more to tech, with
        a curiosity in what the future of working from home would look like I
        started to teach myself coding. After finding a passion for creating and
        building web applications I started a course at the University of
        Pennsylvania to help expedite my learning process. Which brings us to
        today! Feel free to reach out with any questions you may have. Happy
        browsing!
      </p>
    </div>
  );
}
