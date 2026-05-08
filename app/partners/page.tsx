import { PartnerForm } from "@/components/partner-form";
import { Reveal } from "@/components/reveal";

export default function PartnersPage() {
  return (
    <div className="section-shell py-14">
      <Reveal>
        <h1 className="text-4xl font-extrabold md:text-6xl">Partners</h1>
        <p className="mt-4 max-w-3xl text-white/85">
          Partner with Alunga to widen access, sponsor opportunity, and shape long-term youth impact.
        </p>
      </Reveal>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <Reveal className="white-card p-6">
          <h2 className="text-2xl font-extrabold text-[color:var(--deep-green)]">Why Partner with Alunga</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>Drive measurable community impact through youth development.</li>
            <li>Support scholarships, equipment access, and mentorship pipelines.</li>
            <li>Align your brand with trusted coaching and life-skill outcomes.</li>
          </ul>
        </Reveal>
        <Reveal className="glass-card p-6">
          <h2 className="text-2xl font-bold">Partner Types</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>Schools and Districts</li>
            <li>Golf Clubs</li>
            <li>Corporate Sponsors</li>
            <li>Banks and Financial Institutions</li>
            <li>Youth Nonprofits and Churches</li>
            <li>Equipment Companies and Golf Unions</li>
          </ul>
        </Reveal>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { tier: "Community", amount: "$2,500", benefit: "Sponsor one youth clinic block" },
          { tier: "Regional", amount: "$8,000", benefit: "Fund multi-school clinic series" },
          { tier: "Impact", amount: "$20,000+", benefit: "Support scholarships + East Africa pilot" },
        ].map((item) => (
          <Reveal key={item.tier} className="white-card p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--fairway-green)]">Sponsorship Tier</p>
            <h3 className="mt-3 text-2xl font-extrabold text-[color:var(--deep-green)]">{item.tier}</h3>
            <p className="mt-2 text-3xl font-extrabold text-[color:var(--deep-green)]">{item.amount}</p>
            <p className="mt-3 text-sm text-zinc-700">{item.benefit}</p>
          </Reveal>
        ))}
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-[1fr_430px]">
        <Reveal className="glass-card p-6">
          <h3 className="text-2xl font-bold">Community Impact Metrics</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>Students enrolled</li>
            <li>Scholarships awarded</li>
            <li>Clinics delivered</li>
            <li>Schools and clubs partnered</li>
            <li>Equipment donated</li>
          </ul>
        </Reveal>
        <Reveal>
          <PartnerForm />
        </Reveal>
      </section>
    </div>
  );
}
