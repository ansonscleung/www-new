import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ImpactSection from "./impact";

describe("ImpactSection", () => {
  it("shows public Shoalter scale alongside historical evidence", () => {
    render(<ImpactSection />);

    expect(screen.getByRole("region", { name: /impact/i })).toHaveAttribute("id", "impact");
    expect(screen.getAllByRole("heading", { level: 3 }).map((heading) => heading.textContent)).toEqual([
      "278,000+ unique customers",
      "Approximately 70,000 product items",
      "10-person team",
      "3 awards",
    ]);
    expect(screen.queryByText("100+ daily users")).not.toBeInTheDocument();
    expect(screen.queryByText("200 requests / 1,000 cases")).not.toBeInTheDocument();
    expect(screen.getAllByText(/company-reported/i)).toHaveLength(2);
  });

  it("links each public metric to its official HKTV source in a new tab", () => {
    render(<ImpactSection />);

    const unlimitedAddOnSources = screen.getByRole("list", { name: "Unlimited Add-on public sources" });
    const threeHrMartSources = screen.getByRole("list", { name: "3 Hr Mart public sources" });
    const unlimitedAddOnSource = screen.getByRole("link", { name: /HKTV 2024 annual results/i });
    const threeHrMartSource = screen.getByRole("link", { name: /HKTV 2025 annual results/i });

    expect(unlimitedAddOnSources).toContainElement(unlimitedAddOnSource);
    expect(threeHrMartSources).toContainElement(threeHrMartSource);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);

    expect(unlimitedAddOnSource).toHaveAttribute(
      "href",
      "https://www.hktv.com.hk/uploads/1743067192193-PR_20250327_E_W.pdf",
    );
    expect(threeHrMartSource).toHaveAttribute(
      "href",
      "https://www.hktv.com.hk/uploads/1774859727851-EW01137-ann.pdf",
    );
    for (const link of [unlimitedAddOnSource, threeHrMartSource]) {
      expect(link).toHaveAccessibleName(/opens in a new tab/i);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
