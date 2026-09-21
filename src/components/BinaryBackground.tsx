import { useMemo } from "react";

export default function BinaryBackground() {

  const binary = useMemo(() => {
    return Array.from({ length: 35 }, (_, index) => ({
      id: index,
      value: Math.random() > 0.5 ? "0" : "1",
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 10,
      size: 10 + Math.random() * 12,
    }));
  }, []);

  return (
    <div className="binary-background">

      {binary.map((item) => (
        <span
          key={item.id}
          className="binary-bit"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            fontSize: `${item.size}px`,
          }}
        >
          {item.value}
        </span>
      ))}

      <div className="ambient-glow glow-one" />
      <div className="ambient-glow glow-two" />
      <div className="ambient-glow glow-three" />

    </div>
  );
}