import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import PagePlaceholder from "@/components/layout/PagePlaceholder";
import { getNewsItem } from "@/content/source";
import { DynamicSeo } from "@/seo/useDynamicSeo";
import { buildSeoFromNewsItem } from "@/seo/buildSeoFromContent";

const Page = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: item } = useQuery({
    queryKey: ["news", slug],
    queryFn: () => getNewsItem(slug!),
    enabled: !!slug,
  });

  if (!item) {
    return (
      <PagePlaceholder
        title={`News: ${slug ?? ""}`}
        description="News article placeholder."
      />
    );
  }

  return (
    <>
      <DynamicSeo seo={buildSeoFromNewsItem(item)} />
      <article className="container py-16">
        <h1 className="text-4xl font-semibold tracking-tight">{item.heading}</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">{item.excerpt}</p>
        {item.body && (
          <div
            className="prose prose-neutral mt-10 max-w-3xl"
            dangerouslySetInnerHTML={{ __html: item.body }}
          />
        )}
      </article>
    </>
  );
};

export default Page;
