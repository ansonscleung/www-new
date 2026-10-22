import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("gatsby", () => ({
  graphql: vi.fn(),
  useStaticQuery: () => ({ site: { siteMetadata: { links: [] } } }),
}));

vi.mock("../components/header", () => ({ default: () => <header /> }));
vi.mock("../components/identity", () => ({
  default: () => <section data-section="hero" />,
}));
vi.mock("../components/now", () => ({
  default: () => <section data-section="now" />,
}));
vi.mock("../components/projects", () => ({
  default: () => <section data-section="selected-work" />,
}));
vi.mock("../components/journey", () => ({
  default: () => <section data-section="journey" />,
}));
vi.mock("../components/labs", () => ({
  default: () => <aside data-section="reading" />,
}));
vi.mock("../components/contact", () => ({
  default: () => <section data-section="contact" id="contact" />,
}));

import IndexPage from "./index";

describe("IndexPage", () => {
  it("composes the approved portfolio narrative in order", () => {
    render(<IndexPage />);

    const order = Array.from(screen.getByRole("main").children).map((element) =>
      element.getAttribute("data-section")
    );
    expect(order).toEqual([
      "hero",
      "selected-work",
      "journey",
      "now",
      "contact",
      "reading",
    ]);
  });

  it("exposes a single contact destination", () => {
    render(<IndexPage />);

    expect(document.querySelectorAll("#contact")).toHaveLength(1);
  });
});
