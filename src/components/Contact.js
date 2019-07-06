import React from "react";

const Contact = () => (
  <div id="contact">
    <div className="contact-icons">
      <div>
        <a href="https://www.github.com/zeus3hd">
          <img
            src={require("../assets/imgs/icons8-github-500.png")}
            alt="github-icon"
          />
        </a>
      </div>
      <div>
        <a href="mailto: abc@example.com">
          <img
            src={require("../assets/imgs/icons8-gmail-500.png")}
            alt="gmail-icon"
          />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/3hdhani">
          <img
            src={require("../assets/imgs/icons8-facebook-500.png")}
            alt="facebook-icon"
          />
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
