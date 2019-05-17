import React, { useContext } from "react";
import { CounterContext } from '../../context';
import { Link } from 'react-router-dom';

function Nav() {
  const { currentUser } = useContext(CounterContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        NaNi Math
      </a>
      <div>
        {/* <h2>NaNiMath</h2> */}
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>This is your new navbar{' '}
    </div>
    </nav>
  );
}

export default Nav;
