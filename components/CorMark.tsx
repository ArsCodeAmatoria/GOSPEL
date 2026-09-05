"use client";

import { useState } from "react";
import { COR } from "@/lib/site";

export function CorMark({ className = "cor-mark" }: { className?: string }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    // Official BCCSA COR mark from https://www.bccsa.ca/img/BCCSA_cor.png
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={COR.asset}
      alt="COR®. Certifying partner: BC Construction Safety Alliance."
      onError={() => setVisible(false)}
    />
  );
}
