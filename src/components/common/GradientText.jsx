const GradientText = ({ children, className = "" }) => {
  return (
    <span
      className={`text-shimmer bg-linear-to-r from-[#FF4D4D] via-[#8B5CF6] to-[#FF4D4D] bg-clip-text text-transparent font-extrabold ${className}`}
    >
      {children}
    </span>
  );
};

export default GradientText;