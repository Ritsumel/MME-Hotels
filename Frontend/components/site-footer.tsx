import Link from "next/link"

const footerLinks = {
  explore: [
    { href: "/booking", label: "Book a Stay" },
    { href: "/about", label: "About Us" },
    { href: "/login", label: "My Account" },
  ],
  locations: [
    { href: "/booking?city=Stockholm", label: "Stockholm" },
    { href: "/booking?city=Gothenburg", label: "Gothenburg" },
    { href: "/booking?city=Malmo", label: "Malmo" },
    { href: "/booking?city=Uppsala", label: "Uppsala" },
  ],
  contact: [
    { href: "mailto:info@mmehotels.se", label: "info@mmehotels.se" },
    { href: "tel:+4681234567", label: "+46 8 123 45 67" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight">
                MME
              </span>
              <span className="ml-2 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
                Hotels
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              Scandinavian luxury across Sweden. Where Nordic design meets
              world-class hospitality.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/40">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/40">
              Locations
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.locations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/40">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/40">
            {"2026 MME Hotels AB. All rights reserved."}
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground/70"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground/70"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
