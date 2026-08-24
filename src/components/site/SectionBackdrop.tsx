/**
 * Fundo completo de seção: imagem minimalista P&B + véu escuro para legibilidade.
 */
export function SectionBackdrop({
  image,
  position = "center",
  overlay = "bg-gradient-to-b from-background/45 via-background/35 to-background/55",
}: {
  image: string;
  position?: string;
  overlay?: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <img
        src={image}
        alt=""
        loading="lazy"
        width={1920}
        height={1200}
        className="absolute inset-0 size-full object-cover"
        style={{ objectPosition: position }}
      />
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}
