/** The overlapping next section marks the end of the hero's audible area. */
export function shouldMuteHeroAudio(nextSectionTop: number, viewportHeight: number) {
  return nextSectionTop < viewportHeight;
}

export function soundtrackState(nextSectionTop: number, viewportHeight: number, enabled: boolean, visible: boolean) {
  const muted = !enabled || !visible;
  return {
    heroMuted: muted || shouldMuteHeroAudio(nextSectionTop, viewportHeight),
    continuousMuted: muted,
  };
}