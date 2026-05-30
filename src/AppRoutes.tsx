import { Route, Routes } from "react-router-dom";

import SiteLayout from "@/components/layout/SiteLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import ServicesIndex from "./pages/services/Index";
import Warehousing from "./pages/services/Warehousing";
import B2BWarehousing from "./pages/services/B2BWarehousing";
import B2CWarehousing from "./pages/services/B2CWarehousing";
import EcommerceFulfillment from "./pages/services/EcommerceFulfillment";
import EcommerceDelivery from "./pages/services/EcommerceDelivery";
import SameDayNextDayDelivery from "./pages/services/SameDayNextDayDelivery";
import Transportation from "./pages/services/Transportation";
import ValueAddedServices from "./pages/services/ValueAddedServices";
import ReturnsManagement from "./pages/services/ReturnsManagement";

import WarehousesIndex from "./pages/warehouses/Index";
import Delhi from "./pages/warehouses/Delhi";
import Noida from "./pages/warehouses/Noida";
import Gurgaon from "./pages/warehouses/Gurgaon";
import Ghaziabad from "./pages/warehouses/Ghaziabad";
import Kundli from "./pages/warehouses/Kundli";
import Sonipat from "./pages/warehouses/Sonipat";
import Rohtak from "./pages/warehouses/Rohtak";
import Bangalore from "./pages/warehouses/Bangalore";
import Bhiwandi from "./pages/warehouses/Bhiwandi";
import Hyderabad from "./pages/warehouses/Hyderabad";
import Chennai from "./pages/warehouses/Chennai";
import Kolkata from "./pages/warehouses/Kolkata";

import CapabilitiesIndex from "./pages/capabilities/Index";
import Technology from "./pages/capabilities/Technology";
import Operations from "./pages/capabilities/Operations";
import WMS from "./pages/capabilities/technology/WMS";
import TMS from "./pages/capabilities/technology/TMS";

import Sustainability from "./pages/Sustainability";
import Clients from "./pages/Clients";

import BlogIndex from "./pages/blog/Index";
import BlogDetail from "./pages/blog/Detail";
import GlossaryIndex from "./pages/glossary/Index";
import GlossaryDetail from "./pages/glossary/Detail";
import NewsroomIndex from "./pages/newsroom/Index";
import NewsroomDetail from "./pages/newsroom/Detail";

import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";

/**
 * Shared route tree consumed by both the client (`src/App.tsx`,
 * wrapped in `<BrowserRouter>`) and the SSR entry
 * (`src/entry-server.tsx`, wrapped in `<StaticRouter>`). Keeping a
 * single source of truth guarantees identical markup on server and
 * client — a hard requirement for clean hydration.
 */
const AppRoutes = () => (
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
);

export default AppRoutes;