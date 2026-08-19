"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  lead?: boolean;
  contain?: boolean;
  lightbox?: boolean;
};

export function WireFigure({
  src,
  alt,
  caption,
  lead,
  contain,
  lightbox,
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open) {
      if (!el.open) el.showModal();
    } else if (el.open) {
      el.close();
    }
  }, [open]);

  const className = [
    "wire-figure",
    lead ? "wire-figure-lead" : "",
    contain ? "wire-figure-contain" : "",
    lightbox ? "wire-figure-zoom" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  );

  return (
    <figure className={className}>
      {lightbox ? (
        <button
          type="button"
          className="wire-figure-open"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          {img}
          <span className="mono wire-figure-hint">CLICK TO ENLARGE</span>
        </button>
      ) : (
        img
      )}
      {caption ? <figcaption className="mono">{caption}</figcaption> : null}
      {lightbox ? (
        <dialog
          ref={dialogRef}
          className="wire-lightbox"
          aria-label={alt}
          onClose={() => setOpen(false)}
          onClick={(e) => {
            if (e.target === dialogRef.current) setOpen(false);
          }}
        >
          <button
            type="button"
            className="wire-lightbox-close mono"
            onClick={() => setOpen(false)}
          >
            CLOSE
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
        </dialog>
      ) : null}
    </figure>
  );
}
