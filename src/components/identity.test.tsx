import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("./journey-image", () => ({ default: () => <div data-testid="journey-photo" /> }));
import Hero from "./identity";

describe("Hero", () => {
  it("states Anson's positioning and routes visitors to the strongest next actions", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Anson Leung" })
    ).toBeInTheDocument();
    expect(screen.getByText("From intent to working systems.")).toBeInTheDocument();
    expect(
      screen.getByText(/Business analysis · Product delivery · Technical implementation/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /intersection of business, product and technology/
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Explore selected work" })
    ).toHaveAttribute("href", "#selected-work");
    expect(screen.getByRole("link", { name: /My journey/ })).toHaveAttribute("href", "#journey");
  });

  it("introduces the four journey chapters without a standalone headshot", () => {
    render(<Hero />);

    expect(
      screen.queryByRole("region", { name: "Career journey" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /pause carousel/i })
    ).not.toBeInTheDocument();
    expect(screen.getByRole("figure", { name: /four photographs from my journey/i })).toBeInTheDocument();
    expect(screen.getAllByTestId("journey-photo")).toHaveLength(4);
    for (const [label, id] of [["CUHK", "cuhk"], ["Aalto", "aalto"], ["HKUST", "hkust"], ["Now", "now"]]) {
      expect(screen.getByRole("link", { name: new RegExp(label + " chapter") })).toHaveAttribute("href", "#journey-" + id);
    }
    expect(document.querySelector(".identity-portrait")).not.toBeInTheDocument();
  });
});
