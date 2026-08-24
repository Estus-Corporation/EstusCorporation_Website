export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo-estus.png"
      alt="Estus Corporation"
      className={`h-8 w-auto object-contain sm:h-9 ${className}`}
    />
  );
}
