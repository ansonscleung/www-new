import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ExperienceSection from "./experience";

describe("ExperienceSection", () => {
  it("renders the background with the current role, closed Shoalter period and nested education", () => {
    render(<ExperienceSection />);

    expect(screen.getByRole("region", { name: /background/i })).toHaveAttribute("id", "experience");
    expect(screen.getByText("Senior Business Designer")).toBeInTheDocument();
    expect(screen.getByText("Sep 2026–Present")).toBeInTheDocument();
    expect(screen.getByText("Product Specialist → Senior Product Specialist")).toBeInTheDocument();
    expect(screen.getByText("2023–Aug 2026")).toBeInTheDocument();
    expect(screen.getByText("Protiviti Hong Kong")).toBeInTheDocument();
    expect(screen.getByText("itinni")).toBeInTheDocument();
    expect(screen.getByText("OOCL")).toBeInTheDocument();
    expect(screen.getByText("Aalto University")).toBeInTheDocument();
    expect(screen.getAllByText(/Shoalter Technology/i)).toHaveLength(1);
    expect(
      screen.getByText(/worked with business and operations teams on e-commerce changes/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/checkout, promotions, fulfilment, accelerated delivery/i)
    ).toBeInTheDocument();
    expect(screen.queryByText(/13 tickets|6 backend services|MAO|UAO/i)).not.toBeInTheDocument();
  });
});
