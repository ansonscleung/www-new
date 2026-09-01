import React, { useState } from "react";
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className="navbar is-fixed-top refined-header"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" onClick={closeMenu}>
          <span className="header-status" aria-hidden="true" />
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
          <a href="#home" className="navbar-item" onClick={closeMenu}>
            Home
          </a>
          <a href="#capabilities" className="navbar-item" onClick={closeMenu}>
            Capabilities
          </a>
          <a href="#selected-work" className="navbar-item" onClick={closeMenu}>
            Work
          </a>
          <a href="#experience" className="navbar-item" onClick={closeMenu}>
            Experience
          </a>
          <a href="#labs" className="navbar-item" onClick={closeMenu}>
            Labs
          </a>
          <a href="#contact" className="navbar-item" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
