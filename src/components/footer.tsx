import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./footer.scss";

export interface FooterData {
  website: string;
  account: string;
  link: string;
  icon: IconDefinition;
}

interface FooterProps {
  data: FooterData[];
}

export const FooterSection: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer id="site-footer" className="footer">
      <div className="container footer__inner">
          <div className="footer__links">
            {data.map((item, index) => (
              <a key={index} href={item.link} className="icon is-large" target="_blank" rel="noopener noreferrer" aria-label={item.website}>
                <span className="fa-layers fa-fw">
                  <FontAwesomeIcon icon={faCircle} />
                  <FontAwesomeIcon inverse icon={item.icon} transform="shrink-6" />
                </span>
              </a>
            ))}
          </div>
          <div>
            <p className="mb-0">&#169; 2017~{new Date().getFullYear()} Anson S.C. Leung</p>
          </div>
      </div>
    </footer>
  );
};

export default FooterSection;
