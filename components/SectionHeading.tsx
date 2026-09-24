type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  id?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex ${alignment} flex-col gap-4`}>
      {eyebrow ? (
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-navy-700/20 bg-navy-700/5 px-3.5 py-1 text-xs font-semibold tracking-wide text-navy-800 uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-slate-500">
          {description}
        </p>
      ) : null}
    </div>
  );
}