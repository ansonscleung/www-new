import React from "react";
import type { GatsbySSR } from "gatsby";
import { themeInitScript } from "./src/utils/theme";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="theme-initializer"
      dangerouslySetInnerHTML={{ __html: themeInitScript }}
    />,
  ]);
};
