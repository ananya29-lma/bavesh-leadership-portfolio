import { useEffect, useRef, useState, type RefObject } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import soundtrack from "@/assets/hero-soundtrack.mp3.asset.json";
import { shouldMuteHeroAudio } from "@/lib/hero-audio";

export function HeroAudio({ scrollWrapRef }: { scrollWrapRef: RefObject<HTMLDivElement | null> }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const enabledRef = useRef(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const sync = () => {
      const nextSection = scrollWrapRef.current?.nextElementSibling;
      const outsideHero = !nextSection || shouldMuteHeroAudio(
        nextSection.getBoundingClientRect().top,
        window.innerHeight,
      );
      audio.muted = outsideHero || !enabledRef.current || document.hidden;
      if (audio.muted) {
        audio.pause();
      } else if (audio.paused) {
        void audio.play().catch(() => setPlaying(false));
      }
    };
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      document.removeEventListener("visibilitychange", sync);
      audio.pause();
    };
  }, [scrollWrapRef]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    enabledRef.current = !playing;
    if (playing) {
      audio.muted = true;
      audio.pause();
    } else {
      audio.muted = false;
      void audio.play().catch(() => setPlaying(false));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={soundtrack.url}
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="absolute right-6 top-6 z-50 bg-background/70 text-foreground backdrop-blur-sm"
        onClick={toggle}
        aria-label={playing ? "Mute hero audio" : "Play hero audio"}
        title={playing ? "Mute hero audio" : "Play hero audio"}
        aria-pressed={playing}
      >
        {playing ? <Volume2 /> : <VolumeX />}
      </Button>
    </>
  );
}