import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import "./header.scss";

const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.pageYOffset === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerHeight = isAtTop ? "4rem" : "3rem";
  const fontSize = isAtTop ? "18px" : "16px";

  return (
    <nav
      className="navbar is-fixed-top"
      style={{ fontSize, minHeight: headerHeight, transition: "all 0.5s" }}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link
          to="/"
          className="navbar-item"
          onClick={() => setIsMenuOpen(false)}
        >
          {data.site.siteMetadata.title}
        </Link>
        <button
          type="button"
          className={`navbar-burger${isMenuOpen ? " is-active" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation-menu"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div
        id="main-navigation-menu"
        className={`navbar-menu${isMenuOpen ? " is-active" : ""}`}
      >
        <div className="navbar-end">
          <a
            href="#identity"
            className="navbar-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="navbar-item"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contacts"
            className="navbar-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
