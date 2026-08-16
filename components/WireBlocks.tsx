import Link from "next/link";
import { BoomTrigCalc } from "@/components/BoomTrigCalc";
import { BoomTrigDiagram } from "@/components/BoomTrigDiagram";
import { ProcedureSteps } from "@/components/ProcedureSteps";
import { SlingAngleDiagram } from "@/components/SlingAngleDiagram";
import { SlingSinCalc } from "@/components/SlingSinCalc";
import type { WireBlock } from "@/lib/whoopwire";

export function WireBlocks({ blocks }: { blocks: WireBlock[] }) {
  return (
    <div className="prose wire-prose">
      {blocks.map((block, i) => {
        if (block.type === "p") return <p key={i}>{block.text}</p>;
        if (block.type === "h") return <h2 key={i}>{block.text}</h2>;
        if (block.type === "quote") {
          return (
            <blockquote className="quote" key={i}>
              {block.text}
            </blockquote>
          );
        }
        if (block.type === "list") {
          return (
            <ul className="bullets" key={i}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "steps") {
          return <ProcedureSteps key={i} items={block.items} />;
        }
        if (block.type === "image") {
          return (
            <figure className="wire-figure" key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={block.src} alt={block.alt} />
              {block.caption ? <figcaption className="mono">{block.caption}</figcaption> : null}
            </figure>
          );
        }
        if (block.type === "formula") {
          return (
            <figure className="wire-formula" key={i}>
              <p className="display">{block.expr}</p>
              {block.note ? <figcaption className="mono">{block.note}</figcaption> : null}
            </figure>
          );
        }
        if (block.type === "table") {
          return (
            <figure className="wire-table-wrap" key={i}>
              {block.caption ? <figcaption className="mono">{block.caption}</figcaption> : null}
              <table className="wire-table">
                <thead>
                  <tr>
                    {block.columns.map((col) => (
                      <th className="mono" key={col}>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row.join("-")}>
                      {row.map((cell, ci) => (
                        <td key={`${cell}-${ci}`} className={ci === 0 ? "mono" : "display"}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </figure>
          );
        }
        if (block.type === "diagram") {
          if (block.name === "boom-trig") return <BoomTrigDiagram key={i} />;
          return <SlingAngleDiagram key={i} />;
        }
        if (block.type === "calc") {
          if (block.name === "boom-trig") return <BoomTrigCalc key={i} />;
          return <SlingSinCalc key={i} />;
        }
        return (
          <p className="wire-cta-line" key={i}>
            <Link href={block.href}>{block.label}</Link>
          </p>
        );
      })}
    </div>
  );
}
