import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <ul id="menu">
        <li><Link to='/workflows'>Workflows</Link></li>
        <li><Link to='/'>CRUD</Link></li>
      </ul>
    </div>
  );
}

export default Header;
