import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CapabilitiesSection from "./capabilities";

describe("CapabilitiesSection", () => {
  it("presents three working questions with links to supporting work", () => {
    render(<CapabilitiesSection />);

    expect(screen.getByRole("region", { name: /how i work/i })).toHaveAttribute(
      "id",
      "capabilities",
    );
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3);
    expect(screen.getByRole("heading", { name: "What needs to change?" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "What can we build?" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "How do we get it into use?" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /See related work/ })).toHaveLength(3);
  });
});
