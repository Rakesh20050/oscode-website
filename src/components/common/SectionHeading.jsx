import SectionBadge from "./SectionBadge";

const SectionHeading = ({ badge, title, description }) => {
  return (
    <div className="mx-auto max-w-3xl px-2 text-center">
      <SectionBadge>{badge}</SectionBadge>

      <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-sm leading-7 dark:text-slate-300 text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
