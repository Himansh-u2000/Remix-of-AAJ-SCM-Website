import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import PagePlaceholder from "@/components/layout/PagePlaceholder";
import { getBlogPost } from "@/content/source";
import { DynamicSeo } from "@/seo/useDynamicSeo";
import { buildSeoFromBlogPost } from "@/seo/buildSeoFromContent";

const Page = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => getBlogPost(slug!),
    enabled: !!slug,
  });

  if (!post) {
    // No content yet — keep the placeholder + its registry-driven SEO.
    return (
      <PagePlaceholder
        title={`Blog: ${slug ?? ""}`}
        description="Blog article placeholder."
      />
    );
  }

  return (
    <>
      <DynamicSeo seo={buildSeoFromBlogPost(post)} />
      <article className="container py-16">
        <h1 className="text-4xl font-semibold tracking-tight">{post.heading}</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">{post.excerpt}</p>
        {post.body && (
          <div
            className="prose prose-neutral mt-10 max-w-3xl"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        )}
      </article>
    </>
  );
};

export default Page;
