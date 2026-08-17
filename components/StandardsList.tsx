import { STANDARDS } from "@/lib/site";

type Standard = (typeof STANDARDS)[number];

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

function StandardMark({ item }: { item: Standard }) {
  if (!("logo" in item) || !item.logo) return null;
  const onInk = "logoOnInk" in item ? item.logoOnInk : undefined;
  const img = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={onInk ? "std-mark std-mark-on-paper" : "std-mark"}
        src={item.logo}
        alt=""
      />
      {onInk ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="std-mark std-mark-on-ink" src={onInk} alt="" />
      ) : null}
    </>
  );
  if ("href" in item && item.href) {
    return (
      <a
        className="std-mark-wrap"
        href={item.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${item.name} — official site`}
      >
        {img}
      </a>
    );
  }
  return <span className="std-mark-wrap">{img}</span>;
}

export function StandardMarks({ compact = false }: { compact?: boolean }) {
  const marked = STANDARDS.filter((item) => "logo" in item && item.logo);
  return (
    <ul className={compact ? "std-marks std-marks-compact" : "std-marks"}>
      {marked.map((item) => (
        <li key={item.name}>
          <StandardMark item={item} />
        </li>
      ))}
    </ul>
  );
}

export function StandardsList() {
  return (
    <ul className="std-list">
      {STANDARDS.map((item) => (
        <li key={item.name}>
          <StandardMark item={item} />
          <h3 className="display">{item.name}</h3>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
