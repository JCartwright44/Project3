import React from "react";

function NavList() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="../../dashboard">
        Dashboard
      </a>
      <a className="navbar-brand" href="../../counting">
        Counting
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
    </nav>
  );
}

export default NavList;
