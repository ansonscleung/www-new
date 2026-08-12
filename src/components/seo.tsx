import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

interface SeoProps {
  title?: string;
  description?: string;
  pathname?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, pathname = "/" }) => {
  const metadata = useSiteMetadata();
  const pageTitle = title ?? metadata.title;
  const pageDescription = description ?? metadata.description;
  const canonicalUrl = new URL(pathname, metadata.siteUrl).toString();

  return (
    <>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary" />
    </>
  );
};

export default Seo;
