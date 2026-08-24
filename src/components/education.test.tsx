import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import EducationSection from "./education";

describe("EducationSection", () => {
  it("shows the three education chapters without invented dates", () => {
    render(<EducationSection />);
    expect(screen.getByRole("region", { name: /education/i })).toHaveAttribute("id", "education");
    expect(screen.getByText("BSc Computer Science")).toBeInTheDocument();
    expect(screen.getByText("MSc Information Systems Management")).toBeInTheDocument();
    expect(screen.getByText("Exchange studies")).toBeInTheDocument();
    expect(screen.queryByText(/20\d\d/)).not.toBeInTheDocument();
  });
});
