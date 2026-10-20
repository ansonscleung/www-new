import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
vi.mock("gatsby", () => ({
  Link: ({ children, to, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) => <a href={to} {...props}>{children}</a>,
}));
import LabsSection from "./labs";

describe("LabsSection", () => {
  it("features MusicCompare while retaining the compact personal projects and quote", () => {
    render(<LabsSection />);
    expect(screen.getByRole("region", { name: /explorations & personal work/i })).toHaveAttribute("id", "explorations");
    expect(screen.getByText(/Private prototype/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Read the Travel Planner case study/ })).toHaveAttribute("href", "/work/travel-planner/");
    expect(screen.getByText("MusicCompare")).toBeInTheDocument();
    expect(screen.getByText("jyutpingify")).toBeInTheDocument();
    expect(screen.getByText("ICT SBA — Football Match Scoring")).toBeInTheDocument();
    expect(screen.queryByText("daydaycode.tech")).not.toBeInTheDocument();
    expect(document.querySelector("#labs")).toBeInTheDocument();
    expect(document.querySelector("#quote")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /visit musiccompare/i })).toHaveAttribute("href", "https://ansonscleung.github.io/MusicCompare/");
  });
});
