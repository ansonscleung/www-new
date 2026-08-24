import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ImpactSection from "./impact";

describe("ImpactSection", () => {
  it("shows four contextual, historical evidence metrics", () => {
    render(<ImpactSection />);

    expect(screen.getByRole("region", { name: /impact/i })).toHaveAttribute("id", "impact");
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(4);
    expect(screen.getByText("10-person team")).toBeInTheDocument();
    expect(screen.getByText("100+ daily users")).toBeInTheDocument();
    expect(screen.getByText("3 awards")).toBeInTheDocument();
    expect(screen.getByText("200 requests / 1,000 cases")).toBeInTheDocument();
    expect(screen.getAllByText(/historical|at itinni|at oocl/i).length).toBeGreaterThanOrEqual(4);
  });
});
