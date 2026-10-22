import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import type { StoryImageKey } from "../data/story";

export default function JourneyImage({ imageKey }: { imageKey: StoryImageKey }) {
  switch (imageKey) {
    case "cuhk":
      return <StaticImage src="../images/cuhk.jpg" alt="" layout="fullWidth" placeholder="blurred" loading="eager" formats={["auto", "webp"]} />;
    case "aalto":
      return <StaticImage src="../images/Portrait.jpg" alt="" layout="fullWidth" placeholder="blurred" loading="lazy" formats={["auto", "webp"]} />;
    case "hkust":
      return <StaticImage src="../images/hkust-department-portrait.jpg" alt="" layout="fullWidth" placeholder="blurred" loading="lazy" formats={["auto", "webp"]} />;
    case "now":
      return <StaticImage src="../images/central-2026-upright.png" alt="" layout="fullWidth" placeholder="blurred" loading="lazy" formats={["auto", "webp"]} />;
  }
}
