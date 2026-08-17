import { STANDARDS } from "@/lib/site";

export function FactsList({
  items,
}: {
  items: readonly { name: string; body: string }[];
}) {
  return (
    <ul className="std-list">
      {items.map((item) => (
        <li key={item.name}>
          <h3 className="display">{item.name}</h3>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function StandardsList() {
  return <FactsList items={STANDARDS} />;
}
