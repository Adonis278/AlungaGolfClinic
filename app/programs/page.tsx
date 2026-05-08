import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { programCards } from "@/lib/site-data";

const prices = [
  { name: "Starter", detail: "Group clinic access", price: "$65/session" },
  { name: "Progress", detail: "Weekly track + mentorship", price: "$220/month" },
  { name: "Performance", detail: "Private coaching + strategy", price: "$380/month" },
];

export default function ProgramsPage() {
  return (
    <div className="section-shell py-14">
      <Reveal>
        <h1 className="text-4xl font-extrabold md:text-6xl">Programs</h1>
        <p className="mt-4 max-w-3xl text-white/85">
          Programs designed for every age, learning pace, and growth target, from beginner sessions
          to advanced performance coaching.
        </p>
      </Reveal>

      <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {programCards.map((program) => (
          <Reveal key={program.title} className="white-card p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--fairway-green)]">
              {program.badge}
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-[color:var(--deep-green)]">{program.title}</h2>
            <p className="mt-2 text-sm font-semibold text-zinc-700">{program.ages}</p>
            <p className="mt-2 text-sm text-zinc-700">{program.description}</p>
          </Reveal>
        ))}
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Reveal className="glass-card p-6">
          <h3 className="text-2xl font-bold">Private vs Group Lessons</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>Private lessons focus on individual swing diagnostics and custom drills.</li>
            <li>Group sessions emphasize confidence, social learning, and game experience.</li>
            <li>Every track includes character and mindset coaching.</li>
          </ul>
        </Reveal>
        <Reveal className="glass-card p-6">
          <h3 className="text-2xl font-bold">Clinic and Camp Schedule</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>Weekday clinics: Tuesday to Thursday evenings</li>
            <li>Weekend development camps: Saturday mornings</li>
            <li>Seasonal intensive camps: Spring and Summer blocks</li>
          </ul>
        </Reveal>
      </section>

      <section className="mt-10">
        <Reveal>
          <h3 className="text-3xl font-extrabold md:text-4xl">Pricing Table</h3>
        </Reveal>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {prices.map((price) => (
            <Reveal key={price.name} className="white-card p-6">
              <h4 className="text-2xl font-extrabold text-[color:var(--deep-green)]">{price.name}</h4>
              <p className="mt-2 text-sm text-zinc-700">{price.detail}</p>
              <p className="mt-4 text-3xl font-extrabold text-[color:var(--deep-green)]">{price.price}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-10 white-card p-7">
        <h3 className="text-2xl font-extrabold text-[color:var(--deep-green)]">Scholarship Option</h3>
        <p className="mt-3 max-w-3xl text-sm text-zinc-700">
          Scholarships are available through sponsor-backed support. Families can request
          scholarship details during booking to ensure financial barriers never block opportunity.
        </p>
        <Link href="/book-session" className="primary-btn mt-6">
          Book a Session
        </Link>
      </section>
    </div>
  );
}
