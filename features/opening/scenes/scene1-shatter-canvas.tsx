"use client";

import React, { useRef, useEffect } from "react";
import type { MotionState } from "../motion-spec";

interface Shard {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vRot: number;
  points: { dx: number; dy: number }[];
  size: number;
  opacity: number;
  decay: number;
}

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  decay: number;
}

export function Scene1ShatterCanvas({
  pressProgress,
  motionState,
}: {
  pressProgress: number;
  motionState: MotionState;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shardsRef = useRef<Shard[]>([]);
  const embersRef = useRef<Ember[]>([]);
  const hasExplodedRef = useRef<boolean>(false);

  // Initialize Shards on Impact
  useEffect(() => {
    if (motionState === "impact" && !hasExplodedRef.current) {
      hasExplodedRef.current = true;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const cx = canvas.width / (window.devicePixelRatio || 1) / 2;
      const cy = canvas.height / (window.devicePixelRatio || 1) / 2;

      // Generate 48 polygon crystal shards with physical velocities
      const newShards: Shard[] = [];
      for (let i = 0; i < 48; i++) {
        const angle = (i / 48) * Math.PI * 2 + (Math.random() * 0.25 - 0.125);
        const speed = 5 + Math.random() * 16;
        const size = 16 + Math.random() * 38;

        // Generate irregular polygon vertices
        const points = [
          { dx: -size * (0.35 + Math.random() * 0.4), dy: -size * (0.35 + Math.random() * 0.4) },
          { dx: size * (0.45 + Math.random() * 0.45), dy: -size * (0.2 + Math.random() * 0.4) },
          { dx: size * (0.25 + Math.random() * 0.5), dy: size * (0.45 + Math.random() * 0.4) },
          { dx: -size * (0.35 + Math.random() * 0.35), dy: size * (0.35 + Math.random() * 0.4) },
        ];

        newShards.push({
          x: cx + Math.cos(angle) * 18,
          y: cy + Math.sin(angle) * 18,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed + (Math.random() * 2.5 - 1.25),
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() * 0.2 - 0.1),
          points,
          size,
          opacity: 1,
          decay: 0.012 + Math.random() * 0.01,
        });
      }
      shardsRef.current = newShards;

      // Generate 80 sparkling dust embers
      const newEmbers: Ember[] = [];
      for (let j = 0; j < 80; j++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2.5 + Math.random() * 10;
        newEmbers.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1 + Math.random() * 3,
          opacity: 1,
          decay: 0.008 + Math.random() * 0.012,
        });
      }
      embersRef.current = newEmbers;
    }

    if (motionState === "idle") {
      hasExplodedRef.current = false;
      shardsRef.current = [];
      embersRef.current = [];
    }
  }, [motionState]);

  // Main Canvas Render Loop (60fps)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;

      // 1. DRAW PROGRESSIVE FRACTURE CRACKS & STRESS FIELD DURING HOLD (0% -> 99%)
      if (pressProgress > 0 && motionState !== "impact") {
        const p = Math.min(pressProgress, 1);
        ctx.save();

        // Stress Halo at center
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 90 * p);
        grad.addColorStop(0, `rgba(56, 189, 248, ${0.35 * p})`);
        grad.addColorStop(1, "rgba(56, 189, 248, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, 90 * p, 0, Math.PI * 2);
        ctx.fill();

        // 8 Fractal Spiderweb Arms
        ctx.strokeStyle = `rgba(186, 230, 253, ${0.45 + p * 0.55})`;
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 14 * p;
        ctx.lineWidth = 1.2 + p * 2.2;
        ctx.lineCap = "round";

        const numArms = 8;
        for (let i = 0; i < numArms; i++) {
          const baseAngle = (i / numArms) * Math.PI * 2;
          const maxReach = Math.min(w, h) * 0.48 * Math.pow(p, 0.85);

          ctx.beginPath();
          ctx.moveTo(cx, cy);

          let currX = cx;
          let currY = cy;
          const steps = 7;
          for (let s = 1; s <= steps; s++) {
            const stepLen = (maxReach / steps);
            const stepAngle = baseAngle + (Math.sin(s * 3.8 + i * 1.5) * 0.28);
            currX += Math.cos(stepAngle) * stepLen;
            currY += Math.sin(stepAngle) * stepLen;
            ctx.lineTo(currX, currY);

            // Cross hairline interconnecting fractures
            if (s % 2 === 0 && p > 0.35) {
              const crossAngle = stepAngle + (i % 2 === 0 ? 0.75 : -0.75);
              const crossLen = stepLen * 0.9 * p;
              ctx.moveTo(currX, currY);
              ctx.lineTo(
                currX + Math.cos(crossAngle) * crossLen,
                currY + Math.sin(crossAngle) * crossLen
              );
              ctx.moveTo(currX, currY);
            }
          }
          ctx.stroke();
        }
        ctx.restore();
      }

      // 2. DRAW & UPDATE 48 KINETIC CRYSTAL SHARDS ON IMPACT
      if (shardsRef.current.length > 0) {
        ctx.save();
        for (let i = shardsRef.current.length - 1; i >= 0; i--) {
          const shard = shardsRef.current[i];

          // Physics update
          shard.x += shard.vx;
          shard.y += shard.vy;
          shard.vx *= 0.965; // Air drag
          shard.vy *= 0.965;
          shard.rotation += shard.vRot;
          shard.opacity -= shard.decay;

          if (shard.opacity <= 0) {
            shardsRef.current.splice(i, 1);
            continue;
          }

          // Draw Shard Polygon with Specular Lighting
          ctx.save();
          ctx.translate(shard.x, shard.y);
          ctx.rotate(shard.rotation);

          ctx.fillStyle = `rgba(224, 242, 254, ${shard.opacity * 0.38})`;
          ctx.strokeStyle = `rgba(255, 255, 255, ${shard.opacity * 0.9})`;
          ctx.lineWidth = 1.6;
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 10 * shard.opacity;

          ctx.beginPath();
          shard.points.forEach((pt, pIdx) => {
            if (pIdx === 0) ctx.moveTo(pt.dx, pt.dy);
            else ctx.lineTo(pt.dx, pt.dy);
          });
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.restore();
        }
        ctx.restore();
      }

      // 3. DRAW & UPDATE 80 SPARKLING DUST EMBERS
      if (embersRef.current.length > 0) {
        ctx.save();
        for (let j = embersRef.current.length - 1; j >= 0; j--) {
          const ember = embersRef.current[j];
          ember.x += ember.vx;
          ember.y += ember.vy;
          ember.vx *= 0.955;
          ember.vy *= 0.955;
          ember.opacity -= ember.decay;

          if (ember.opacity <= 0) {
            embersRef.current.splice(j, 1);
            continue;
          }

          ctx.fillStyle = `rgba(186, 230, 253, ${ember.opacity})`;
          ctx.shadowColor = "#ffffff";
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(ember.x, ember.y, ember.radius, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [pressProgress, motionState]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-20"
    />
  );
}
