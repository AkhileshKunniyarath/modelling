"use client";

import { FormEvent, useState } from "react";
import { FaRegCalendarDays } from "react-icons/fa6";
import { whatsappUrl } from "@/content/site";

type CollaborationForm = {
  name: string;
  company: string;
  phone: string;
  projectType: string;
  city: string;
  date: string;
  budget: string;
  message: string;
};

const initialForm: CollaborationForm = {
  name: "",
  company: "",
  phone: "",
  projectType: "Runway show",
  city: "",
  date: "",
  budget: "",
  message: ""
};

export function CollaborateEnquiryForm() {
  const [form, setForm] = useState<CollaborationForm>(initialForm);

  function updateField(field: keyof CollaborationForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Hello Hanaz Modelling, I would like to discuss a collaboration.",
      "",
      `Name: ${form.name}`,
      form.company ? `Brand / Company: ${form.company}` : "",
      `Phone: ${form.phone}`,
      `Project Type: ${form.projectType}`,
      `City: ${form.city}`,
      form.date ? `Preferred Date: ${form.date}` : "",
      form.budget ? `Budget Range: ${form.budget}` : "",
      form.message ? `Project Details: ${form.message}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = whatsappUrl(message);
  }

  return (
    <form className="join-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Your Name</span>
          <input
            required
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Contact person"
          />
        </label>
        <label>
          <span>Brand / Company</span>
          <input
            type="text"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Company or event name"
          />
        </label>
        <label>
          <span>Phone Number</span>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+91..."
          />
        </label>
        <label>
          <span>Project Type</span>
          <select value={form.projectType} onChange={(event) => updateField("projectType", event.target.value)}>
            <option>Runway show</option>
            <option>Brand campaign</option>
            <option>Editorial photoshoot</option>
            <option>Product launch</option>
            <option>Pageant / event</option>
            <option>Model casting</option>
          </select>
        </label>
        <label>
          <span>City</span>
          <input
            required
            type="text"
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
            placeholder="Event or shoot city"
          />
        </label>
        <label>
          <span>Preferred Date</span>
          <span className="date-input-wrap">
            <input type="date" value={form.date} onChange={(event) => updateField("date", event.target.value)} />
            <FaRegCalendarDays aria-hidden="true" />
          </span>
        </label>
        <label className="form-wide">
          <span>Budget Range</span>
          <input
            type="text"
            value={form.budget}
            onChange={(event) => updateField("budget", event.target.value)}
            placeholder="Optional"
          />
        </label>
        <label className="form-wide">
          <span>Project Details</span>
          <textarea
            rows={4}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell us about talent requirements, number of models, styling needs, venue, schedule, or campaign goals."
          />
        </label>
      </div>
      <div className="form-actions">
        <p>Your enquiry opens in WhatsApp as a ready-to-send message. No details are stored on the website.</p>
        <button className="btn" type="submit">
          Send Enquiry
        </button>
      </div>
    </form>
  );
}
