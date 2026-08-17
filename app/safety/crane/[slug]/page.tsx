import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SafetyControlStamp } from "@/components/SafetyControl";
import { SafetyDocFrame } from "@/components/SafetyDocFrame";
import { CRANES, getCrane } from "@/lib/ohs/cranes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CRANES.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getCrane(slug);
  if (!doc) return { title: "Crane" };
  return { title: `${doc.number} ${doc.title}`, description: doc.summary };
}

export default async function CranePage({ params }: Props) {
  const { slug } = await params;
  const doc = getCrane(slug);
  if (!doc) notFound();
  return (
    <SafetyDocFrame
      kicker={`${doc.maker.toUpperCase()} · ${doc.family}`}
      num={doc.number.replace("WHOOP-", "")}
      title={doc.title}
      intro={doc.summary}
      backHref="/safety/inspections"
      backLabel="INSPECTIONS"
    >
      <div className="prose">
        <SafetyControlStamp number={doc.number} title={doc.title} />
        <p>
          Lift to the serial chart in the cab — this jib, this reeving, this
          mast, this ballast. The files below are Manitowoc published range
          sheets. Operator, maintenance and lubrication manuals for this serial
          live in the cab and on Manitowoc Crane Care.
        </p>
        <p className="doc-cta">
          <a href={doc.productUrl} target="_blank" rel="noreferrer">
            {doc.maker.toUpperCase()} PRODUCT PAGE →
          </a>
        </p>
        <h2>PUBLISHED RANGE</h2>
        <div className="rules">
          {doc.specs.map((item) => (
            <article className="rule" key={item.title}>
              <h3 className="display">{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <h2>LOAD CHARTS + DATA SHEETS</h2>
        {doc.charts.map((item) => (
          <div key={item.href}>
            <p className="doc-cta">
              {item.href.startsWith("/") ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              )}
            </p>
            {item.note ? <p>{item.note}</p> : null}
          </div>
        ))}
        <h2>MANUALS + MAINTENANCE</h2>
        {doc.manuals.map((item) => (
          <div key={item.href}>
            <p className="doc-cta">
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            </p>
            {item.note ? <p>{item.note}</p> : null}
          </div>
        ))}
        <h2>INSPECT</h2>
        <ul className="bullets">
          {doc.inspect.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>MAINTAIN</h2>
        <ul className="bullets">
          {doc.maint.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>WHOOP FORMS</h2>
        {doc.forms.map((item) => (
          <p className="doc-cta" key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </p>
        ))}
      </div>
    </SafetyDocFrame>
  );
}
