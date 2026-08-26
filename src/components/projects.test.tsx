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
  it("presents public Shoalter scale separately from personal contribution", () => {
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
    expect(screen.getByText(/278,000\+ unique customers/i)).toBeInTheDocument();
    expect(screen.getByText(/approximately 70,000 product items/i)).toBeInTheDocument();
    expect(screen.getByText(/company-reported scale/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Unlimited Add-on — 2024 annual results/i })
    ).toHaveAttribute(
      "href",
      "https://www.hktv.com.hk/uploads/1743067192193-PR_20250327_E_W.pdf"
    );
    expect(
      screen.getByRole("link", { name: /3 Hr Mart — 2025 annual results/i })
    ).toHaveAttribute(
      "href",
      "https://www.hktv.com.hk/uploads/1774859727851-EW01137-ann.pdf"
    );
    expect(screen.queryByText(/13 tickets|6 backend services|MAO|UAO/i)).not.toBeInTheDocument();
  });

  it("presents the three selected-work summaries with a case-study CTA only for Travel Planner", () => {
    render(<ProjectSection />);

    expect(
      screen.getByText(/at its peak, the product had roughly 100 daily users/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/keeps the itinerary editable instead of treating the AI's answer as final/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Read the Travel Planner case study" })
    ).toHaveAttribute("href", "/work/travel-planner/");
    expect(screen.getAllByRole("link")).toHaveLength(3);
  });
});
