"use client";

import { whatsappUrl } from "@/lib/site";

export default function ContactForm() {
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") || "").toString().trim();
    const city = (data.get("city") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    const text = [
      "Salam Ma3jbnich,",
      message,
      "",
      `Smiti: ${name}`,
      city ? `Mdina: ${city}` : "",
    ]
      .filter((line, i, arr) => line !== "" || arr[i - 1] !== "")
      .join("\n");

    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        Smitek
        <input name="name" type="text" required autoComplete="name" placeholder="Mital: Yassine" />
      </label>

      <label>
        Mdina
        <input name="city" type="text" autoComplete="address-level2" placeholder="Mital: Casablanca" />
      </label>

      <label>
        Chno bghiti?
        <textarea
          name="message"
          required
          placeholder="Mital: Bghit Hoodie Zitoun, qiyas L. Wach kayn?"
        />
      </label>

      <button type="submit" className="btn btn-primary">
        Siyeft f WhatsApp
      </button>
      <p className="hint">Ghadi t7ell WhatsApp w l-message jahez, ghir tzghat 3la siyeft.</p>
    </form>
  );
}
