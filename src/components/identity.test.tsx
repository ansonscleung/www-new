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
      screen.getByText("Business Analyst & Technical Product Builder")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /intersection of business, product and technology/
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Explore selected work" })
    ).toHaveAttribute("href", "#selected-work");
    expect(screen.getByRole("link", { name: /How I work/ })).toHaveAttribute("href", "#capabilities");
  });

  it("uses a static hero without carousel controls", () => {
    render(<Hero />);

    expect(
      screen.queryByRole("region", { name: "Career journey" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /pause carousel/i })
    ).not.toBeInTheDocument();
    expect(screen.getByRole("figure", { name: /Anson Leung outdoors/i })).toBeInTheDocument();
  });
});
