import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/reveal";

export default function BookSessionPage() {
  return (
    <div className="section-shell py-14">
      <Reveal>
        <h1 className="text-4xl font-extrabold md:text-6xl">Book a Session</h1>
        <p className="mt-4 max-w-3xl text-white/85">
          Submit your booking request to reserve coaching, clinics, camps, or scholarship-supported
          sessions.
        </p>
      </Reveal>

      <section className="mt-8 grid gap-5 lg:grid-cols-[1fr_420px]">
        <Reveal>
          <BookingForm />
        </Reveal>
        <Reveal className="glass-card p-6">
          <h2 className="text-2xl font-bold">What Happens Next</h2>
          <ol className="mt-3 space-y-2 text-sm text-white/85">
            <li>1. Coach team reviews your request and goals.</li>
            <li>2. We confirm schedule, location, and best-fit program.</li>
            <li>3. You receive session details and onboarding information.</li>
          </ol>

          <h3 className="mt-6 text-lg font-bold">Need Help?</h3>
          <p className="mt-2 text-sm text-white/85">Email info@alungagolfclinic.org for support with scholarships, scheduling, or special accommodations.</p>
        </Reveal>
      </section>
    </div>
  );
}
