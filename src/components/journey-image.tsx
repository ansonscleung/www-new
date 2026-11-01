import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import type { StoryImageKey } from "../data/story";

export default function JourneyImage({ imageKey }: { imageKey: StoryImageKey }) {
  switch (imageKey) {
    case "itinni":
      return <div className="itinni-visual"><StaticImage src="../images/itinni.png" alt="" layout="fullWidth" placeholder="blurred" formats={["auto", "webp"]} />
      </div>;
    case "delivery":
      return <div className="work-diagram" aria-label="Delivery responsibilities">
        <ol className="visual-flow"><li>Requirements &amp; user flows</li><li>Specifications &amp; acceptance criteria</li><li>Engineering · QA · UAT</li><li>Rollout &amp; production support</li></ol>
      </div>;
    case "planner":
      return <div className="work-diagram" aria-label="Travel Planner concept">
        <ul className="planning-constraints"><li>Pace</li><li>Mobility</li><li>Meals</li></ul>
        <p className="planning-result">An editable itinerary</p>
      </div>;
    case "musiccompare":
      return <StaticImage src="../images/MusicCompare.png" alt="" layout="fullWidth" placeholder="blurred" loading="lazy" formats={["auto", "webp"]} />;
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
