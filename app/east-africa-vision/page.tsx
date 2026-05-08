import { Reveal } from "@/components/reveal";
import { countries } from "@/lib/site-data";

export default function EastAfricaVisionPage() {
  return (
    <div className="section-shell py-14">
      <Reveal>
        <h1 className="text-4xl font-extrabold md:text-6xl">East Africa Vision</h1>
        <p className="mt-4 max-w-3xl text-white/85">
          A long-term plan to connect U.S. coaching resources with East Africa youth golf pathways.
        </p>
      </Reveal>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <Reveal className="white-card p-6">
          <h2 className="text-2xl font-extrabold text-[color:var(--deep-green)]">Why East Africa</h2>
          <p className="mt-3 text-sm text-zinc-700">
            East Africa has a young, ambitious population and emerging golf communities ready for
            structured youth access, coaching support, and leadership development.
          </p>
        </Reveal>
        <Reveal className="glass-card p-6">
          <h2 className="text-2xl font-bold">Target Countries</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {countries.map((country) => (
              <span key={country} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                {country}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Reveal className="white-card p-6">
          <h3 className="text-xl font-extrabold text-[color:var(--deep-green)]">Equipment Access Model</h3>
          <p className="mt-2 text-sm text-zinc-700">Collect, refurbish, and distribute golf gear through partner clubs and sponsor drives.</p>
        </Reveal>
        <Reveal className="white-card p-6">
          <h3 className="text-xl font-extrabold text-[color:var(--deep-green)]">Local Coach Training</h3>
          <p className="mt-2 text-sm text-zinc-700">Train local coaches with curriculum standards, safety methods, and youth-first teaching systems.</p>
        </Reveal>
        <Reveal className="white-card p-6">
          <h3 className="text-xl font-extrabold text-[color:var(--deep-green)]">Golf Sixes-Style Clinics</h3>
          <p className="mt-2 text-sm text-zinc-700">Run team-based youth clinics that keep entry low-pressure and engagement high.</p>
        </Reveal>
        <Reveal className="white-card p-6">
          <h3 className="text-xl font-extrabold text-[color:var(--deep-green)]">Exchange Opportunities</h3>
          <p className="mt-2 text-sm text-zinc-700">Build mentorship, travel exposure, and scholarship pathways between partner regions.</p>
        </Reveal>
      </section>

      <section className="mt-10 glass-card p-7">
        <h3 className="text-2xl font-extrabold">Sponsor-a-Clinic Model</h3>
        <p className="mt-3 max-w-3xl text-sm text-white/85">
          Sponsors can directly fund local clinics, coaching stipends, equipment packs, and student
          transport to ensure sustainable participation.
        </p>
      </section>
    </div>
  );
}
