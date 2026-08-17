import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BinderWizard } from "@/components/binder/BinderWizard";
import { BINDERS, getBinder } from "@/lib/ohs/binders";

type Props = { params: Promise<{ kind: string }> };

export function generateStaticParams() {
  return BINDERS.map((b) => ({ kind: b.kind }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kind } = await params;
  const binder = getBinder(kind);
  if (!binder) return { title: "Crane Binder" };
  return { title: `${binder.number} ${binder.title}`, description: binder.summary };
}

export default async function BinderKindPage({ params }: Props) {
  const { kind } = await params;
  const binder = getBinder(kind);
  if (!binder) notFound();
  return <BinderWizard binder={binder} />;
}
