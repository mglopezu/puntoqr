const PUNTOQR_URL = process.env.NEXT_PUBLIC_PUNTOQR_URL ?? "https://puntoqr.cl";
const PUNTOQR_LOGO_URL = "/puntoqr/logosineslogan-transparente.png";

type BusinessFooterProps = {
  showBranding?: boolean;
};

export function BusinessFooter({ showBranding = true }: BusinessFooterProps) {
  if (!showBranding) {
    return null;
  }

  const isExternalUrl = PUNTOQR_URL.startsWith("http");

  return (
    <footer className="business-footer">
      <a
        className="business-footer__link"
        href={PUNTOQR_URL}
        rel={isExternalUrl ? "noopener noreferrer" : undefined}
        target={isExternalUrl ? "_blank" : undefined}
      >
        <span className="business-footer__credit">Creado con</span>
        <img alt="PuntoQR" className="business-footer__logo" src={PUNTOQR_LOGO_URL} />
        <span className="business-footer__credit" aria-hidden="true">
          ·
        </span>
        <span className="business-footer__credit">Tu punto de contacto digital</span>
      </a>
    </footer>
  );
}
