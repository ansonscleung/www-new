import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ExperienceSection from "./experience";

describe("ExperienceSection", () => {
  it("renders the background with the current role, closed Shoalter period and nested education", () => {
    render(<ExperienceSection />);

    expect(screen.getByRole("region", { name: /background/i })).toHaveAttribute("id", "experience");
    expect(screen.getByText("Senior Business Designer")).toBeInTheDocument();
    expect(screen.getByText("September 2026–Present")).toBeInTheDocument();
    expect(screen.getByText("GreenTomato · Hong Kong")).toBeInTheDocument();
    expect(screen.getByText("Product Specialist → Senior Product Specialist")).toBeInTheDocument();
    expect(screen.getByText("February 2023–August 2026")).toBeInTheDocument();
    expect(screen.getByText("2019–December 2022")).toBeInTheDocument();
    expect(screen.getByText("Protiviti Hong Kong")).toBeInTheDocument();
    expect(screen.getByText("itinni")).toBeInTheDocument();
    expect(screen.getByText("OOCL")).toBeInTheDocument();
    expect(screen.getByText("Aalto University")).toBeInTheDocument();
    expect(screen.getAllByText(/Shoalter Technology/i)).toHaveLength(1);
    expect(
      screen.getByText(/owned cross-system product requirements for large-scale e-commerce/i)
    ).toBeInTheDocument();
    const progression = screen.getByRole("list", {
      name: /role progression at Shoalter Technology/i,
    });
    expect(progression).toHaveTextContent("Product Specialist");
    expect(progression).toHaveTextContent("February 2023–September 2025");
    expect(progression).toHaveTextContent("Senior Product Specialist");
    expect(progression).toHaveTextContent("October 2025–August 2026");
    expect(screen.getByText("Promoted October 2025")).toBeInTheDocument();
    expect(screen.queryByText(/13 tickets|6 backend services|MAO|UAO/i)).not.toBeInTheDocument();
  });
});
