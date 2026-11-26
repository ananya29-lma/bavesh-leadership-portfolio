/** The overlapping next section marks the end of the hero's audible area. */
export function shouldMuteHeroAudio(nextSectionTop: number, viewportHeight: number) {
  return nextSectionTop < viewportHeight;
}