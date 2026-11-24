import Link from "next/link";

export const metadata = { title: "Safha ma kaynach" };

export default function NotFound() {
  return (
    <div className="page-hero">
      <div className="container section">
        <h1>Had s-safha ma kaynach.</h1>
        <p className="lead">Ymken r-rabit ghalat. Rje3 l Dar w kmmel.</p>
        <p style={{ marginTop: 28 }}>
          <Link href="/" className="btn btn-primary">
            Rje3 l Dar
          </Link>
        </p>
      </div>
    </div>
  );
}
