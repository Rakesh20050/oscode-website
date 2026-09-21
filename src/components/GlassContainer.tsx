import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassContainer({
  children,
  className = "",
}: Props) {
  return (
    <div className={`glass-container ${className}`}>
      <div className="glass-border" />
      <div className="glass-content">
        {children}
      </div>
    </div>
  );
}