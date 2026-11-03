import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LabsSection from "./labs";
describe("Footer reading", () => {
  it("retains undated other work and the bilingual quote without duplicating the story", () => {
    render(<LabsSection />);
    expect(screen.getByRole("complementary", { name: "Other projects" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /jyutpingify/ })).toHaveAttribute("href", "https://github.com/ansonscleung/jyutpingify");
    expect(screen.queryByText("MusicCompare")).not.toBeInTheDocument();
    expect(document.querySelector(".quote-zh")).toHaveAttribute("lang", "zh-Hant");
  });
});
