"use client";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
}

const ImageComparisonSlider = ({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before styling",
  afterAlt = "After styling",
}: Props) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const pct = Math.min(Math.max(((clientX - left) / width) * 100, 0), 100);
    setPosition(pct);
  }, []);

  const onMouseDown = () => {
    isDragging.current = true;
  };
  const onMouseUp = () => {
    isDragging.current = false;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden rounded-lg cursor-col-resize select-none"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      <div className="absolute inset-0">
        <Image src={afterSrc} alt={afterAlt} fill className="object-cover" />
        <div className="absolute top-4 right-4 text-[10px] tracking-[0.2em] uppercase bg-black/50 text-primary px-3 py-1 rounded-sm">
          After
        </div>
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div
          className="relative w-full h-full"
          style={{ width: `${100 / (position / 100)}%` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase bg-black/50 text-white px-3 py-1 rounded-sm">
          Before
        </div>
      </div>

      <div
        className="absolute top-0 bottom-0 w-px bg-yellow-primary pointer-events-none"
        style={{ left: `${position}%` }}
      />

      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary border-2 border-white flex items-center justify-center pointer-events-none shadow-lg"
        style={{ left: `${position}%` }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M5 8H1M1 8L3 6M1 8L3 10M11 8H15M15 8L13 6M15 8L13 10"
            stroke="#111"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ImageComparisonSlider;
