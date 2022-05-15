import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
        <input type="text" name="name" placeholder="Name"></input>
        <input type="email" name="email" placeholder="Email address"></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
