import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("gatsby", () => ({
  Link: ({ children, to, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) => (
    <a href={to} {...props}>{children}</a>
  ),
}));

import ProjectSection from "./projects";

describe("ProjectSection", () => {
  it("presents the three selected-work summaries with a case-study CTA only for Travel Planner", () => {
    render(<ProjectSection />);

    expect(screen.getByRole("region", { name: "Selected Work" })).toHaveAttribute(
      "id",
      "selected-work"
    );
    expect(
      screen.getByRole("heading", { level: 2, name: "Selected Work" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /Shoalter/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "itinni" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Travel Planner" })).toBeInTheDocument();
    expect(
      screen.getByText(/technical product direction without exposing confidential/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/group itinerary editing for roughly 100 daily users/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/ongoing validation practice with structured itineraries/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Read the Travel Planner case study" })
    ).toHaveAttribute("href", "/work/travel-planner/");
    expect(screen.getAllByRole("link")).toHaveLength(1);
  });
});
