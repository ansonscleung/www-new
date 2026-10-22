import React from "react";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
vi.mock("./journey-image", () => ({ default: () => <div data-testid="story-image" /> }));
vi.mock("gatsby", () => ({ Link: ({ children, to }: { children: React.ReactNode; to: string }) => <a href={to}>{children}</a> }));
import JourneySection from "./journey";
import NowSection from "./now";
import { story } from "../data/story";
describe("Chronological story", () => {
  it("orders events by start, retains overlaps, and uses corrected dates", () => {
    render(<JourneySection />);
    expect(screen.getAllByRole("article").map((node) => node.id)).toEqual([
      "beginnings", "cuhk-study", "itinni", "journey-cuhk", "journey-hkust", "journey-aalto", "protiviti", "shoalter",
    ]);
    const starts = story.flatMap((entry) => entry.start ? [entry.start] : []);
    expect(starts).toEqual([...starts].sort());
    expect(screen.getByText("December 2019–December 2021")).toBeInTheDocument();
    expect(screen.getByText("August 2021–June 2022")).toBeInTheDocument();
    expect(screen.getByText("April–June 2022")).toBeInTheDocument();
    expect(screen.getByText(/During my postgraduate studies/)).toBeInTheDocument();
    expect(screen.getByText(/photographer arranged by the department/)).toBeInTheDocument();
    expect(screen.getByText(/Promoted to Senior Product Specialist in October 2025/)).toBeInTheDocument();
    expect(screen.queryByText(/OOCL|GreenTomato|December 2022/)).not.toBeInTheDocument();
    expect(document.querySelector(".journey-stage")).toBeNull();
    expect(screen.getAllByTestId("story-image")).toHaveLength(3);
    expect(within(screen.getByRole("article", { name: "Product delivery at Shoalter" })).getByText(/separate from my personal contribution/)).toBeInTheDocument();
  });
  it("keeps the ongoing prototype in Now with the original photograph and legacy links", () => {
    render(<NowSection />);
    expect(screen.getByRole("region", { name: "Now" })).toBeInTheDocument();
    expect(screen.getByText(/ongoing personal prototype/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Travel Planner/ })).toHaveAttribute("href", "/work/travel-planner/");
    for (const id of ["now", "journey-now", "explorations", "labs", "travel-planner"]) {
      expect(document.getElementById(id)).not.toBeNull();
    }
  });
});
