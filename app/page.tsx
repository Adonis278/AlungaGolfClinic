import Link from "next/link";
import { Reveal } from "@/components/reveal";
import {
  countries,
  impactStats,
  lifeSkills,
  programCards,
  testimonials,
} from "@/lib/site-data";

export default function Home() {
  return (
    <div className="pb-24">
      <section className="section-shell pt-14 md:pt-20">
        <div className="relative overflow-hidden rounded-[34px] border border-white/20 bg-[linear-gradient(145deg,rgba(0,61,31,0.72),rgba(0,21,10,0.92))] px-6 py-12 md:px-10 md:py-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(216,201,163,0.4),transparent_65%)]" />
          <div className="absolute bottom-4 left-4 h-24 w-24 rounded-full border border-white/25" />

          <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90">
            Coaching Every Swing, Every Age
          </p>

          <Reveal>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight text-white md:text-7xl">
              Golf coaching for every swing. Character building for every future.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-xl">
              Alunga Golf Clinic combines professional golf instruction with youth mentorship,
              life skills, and global opportunity, helping players grow on and off the course.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/book-session" className="primary-btn bg-white text-[color:var(--deep-green)]">
              Book a Session
            </Link>
            <Link href="/youth-development" className="primary-btn bg-transparent">
              Explore Youth Programs
            </Link>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {[
              "Short Game",
              "Putting and Chipping",
              "Mental Game",
              "Swing Analysis",
              "Leadership",
              "Confidence",
            ].map((item) => (
              <div key={item} className="glass-card p-4">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--sand-beige)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell mt-14">
        <Reveal className="white-card p-6 md:p-8">
          <h2 className="text-3xl font-extrabold text-[color:var(--deep-green)] md:text-5xl">
            More than lessons. Measurable growth.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-zinc-700">
            From short game to mental game, every Alunga session is designed to grow skill,
            confidence, and character.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[color:var(--fairway-green)]/25 bg-[color:var(--soft-grass)] p-4">
                <p className="text-4xl font-extrabold text-[color:var(--deep-green)]">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold text-zinc-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-shell mt-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="glass-card p-6 md:p-8">
            <h3 className="text-3xl font-extrabold text-white md:text-4xl">
              Golf can feel exclusive. We are changing that.
            </h3>
            <p className="mt-4 text-white/85">
              Many families see golf as expensive, intimidating, or disconnected from everyday
              youth development. Alunga creates a welcoming pathway where students learn the
              game, gain confidence, build discipline, and access mentorship.
            </p>
          </Reveal>

          <Reveal className="white-card grid gap-4 p-6 md:grid-cols-2 md:p-8">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-red-700">Traditional Golf Barriers</h4>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>High cost</li>
                <li>Lack of equipment</li>
                <li>Intimidating culture</li>
                <li>Limited youth access</li>
                <li>No mentorship structure</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--deep-green)]">Alunga Approach</h4>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>Beginner-friendly clinics</li>
                <li>Equipment access</li>
                <li>Inclusive coaching</li>
                <li>Life-skills curriculum</li>
                <li>Partner-supported scholarships</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell mt-14">
        <Reveal>
          <h3 className="text-3xl font-extrabold md:text-5xl">Some clinics teach swings. Alunga develops people.</h3>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Learn the Game",
              body: "Grip, stance, putting, chipping, full swing, rules, and etiquette.",
            },
            {
              title: "Build the Mindset",
              body: "Discipline, patience, confidence, resilience, and sportsmanship.",
            },
            {
              title: "Open the Door",
              body: "Mentorship, tournaments, scholarships, and partnership pathways.",
            },
          ].map((card) => (
            <Reveal key={card.title} className="glass-card p-6">
              <h4 className="text-2xl font-bold">{card.title}</h4>
              <p className="mt-3 text-sm text-white/85">{card.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-14">
        <Reveal>
          <h3 className="text-3xl font-extrabold md:text-5xl">Programs built for every age and every stage.</h3>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programCards.map((program) => (
            <Reveal key={program.title} className="white-card p-6">
              <p className="inline-flex rounded-full bg-[color:var(--soft-grass)] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--deep-green)]">
                {program.badge}
              </p>
              <h4 className="mt-4 text-2xl font-extrabold text-[color:var(--deep-green)]">{program.title}</h4>
              <p className="mt-2 text-sm font-semibold text-zinc-700">{program.ages}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">{program.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-14">
        <Reveal>
          <h3 className="text-3xl font-extrabold md:text-5xl">Every lesson teaches more than golf.</h3>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lifeSkills.map((skill) => (
            <Reveal key={skill.skill} className="group white-card p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(30,107,45,0.8)]">
              <h4 className="text-xl font-bold text-[color:var(--deep-green)]">{skill.skill}</h4>
              <p className="mt-3 text-sm text-zinc-700">{skill.scenario}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-14">
        <Reveal className="glass-card grid gap-6 p-6 md:grid-cols-[300px_1fr] md:p-8">
          <div className="overflow-hidden rounded-3xl border border-white/20 bg-[linear-gradient(170deg,rgba(216,201,163,0.35),rgba(255,255,255,0.08))] p-2">
            <div className="h-full min-h-64 rounded-[20px] bg-[linear-gradient(145deg,#0b4f23,#003d1f)]" />
          </div>
          <div>
            <h3 className="text-3xl font-extrabold md:text-5xl">Led by a coach who understands the game and the journey.</h3>
            <p className="mt-4 max-w-2xl text-white/85">
              Alunga is built on a coaching philosophy that blends elite skill development with
              mentorship, discipline, and purpose. From first-time junior golfers to competitive
              players, each athlete receives technical training and character guidance.
            </p>
            <Link href="/coaches" className="primary-btn mt-6 bg-white text-[color:var(--deep-green)]">
              Meet the Coaching Team
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section-shell mt-14">
        <Reveal className="white-card p-6 md:p-8">
          <h3 className="text-3xl font-extrabold text-[color:var(--deep-green)] md:text-5xl">
            From local lessons to global opportunity.
          </h3>
          <p className="mt-3 max-w-2xl text-zinc-700">
            Alunga is building a bridge between the U.S. and East Africa through youth clinics,
            coach development, equipment access, and scholarship pathways.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[color:var(--fairway-green)]/25 bg-[color:var(--soft-grass)] p-4">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--deep-green)]">
                Connected Regions
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {countries.map((country) => (
                  <span key={country} className="rounded-full border border-[color:var(--fairway-green)]/30 bg-white px-3 py-1 text-xs font-bold text-[color:var(--deep-green)]">
                    {country}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[color:var(--fairway-green)]/25 bg-white p-4">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--deep-green)]">
                Pathway Steps
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li>Launch in the U.S.</li>
                <li>Partner with schools and clubs</li>
                <li>Collect and donate equipment</li>
                <li>Train local coaches</li>
                <li>Host youth clinics and scholarship tracks</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell mt-14">
        <Reveal className="glass-card p-6 md:p-8">
          <h3 className="text-3xl font-extrabold md:text-5xl">Help us build the next generation of golfers and leaders.</h3>
          <p className="mt-3 max-w-2xl text-white/85">
            Partner with Alunga to sponsor students, support clinics, provide equipment, and expand
            access through schools and community organizations.
          </p>
          <Link href="/partners" className="primary-btn mt-6 bg-white text-[color:var(--deep-green)]">
            Become a Partner
          </Link>
        </Reveal>
      </section>

      <section id="testimonials" className="section-shell mt-14">
        <Reveal>
          <h3 className="text-3xl font-extrabold md:text-5xl">Real stories. Real growth.</h3>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <Reveal key={item.name} className="white-card p-6">
              <p className="text-base italic text-zinc-700">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-bold text-[color:var(--deep-green)]">{item.name}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{item.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-14 overflow-hidden border-y border-white/15 bg-black/20 py-4">
        <div className="ticker flex w-[200%] gap-4">
          {["Confidence Built", "Swing Improved", "Leadership Developed", "Mentorship Created", "Scholarships Opened", "Community Impact"].map((value) => (
            <div key={`${value}-a`} className="shrink-0 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/90">
              {value}
            </div>
          ))}
          {["Confidence Built", "Swing Improved", "Leadership Developed", "Mentorship Created", "Scholarships Opened", "Community Impact"].map((value) => (
            <div key={`${value}-b`} className="shrink-0 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/90">
              {value}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell mt-14">
        <Reveal className="white-card p-6 md:p-9">
          <h3 className="text-3xl font-extrabold text-[color:var(--deep-green)] md:text-5xl">
            Ready to build confidence through golf?
          </h3>
          <p className="mt-3 max-w-2xl text-zinc-700">
            Book your first session, sponsor a student, or bring Alunga to your school and
            community.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/book-session" className="primary-btn">
              Book a Session
            </Link>
            <Link href="/partners" className="secondary-btn">
              Sponsor a Student
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
