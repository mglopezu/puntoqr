import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import {
  HiOutlineBanknotes,
  HiOutlineBookOpen,
  HiOutlineHome,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { formatWhatsappUrl } from "@/lib/puntoqr";
import type { PuntoQrClient } from "@/types/puntoqr";
import { ActionButton } from "./ActionButton";
import { BusinessFooter } from "./BusinessFooter";
import { BusinessHeader } from "./BusinessHeader";
import { BusinessProfile } from "./BusinessProfile";
import { LocationSection } from "./LocationSection";
import { TransferSection } from "./TransferSection";

type BusinessLandingProps = {
  client: PuntoQrClient;
};

export function BusinessLanding({ client }: BusinessLandingProps) {
  const templateClass = `business-landing--${client.estiloPlantilla}`;
  const isAppTemplate = client.estiloPlantilla === "app";
  const primaryCtaLabel = client.ctaPrincipalLabel ?? "Pedir por WhatsApp";
  const catalogoLabel = client.catalogoLabel ?? "Catálogo";
  const instagramLabel = client.instagramLabel ?? "Instagram";
  const ubicacionLabel = client.ubicacionLabel ?? "Ubicación";

  return (
    <main
      className={`puntoqr-page puntoqr-page--${client.estiloPlantilla}`}
      style={
        {
          "--accent-color": client.colorPrincipal,
        } as React.CSSProperties
      }
    >
      <article className={`business-landing ${templateClass}`}>
        <header className="business-hero" aria-labelledby="business-name">
          <BusinessHeader client={client} />
          <BusinessProfile client={client} />
        </header>
        <div className="business-content">
          {isAppTemplate ? (
            <div className="business-search" aria-hidden="true">
              Buscar en {client.nombreNegocio}
            </div>
          ) : null}
          <nav className="action-list" aria-label="Enlaces principales">
            <ActionButton
              ariaLabel={`${primaryCtaLabel} a ${client.nombreNegocio}`}
              href={formatWhatsappUrl(client)}
              icon={<FaWhatsapp />}
              isPrimary
            >
              {primaryCtaLabel}
            </ActionButton>
            <div className="quick-action-row">
              <ActionButton
                ariaLabel={`${catalogoLabel} de ${client.nombreNegocio}`}
                href={client.catalogoUrl}
                icon={<HiOutlineBookOpen />}
                variant="compact"
              >
                {catalogoLabel}
              </ActionButton>
              <ActionButton
                ariaLabel={`${instagramLabel} de ${client.nombreNegocio}`}
                href={client.instagram}
                icon={<FaInstagram />}
                variant="compact"
              >
                {instagramLabel}
              </ActionButton>
              <ActionButton
                ariaLabel={`${ubicacionLabel} de ${client.nombreNegocio}`}
                href={client.ubicacionUrl}
                icon={<HiOutlineMapPin />}
                variant="compact"
              >
                {ubicacionLabel}
              </ActionButton>
            </div>
          </nav>
          {client.lineaConfianza ? (
            <p className="trust-line">{client.lineaConfianza}</p>
          ) : null}
          <TransferSection client={client} />
          <LocationSection client={client} />
          {client.finalCtaText && client.finalCtaLabel ? (
            <section className="final-cta" aria-label="Consulta por WhatsApp">
              <p>{client.finalCtaText}</p>
              <ActionButton
                ariaLabel={`${client.finalCtaLabel} a ${client.nombreNegocio}`}
                href={formatWhatsappUrl(client)}
                icon={<FaWhatsapp />}
                isPrimary
              >
                {client.finalCtaLabel}
              </ActionButton>
            </section>
          ) : null}
        </div>
        {isAppTemplate ? (
          <nav className="business-app-nav" aria-label="Accesos de la plantilla app">
            <span>
              <HiOutlineHome aria-hidden="true" />
              Inicio
            </span>
            <span>
              <HiOutlineBookOpen aria-hidden="true" />
              Catálogo
            </span>
            <strong>
              <FaWhatsapp aria-hidden="true" />
            </strong>
            <span>
              <HiOutlineBanknotes aria-hidden="true" />
              Pago
            </span>
            <span>
              <HiOutlineMapPin aria-hidden="true" />
              Mapa
            </span>
          </nav>
        ) : null}
        <BusinessFooter showBranding={client.showPuntoQRBranding ?? true} />
      </article>
    </main>
  );
}
