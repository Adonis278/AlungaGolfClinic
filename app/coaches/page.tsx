import { Reveal } from "@/components/reveal";

export default function CoachesPage() {
  return (
    <div className="section-shell py-14">
      <Reveal className="glass-card grid gap-6 p-6 md:grid-cols-[280px_1fr] md:p-8">
        <div className="rounded-3xl border border-white/20 bg-[linear-gradient(145deg,#d8c9a3,#2d7d3a)]" />
        <div>
          <h1 className="text-4xl font-extrabold md:text-6xl">Coaches</h1>
          <p className="mt-4 max-w-3xl text-white/85">
            Alunga is led by a coach who combines technical excellence with youth-centered
            mentorship. The mission is simple: make golf more accessible and transform every lesson
            into a growth moment.
          </p>
          <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--sand-beige)]">Coaching Philosophy</p>
            <p className="mt-2 text-sm text-white/85">
              Build fundamentals. Develop mindset. Open opportunity.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
