const Container = ({ children, className = "" }) => {
  return (
    <div className={`mx-auto w-[90%] max-w-7xl mx-auto px-5 md:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
};

export default Container;