const SecondaryButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`rounded-full border border-white/20 bg-black/60 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#EF4444] hover:bg-[#EF4444]/10 hover:text-[#FF4D4D] hover:shadow-[0_0_20px_rgba(0,168,255,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;