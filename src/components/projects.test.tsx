import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectSection from "./projects";
describe("Work index", () => {
  it("links to the chronological cases without repeating their content", () => {
    render(<ProjectSection />);
    expect(screen.getByRole("navigation", { name: "Work index" })).toHaveAttribute("id", "selected-work");
    expect(screen.getAllByRole("link").map((link) => link.getAttribute("href"))).toEqual(["#itinni", "#shoalter"]);
    expect(screen.queryByText(/Company context/)).not.toBeInTheDocument();
  });
});
