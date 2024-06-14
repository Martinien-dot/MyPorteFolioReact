import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import HamburgerMenu from "./HamburgerMenu";
import "./Styles/Header.css"; // Ajouter ce fichier pour les styles CSS

const Header = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 768px)" });
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="header">
      <div className="logo">GKMartinien</div>
      {isDesktopOrLaptop ? (
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            {" "}
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      ) : (
        <div>
          <div ref={buttonRef}>
            <HamburgerMenu onClick={toggleMenu} />
          </div>
          {isOpen && (
            <ul className="nav-links-mobile" ref={menuRef}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                {" "}
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
