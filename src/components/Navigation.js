import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        HOME
      </Link>
      <Link className="link" to="/about">
        ABOUT
      </Link>
    </div>
  );
}

export default Navigation;
