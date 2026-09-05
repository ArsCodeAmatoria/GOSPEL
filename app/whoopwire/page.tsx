import type { Metadata } from "next";
import { WhoopwireIndex } from "@/components/WhoopwireIndex";
import { WIRE, getSummaries } from "@/lib/whoopwire";

export const metadata: Metadata = {
  title: WIRE.name,
  description: WIRE.dek,
  openGraph: {
    title: WIRE.name,
    description: WIRE.dek,
    type: "website",
  },
};

export default function WhoopwirePage() {
  return (
    <>
      <header className="page-hero wrap">
        <p className="mono kicker">{WIRE.name}</p>
        <h1 className="display giant">{WIRE.name}</h1>
        <p className="mono mt">{WIRE.descriptor}</p>
        <p className="lede mt-2">{WIRE.dek}</p>
      </header>
      <WhoopwireIndex stories={getSummaries()} />
    </>
  );
}
