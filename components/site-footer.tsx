import Image from "next/image";
import Link from "next/link";

const secondaryLinks = [
  { href: "/about", label: "About Alunga" },
  { href: "/programs", label: "Clinics and Camps" },
  { href: "/partners", label: "Sponsorship" },
  { href: "/partners", label: "School Partnerships" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "/safety-policies", label: "Safety and Policies" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[color:var(--carbon-black)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-white/10">
              <Image
                src="/alunga-logo.jpeg"
                alt="Alunga Golf Clinic logo"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight text-white">Alunga Golf Clinic</h3>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
            Premium golf coaching and youth development built to grow confident players,
            disciplined leaders, and stronger communities.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--fairway-green)]">
            Explore
          </h4>
          <ul className="mt-4 space-y-2">
            {secondaryLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition hover:text-white"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--fairway-green)]">
            Contact
          </h4>
          <p className="mt-4 text-sm text-white/80">alungamichaelgolf@gmail.com</p>
          <p className="text-sm text-white/80">📱 USA: +17042324140</p>
          <p className="text-sm text-white/80">📱 Uganda: +256751100372</p>
          <p className="text-sm text-white/80">📱 Kenya: +254746576569</p>
          <p className="mt-4 text-xs text-white/70 leading-relaxed">
            We offer services to adapt people who are willing to learn golf and offer free services to organizations of people who are in need.
          </p>
          <p className="mt-5 text-xs text-white/60">
            Copyright {new Date().getFullYear()} Alunga Golf Clinic. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--fairway-green)]">
            Payment Methods
          </h4>
          
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase text-white/90">International</p>
            <ul className="mt-2 space-y-1 text-xs text-white/80">
              <li>💳 Cash App: @alungagolfclinic</li>
              <li>💳 Zelle: 704-232-4140</li>
              <li>💳 Apple Pay: Available</li>
            </ul>
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold uppercase text-white/90">Local (East Africa)</p>
            <ul className="mt-2 space-y-1 text-xs text-white/80">
              <li>📱 M-Pesa: Available</li>
              <li>🏦 Bank Transfer: Available</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
