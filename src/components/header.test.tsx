import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

vi.mock("gatsby", () => ({
  graphql: vi.fn(),
  useStaticQuery: () => ({ site: { siteMetadata: { title: "Anson Leung" } } }),
  Link: ({ children, to, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

import Header from "./header";

describe("Header", () => {
  it("links to the five primary homepage destinations", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "#home");
    expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute(
      "href",
      "#selected-work"
    );
    expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute(
      "href",
      "#experience"
    );
    expect(screen.getByRole("link", { name: "Labs" })).toHaveAttribute("href", "#labs");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "#contact"
    );
  });

  it("opens the mobile menu and closes it after choosing a destination", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const toggle = screen.getByRole("button", { name: "Toggle navigation menu" });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    await user.click(screen.getByRole("link", { name: "Work" }));
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
