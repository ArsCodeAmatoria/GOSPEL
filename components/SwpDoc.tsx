import Link from "next/link";
import { ProcedureSteps } from "@/components/ProcedureSteps";
import { SafetyControlStamp } from "@/components/SafetyControl";
import type { Swp } from "@/lib/ohs";

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

export function SwpDoc({ doc }: { doc: Swp }) {
  return (
    <div className="prose">
      <SafetyControlStamp number={doc.number} title={doc.title} />
      <h2>PURPOSE</h2>
      <p>{doc.purpose}</p>
      <h2>SCOPE</h2>
      <p>{doc.scope}</p>
      <p>
        This document is the method — the steps. Hazards, consequence and
        residual risk for the same work are in the{" "}
        <Link href="/safety/jha-library">JHA library</Link>. A procedure is
        not a hazard analysis. A hazard analysis is not a procedure.
      </p>
      <h2>PROCEDURE</h2>
      <ProcedureSteps items={doc.procedure} />
      <h2>RESPONSIBILITIES</h2>
      <div className="rules">
        {doc.responsibilities.map((role) => (
          <article className="rule" key={role.title}>
            <h3 className="display">{role.title}</h3>
            <p>{role.body}</p>
          </article>
        ))}
      </div>
      <List title="REQUIRED COMPETENCY" items={doc.competency} />
      <List title="EQUIPMENT" items={doc.equipment} />
      <List title="PPE" items={doc.ppe} />
      <List title="PROHIBITED PRACTICES" items={doc.prohibited} />
      <h2>EMERGENCY RESPONSE</h2>
      <p>{doc.emergency}</p>
      <List title="DOCUMENTATION" items={doc.documentation} />
      <List title="REFERENCES" items={doc.references} />
    </div>
  );
}
