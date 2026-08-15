import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Blocks } from "@/components/Blocks";
import { SafetyNav } from "@/components/SafetyNav";
import { SAFETY, getSafety } from "@/lib/safety";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SAFETY.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const section = getSafety(slug);
  if (!section) return { title: "Safety Program" };
  return {
    title: `${section.num} ${section.title}`,
    description: section.intro,
  };
}

export default async function SafetySectionPage({ params }: Props) {
  const { slug } = await params;
  const section = getSafety(slug);
  if (!section) notFound();

  const index = SAFETY.findIndex((s) => s.slug === slug);
  const prev = index > 0 ? SAFETY[index - 1] : null;
  const next = index < SAFETY.length - 1 ? SAFETY[index + 1] : null;

  return (
    <div className="doc">
      <SafetyNav current={slug} />
      <article className="doc-body">
        <header className="doc-title">
          <p className="mono steel">SAFETY PROGRAM</p>
          <div className="num">{section.num}</div>
          <h1 className="display">{section.title}</h1>
          <p className="lede mt">{section.intro}</p>
        </header>
        <Blocks blocks={section.blocks} />
        <nav className="pager">
          {prev ? (
            <Link href={`/safety/${prev.slug}`}>
              <span className="mono steel">PREV {prev.num}</span>
              <strong className="display">{prev.title}</strong>
            </Link>
          ) : (
            <Link href="/safety">
              <span className="mono steel">INDEX</span>
              <strong className="display">SAFETY PROGRAM</strong>
            </Link>
          )}
          {next ? (
            <Link href={`/safety/${next.slug}`}>
              <span className="mono steel">NEXT {next.num}</span>
              <strong className="display">{next.title}</strong>
            </Link>
          ) : (
            <Link href="/hire">
              <span className="mono steel">NEXT</span>
              <strong className="display">HIRE A CREW</strong>
            </Link>
          )}
        </nav>
      </article>
    </div>
  );
}
