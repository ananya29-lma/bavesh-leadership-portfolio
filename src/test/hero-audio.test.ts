import { describe, expect, it } from "vitest";
import { shouldMuteHeroAudio } from "@/lib/hero-audio";

describe("hero soundtrack boundary", () => {
  it("mutes as soon as the next section enters the viewport", () => {
    expect(shouldMuteHeroAudio(778, 779)).toBe(true);
    expect(shouldMuteHeroAudio(0, 779)).toBe(true);
  });

  it("allows sound while only the hero is visible, including on return", () => {
    expect(shouldMuteHeroAudio(935, 779)).toBe(false);
    expect(shouldMuteHeroAudio(779, 779)).toBe(false);
  });
});