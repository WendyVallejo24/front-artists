import React from 'react';
import { Link } from 'react-router-dom';

import image from './../../src/logo.jpg';

const Header = () => {
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
      <img src={image} className='logo' width={45} height={45} alt="" />
        <Link to="/" className="no-underline black">
          <div className="fw7 mr1">Artists</div>
        </Link>        
        <Link to="/" className="ml1 no-underline black">
          List
        </Link>
        <div className="ml1">|</div>
        <Link
          to="/create"
          className="ml1 no-underline black"
        >
          New
        </Link>
      </div>
    </div>
  );
};

export default Header;
