import React from 'react'

const HamburgerMenu = () => {
  return (
    <div className="md:hidden">
      <button
        id="menu-btn"
        type="button"
        className="z-40 block hamburger md:hidden focus:outline-none"
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-mid"></span>
        <span className="hamburger-bot"></span>
      </button>
    </div>
  );
}

export default HamburgerMenu