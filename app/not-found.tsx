import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap" style={{ padding: "6rem 0 8rem" }}>
      <p className="mono kicker">404</p>
      <h1 className="display giant">
        NOT
        <br />
        HERE.
      </h1>
      <p className="lede mt">That page does not exist. The work still does.</p>
      <div className="inline-cta">
        <Link className="btn btn-solid" href="/">
          HOME
        </Link>
        <Link className="btn btn-ghost" href="/hire">
          HIRE A CREW
        </Link>
      </div>
    </div>
  );
}
