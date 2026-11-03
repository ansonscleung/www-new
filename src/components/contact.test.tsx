import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContactSection from "./contact";

describe("ContactSection", () => {
  it("offers a positive transition CTA and explicit contact destinations", () => {
    render(<ContactSection />);
    expect(screen.getByRole("region", { name: /let’s stay in touch/i })).toHaveAttribute("id", "contact");
    expect(screen.getByRole("link", { name: /email anson/i })).toHaveAttribute("href", "mailto:ansonscleung@gmail.com");
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute("href", "https://www.linkedin.com/in/ansonscleung/");
    expect(screen.queryByRole("link", { name: /résumé/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/open to work/i)).not.toBeInTheDocument();
  });
});
