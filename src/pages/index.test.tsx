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
vi.mock("../components/capabilities", () => ({
  default: () => <section data-section="capabilities" />,
}));
vi.mock("../components/projects", () => ({
  default: () => <section data-section="selected-work" />,
}));
vi.mock("../components/experience", () => ({
  default: () => <section data-section="experience" />,
}));
vi.mock("../components/labs", () => ({
  default: () => <section data-section="labs" />,
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
      "capabilities",
      "selected-work",
      "experience",
      "labs",
      "contact",
    ]);
  });

  it("exposes a single contact destination", () => {
    render(<IndexPage />);

    expect(document.querySelectorAll("#contact")).toHaveLength(1);
  });
});
