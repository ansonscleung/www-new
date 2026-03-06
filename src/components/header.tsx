import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

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
        <Link to="/" className="navbar-item">
          {data.site.siteMetadata.title}
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <a href="#identity" className="navbar-item">
            Home
          </a>
          <a href="#about" className="navbar-item">
            About
          </a>
          <a href="#contacts" className="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
