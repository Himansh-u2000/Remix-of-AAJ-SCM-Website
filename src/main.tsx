import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import SeoProvider from "./seo/SeoProvider";
import { matchLoaderForPath } from "./routeLoaders";

// Strip prerendered SEO tags before React/Helmet hydrates.
//
// The build-time prerender (scripts/prerender.ts) writes route-specific
// title, meta, canonical, og, twitter and JSON-LD tags into each route's
// HTML so non-JS crawlers see them. Once JS loads, react-helmet-async
// re-emits the same tags from <Seo>. Helmet dedupes meta by name and
// property and replaces title, but does NOT dedupe canonical links or
// JSON-LD script tags, so without this cleanup we get duplicates after
// hydration. Every prerendered tag is marked with data-prerendered="true".
// Removing them here, before React mounts, hands ownership of the head
// cleanly to Helmet for the rest of the session.
document
  .querySelectorAll('[data-prerendered="true"]')
  .forEach((el) => el.remove());

const container = document.getElementById("root")!;
const tree = (
  <SeoProvider>
    <App />
  </SeoProvider>
);

// Each route is a React.lazy chunk (see AppRoutesLazy). Preload the
// matched route's module before mounting so route changes start with
// the right page chunk already in the browser cache.
const preload = matchLoaderForPath(window.location.pathname)()
  .catch(() => undefined);

preload.then(() => {
  // Lovable's SPA fallback can serve the prerendered home HTML for
  // deep links like /clients. Hydrating that home markup against a
  // different route can leave the old body visible, so always clear
  // the prerendered shell and let React render the current URL fresh.
  container.innerHTML = "";
  createRoot(container).render(tree);
});
