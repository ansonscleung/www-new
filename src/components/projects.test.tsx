import React from "react";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
vi.mock("./journey-image", () => ({ default: () => <div data-testid="project-image" /> }));
vi.mock("gatsby", () => ({ Link: ({ children, to }: {children:React.ReactNode;to:string}) => <a href={to}>{children}</a> }));
import ProjectSection from "./projects";
describe("Project evolution", () => {
  it("keeps the five projects together and makes changes in scope visible", () => {
    render(<ProjectSection />);
    const work=screen.getByRole("region",{name:"From small tools to systems"});
    expect(within(work).getAllByRole("article").map(node=>node.id)).toEqual(["beginnings","musiccompare","itinni","shoalter","travel-planner"]);
    expect(screen.getByText("A single-purpose programme")).toBeInTheDocument();
    expect(screen.getByText("A browser-based tool")).toBeInTheDocument();
    expect(screen.getByText("A shared product for groups of travellers")).toBeInTheDocument();
    expect(screen.getByText("Delivery across systems and teams")).toBeInTheDocument();
    const index=screen.getByRole("navigation",{name:"Project trail"});
    expect(within(index).getAllByRole("link").map(link=>link.getAttribute("href"))).toEqual(["#beginnings","#musiccompare","#itinni","#shoalter","#travel-planner"]);
    expect(screen.getByText("Earlier personal work")).toBeInTheDocument();
    expect(screen.getByText("December 2019–December 2021")).toBeInTheDocument();
    expect(screen.getByRole("link",{name:/Read the Travel Planner case study/})).toHaveAttribute("href","/work/travel-planner/");
    expect(screen.getByText(/Company context, separate from my personal contribution/)).toBeInTheDocument();
    for(const id of ["experience","capabilities","impact","explorations","labs"]) expect(document.getElementById(id)).not.toBeNull();
  });
});
