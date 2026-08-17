import Link from "next/link";
import { ProcedureSteps } from "@/components/ProcedureSteps";
import { SafetyControlStamp } from "@/components/SafetyControl";
import type { DocLink, Sjp } from "@/lib/ohs";

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <>
      <h2>{title}</h2>
      <ul className="bullets">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

function DocCta({ link }: { link: DocLink }) {
  if (link.external || /^https?:\/\//i.test(link.href)) {
    return (
      <p className="doc-cta">
        <a href={link.href} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      </p>
    );
  }
  return (
    <p className="doc-cta">
      <Link href={link.href}>{link.label}</Link>
    </p>
  );
}

export function SjpDoc({ doc }: { doc: Sjp }) {
  const ctas: DocLink[] = [];
  if (doc.download) ctas.push(doc.download);
  for (const link of doc.links ?? []) ctas.push(link);

  return (
    <div className="prose">
      <SafetyControlStamp number={doc.number} title={doc.title} />
      {ctas.map((link) => (
        <DocCta key={link.href + link.label} link={link} />
      ))}
      {doc.download?.note ? <p>{doc.download.note}</p> : null}
      {(doc.links ?? [])
        .filter((link) => link.note)
        .map((link) => (
          <p key={link.href}>{link.note}</p>
        ))}
      <h2>WHEN</h2>
      <p>{doc.when}</p>
      <h2>PURPOSE</h2>
      <p>{doc.purpose}</p>
      <p>
        An SJP is not a longer SWP. It is the SWP plus the facts of this job.
        Do the work to the method. Fill this instance. If they disagree, stop.
      </p>
      <h2>BUILT ON</h2>
      {doc.basedOn.map((link) => (
        <p className="doc-cta" key={link.href}>
          <Link href={link.href}>{link.label}</Link>
        </p>
      ))}
      <List title="FACTS THIS SHEET MUST NAME" items={doc.facts} />
      <h2>HOLD POINTS</h2>
      <ProcedureSteps items={doc.holds} />
      <List title="ABORT" items={doc.abort} />
      <List title="NAMED ON THE SHEET" items={doc.named} />
      <List title="DOCUMENTATION" items={doc.documentation} />
      <List title="REFERENCES" items={doc.references} />
    </div>
  );
}
