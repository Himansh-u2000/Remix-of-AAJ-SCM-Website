import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/seo/schema";

interface FaqSectionProps {
  items: FaqItem[];
  /** Optional heading. Defaults to "Frequently Asked Questions". */
  heading?: string;
  /** Optional intro paragraph above the list. */
  description?: string;
  /** Wrapper container className override. */
  className?: string;
}

/**
 * Renders an FAQ accordion. The same `items` array should be registered
 * in `src/seo/pageFaqs.ts` for the page's route so FAQPage JSON-LD is
 * emitted automatically — that way UI and schema never drift.
 */
export const FaqSection = ({
  items,
  heading = "Frequently Asked Questions",
  description,
  className,
}: FaqSectionProps) => {
  if (!items?.length) return null;

  return (
    <section
      aria-label={heading}
      className={className ?? "container py-16"}
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight">{heading}</h2>
        {description && (
          <p className="mt-3 text-muted-foreground">{description}</p>
        )}
        <Accordion type="single" collapsible className="mt-8">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;