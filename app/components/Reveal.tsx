"use client";

import {
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number; // ms
  once?: boolean;
};

/**
 * Lightweight scroll-reveal using IntersectionObserver.
 * Adds the `.is-in` class when the element scrolls into view.
 *
 * Reduced-motion preference is honored via CSS in globals.css —
 * no JS branch required.
 */
export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  once = true,
}: Props) {
  const [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const refCallback = useCallback(
    (node: HTMLElement | null) => {
      observerRef.current?.disconnect();
      observerRef.current = null;
      if (!node) return;

      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setInView(true);
              if (once) io.unobserve(entry.target);
            } else if (!once) {
              setInView(false);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
      );
      io.observe(node);
      observerRef.current = io;
    },
    [once]
  );

  const style: CSSProperties | undefined = delay
    ? { transitionDelay: `${delay}ms` }
    : undefined;

  const Component = Tag as ElementType;
  const cls = ["km-reveal", inView ? "is-in" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component ref={refCallback} className={cls} style={style}>
      {children}
    </Component>
  );
}
