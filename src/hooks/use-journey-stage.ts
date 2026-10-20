import { useCallback, useEffect, useRef, useState } from "react";
import { journeyChapters } from "../data/journey";

export const getJourneyChapter = (distance: number, height: number, count: number) =>
  Math.max(0, Math.min(count - 1, Math.floor(distance / height)));

export default function useJourneyStage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const currentChapter = useRef(0);

  useEffect(() => {
    if (!window.matchMedia) return;
    const media = window.matchMedia("(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnhanced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const scrollToChapter = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const header = document.querySelector(".refined-header")?.getBoundingClientRect().height ?? 76;
    const height = window.innerHeight - header;
    const top = track.getBoundingClientRect().top + window.scrollY - header + (index + 0.15) * height;
    window.scrollTo({ top, behavior: "instant" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!enhanced || !track) return;
    let frame = 0;
    let height = 1;
    let header = 76;
    const updateChapter = () => {
      frame = 0;
      const next = getJourneyChapter(header - track.getBoundingClientRect().top, height, journeyChapters.length);
      if (currentChapter.current !== next) {
        currentChapter.current = next;
        setActiveChapter(next);
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateChapter);
    };
    const measure = () => {
      header = document.querySelector(".refined-header")?.getBoundingClientRect().height ?? 76;
      height = Math.max(1, window.innerHeight - header);
      track.style.setProperty("--journey-top", header + "px");
      track.style.setProperty("--journey-height", height + "px");
      onScroll();
    };
    const onHash = () => {
      const hash = window.location.hash;
      const index = hash === "#education" ? 0 :
        journeyChapters.findIndex((chapter) => hash === "#journey-" + chapter.id);
      if (index >= 0) scrollToChapter(index);
      onScroll();
    };
    const onReady = () => { measure(); onHash(); };
    let mounted = true;
    measure();
    onHash();
    // Font metrics can move the track after hydration; align a deep link once layout settles.
    document.fonts?.ready.then(() => { if (mounted) onReady(); });
    const headerElement = document.querySelector(".refined-header");
    const observer = new ResizeObserver(measure);
    if (headerElement) observer.observe(headerElement);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    window.addEventListener("hashchange", onHash);
    window.addEventListener("popstate", onHash);
    window.addEventListener("load", onReady);
    return () => {
      mounted = false;
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("popstate", onHash);
      window.removeEventListener("load", onReady);
    };
  }, [enhanced, scrollToChapter]);

  const selectChapter = (event: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    if (!enhanced || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    window.history.pushState(window.history.state, "", "#journey-" + journeyChapters[index].id);
    scrollToChapter(index);
  };

  return { trackRef, enhanced, activeChapter, selectChapter };
}
