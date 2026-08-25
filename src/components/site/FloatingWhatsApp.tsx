import { useEffect, useState } from "react";

import { WHATSAPP_LINK } from "./contact-info";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.48 1.32 4.99L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.26.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.53-3.7 8.23-8.23 8.23a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.37c0-4.53 3.7-8.24 8.24-8.24Zm-4.53 4.7c-.15 0-.4.06-.61.29-.21.24-.8.79-.8 1.92 0 1.13.82 2.22.94 2.37.11.15 1.6 2.55 3.95 3.48 1.95.78 2.35.62 2.77.58.42-.04 1.36-.55 1.55-1.09.19-.53.19-.98.13-1.08-.06-.09-.21-.15-.44-.26-.23-.11-1.36-.67-1.57-.75-.21-.08-.36-.11-.51.12-.15.23-.59.75-.72.9-.13.15-.27.17-.5.06-.23-.11-.96-.35-1.83-1.13-.68-.6-1.14-1.34-1.27-1.57-.13-.23-.01-.35.1-.47.11-.11.23-.27.35-.4.11-.13.15-.23.23-.38.08-.15.04-.29-.02-.4-.06-.11-.51-1.24-.7-1.7-.19-.44-.38-.38-.51-.39-.13-.01-.28-.01-.43-.01Z" />
    </svg>
  );
}

/**
 * Botão flutuante de WhatsApp — visível só no mobile, aparece depois que o
 * usuário passa do Hero para não competir com o CTA principal da dobra.
 */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry?.isIntersecting), {
      rootMargin: "-40% 0px -40% 0px",
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[var(--mint)] text-background shadow-[var(--shadow-lift)] transition-all duration-300 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
