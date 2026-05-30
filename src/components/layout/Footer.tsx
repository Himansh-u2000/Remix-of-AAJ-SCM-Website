import { Link } from "react-router-dom";
import { services, warehouses, company } from "@/config/sitemap";
import logo from "@/assets/aaj-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <img src={logo} alt="AAJ SCM" className="h-9 w-auto" />
          <p className="mt-3 text-sm text-muted-foreground">
            Enterprise supply chain, warehousing and fulfillment across India.
          </p>
        </div>

        <FooterColumn title="Services">
          {services.slice(0, 6).map((s) => (
            <FooterLink key={s.path} to={s.path} label={s.label} />
          ))}
          <FooterLink to="/services" label="View all services" />
        </FooterColumn>

        <FooterColumn title="Network">
          {warehouses.slice(0, 6).map((w) => (
            <FooterLink key={w.path} to={w.path} label={w.label} />
          ))}
          <FooterLink to="/warehouses" label="All locations" />
        </FooterColumn>

        <FooterColumn title="Company">
          {company.map((c) => (
            <FooterLink key={c.path} to={c.path} label={c.label} />
          ))}
          <FooterLink to="/sustainability" label="Sustainability" />
          <FooterLink to="/clients" label="Clients & Case Studies" />
          <FooterLink to="/contact-us" label="Contact" />
        </FooterColumn>
      </div>
      <div className="border-t border-border">
        <div className="container flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div suppressHydrationWarning>
            © {new Date().getFullYear()} AAJ Supply Chain Management. All rights reserved.
          </div>
          <div className="flex gap-4">
            <span>www.aajscm.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <div className="text-sm font-semibold text-foreground">{title}</div>
    <ul className="mt-3 space-y-2">{children}</ul>
  </div>
);

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link to={to} className="text-sm text-muted-foreground hover:text-foreground">
      {label}
    </Link>
  </li>
);

export default Footer;
