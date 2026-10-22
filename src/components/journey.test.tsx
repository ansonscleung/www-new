import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
vi.mock("./journey-image", () => ({ default: () => <div data-testid="story-image" /> }));
vi.mock("gatsby", () => ({ Link: ({ children, to }: { children: React.ReactNode; to: string }) => <a href={to}>{children}</a> }));
import JourneySection from "./journey";
import NowSection from "./now";
import { background } from "../data/story";
describe("Chronological story", () => {
  it("orders events by start, retains overlaps, and uses corrected dates", () => {
    render(<JourneySection />);
    expect(screen.getAllByRole("article").map((node) => node.id)).toEqual([
      "cuhk-study", "journey-cuhk", "journey-hkust", "journey-aalto", "protiviti",
    ]);
    const starts = background.flatMap((entry) => entry.start ? [entry.start] : []);
    expect(starts).toEqual([...starts].sort());
    expect(screen.getByText("August 2021–June 2022")).toBeInTheDocument();
    expect(screen.getByText("April–June 2022")).toBeInTheDocument();
    expect(screen.getByText(/During my postgraduate studies/)).toBeInTheDocument();
    expect(screen.getByText(/photographer arranged by the department/)).toBeInTheDocument();
    expect(screen.queryByText(/OOCL|GreenTomato|December 2022/)).not.toBeInTheDocument();
    expect(document.querySelector(".journey-stage")).toBeNull();
    expect(screen.getAllByTestId("story-image")).toHaveLength(3);
    expect(screen.queryByRole("heading", { name: "MusicCompare" })).not.toBeInTheDocument();
  });
  it("keeps the ongoing prototype in Now with the original photograph and legacy links", () => {
    render(<NowSection />);
    expect(screen.getByRole("region", { name: "Now" })).toBeInTheDocument();
    expect(screen.getByText(/continue to build personal software projects/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Travel Planner/ })).toHaveAttribute("href", "#travel-planner");
    for (const id of ["now", "journey-now"]) {
      expect(document.getElementById(id)).not.toBeNull();
    }
  });
});
