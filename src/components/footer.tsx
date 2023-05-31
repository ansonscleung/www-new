import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, IconName } from "@fortawesome/fontawesome-svg-core";
import { faCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export interface FooterData {
  website: string;
  account: string;
  link: string;
  icon: IconName;
}

interface FooterProps {
  data: FooterData[];
}

export const FooterSection: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer id="contacts" className="footer has-background-light">
      <div className="container">
        <div className="columns is-centered is-vcentered">
          <div className="column is-narrow">
            {data.map((item, index) => (
              <a key={index} href={item.link} className="icon">
                <span className="fa-layers fa-fw fa-2x">
                  <FontAwesomeIcon icon={faCircle} />
                  <FontAwesomeIcon
                    inverse
                    icon={faFacebook}
                    transform="shrink-6"
                  />
                </span>
              </a>
            ))}
          </div>
          <div className="column has-text-centered pt-auto pb-auto">
            <p className="mb-0">
              Contents are &#169; 2017~2020 Anson S.C. Leung.{" "}
              <small>
                Bootstrap Theme Inspired By{" "}
                <a href="https://www.w3schools.com/bootstrap/bootstrap_theme_me.asp">
                  www.w3schools.com
                </a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
