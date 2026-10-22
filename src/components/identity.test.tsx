import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Hero from "./identity";
describe("Hero", () => {
  it("introduces the person and offers direct work and story links", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1, name: "Anson Leung" })).toBeInTheDocument();
    expect(screen.getByText("From intent to working systems.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Read my story/ })).toHaveAttribute("href", "#journey");
    expect(screen.getByRole("link", { name: /itinni/ })).toHaveAttribute("href", "#itinni");
    expect(screen.getByRole("link", { name: /Shoalter/ })).toHaveAttribute("href", "#shoalter");
    expect(document.querySelector("figure")).toBeNull();
  });
});
