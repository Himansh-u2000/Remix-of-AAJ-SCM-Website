import { ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { organizationSchema, websiteSchema } from "./schema";

/**
 * Wrap the app once. Emits sitewide Organization + WebSite JSON-LD
 * that every route inherits unless explicitly overridden.
 */
export const SeoProvider = ({ children }: { children: ReactNode }) => (
  <HelmetProvider>
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema())}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema())}
      </script>
    </Helmet>
    {children}
  </HelmetProvider>
);

export default SeoProvider;