import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../assest/S_Logo.jpg";
import contactImg from "../assest/contact.png";
import Menu from "../assest/menu.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="nav-links">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-links-item"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-links-item"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-links-item"
        >
          Project
        </Link>
        <Link
          activeClass="active"
          to="social"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-links-item"
        >
          Social
        </Link>
      </div>

      <button
        className="btn"
        onClick={() => {
          document
            .getElementById("contactpage")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} alt="Contact Me" className="btnImg" />
        Contact Me
      </button>
      <img
        src={Menu}
        alt="menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="Menu-item"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="Menu-item"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="Menu-item"
          onClick={() => setShowMenu(false)}
        >
          Project
        </Link>
        <Link
          activeClass="active"
          to="social"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="Menu-item"
          onClick={() => setShowMenu(false)}
        >
          Social
        </Link>
        <Link
          activeClass="active"
          to="contactpage"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="Menu-item"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
