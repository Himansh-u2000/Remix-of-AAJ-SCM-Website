import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import PagePlaceholder from "@/components/layout/PagePlaceholder";
import { getGlossaryTerm } from "@/content/source";
import { DynamicSeo } from "@/seo/useDynamicSeo";
import { buildSeoFromGlossaryTerm } from "@/seo/buildSeoFromContent";

const Page = () => {
  const { term } = useParams<{ term: string }>();
  const { data: entry } = useQuery({
    queryKey: ["glossary", term],
    queryFn: () => getGlossaryTerm(term!),
    enabled: !!term,
  });

  if (!entry) {
    return (
      <PagePlaceholder
        title={`Glossary: ${term ?? ""}`}
        description="Glossary term placeholder."
      />
    );
  }

  return (
    <>
      <DynamicSeo seo={buildSeoFromGlossaryTerm(entry)} />
      <article className="container py-16">
        <h1 className="text-4xl font-semibold tracking-tight">{entry.term}</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">{entry.definition}</p>
      </article>
    </>
  );
};

export default Page;
