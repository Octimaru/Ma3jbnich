import { whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Khadamat",
  description:
    "Livraison l kol Lmghrib, khlass 3nd tsel, tbdil l-qiyas w talabat l l-fre9 w l-jam3iyat.",
};

const services = [
  {
    title: "Livraison l kol Lmghrib",
    text: "Kanwesslou l kol l-mudon dyal Lmghrib, w kan3awdou n9ollou lik mnin kaytla3 talabk mn 3ndna.",
  },
  {
    title: "Khlass 3nd tsel",
    text: "Ma kat-khlass hta kaywsel lik t-talab. Tchouf l-hwayej, tjereb-hom, w mn ba3d t3ti l-flous l l-livreur.",
  },
  {
    title: "Tbdil l-qiyas",
    text: "Ila ma nasbekch l-qiyas, siyft lina message w kanbddlouh lik b qiyas akher.",
  },
  {
    title: "Talabat l l-fre9 w l-jam3iyat",
    text: "Fre9 dyal kora, jam3iyat, w chorakat: kan-wejdou lik talab b l-jomla b taman khass.",
  },
];

export default function Services() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Khadamat</h1>
          <p className="lead">
            Mn nhar kat-ikhtar l-hwayej hta nhar kay-wsslek l-bab.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {services.map((s) => (
            <div className="service" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}

          <div className="services-foot">
            <p className="lead">Bghiti chi haja khra? Golha lina.</p>
            <a
              href={whatsappUrl("Salam Ma3jbnich, 3ndi suel 3la khadamatkom.")}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tsal 3lina f WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
