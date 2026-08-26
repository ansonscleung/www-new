import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CapabilitiesSection from "./capabilities";

describe("CapabilitiesSection", () => {
  it("presents exactly three product, technical, and delivery pillars", () => {
    render(<CapabilitiesSection />);

    expect(screen.getByRole("region", { name: /what i bring/i })).toHaveAttribute(
      "id",
      "capabilities",
    );
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3);
    expect(screen.getByRole("heading", { name: "Product" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Technical" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Delivery" })).toBeInTheDocument();
  });
});
