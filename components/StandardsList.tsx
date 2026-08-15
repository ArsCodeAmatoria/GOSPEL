import { STANDARDS } from "@/lib/site";

export function StandardsList() {
  return (
    <ul className="std-list">
      {STANDARDS.map((item) => (
        <li key={item.name}>
          <h3 className="display">{item.name}</h3>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
