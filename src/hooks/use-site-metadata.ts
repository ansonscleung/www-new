import { graphql, useStaticQuery } from "gatsby";

interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
}

interface SiteMetadataQuery {
  site: {
    siteMetadata: SiteMetadata;
  };
}

export const useSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery<SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
