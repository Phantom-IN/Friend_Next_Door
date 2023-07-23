import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    // setShowMenu(false); // We will not close the menu here to allow the user to click multiple items consecutively
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleNavItemClick = () => {
    setShowMenu(false); // Close the menu when a navigation item is clicked
  };

  return (
    <Navbar
      ref={navbarRef}
      expand="md"
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">
          <p>FriendNextDoor</p>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleMenuClick}
          className={`navbar-toggler ${showMenu ? "open" : ""}`}
        >
          {showMenu ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${showMenu ? "show" : ""}`}
        >
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="home-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              className={`navbar-link ${activeLink === "home" ? "active" : ""}`}
              onClick={() => onUpdateActiveLink("home")}
            >
              <i className="fas fa-home" style={{ color: "black" }}></i> Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="about-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`navbar-link ${
                activeLink === "about" ? "active" : ""
              }`}
              onClick={() => onUpdateActiveLink("about")}
            >
              <i
                className="fas fa-users"
                style={{ color: "black", paddingRight: "8px" }}
              ></i>
              About Us
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="faq-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`navbar-link ${activeLink === "faq" ? "active" : ""}`}
              onClick={() => onUpdateActiveLink("faq")}
            >
              <i
                className="fas fa-question-circle"
                style={{ color: "black" }}
              ></i>{" "}
              FAQ
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="contact-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`navbar-link ${
                activeLink === "contact" ? "active" : ""
              }`}
              onClick={() => onUpdateActiveLink("contact")}
            >
              <i
                className="fas fa-phone-alt"
                style={{ color: "black", paddingRight: "8px" }}
              ></i>{" "}
              Contact Us
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="team-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`navbar-link ${activeLink === "team" ? "active" : ""}`}
              onClick={() => onUpdateActiveLink("team")}
            >
              <i
                className="fas fa-users"
                style={{ color: "black", paddingRight: "8px" }}
              ></i>
              Team
            </Nav.Link>
          </Nav>
          <span className="navbar-text"></span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
