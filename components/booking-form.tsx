"use client";

import { FormEvent, useMemo, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

type FormState = {
  lessonType: string;
  ageGroup: string;
  skillLevel: string;
  preferredDate: string;
  preferredTime: string;
  location: string;
  guardianName: string;
  studentName: string;
  contactEmail: string;
  contactPhone: string;
  notes: string;
  depositPlan: string;
};

const initialState: FormState = {
  lessonType: "",
  ageGroup: "",
  skillLevel: "",
  preferredDate: "",
  preferredTime: "",
  location: "",
  guardianName: "",
  studentName: "",
  contactEmail: "",
  contactPhone: "",
  notes: "",
  depositPlan: "",
};

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const completion = useMemo(() => {
    const values = Object.values(form);
    const completed = values.filter((value) => value.trim().length > 0).length;
    return Math.round((completed / values.length) * 100);
  }, [form]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    try {
      await addDoc(collection(db, "bookings"), {
        ...form,
        createdAt: serverTimestamp(),
        source: "website-booking",
      });
      setForm(initialState);
      setStatus("success");
    } catch (error) {
      console.error("Failed to submit booking", error);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-[28px] border border-white/20 bg-white/95 p-6 text-[color:var(--carbon-black)] md:p-8">
      <div>
        <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--deep-green)]">
          <span>Booking Progress</span>
          <span>{completion}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-[color:var(--soft-grass)]">
          <div className="h-full rounded-full bg-[color:var(--fairway-green)] transition-all" style={{ width: `${completion}%` }} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold">
          Lesson Type
          <select required value={form.lessonType} onChange={(e) => setForm({ ...form, lessonType: e.target.value })} className="form-input">
            <option value="">Select</option>
            <option>Junior Starter Clinic</option>
            <option>Youth Development Track</option>
            <option>Teen Performance Track</option>
            <option>Adult and Family Lessons</option>
            <option>School and Community Clinics</option>
          </select>
        </label>

        <label className="space-y-2 text-sm font-semibold">
          Age Group
          <select required value={form.ageGroup} onChange={(e) => setForm({ ...form, ageGroup: e.target.value })} className="form-input">
            <option value="">Select</option>
            <option>Ages 6-10</option>
            <option>Ages 11-14</option>
            <option>Ages 15-18</option>
            <option>Adult</option>
          </select>
        </label>

        <label className="space-y-2 text-sm font-semibold">
          Skill Level
          <select required value={form.skillLevel} onChange={(e) => setForm({ ...form, skillLevel: e.target.value })} className="form-input">
            <option value="">Select</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </label>

        <label className="space-y-2 text-sm font-semibold">
          Preferred Date
          <input required type="date" value={form.preferredDate} onChange={(e) => setForm({ ...form, preferredDate: e.target.value })} className="form-input" />
        </label>

        <label className="space-y-2 text-sm font-semibold">
          Preferred Time
          <input required type="time" value={form.preferredTime} onChange={(e) => setForm({ ...form, preferredTime: e.target.value })} className="form-input" />
        </label>

        <label className="space-y-2 text-sm font-semibold">
          Location
          <input required value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="Preferred course or city" className="form-input" />
        </label>

        <label className="space-y-2 text-sm font-semibold">
          Parent or Guardian Name
          <input required value={form.guardianName} onChange={(e) => setForm({ ...form, guardianName: e.target.value })} className="form-input" />
        </label>

        <label className="space-y-2 text-sm font-semibold">
          Student Name
          <input required value={form.studentName} onChange={(e) => setForm({ ...form, studentName: e.target.value })} className="form-input" />
        </label>

        <label className="space-y-2 text-sm font-semibold">
          Contact Email
          <input required type="email" value={form.contactEmail} onChange={(e) => setForm({ ...form, contactEmail: e.target.value })} className="form-input" />
        </label>

        <label className="space-y-2 text-sm font-semibold">
          Contact Phone
          <input required type="tel" value={form.contactPhone} onChange={(e) => setForm({ ...form, contactPhone: e.target.value })} className="form-input" />
        </label>

        <label className="space-y-2 text-sm font-semibold md:col-span-2">
          Deposit or Payment Option
          <select required value={form.depositPlan} onChange={(e) => setForm({ ...form, depositPlan: e.target.value })} className="form-input">
            <option value="">Select</option>
            <option>Pay full program fee</option>
            <option>Reserve with deposit</option>
            <option>Request scholarship info</option>
          </select>
        </label>

        <label className="space-y-2 text-sm font-semibold md:col-span-2">
          Notes
          <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} rows={4} className="form-input" placeholder="Goals, schedule constraints, or accessibility notes" />
        </label>
      </div>

      <button disabled={submitting} type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--deep-green)] px-6 py-3 text-base font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60">
        {submitting ? "Submitting..." : "Confirm Booking Request"}
      </button>

      {status === "success" ? (
        <p className="rounded-xl border border-[color:var(--fairway-green)] bg-[color:var(--soft-grass)] p-3 text-sm font-semibold text-[color:var(--deep-green)]">
          Booking request received. A coach will follow up shortly with the next steps.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="rounded-xl border border-red-300 bg-red-50 p-3 text-sm font-semibold text-red-700">
          We could not submit your request. Please verify your Firebase configuration and try again.
        </p>
      ) : null}
    </form>
  );
}
