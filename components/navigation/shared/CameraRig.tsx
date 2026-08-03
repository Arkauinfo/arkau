"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;

  perspective?: number;
  baseTilt?: number;
  basePan?: number;
  height?: number;

  mouseTilt?: number;
  mousePan?: number;
};

export default function CameraRig({
  children,

  perspective = 1400,

  baseTilt = -8,
  basePan = 0,
  height = 80,

  mouseTilt = 6,
  mousePan = 8,
}: Props) {
  const sceneRef = useRef<HTMLDivElement>(null);

  const current = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let frame: number;

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;

      if (sceneRef.current) {
        sceneRef.current.style.transform = `
          translateY(${height}px)
          rotateX(${baseTilt + current.current.x}deg)
          rotateY(${basePan + current.current.y}deg)
        `;
      }

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, [height, baseTilt, basePan]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;

    target.current.x = (0.5 - ny) * mouseTilt;
    target.current.y = (nx - 0.5) * mousePan;
  }

  return (
    <div
      onMouseMove={handleMove}
      className="relative h-[720px] overflow-hidden rounded-[40px]"
      style={{
        perspective: `${perspective}px`,
      }}
    >
      <div
        ref={sceneRef}
        className="absolute inset-0"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
}