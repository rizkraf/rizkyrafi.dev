import React, { useState } from "react";
import hamburgerMenu from "../assets/hamburger_menu.svg";
import closeMenu from "../assets/close_menu.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuIcon = isMenuOpen ? closeMenu.src : hamburgerMenu.src;

  return (
    <header>
      <nav className="p-4 flex justify-between items-center">
        <h5 className="font-bold text-xl text-black">Rizky Rafi</h5>
        <button onClick={handleMenuClick}>
          <img src={menuIcon} alt="hamburger-menu" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
