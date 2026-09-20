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
    expect(screen.getByRole("heading", { name: "Product & analysis" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Solution & delivery" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Technical fluency" })).toBeInTheDocument();
    expect(screen.getByText(/functional specifications, user journeys, acceptance criteria and UAT/i)).toBeInTheDocument();
    expect(screen.getByText(/REST APIs, Python, SQL, JavaScript\/TypeScript/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /See related work/ })).toHaveLength(3);
  });
});
