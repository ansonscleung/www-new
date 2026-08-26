import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { quotes } from "../data/quotes";

vi.mock("../utils/quote-of-day", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../utils/quote-of-day")>()),
  quoteIndexForDate: () => 0,
}));

import QuoteOfTheDay from "./quote";

describe("QuoteOfTheDay", () => {
  it("renders both languages and advances sequentially with wrapping", async () => {
    const user = userEvent.setup();
    render(<QuoteOfTheDay />);

    const firstQuote = quotes[0];
    const secondQuote = quotes[1];

    expect(screen.getByText((content) => content.includes(firstQuote.text.en))).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes(firstQuote.text.zhHant))).toBeInTheDocument();
    expect(screen.getByText((_, element) =>
      element?.tagName === "P" && element.textContent?.includes(firstQuote.author.name.en) === true
    )).toBeInTheDocument();
    expect(screen.getByText(firstQuote.author.name.zhHant)).toBeInTheDocument();
    expect(screen.getByText((_, element) =>
      element?.tagName === "CITE" && element.textContent?.includes(firstQuote.work.title.en) === true
    )).toBeInTheDocument();
    expect(screen.getByText(firstQuote.work.title.zhHant)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Another quote" }));
    expect(screen.getByText((content) => content.includes(secondQuote.text.en))).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes(secondQuote.text.zhHant))).toBeInTheDocument();

    for (let index = 1; index < quotes.length; index += 1) {
      fireEvent.click(screen.getByRole("button", { name: "Another quote" }));
    }
    expect(screen.getByText((content) => content.includes(firstQuote.text.en))).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes(firstQuote.text.zhHant))).toBeInTheDocument();
  });
});
