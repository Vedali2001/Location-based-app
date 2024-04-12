import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton'; // Assuming you have a LogoutButton component

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/map">Map</Link></li>
          {/* Add more navigation links as needed */}
          <li><LogoutButton /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
