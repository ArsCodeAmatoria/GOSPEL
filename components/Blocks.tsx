import { ProcedureSteps } from "./ProcedureSteps";
import type { Block } from "@/lib/safety";

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        if (block.type === "p") return <p key={i}>{block.text}</p>;
        if (block.type === "h") return <h2 key={i}>{block.text}</h2>;
        if (block.type === "quote")
          return (
            <blockquote className="quote" key={i}>
              {block.text}
            </blockquote>
          );
        if (block.type === "list")
          return (
            <ul className="bullets" key={i}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        if (block.type === "steps")
          return <ProcedureSteps key={i} items={block.items} />;
        return (
          <div className="rules" key={i}>
            {block.items.map((rule) => (
              <article className="rule" key={rule.title}>
                <h3 className="display">{rule.title}</h3>
                <p>{rule.body}</p>
              </article>
            ))}
          </div>
        );
      })}
    </div>
  );
}
