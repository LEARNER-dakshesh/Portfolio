import React from "react";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer>
      <div>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul>
        <li>
          <img src={getImageUrl("contact/email icon.jpg")} alt="Email Icon" />
          <a href="mailto:daksheshgupta4@gmail.com">daksheshgupta4@gmail.com</a>
        </li>

        <li>
          <img src={getImageUrl("contact/linkedin.jpg")} alt="LinkedIn" />
          <a href="https://www.linkedin.com/in/daksheshgupta/">
            linkedin.com/daksheshgupta
          </a>
        </li>
        <li>
          <img src={getImageUrl("contact/github.png")} alt="Github Icon" />
          <a href="https://github.com/LEARNER-dakshesh">
            daksheshgupta4@gmail.com
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
