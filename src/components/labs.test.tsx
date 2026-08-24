import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LabsSection from "./labs";

describe("LabsSection", () => {
  it("includes the three selected labs and omits daydaycode", () => {
    render(<LabsSection />);
    expect(screen.getByRole("region", { name: /labs/i })).toHaveAttribute("id", "labs");
    expect(screen.getByText("MusicCompare")).toBeInTheDocument();
    expect(screen.getByText("jyutpingify")).toBeInTheDocument();
    expect(screen.getByText("ICT SBA — Football Match Scoring")).toBeInTheDocument();
    expect(screen.queryByText("daydaycode.tech")).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /visit musiccompare/i })).toHaveAttribute("href", "https://ansonscleung.github.io/MusicCompare/");
  });
});
