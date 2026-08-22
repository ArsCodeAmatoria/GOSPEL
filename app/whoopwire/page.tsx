import type { Metadata } from "next";
import { WhoopwireIndex } from "@/components/WhoopwireIndex";
import { WIRE, getSummaries } from "@/lib/whoopwire";

export const metadata: Metadata = {
  title: "1415WIRE",
  description: WIRE.dek,
  openGraph: {
    title: "1415WIRE",
    description: WIRE.dek,
    type: "website",
  },
};

export default function WhoopwirePage() {
  return (
    <>
      <header className="page-hero wrap">
        <p className="mono kicker">1415WIRE</p>
        <h1 className="display giant">1415WIRE</h1>
        <p className="mono mt">{WIRE.descriptor}</p>
        <p className="lede mt-2">{WIRE.dek}</p>
      </header>
      <WhoopwireIndex stories={getSummaries()} />
    </>
  );
}
