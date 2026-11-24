import Link from "next/link";

export const metadata = {
  title: "3lina",
  description:
    "3lach Ma3jbnich? L-hikaya dyal l-brand w chno kan7awlou nsawbou.",
};

const principles = [
  {
    title: "Drop sghir, jawda kbira",
    text: "Kanssawbou qiyam qlal, w kanchedou 3la l-jawda 9bel l-kamiya.",
  },
  {
    title: "Taman wad7",
    text: "Ma kayn hta chi hmza khfiya. L-taman li kat-chouf houwa li kat-khlass.",
  },
  {
    title: "Kansm3o lik",
    text: "Ila ma 3jbekch chi haja, golha lina. Hakka kan-tqaddmou.",
  },
];

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>3lach Ma3jbnich?</h1>
          <p className="lead">
            L-ism bda b kelma kan9olouha kolna f s-souq. Daba sar houwa l-brand.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container split">
          <div className="split-aside">
            <h2>Hwayej katl9a fihom rassek.</h2>
          </div>

          <div>
            <div className="prose">
              <p>
                Kolchi kayn f s-souq kay-chbah l-kolchi, w l-nas kat9ol:
                ma3jbnich. Ma 3jbna la l-qmash, la l-qiyas, la t-taman.
              </p>
              <p>
                Bghina hwayej katl9a fihom rassek: l-qiyas, l-lon, l-qmash, w
                t-taman. Hwayej katl-bssouha f l-9ahwa, f l-jam3a, w f l-3chiya,
                bla ma tfekker mrtein.
              </p>
              <p>
                Kol drop sghir. Kan-khdmou 3lih b rwiya, w ila ma 3jbekch chi
                haja, golha lina w kan7awlou n7ello.
              </p>
            </div>

            <div className="principles">
              {principles.map((p) => (
                <div className="principle" key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>

            <p style={{ marginTop: 40 }}>
              <Link href="/services" className="btn btn-ghost">
                Chouf khadamatna
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
