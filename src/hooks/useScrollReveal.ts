import { useCallback, useEffect, useRef, useState } from "react";

interface UseScrollRevealResult {
  registerRef: (id: string) => (el: HTMLElement | null) => void;
  isRevealed: (id: string) => boolean;
}

export function useScrollReveal(sectionIds: readonly string[]): UseScrollRevealResult {
  const elementsRef = useRef<Record<string, HTMLElement | null>>({});
  const callbacksRef = useRef<Record<string, (el: HTMLElement | null) => void>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = (entry.target as HTMLElement).dataset.sectionId;
          if (!id) return;
          setRevealed((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = elementsRef.current[id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const registerRef = useCallback((id: string) => {
    if (!callbacksRef.current[id]) {
      callbacksRef.current[id] = (el: HTMLElement | null) => {
        if (el) el.dataset.sectionId = id;
        elementsRef.current[id] = el;
      };
    }
    return callbacksRef.current[id];
  }, []);

  const isRevealed = useCallback((id: string) => !!revealed[id], [revealed]);

  return { registerRef, isRevealed };
}
