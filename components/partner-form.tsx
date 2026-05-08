"use client";

import { FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export function PartnerForm() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [partnerType, setPartnerType] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    try {
      await addDoc(collection(db, "partnerInquiries"), {
        name,
        organization,
        partnerType,
        email,
        message,
        source: "website-partner-form",
        createdAt: serverTimestamp(),
      });
      setName("");
      setOrganization("");
      setPartnerType("");
      setEmail("");
      setMessage("");
      setStatus("success");
    } catch (error) {
      console.error("Partner form failed", error);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-[24px] border border-white/15 bg-white/95 p-6 text-[color:var(--carbon-black)]">
      <label className="space-y-2 text-sm font-semibold">
        Full Name
        <input required className="form-input" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label className="space-y-2 text-sm font-semibold">
        Organization
        <input required className="form-input" value={organization} onChange={(e) => setOrganization(e.target.value)} />
      </label>

      <label className="space-y-2 text-sm font-semibold">
        Partner Type
        <select required className="form-input" value={partnerType} onChange={(e) => setPartnerType(e.target.value)}>
          <option value="">Select</option>
          <option>School</option>
          <option>Golf Club</option>
          <option>Corporate Sponsor</option>
          <option>Youth Nonprofit</option>
          <option>Church or Community Organization</option>
          <option>Equipment Company</option>
        </select>
      </label>

      <label className="space-y-2 text-sm font-semibold">
        Email
        <input required type="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label className="space-y-2 text-sm font-semibold">
        Message
        <textarea required rows={4} className="form-input" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us how you want to partner with Alunga." />
      </label>

      <button type="submit" disabled={submitting} className="inline-flex rounded-full bg-[color:var(--deep-green)] px-5 py-3 text-sm font-bold text-white transition hover:brightness-110 disabled:opacity-60">
        {submitting ? "Sending..." : "Submit Partner Inquiry"}
      </button>

      {status === "success" ? <p className="text-sm font-semibold text-[color:var(--deep-green)]">Thanks. We will contact you with partnership options shortly.</p> : null}
      {status === "error" ? <p className="text-sm font-semibold text-red-700">Unable to submit right now. Please check Firebase credentials and try again.</p> : null}
    </form>
  );
}
