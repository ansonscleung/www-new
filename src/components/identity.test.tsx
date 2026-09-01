import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Hero from "./identity";

describe("Hero", () => {
  it("states Anson's positioning and routes visitors to the strongest next actions", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Anson Leung" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Technical Product & Solution Delivery Professional",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Turning ambiguous requirements into shipped systems, integrations, and working prototypes."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "View selected work" })
    ).toHaveAttribute("href", "#selected-work");
    expect(screen.getByRole("link", { name: /^LinkedIn/ })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/ansonscleung/"
    );
  });

  it("uses a static hero without carousel controls", () => {
    render(<Hero />);

    expect(
      screen.queryByRole("region", { name: "Career journey" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /pause carousel/i })
    ).not.toBeInTheDocument();
    expect(document.querySelector(".identity-system-map")).toBeInTheDocument();
  });
});
