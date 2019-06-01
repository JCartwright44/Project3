import React from "react";
import UserContext from "../../utils/UserContext";
import "./style.css";

function NavList() {
  return (
    <UserContext.Consumer>

      {({ user }) => (
    <nav className="navbar navbar-expand-lg bottom">
    { user ? (
      <div>
      <a className="navbar-brand" href="../../dashboard">
        Dashboard
      </a>
      <a className="navbar-brand" href="../../addition">
        Addition
      </a>
      <a className="navbar-brand" href="../../subtraction">
        Subtraction
      </a>
      <a className="navbar-brand" href="../../multiplication">
        Multiplication
      </a>
      <a className="navbar-brand" href="../../division">
        Division
    </a> 
    </div>
    ) : (

      <h3>Please log in to continue</h3>
  
      )}
    </nav>
      )}
    </UserContext.Consumer>
  );
}

export default NavList;
