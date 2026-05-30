type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

// Eyebrow text is intentionally ignored site-wide per design direction.
const SectionHeader = ({ title, description, align = "left", className = "" }: Props) => (
  <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
    <h2 className="font-display text-3xl font-semibold leading-[1.25] md:text-4xl md:leading-[1.2] lg:text-[44px]">
      {title}
    </h2>
    {description && (
      <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
