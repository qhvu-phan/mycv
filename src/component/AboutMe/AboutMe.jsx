import React from "react";
import "./AboutMe.css";

const Header = () => {
  return (
    <div>
      <video autoPlay loop muted preload="auto" id="myVideo">
        <source src="header_background.mp4" type="video/mp4"></source>
      </video>
      <div className="header-content">
        <div className="content-left">
          <p>Hi! I'm <span style={{ color: "dodgerblue" }}>Huy Vũ</span></p>
          <p>
            I graduated with a major in{" "}
            <span style={{ color: "dodgerblue" }}>Software Engineering </span>
            from <span style={{ color: "dodgerblue" }}>Can Tho University</span>
          </p>
          <div className="button-about-me">About Me</div>
          <div>
            <ul className="link-contact">
              <li>
                <img src="icons8-facebook-48.png" alt="" />
              </li>
              <li>
                <img src="icons8-github-96.png" alt="" />
              </li>
              <li>
                <img src="icons8-linkedin-48.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="content-right">
          <div className="circle-border-avatar">
            <img className="avatar" src="avatar.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
