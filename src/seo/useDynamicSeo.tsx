import Seo, { type SeoProps } from "./Seo";

/**
 * Drop-in renderer for data-driven routes.
 *
 * Usage:
 *   const { data: post } = useQuery({
 *     queryKey: ["blog", slug],
 *     queryFn: () => getBlogPost(slug!),
 *   });
 *   return (
 *     <>
 *       <DynamicSeo seo={post ? buildSeoFromBlogPost(post) : null} />
 *       {post && <PostBody post={post} />}
 *     </>
 *   );
 *
 * When `seo` is null (loading or not found), no <Seo> is rendered —
 * the page keeps whatever metadata the prerendered HTML shipped with.
 */
export function DynamicSeo({ seo }: { seo: SeoProps | null | undefined }) {
  if (!seo) return null;
  return <Seo {...seo} />;
}

export default DynamicSeo;