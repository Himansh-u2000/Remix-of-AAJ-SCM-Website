import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Floating contact is below-the-fold and not LCP-critical — defer it.
const FloatingContact = lazy(() => import("./FloatingContact"));

const SiteLayout = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <Suspense fallback={null}>
      <FloatingContact />
    </Suspense>
  </div>
);

export default SiteLayout;
