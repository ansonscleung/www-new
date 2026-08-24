import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("gatsby", () => ({
  graphql: vi.fn(),
  useStaticQuery: vi.fn(),
}));

vi.mock("gatsby-plugin-image", () => ({
  GatsbyImage: () => <div data-testid="hero-background" />,
  getImage: () => ({}),
}));

import { useStaticQuery } from "gatsby";
import Hero from "./identity";

const slides = [
  "Foundation",
  "Startup",
  "Enterprise",
  "Scale",
  "Today",
  "Next",
].map((stage, index) => ({
  stage,
  description: `${stage} career milestone`,
  backgroundImage: {},
  mobileImagePosition: index === 0 ? "76% center" : undefined,
}));

describe("Hero", () => {
  beforeEach(() => {
    vi.stubGlobal("matchMedia", (query: string) => ({
      matches: false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));
    vi.mocked(useStaticQuery).mockReturnValue({
      allIdentitiesJson: { edges: slides.map((node) => ({ node })) },
    });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("presents the technical-product introduction and six selectable career stages", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { level: 1, name: "Anson Leung" })).toBeInTheDocument();
    expect(screen.getByText("I build digital products where technology meets real-world problems.")).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /show .* stage/i })).toHaveLength(6);
    expect(screen.getByRole("button", { name: "Show Foundation stage" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("link", { name: "View selected work" })).toHaveAttribute("href", "#selected-work");
    expect(screen.getByRole("link", { name: "View LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/ansonscleung/"
    );
    expect(screen.getByRole("link", { name: "View LinkedIn" })).toHaveAttribute(
      "target",
      "_blank"
    );
    expect(screen.getByRole("link", { name: "View LinkedIn" })).toHaveAttribute(
      "rel",
      "noopener noreferrer"
    );
    expect(screen.getByRole("link", { name: "Get in touch" })).toHaveAttribute("href", "#contact");
  });

  it("moves through stages with accessible controls and pauses when asked", async () => {
    const user = userEvent.setup();
    render(<Hero />);

    await user.click(screen.getByRole("button", { name: "Next stage" }));
    expect(screen.getByRole("heading", { level: 2, name: "Startup" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Pause carousel" }));
    expect(screen.getByRole("button", { name: "Resume carousel" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Previous stage" }));
    expect(screen.getByRole("heading", { level: 2, name: "Foundation" })).toBeInTheDocument();
  });

  it("advances after seven seconds and resets that timing after manual navigation", () => {
    vi.useFakeTimers();
    render(<Hero />);

    act(() => vi.advanceTimersByTime(6_999));
    expect(screen.getByRole("heading", { level: 2, name: "Foundation" })).toBeInTheDocument();
    act(() => screen.getByRole("button", { name: "Next stage" }).click());
    act(() => vi.advanceTimersByTime(6_999));
    expect(screen.getByRole("heading", { level: 2, name: "Startup" })).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(1));
    expect(screen.getByRole("heading", { level: 2, name: "Enterprise" })).toBeInTheDocument();
  });

  it("pauses autoplay while the pointer is over the carousel", () => {
    vi.useFakeTimers();
    render(<Hero />);
    const carousel = screen.getByRole("region", { name: "Career journey" });

    fireEvent.pointerEnter(carousel);
    act(() => vi.advanceTimersByTime(7_000));
    expect(screen.getByRole("heading", { level: 2, name: "Foundation" })).toBeInTheDocument();
    fireEvent.pointerLeave(carousel);
    act(() => vi.advanceTimersByTime(7_000));
    expect(screen.getByRole("heading", { level: 2, name: "Startup" })).toBeInTheDocument();
  });

  it("pauses autoplay while focus remains within the carousel", () => {
    vi.useFakeTimers();
    render(<Hero />);
    const next = screen.getByRole("button", { name: "Next stage" });

    fireEvent.focus(next);
    act(() => vi.advanceTimersByTime(7_000));
    expect(screen.getByRole("heading", { level: 2, name: "Foundation" })).toBeInTheDocument();
    fireEvent.blur(next, { relatedTarget: document.body });
    act(() => vi.advanceTimersByTime(7_000));
    expect(screen.getByRole("heading", { level: 2, name: "Startup" })).toBeInTheDocument();
  });

  it("stays paused until both pointer and focus have left the carousel", () => {
    vi.useFakeTimers();
    render(<Hero />);
    const carousel = screen.getByRole("region", { name: "Career journey" });
    const next = screen.getByRole("button", { name: "Next stage" });

    fireEvent.pointerEnter(carousel);
    fireEvent.focus(next);
    fireEvent.pointerLeave(carousel);
    act(() => vi.advanceTimersByTime(7_000));
    expect(screen.getByRole("heading", { level: 2, name: "Foundation" })).toBeInTheDocument();
    fireEvent.blur(next, { relatedTarget: document.body });
    act(() => vi.advanceTimersByTime(7_000));
    expect(screen.getByRole("heading", { level: 2, name: "Startup" })).toBeInTheDocument();
  });

  it("disables autoplay when reduced motion is preferred", () => {
    vi.stubGlobal("matchMedia", (query: string) => ({
      matches: query === "(prefers-reduced-motion: reduce)",
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));
    vi.useFakeTimers();
    render(<Hero />);

    act(() => vi.advanceTimersByTime(7_000));
    expect(screen.getByRole("heading", { level: 2, name: "Foundation" })).toBeInTheDocument();
  });
});
