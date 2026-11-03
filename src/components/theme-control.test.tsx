import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ThemeControl from "./theme-control";
import { THEME_STORAGE_KEY } from "../utils/theme";

describe("ThemeControl", () => {
  let systemPrefersDark = false;
  let listeners: Array<() => void> = [];

  beforeEach(() => {
    systemPrefersDark = false;
    listeners = [];
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockImplementation(() => ({
        get matches() {
          return systemPrefersDark;
        },
        addEventListener: (_event: string, listener: () => void) => listeners.push(listener),
        removeEventListener: (_event: string, listener: () => void) => {
          listeners = listeners.filter((item) => item !== listener);
        },
      }))
    );
  });

  afterEach(() => {
    window.localStorage.clear();
    delete document.documentElement.dataset.theme;
    delete document.documentElement.dataset.themePreference;
    document.documentElement.style.colorScheme = "";
    vi.unstubAllGlobals();
  });

  it("restores and applies a saved theme", async () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, "dark");
    render(<ThemeControl />);

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Dark" })).toHaveAttribute(
        "aria-pressed",
        "true"
      )
    );
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  });

  it("lets the visitor force light mode and remembers it", async () => {
    const user = userEvent.setup();
    systemPrefersDark = true;
    render(<ThemeControl />);

    await user.click(screen.getByRole("button", { name: "Light" }));

    expect(document.documentElement).toHaveAttribute("data-theme", "light");
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
  });

  it("follows system changes only while System is selected", async () => {
    const user = userEvent.setup();
    render(<ThemeControl />);

    act(() => {
      systemPrefersDark = true;
      listeners.forEach((listener) => listener());
    });
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");

    await user.click(screen.getByRole("button", { name: "Light" }));
    act(() => {
      systemPrefersDark = false;
      listeners.forEach((listener) => listener());
    });
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
  });
});
