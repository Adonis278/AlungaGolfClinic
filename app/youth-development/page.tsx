import { Reveal } from "@/components/reveal";
import { lifeSkills } from "@/lib/site-data";

export default function YouthDevelopmentPage() {
  return (
    <div className="section-shell py-14">
      <Reveal>
        <h1 className="text-4xl font-extrabold md:text-6xl">Youth Development</h1>
        <p className="mt-4 max-w-3xl text-white/85">
          Alunga develops complete young athletes through a first-tee inspired blend of golf
          fundamentals, mentorship, and life-skill learning.
        </p>
      </Reveal>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <Reveal className="glass-card p-6">
          <h2 className="text-2xl font-bold">Life-Skills Framework</h2>
          <p className="mt-3 text-sm text-white/85">
            Each session connects technical golf development to practical life lessons that translate
            to school, relationships, and leadership settings.
          </p>
        </Reveal>
        <Reveal className="glass-card p-6">
          <h2 className="text-2xl font-bold">Mentorship Model</h2>
          <p className="mt-3 text-sm text-white/85">
            Students are guided through weekly coaching touchpoints, positive accountability, and
            clear growth milestones with coach and family alignment.
          </p>
        </Reveal>
      </section>

      <section className="mt-8">
        <Reveal>
          <h3 className="text-3xl font-extrabold md:text-4xl">Core Values</h3>
        </Reveal>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lifeSkills.map((skill) => (
            <Reveal key={skill.skill} className="white-card p-6">
              <h4 className="text-xl font-bold text-[color:var(--deep-green)]">{skill.skill}</h4>
              <p className="mt-3 text-sm text-zinc-700">{skill.scenario}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Reveal className="white-card p-6">
          <h3 className="text-2xl font-extrabold text-[color:var(--deep-green)]">Parent Benefits</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>Safe, supervised sessions with clear progression plans.</li>
            <li>Consistent updates on mindset and skill development.</li>
            <li>Inclusive culture focused on confidence and respect.</li>
          </ul>
        </Reveal>
        <Reveal className="white-card p-6">
          <h3 className="text-2xl font-extrabold text-[color:var(--deep-green)]">Student Outcomes</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>Improved golf fundamentals and course confidence.</li>
            <li>Stronger discipline, perseverance, and leadership traits.</li>
            <li>Access to mentorship and long-term opportunities.</li>
          </ul>
        </Reveal>
      </section>

      <section className="mt-10 glass-card p-7">
        <h3 className="text-2xl font-extrabold">Safety and Supervision</h3>
        <p className="mt-3 max-w-3xl text-sm text-white/85">
          Alunga prioritizes youth safety with structured check-ins, coach oversight, clear conduct
          standards, and parent communication protocols.
        </p>
      </section>
    </div>
  );
}
