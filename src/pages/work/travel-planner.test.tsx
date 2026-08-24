import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("gatsby", () => ({
  Link: ({ children, to, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) => (
    <a href={to} {...props}>{children}</a>
  ),
}));

vi.mock("../../components/seo", () => ({ default: () => null }));

import TravelPlannerPage from "./travel-planner";

describe("TravelPlannerPage", () => {
  it("documents the family-planning product process and the editable itinerary MVP without private links", () => {
    render(<TravelPlannerPage />);

    expect(screen.getByRole("heading", { level: 1, name: /Travel Planner/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Back to selected work/ })).toHaveAttribute("href", "/#selected-work");
    expect(screen.getByRole("heading", { level: 2, name: "From constraints to validation" })).toBeInTheDocument();
    expect(screen.getByText(/elders, children, mobility needs/i)).toBeInTheDocument();
    expect(screen.getByText(/manual CRUD and reordering/i)).toBeInTheDocument();
    expect(screen.getByText(/Next\.js 16/i)).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /github/i })).not.toBeInTheDocument();
  });
});
