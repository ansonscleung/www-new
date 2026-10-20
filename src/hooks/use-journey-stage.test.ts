import { describe, expect, it } from "vitest";
import { getJourneyChapter } from "./use-journey-stage";

describe("journey scroll progress", () => {
  it("clamps entries and exits and selects the right chapter even after fast jumps", () => {
    const height = 824;
    expect([-500, 0, 823, 824, 1648, 2472, 10000].map(
      (distance) => getJourneyChapter(distance, height, 4)
    )).toEqual([0, 0, 0, 1, 2, 3, 3]);
    expect(getJourneyChapter(824, height, 4)).toBe(1);
    expect(getJourneyChapter(823, height, 4)).toBe(0);
  });
});
