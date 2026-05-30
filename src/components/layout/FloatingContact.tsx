import { brand } from "@/seo/brand";

const PhoneSolidIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.24 1.02l-2.21 2.2z"/>
  </svg>
);

const MailSolidIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.4l-10 6.25L2 6.4V6zm0 2.75V18a2 2 0 002 2h16a2 2 0 002-2V8.75l-9.47 5.92a1 1 0 01-1.06 0L2 8.75z"/>
  </svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-5.971C.124 5.281 5.405 0 11.893 0c3.179 0 6.165 1.24 8.413 3.488a11.83 11.83 0 013.488 8.42c-.003 6.557-5.34 11.892-11.892 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.516 5.26l-.999 3.648 3.972-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
  </svg>
);

const phoneDigits = brand.phone.replace(/[^0-9+]/g, "");
const waNumber = phoneDigits.replace(/^\+/, "");

const itemClass =
  "group flex h-12 w-12 items-center justify-end overflow-hidden rounded-sm bg-background shadow-lg ring-1 ring-border transition-all duration-200 hover:w-auto hover:pl-3 hover:shadow-xl";
const labelClass =
  "hidden whitespace-nowrap pr-2 text-sm font-medium text-foreground group-hover:inline";
const iconBoxClass =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-background text-primary";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-3 z-50 flex flex-col items-end gap-3 print:hidden">
      <a href={`tel:${phoneDigits}`} className={itemClass} aria-label="Call us">
        <span className={labelClass}>{brand.phone.replace(/-/g, " ")}</span>
        <span className={iconBoxClass}>
          <PhoneSolidIcon className="h-6 w-6" />
        </span>
      </a>
      <a
        href={`https://wa.me/${waNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className={itemClass}
        aria-label="Chat on WhatsApp"
      >
        <span className={labelClass}>{brand.phone.replace(/-/g, " ")}</span>
        <span className={iconBoxClass}>
          <WhatsappIcon className="h-6 w-6" />
        </span>
      </a>
      <a href={`mailto:${brand.email}`} className={itemClass} aria-label="Email us">
        <span className={labelClass}>{brand.email}</span>
        <span className={iconBoxClass}>
          <MailSolidIcon className="h-6 w-6" />
        </span>
      </a>
    </div>
  );
};

export default FloatingContact;