import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

vi.mock("../utils/quote-of-day", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../utils/quote-of-day")>()),
  quoteIndexForDate: () => 0,
}));

import QuoteOfTheDay from "./quote";

describe("QuoteOfTheDay", () => {
  it("renders both languages and advances sequentially with wrapping", async () => {
    const user = userEvent.setup();
    render(<QuoteOfTheDay />);

    expect(screen.getByText(/Nothing is so painful to the human mind/)).toBeInTheDocument();
    expect(screen.getByText(/對人心而言，沒有甚麼比巨大而突如其來的改變更痛苦/)).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Another quote" }));
    expect(screen.getByText(/It was the best of times, it was the worst of times/)).toBeInTheDocument();

    for (let index = 0; index < 29; index += 1) {
      await user.click(screen.getByRole("button", { name: "Another quote" }));
    }
    expect(screen.getByText(/Nothing is so painful to the human mind/)).toBeInTheDocument();
  });
});
