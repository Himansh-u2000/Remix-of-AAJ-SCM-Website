import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/aaj-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { primaryNav, isGroup, type NavNode } from "@/config/sitemap";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const triggerPathFor = (label: string, path?: string) => {
    if (label === "Company") return "/about-us";
    return path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="AAJ Supply Chain Management" className="h-12 w-auto" />
          <span className="sr-only">AAJ Supply Chain Management</span>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {primaryNav.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              if (!hasChildren && item.path) {
                return (
                  <NavigationMenuItem key={item.label}>
                    <NavLink
                      to={item.path}
                      className="inline-flex h-10 items-center px-4 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </NavLink>
                  </NavigationMenuItem>
                );
              }
              return (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger
                    className="bg-transparent text-sm font-medium"
                    onClick={(e) => {
                      const dest = triggerPathFor(item.label, item.path);
                      if (dest) {
                        e.preventDefault();
                        navigate(dest);
                      }
                    }}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[420px] gap-1 p-3">
                      {item.path && (
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
                            >
                              View all {item.label.toLowerCase()}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      )}
                      {item.children.map((child) => renderDesktopChild(child))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="destructive">
            <Link to="/contact-us">Contact Us</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container py-4">
            <Accordion type="multiple" className="w-full">
              {primaryNav.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                if (!hasChildren && item.path) {
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <AccordionItem key={item.label} value={item.label}>
                    <AccordionTrigger className="text-sm font-medium">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-1 pl-2">
                        {item.path && (
                          <li>
                            <Link
                              to={item.path}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2 text-sm text-foreground/80"
                            >
                              View all {item.label.toLowerCase()}
                            </Link>
                          </li>
                        )}
                        {item.children.map((child) =>
                          renderMobileChild(child, () => setMobileOpen(false))
                        )}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
            <Button asChild variant="destructive" className="mt-4 w-full">
              <Link to="/contact-us" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

function renderDesktopChild(child: NavNode) {
  if (isGroup(child)) {
    return (
      <li key={child.label} className="mt-1">
        {child.path ? (
          <NavigationMenuLink asChild>
            <Link
              to={child.path}
              className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
            >
              {child.label}
            </Link>
          </NavigationMenuLink>
        ) : (
          <div className="px-3 py-2 text-xs uppercase tracking-wide text-muted-foreground">
            {child.label}
          </div>
        )}
        <ul className="ml-2 border-l border-border pl-2">
          {child.children.map((sub) => renderDesktopChild(sub))}
        </ul>
      </li>
    );
  }
  return (
    <li key={child.label}>
      <NavigationMenuLink asChild>
        <Link
          to={child.path}
          className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground"
        >
          {child.label}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function renderMobileChild(child: NavNode, onClick: () => void) {
  if (isGroup(child)) {
    return (
      <li key={child.label} className="py-1">
        {child.path && (
          <Link
            to={child.path}
            onClick={onClick}
            className="block py-2 text-sm font-medium text-foreground"
          >
            {child.label}
          </Link>
        )}
        <ul className="ml-3 border-l border-border pl-3">
          {child.children.map((sub) => renderMobileChild(sub, onClick))}
        </ul>
      </li>
    );
  }
  return (
    <li key={child.label}>
      <Link
        to={child.path}
        onClick={onClick}
        className="block py-2 text-sm text-foreground/80"
      >
        {child.label}
      </Link>
    </li>
  );
}

export default Navbar;
