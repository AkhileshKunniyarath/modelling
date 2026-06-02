"use client";

import { FormEvent, useState } from "react";
import { whatsappUrl } from "@/content/site";

type ApplicationForm = {
  name: string;
  age: string;
  city: string;
  phone: string;
  category: string;
  height: string;
  experience: string;
  instagram: string;
  portfolio: string;
  message: string;
};

const initialForm: ApplicationForm = {
  name: "",
  age: "",
  city: "",
  phone: "",
  category: "Runway",
  height: "",
  experience: "",
  instagram: "",
  portfolio: "",
  message: ""
};

export function JoinApplicationForm() {
  const [form, setForm] = useState<ApplicationForm>(initialForm);

  function updateField(field: keyof ApplicationForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Hello Hanaz Modelling, I want to apply as a model.",
      "",
      `Name: ${form.name}`,
      `Age: ${form.age}`,
      `City: ${form.city}`,
      `Phone: ${form.phone}`,
      `Preferred Category: ${form.category}`,
      form.height ? `Height: ${form.height}` : "",
      form.experience ? `Experience: ${form.experience}` : "",
      form.instagram ? `Instagram: ${form.instagram}` : "",
      form.portfolio ? `Portfolio / Photos Link: ${form.portfolio}` : "",
      form.message ? `Message: ${form.message}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = whatsappUrl(message);
  }

  return (
    <form className="join-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Full Name</span>
          <input
            required
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
          />
        </label>
        <label>
          <span>Age</span>
          <input
            required
            type="number"
            min="13"
            value={form.age}
            onChange={(event) => updateField("age", event.target.value)}
            placeholder="18"
          />
        </label>
        <label>
          <span>City</span>
          <input
            required
            type="text"
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
            placeholder="Bengaluru"
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
          <span>Category</span>
          <select value={form.category} onChange={(event) => updateField("category", event.target.value)}>
            <option>Runway</option>
            <option>Editorial</option>
            <option>Commercial</option>
            <option>Event / Pageant</option>
            <option>New Face</option>
          </select>
        </label>
        <label>
          <span>Height</span>
          <input
            type="text"
            value={form.height}
            onChange={(event) => updateField("height", event.target.value)}
            placeholder="5'7 or 170 cm"
          />
        </label>
        <label>
          <span>Experience</span>
          <select value={form.experience} onChange={(event) => updateField("experience", event.target.value)}>
            <option value="">Select experience</option>
            <option>Fresher</option>
            <option>Portfolio shoots</option>
            <option>Runway shows</option>
            <option>Editorial campaigns</option>
            <option>Commercial modelling</option>
          </select>
        </label>
        <label>
          <span>Instagram</span>
          <input
            type="text"
            value={form.instagram}
            onChange={(event) => updateField("instagram", event.target.value)}
            placeholder="@username"
          />
        </label>
        <label className="form-wide">
          <span>Portfolio / Photo Link</span>
          <input
            type="url"
            value={form.portfolio}
            onChange={(event) => updateField("portfolio", event.target.value)}
            placeholder="Google Drive, Instagram post, or portfolio link"
          />
        </label>
        <label className="form-wide">
          <span>Short Message</span>
          <textarea
            rows={4}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell us about your modelling interest, availability, or event preference."
          />
        </label>
      </div>
      <div className="form-actions">
        <p>After clicking Apply, your details will open in WhatsApp as a ready-to-send message.</p>
        <button className="btn" type="submit">
          Apply via WhatsApp
        </button>
      </div>
    </form>
  );
}
