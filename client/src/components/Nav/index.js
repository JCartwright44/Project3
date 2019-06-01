import React from "react";
import { Link } from 'react-router-dom';
import UserContext from "../../utils/UserContext";
import "./style.css";

function Nav() {
  
  return (
    <UserContext.Consumer>

      {({ user, onLogout }) => (
        <nav className="navbar navbar-expand-lg topper">
          <a className="navbar-brand" id='title' href="/">
            Math Practice App
          </a>
          { user ? (
          <div className="nav navbar-nav ml-auto">
          <li className="nav-item welcome">
            Welcome, {user.username}
            </li>
            <li className="nav nav-item">
            <Link className="nav-link" id='logout' onClick={onLogout} to="/login">Logout</Link>
            </li>
            </div>
          ) : (
          <div className="navbar-nav">
            <li className="nav-item ">
            <Link className="nav-link" to="/signup">Sign Up </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
            </li>
          </div>
        )}
        </nav>
      )}

    </UserContext.Consumer>
  );
}

export default Nav;
