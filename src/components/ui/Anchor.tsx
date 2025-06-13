import Link from "next/link";
import { useEffect, useRef } from "react";

interface AnchorProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Anchor({ href, children, className = '', onClick }: AnchorProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const splitLinkText = () => {
      if (linkRef.current) {
        const text = linkRef.current.textContent?.trim().split('').map((char, index) => {
          const delay = (index + 1) / 20;
          return char === ' ' 
            ? `<span style="transition-delay: ${delay}s">&nbsp;</span>` 
            : `<span style="transition-delay: ${delay}s">${char}</span>`;
        }).join('') || '';
        linkRef.current.innerHTML = `<div>${text}</div>`;
      }
    };
  
    splitLinkText();
  }, [children]);

  return (
    <Link 
      ref={linkRef}
      className={className} 
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}