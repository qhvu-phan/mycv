import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="container-nav">
      <ul className="name-nav">
        <li>Justin Phan</li>
      </ul>
      <ul className="title-nav">
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/mycv">My CV</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
