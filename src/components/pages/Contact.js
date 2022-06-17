// import React, { useState } from "react";

// export default function Contact() {
//   const [userName, setUserName] = useState();
//   const [userEmail, setUserEmail] = useState();

//   const validation = (event) => {
//     event.preventDefault();
//     let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
//     if (regex.test(userEmail) === true) {
//     } else {
//       alert("Please Enter A Valid Email");
//     }
//     console.log(regex.test(userEmail));
//     console.log(userName);
//     console.log(userEmail);
//   };

//   const onChange = (event) => {
//     if (event.target.name === "name") {
//       setUserName(event.target.value);
//     } else {
//       setUserEmail(event.target.value);
//     }
//   };

//   return (
//     <div>
//       <h1>Contact Page</h1>
//       <form>
//         <h3>Name</h3>
//         <input
//           className="nameInput"
//           onChange={onChange}
//           value={userName}
//           type="text"
//           name="name"
//           placeholder="Name..."
//         ></input>
//         <h3>Email</h3>
//         <input
//           className="emailInput"
//           onChange={onChange}
//           value={userEmail}
//           type="email"
//           name="email"
//           placeholder="Email address...."
//         ></input>
//         <h3>Message</h3>
//         <textarea
//           className="messageInput"
//           type="text"
//           name="message"
//         ></textarea>
//         <button onClick={validation} className="subBtn" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
export default function ContactForm() {
  const [state, handleSubmit] = useForm("xzboylrv");
  if (state.succeeded) {
    return <p className="emailReturn">Thanks For Reaching Out!</p>;
  }
  return (
    <div>
      <motion.div className="form-handler" whileHover={{ scale: 1.05 }}>
        <form onSubmit={handleSubmit}>
          <h1 htmlFor="email">Contact Me</h1>
          <h3>Name</h3>
          <input
            id="nameInput"
            type="name"
            name="Full Name"
            placeholder="Full Name.."
          />
          <h3>Email</h3>
          <input id="email" type="email" name="email" placeholder="Email.." />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <h3>Message</h3>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Message Here.."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div id="btnContainer">
            <motion.button
              className="submitBtn"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
// function Contact() {
//   return <ContactForm />;
// }
// export default ContactForm;
