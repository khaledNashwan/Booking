import logo from '../Assets/airline.png'
import Button from '../../UI/Button'
import React, { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarStyle = {
    backgroundColor: scrolled ? "#f0f4f3" : "transparent",
    color: scrolled ? "#fff" : "#333",
    boxShadow: scrolled ? "rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" : "none",
    transition: scrolled ? ".3s" : "0",
  };

  return (
    <>
      <div id='home' className="Navbar" style={navbarStyle}>
        <div className="container">
          <div className="Navbar__wrapper">
            <div className="Navbar__left">
              <a href="#Hero">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="Navbar__right">
              <nav className="Navbar__right__one">
                <ul>
                  <li>
                    <a href="#Hero">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#offers">Offers</a>
                  </li>
                  <li>
                    <a href="#seats">Seats</a>
                  </li>
                  <li>
                    <a href="#destinations">Destinations</a>
                  </li>
                </ul>
              </nav>
              <div className="Navbar__right__two">
                <Button name="Contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar



  
