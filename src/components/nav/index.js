import React from "react";
import "./nav.scss";
import {Link} from "react-router-dom";

function Nav() {
  const navStyle = {
    color: 'white'
  };

  return (
  <nav>
    <h3>Logo</h3>
    <ul className="nav-links" >
      <Link style={navStyle} to="/">
      <li>Home</li>
      </Link>
      <Link style={navStyle} to="/splash">
      <li>Login</li>
      </Link>
      <Link style={navStyle} to="/users">
      <li>User</li>      
      </Link>
    </ul>
  </nav>
  );
}

export default Nav;