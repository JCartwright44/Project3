import React from "react";
// import { CounterContext } from '../../context';
import { Link } from 'react-router-dom';
import UserContext from "../../utils/UserContext";
import "./style.css";

function Nav() {
  
  return (
    <UserContext.Consumer>

      {({ user, onLogout }) => (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            NaNi Math
          </a>
          { user ? (
            <div>Welcome, {user.username}
            <Link className="nav-link" onClick={onLogout} to="/login">Logout</Link>
            </div>
          ) : (
          <div className="navbar-nav">
            <li className="nav-item">
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
