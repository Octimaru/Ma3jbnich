import ContactForm from "@/components/ContactForm";
import { site, whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Tawasel m3ana",
  description:
    "Siyft lina message f WhatsApp, Instagram wla email. Kanjawbou f aqrab waqt.",
};

export default function Contact() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Tawasel m3ana</h1>
          <p className="lead">
            Talab, suel wla ghir bghiti tgol lina chi haja. Kanjawbou f aqrab
            waqt.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container split">
          <div>
            <div className="channels">
              <a
                className="channel"
                href={whatsappUrl("Salam Ma3jbnich,")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>WhatsApp</small>
                <strong>{site.whatsappDisplay}</strong>
              </a>
              <a
                className="channel"
                href={`https://instagram.com/${site.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>Instagram</small>
                <strong>@{site.instagram}</strong>
              </a>
              <a className="channel" href={`mailto:${site.email}`}>
                <small>Email</small>
                <strong>{site.email}</strong>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
