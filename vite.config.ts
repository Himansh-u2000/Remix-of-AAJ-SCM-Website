import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (
            id.includes("/react/") ||
            id.includes("/react-dom/") ||
            id.includes("/scheduler/")
          )
            return "react-vendor";
          if (id.includes("/react-router") || id.includes("/@remix-run/"))
            return "router-vendor";
          if (id.includes("/@radix-ui/")) return "radix-vendor";
          if (id.includes("/lucide-react/")) return "icons-vendor";
          if (id.includes("/@tanstack/")) return "query-vendor";
          // NOTE: react-helmet-async intentionally is NOT split into
          // its own chunk. Doing so produces a cross-chunk TDZ
          // ("Cannot access 'f' before initialization") at runtime
          // because it shares state with react-dom (react-vendor) in
          // an init order Rollup cannot guarantee. Leaving it in the
          // main app chunk keeps initialization order correct.
        },
      },
    },
  },
  ssr: {
    // CJS-only packages must be bundled into the SSR output so Node
    // can load them via ESM dynamic import in scripts/prerender.ts.
    noExternal: ["react-helmet-async"],
  },
}));
