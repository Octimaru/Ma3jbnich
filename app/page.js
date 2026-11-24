import Link from "next/link";
import Garment from "@/components/Garment";
import { site, whatsappUrl } from "@/lib/site";

const drop = [
  { id: "a", kind: "hoodie", name: "Hoodie Zitoun", price: "449 DH" },
  { id: "b", kind: "tee", name: "Tee Lil", price: "189 DH" },
  { id: "c", kind: "cargo", name: "Cargo Zeqaq", price: "399 DH" },
];

const facts = [
  {
    title: "Qmash mrtah",
    text: "Qmash li kay3ish: ghsil mra w mra w ybqa f hdo, w ma ytzgherch 3lik f s-sif.",
  },
  {
    title: "Qiyas mrtah",
    text: "Mn S hta XXL. Ila ma nasbekch l-qiyas, kanbddlouh lik.",
  },
  {
    title: "Livraison l kol Lmghrib",
    text: "Kanwesslou l kol l-mudon, w kan3awdou n9ollou lik mnin kaytla3 t-talab.",
  },
  {
    title: "Khlass 3nd tsel",
    text: "Tchouf, tjereb, w mn ba3d t3ti l-flous l l-livreur.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Kolchi ma3jbnich.
            <br />
            Ghir hadchi 3jbni.
          </h1>
          <p className="hero-sub">
            Streetwear mkhedem f Lmghrib. Qmash mzyan, qiyas mrtah, w taman
            m3qol.
          </p>
          <div className="hero-cta">
            <Link href="#collection" className="btn btn-primary">
              Chouf l-collection
            </Link>
            <a
              href={whatsappUrl("Salam Ma3jbnich, bghit nstafsar 3la l-hwayej.")}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tsal 3lina f WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          {site.nameAr}
        </div>
      </section>

      <section id="collection" className="section">
        <div className="container">
          <div className="section-head">
            <h2>L-drop jdid</h2>
            <p className="lead">
              Ikhtar li 3jbatek w siyft lina message f WhatsApp. Kol qit3a
              katwsel l dar dyalek.
            </p>
          </div>

          <div className="drop-grid">
            {drop.map((p) => (
              <a
                key={p.id}
                className={`tile tile--${p.id}`}
                href={whatsappUrl(
                  `Salam Ma3jbnich, bghit ntlob ${p.name} (${p.price}). Wach kayn?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Tlob ${p.name}, ${p.price}, f WhatsApp`}
              >
                <div className="tile-art">
                  <Garment kind={p.kind} label={p.name} />
                </div>
                <div className="tile-meta">
                  <span className="tile-name">{p.name}</span>
                  <span className="tile-price">{p.price}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <h2>Chno kat-tl9a m3ana</h2>
          <div className="facts">
            {facts.map((f) => (
              <div className="fact" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-inner">
          <h2>Chi haja ma 3jbatekch? Golha lina.</h2>
          <a
            href={whatsappUrl("Salam Ma3jbnich,")}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tsal 3lina f WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
