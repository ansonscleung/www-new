import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";
import ThemeControl from "../components/theme-control";
import "./styles.scss";
import "./404.scss";

const NotFoundPage = () => {
  return (
    <main className="not-found">
      <nav className="not-found__nav" aria-label="Page not found navigation">
        <Link to="/">Anson Leung</Link>
        <ThemeControl />
      </nav>
      <section className="not-found__content" aria-labelledby="not-found-title">
        <p className="section-label">404</p>
        <h1 id="not-found-title">Page not found.</h1>
        <p>The page may have moved, or the address may be incomplete.</p>
        <Link className="button is-primary" to="/">Back to the homepage</Link>
      </section>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => (
  <Seo
    title="Page not found | Anson Leung"
    description="The requested page could not be found."
    pathname="/404/"
  />
);
