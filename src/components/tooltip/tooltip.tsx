"use client";

import "./tooltip.css";
import { useId } from "react";
import type { ReactNode } from "react";

type TooltipProps = {
  text: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
};

export default function Tooltip({
  text,
  children,
  position = "top",
}: TooltipProps) {
  const id = useId();

  return (
    <div className={`tooltip tooltip--${position}`}>
      <div
        className="tooltip__trigger"
        tabIndex={0}
        aria-describedby={id}
      >
        {children}
      </div>
      <div
        id={id}
        role="tooltip"
        className="tooltip__content"
      >
        <span className="tooltip_font">{text}</span>
        <div className="tooltip__arrow" />
      </div>
    </div>
  );
}