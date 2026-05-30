import type { NewsItem } from "./types";

/**
 * Newsroom items source. See `blog.ts` for the publishing contract.
 * Each added entry is prerendered + added to the sitemap on next build.
 */
export const newsItems: NewsItem[] = [];