import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
vi.mock("./journey-image", () => ({ default: () => <div data-testid="journey-image" /> }));
import JourneySection from "./journey";

describe("Journey", () => {
  it("provides one complete factual reading sequence before enhancement", () => {
    render(<JourneySection />);
    expect(screen.getByRole("region", { name: "A continuing journey" })).toHaveAttribute("id", "journey");
    expect(screen.getAllByRole("heading", { level: 3 }).slice(0, 4).map((h) => h.textContent)).toEqual([
      "Building a foundation", "Learning in another context", "Technology inside organisations", "Bringing it together",
    ]);
    expect(screen.getAllByTestId("journey-image")).toHaveLength(4);
    expect(screen.getByText(/photographer arranged by the department/)).toBeInTheDocument();
    expect(screen.getByText(/CUHK · BSc Computer Science/)).toBeInTheDocument();
    expect(document.querySelector("#education")).toBeInTheDocument();
    expect(document.querySelector("#experience")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Skip journey/ })).toHaveAttribute("href", "#explorations");
    expect(document.querySelector(".journey-track")).not.toHaveAttribute("data-enhanced", "true");
  });
});
