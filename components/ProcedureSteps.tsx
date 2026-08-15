import type { Step } from "@/lib/safety";

export function ProcedureSteps({ items }: { items: Step[] }) {
  return (
    <ol className="steps">
      {items.map((step) => (
        <li className="step" key={step.n}>
          <div className="step-n">{step.n}</div>
          <h3 className="display">{step.title}</h3>
          <p>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
