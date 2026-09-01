"use client";

import { useState, useEffect, useRef } from "react";

export function useGravitationalCursor() {
  const [cursorOffset, setCursorOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const targetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // Normalize to [-1, 1]
      const nx = (e.clientX / w) * 2 - 1;
      const ny = (e.clientY / h) * 2 - 1;
      targetRef.current = { x: nx, y: ny };
    };

    const handleMouseLeave = () => {
      targetRef.current = { x: 0, y: 0 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const loop = () => {
      currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.06);
      currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.06);

      setCursorOffset({
        x: currentRef.current.x,
        y: currentRef.current.y,
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return cursorOffset;
}
