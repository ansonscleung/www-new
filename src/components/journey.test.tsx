import React from "react";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
vi.mock("./journey-image", () => ({ default: () => <div data-testid="story-image" /> }));
vi.mock("gatsby", () => ({ Link: ({ children, to }: { children: React.ReactNode; to: string }) => <a href={to}>{children}</a> }));
import JourneySection from "./journey";
import NowSection from "./now";
import { experience } from "../data/story";

describe("Experience with its projects", () => {
  it("keeps projects within the relevant experience and preserves corrected chronology", () => {
    render(<JourneySection />);
    expect(screen.getAllByRole("article").map(node => node.id)).toEqual([
      "cuhk-study", "itinni", "journey-hkust", "protiviti", "shoalter",
    ]);
    const starts = experience.map(entry => entry.start);
    expect(starts).toEqual([...starts].sort());
    const cuhk = document.getElementById("cuhk-study")!;
    expect(within(cuhk).getByRole("heading", { name: "MusicCompare", level: 4 })).toBeInTheDocument();
    expect(within(cuhk).getByText(/as a course project during my undergraduate/)).toBeInTheDocument();
    expect(document.getElementById("journey-hkust")!.contains(document.getElementById("journey-aalto"))).toBe(true);
    expect(screen.getByText("December 2019–December 2021")).toBeInTheDocument();
    expect(screen.getByText("April–June 2022")).toBeInTheDocument();
    expect(screen.getByText(/During my postgraduate studies/)).toBeInTheDocument();
    expect(screen.getByText(/photographer arranged by the department/)).toBeInTheDocument();
    expect(screen.queryByText(/Pascal|OOCL|GreenTomato|December 2022/)).not.toBeInTheDocument();
    expect(document.querySelector(".journey-stage")).toBeNull();
    expect(document.getElementById("travel-planner")).toBeNull();
    for (const id of ["education", "experience", "journey-cuhk", "selected-work", "capabilities", "impact"]) {
      expect(document.querySelectorAll("#" + id)).toHaveLength(1);
    }
  });
  it("places the private prototype in Now rather than in a separate Work section", () => {
    render(<NowSection />);
    const now = screen.getByRole("article");
    expect(within(now).getByRole("heading", { name: "Travel Planner", level: 4 })).toBeInTheDocument();
    expect(screen.getByText("Ongoing private prototype")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Read the Travel Planner/ })).toHaveAttribute("href", "/work/travel-planner/");
    for (const id of ["now", "journey-now", "explorations", "labs"]) expect(document.querySelectorAll("#" + id)).toHaveLength(1);
  });
});
