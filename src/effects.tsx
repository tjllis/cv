import { useEffect, useRef, useState } from "react";

const SPARK_COLORS = [
  "var(--pink)",
  "var(--bg-lilac)",
  "var(--bg-pink)",
  "var(--text-purple)",
  "var(--yellow)",
];

export function StarIcon({ size = 24 }: { size?: number | string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Soft blurred colour blobs behind the page (from the draft). */
export function Blobs() {
  return (
    <div className="blobs" aria-hidden="true">
      <span className="blob blob-pink" />
      <span className="blob blob-lilac" />
    </div>
  );
}

const SPARKS_PER_TICK = 2;
const MAX_SPARKS = 80;

type Spark = { id: number; x: number; y: number; size: number; color: string };

/** Sparkle trail that follows the mouse pointer (from the draft). */
export function SparkleTrail() {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const last = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timers = new Set<number>();

    function onMove(e: PointerEvent) {
      if (e.pointerType !== "mouse") return;
      const now = Date.now();
      if (now - last.current < 25) return;
      last.current = now;
      const fresh: Spark[] = Array.from({ length: SPARKS_PER_TICK }, () => ({
        id: now + Math.random(),
        x: e.clientX + Math.random() * 28 - 14,
        y: e.clientY + Math.random() * 28 - 14,
        size: 8 + Math.round(Math.random() * 10),
        color: SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)],
      }));
      const ids = new Set(fresh.map((f) => f.id));
      setSparks((s) => [...s, ...fresh].slice(-MAX_SPARKS));
      const t = window.setTimeout(() => {
        timers.delete(t);
        setSparks((s) => s.filter((x) => !ids.has(x.id)));
      }, 700);
      timers.add(t);
    }

    document.addEventListener("pointermove", onMove);
    return () => {
      document.removeEventListener("pointermove", onMove);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="spark-layer" aria-hidden="true">
      {sparks.map((s) => (
        <span
          key={s.id}
          className="spark"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            color: s.color,
          }}
        >
          <StarIcon size="100%" />
        </span>
      ))}
    </div>
  );
}

/**
 * Stars that travel along a button's border on hover, using
 * `offset-path: border-box` (Kevin Powell's offset-path sparkle hover).
 * Drop inside any `.btn`; the button must be `position: relative`.
 */
export function ButtonSparkles({ count = 6 }: { count?: number }) {
  return (
    <span className="btn-sparkles" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="btn-spark"
          style={
            {
              "--i": i,
              "--n": count,
              "--color": SPARK_COLORS[i % SPARK_COLORS.length],
            } as React.CSSProperties
          }
        >
          <StarIcon size="100%" />
        </span>
      ))}
    </span>
  );
}
