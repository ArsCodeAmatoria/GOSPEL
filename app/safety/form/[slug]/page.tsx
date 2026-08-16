import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SafetyControlStamp } from "@/components/SafetyControl";
import { SafetyDocFrame } from "@/components/SafetyDocFrame";
import { FORMS, getForm } from "@/lib/ohs";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return FORMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getForm(slug);
  if (!doc) return { title: "Form" };
  return { title: `${doc.number} ${doc.title}`, description: doc.summary };
}

export default async function FormPage({ params }: Props) {
  const { slug } = await params;
  const doc = getForm(slug);
  if (!doc) notFound();
  return (
    <SafetyDocFrame
      kicker={`${doc.group.toUpperCase()} FORM`}
      num={doc.number.replace("WHOOP-", "")}
      title={doc.title}
      intro={doc.summary}
      backHref="/safety/safety-forms"
      backLabel="SAFETY FORMS"
    >
      <div className="prose">
        <SafetyControlStamp number={doc.number} title={doc.title} />
        <h2>WHEN</h2>
        <p>{doc.when}</p>
        <h2>CAPTURE</h2>
        <ul className="bullets">
          {doc.fields.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>ROUTING</h2>
        <p>{doc.routing}</p>
      </div>
    </SafetyDocFrame>
  );
}
