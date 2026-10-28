import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Hero from "./identity";
describe("Hero", () => {
  it("introduces the person and offers direct work and story links", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1, name: "Anson Leung" })).toBeInTheDocument();
    expect(screen.getByText("From intent to working systems.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /My experience/ })).toHaveAttribute("href", "#journey");
    expect(screen.getByRole("link", { name: /What I’m making now/ })).toHaveAttribute("href", "#now");
    expect(document.querySelector("figure")).toBeNull();
  });
});
