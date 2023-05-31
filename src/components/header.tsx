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

  const headerHeight = isAtTop ? "4rem" : "0rem";
  const fontSize = isAtTop ? "18px" : "16px";

  return (
    <nav
      className="navbar is-fixed-top"
      style={{ fontSize, minHeight: headerHeight, transition: "all 1s" }}
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
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/about" className="navbar-item">
            About
          </Link>
          <Link to="/contact" className="navbar-item">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
