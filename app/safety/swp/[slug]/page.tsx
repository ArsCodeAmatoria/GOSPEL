import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SafetyDocFrame } from "@/components/SafetyDocFrame";
import { SwpDoc } from "@/components/SwpDoc";
import { SWPS, getSwp } from "@/lib/ohs";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SWPS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getSwp(slug);
  if (!doc) return { title: "SWP" };
  return { title: `${doc.number} ${doc.title}`, description: doc.summary };
}

export default async function SwpPage({ params }: Props) {
  const { slug } = await params;
  const doc = getSwp(slug);
  if (!doc) notFound();
  return (
    <SafetyDocFrame
      kicker="SAFE WORK PROCEDURE"
      num={doc.number.replace("KERN-", "")}
      title={doc.title}
      intro={doc.summary}
      backHref="/safety/swp-library"
      backLabel="SWP LIBRARY"
    >
      <SwpDoc doc={doc} />
    </SafetyDocFrame>
  );
}
