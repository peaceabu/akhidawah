import React, { useState } from 'react';
import './Header.css'; // Import your CSS file for styling
import {FaAlignJustify} from "react-icons/fa";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
<header>
  <div className='header-menu'>
    <div className='header-top'>
      <h1>Akhi Dawah</h1>
    </div>
    <div className='header-bottom'>
      <button className='NavToggle' onClick={toggleNav}>
        Menu <FaAlignJustify />
      </button>
      <nav className={`NavOptions ${isNavOpen ? 'NavOpen' : ''}`}>
        <ul className="h-menu">
          <li><a href="">Home</a></li>
          <li><a href="">Category</a></li>
          <li><a href="">About</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

  );
};

export default Header;
