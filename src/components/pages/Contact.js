import React, { useState } from "react";

export default function Contact() {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();

  const validation = (event) => {
    event.preventDefault();
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (regex.test(userEmail) === true) {
    } else {
      alert("Please Enter A Valid Email");
    }
    console.log(regex.test(userEmail));
    console.log(userName);
    console.log(userEmail);
  };

  const onChange = (event) => {
    if (event.target.name === "name") {
      setUserName(event.target.value);
    } else {
      setUserEmail(event.target.value);
    }
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form>
        <h3>Name</h3>
        <input
          className="nameInput"
          onChange={onChange}
          value={userName}
          type="text"
          name="name"
          placeholder="Name..."
        ></input>
        <h3>Email</h3>
        <input
          className="emailInput"
          onChange={onChange}
          value={userEmail}
          type="email"
          name="email"
          placeholder="Email address...."
        ></input>
        <h3>Message</h3>
        <textarea
          className="messageInput"
          type="text"
          name="message"
        ></textarea>
        <button onClick={validation} className="subBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
