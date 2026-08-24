"use client";

import React, { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type SilkBackgroundProps = {
  className?: string;
  /** Tom base do tecido (RGB) */
  color?: [number, number, number];
};

/**
 * Fundo animado estilo "silk" desenhado em canvas.
 * Preenche o elemento pai (que deve ser `relative`).
 */
export const SilkBackground = ({ className, color = [138, 138, 142] }: SilkBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    let time = 0;
    const speed = 0.02;
    const scale = 2;
    const noiseIntensity = 0.8;
    const [cr, cg, cb] = color;

    const resizeCanvas = () => {
      const w = parent?.clientWidth ?? window.innerWidth;
      const h = parent?.clientHeight ?? window.innerHeight;
      canvas.width = Math.max(1, Math.floor(w / 2));
      canvas.height = Math.max(1, Math.floor(h / 2));
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const noise = (x: number, y: number) => {
      const G = 2.71828;
      const rx = G * Math.sin(G * x);
      const ry = G * Math.sin(G * y);
      return (rx * ry * (1 + x)) % 1;
    };

    const animate = () => {
      const { width, height } = canvas;

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#141414");
      gradient.addColorStop(0.5, "#232323");
      gradient.addColorStop(1, "#101010");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          const u = (x / width) * scale;
          const v = (y / height) * scale;

          const tOffset = speed * time;
          const tex_x = u;
          const tex_y = v + 0.03 * Math.sin(8.0 * tex_x - tOffset);

          const pattern =
            0.6 +
            0.4 *
              Math.sin(
                5.0 * (tex_x + tex_y + Math.cos(3.0 * tex_x + 5.0 * tex_y) + 0.02 * tOffset) +
                  Math.sin(20.0 * (tex_x + tex_y - 0.1 * tOffset)),
              );

          const rnd = noise(x, y);
          const intensity = Math.max(0, pattern - (rnd / 15.0) * noiseIntensity);

          const index = (y * width + x) * 4;
          data[index] = Math.floor(cr * intensity);
          data[index + 1] = Math.floor(cg * intensity);
          data[index + 2] = Math.floor(cb * intensity);
          data[index + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);

      const overlayGradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) / 2,
      );
      overlayGradient.addColorStop(0, "rgba(0, 0, 0, 0.1)");
      overlayGradient.addColorStop(1, "rgba(0, 0, 0, 0.45)");
      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, width, height);

      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 size-full", className)}
    />
  );
};

export const Component = SilkBackground;
