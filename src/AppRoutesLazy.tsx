import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import SiteLayout from "@/components/layout/SiteLayout";
import { routeLoaders } from "./routeLoaders";

/**
 * Client-only route tree. Every page is wrapped in `React.lazy` so
 * Vite emits a per-route JS chunk and the browser only downloads the
 * route the user is on.
 *
 * The matched route is preloaded by `src/main.tsx` BEFORE
 * `hydrateRoot` runs, so the lazy boundary is already fulfilled at
 * first render — no Suspense fallback flashes, no hydration mismatch
 * against the prerendered body.
 *
 * SSR continues to use the eager `src/AppRoutes.tsx` so
 * `renderToString` produces real markup synchronously. The two files
 * are intentionally separate; the SEO test asserts the route paths
 * stay in sync.
 */

const L = (path: string) => lazy(routeLoaders[path]);

const Home = L("/");
const ServicesIndex = L("/services");
const Warehousing = L("/services/warehousing");
const B2BWarehousing = L("/services/b2b-warehousing");
const B2CWarehousing = L("/services/b2c-warehousing");
const EcommerceFulfillment = L("/services/ecommerce-fulfillment");
const EcommerceDelivery = L("/services/ecommerce-delivery");
const SameDayNextDayDelivery = L("/services/same-day-delivery");
const Transportation = L("/services/transportation");
const ValueAddedServices = L("/services/value-added");
const ReturnsManagement = L("/services/returns-management");

const WarehousesIndex = L("/warehouses");
const Delhi = L("/warehouses/delhi");
const Noida = L("/warehouses/noida");
const Gurgaon = L("/warehouses/gurgaon");
const Ghaziabad = L("/warehouses/ghaziabad");
const Kundli = L("/warehouses/kundli");
const Sonipat = L("/warehouses/sonipat");
const Rohtak = L("/warehouses/rohtak");
const Bangalore = L("/warehouses/bangalore");
const Bhiwandi = L("/warehouses/bhiwandi");
const Hyderabad = L("/warehouses/hyderabad");
const Chennai = L("/warehouses/chennai");
const Kolkata = L("/warehouses/kolkata");

const CapabilitiesIndex = L("/capabilities");
const Technology = L("/capabilities/technology");
const Operations = L("/capabilities/operations");
const WMS = L("/capabilities/technology/wms");
const TMS = L("/capabilities/technology/tms");

const Sustainability = L("/sustainability");
const Clients = L("/clients");

const BlogIndex = L("/blog");
const BlogDetail = lazy(() => import("./pages/blog/Detail"));
const GlossaryIndex = L("/glossary");
const GlossaryDetail = lazy(() => import("./pages/glossary/Detail"));
const NewsroomIndex = L("/newsroom");
const NewsroomDetail = lazy(() => import("./pages/newsroom/Detail"));

const AboutUs = L("/about-us");
const Careers = L("/careers");
const ContactUs = L("/contact-us");

const NotFound = lazy(() => import("./pages/NotFound"));

const AppRoutesLazy = () => (
  <Suspense fallback={null}>
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/warehousing" element={<Warehousing />} />
        <Route path="/services/b2b-warehousing" element={<B2BWarehousing />} />
        <Route path="/services/b2c-warehousing" element={<B2CWarehousing />} />
        <Route path="/services/ecommerce-fulfillment" element={<EcommerceFulfillment />} />
        <Route path="/services/ecommerce-delivery" element={<EcommerceDelivery />} />
        <Route path="/services/same-day-delivery" element={<SameDayNextDayDelivery />} />
        <Route path="/services/transportation" element={<Transportation />} />
        <Route path="/services/value-added" element={<ValueAddedServices />} />
        <Route path="/services/returns-management" element={<ReturnsManagement />} />

        <Route path="/warehouses" element={<WarehousesIndex />} />
        <Route path="/warehouses/delhi" element={<Delhi />} />
        <Route path="/warehouses/noida" element={<Noida />} />
        <Route path="/warehouses/gurgaon" element={<Gurgaon />} />
        <Route path="/warehouses/ghaziabad" element={<Ghaziabad />} />
        <Route path="/warehouses/kundli" element={<Kundli />} />
        <Route path="/warehouses/sonipat" element={<Sonipat />} />
        <Route path="/warehouses/rohtak" element={<Rohtak />} />
        <Route path="/warehouses/bangalore" element={<Bangalore />} />
        <Route path="/warehouses/bhiwandi" element={<Bhiwandi />} />
        <Route path="/warehouses/hyderabad" element={<Hyderabad />} />
        <Route path="/warehouses/chennai" element={<Chennai />} />
        <Route path="/warehouses/kolkata" element={<Kolkata />} />

        <Route path="/capabilities" element={<CapabilitiesIndex />} />
        <Route path="/capabilities/technology" element={<Technology />} />
        <Route path="/capabilities/technology/wms" element={<WMS />} />
        <Route path="/capabilities/technology/tms" element={<TMS />} />
        <Route path="/capabilities/operations" element={<Operations />} />

        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/clients" element={<Clients />} />

        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/glossary" element={<GlossaryIndex />} />
        <Route path="/glossary/:term" element={<GlossaryDetail />} />
        <Route path="/newsroom" element={<NewsroomIndex />} />
        <Route path="/newsroom/:slug" element={<NewsroomDetail />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRoutesLazy;