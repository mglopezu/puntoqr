import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import {
  HiOutlineBanknotes,
  HiOutlineBookOpen,
  HiOutlineBookmark,
  HiOutlineHome,
  HiOutlineMapPin,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import { formatWhatsappUrl } from "@/lib/puntoqr";
import type { PuntoQrClient, QuickActionIcon } from "@/types/puntoqr";
import { ActionButton } from "./ActionButton";
import { BusinessFooter } from "./BusinessFooter";
import { BusinessHeader } from "./BusinessHeader";
import { BusinessProfile } from "./BusinessProfile";
import { CatalogSection } from "./CatalogSection";
import { GallerySection } from "./GallerySection";
import { LocationSection } from "./LocationSection";
import { TransferSection } from "./TransferSection";

type BusinessLandingProps = {
  client: PuntoQrClient;
  previewMode?: boolean;
};

export function BusinessLanding({ client, previewMode = false }: BusinessLandingProps) {
  const templateClass = `business-landing--${client.estiloPlantilla}`;
  const previewClass = previewMode ? "business-landing--mockup" : "";
  const isAppTemplate = client.estiloPlantilla === "app";
  const primaryCtaLabel = client.ctaPrincipalLabel ?? "Pedir por WhatsApp";
  const catalogoLabel = client.catalogoLabel ?? "Catálogo";
  const instagramLabel = client.instagramLabel ?? "Instagram";
  const ubicacionLabel = client.ubicacionLabel ?? "Ubicación";
  const quickActions = client.quickActions ?? [
    {
      label: catalogoLabel,
      href: client.catalogoUrl,
      ariaLabel: `${catalogoLabel} de ${client.nombreNegocio}`,
      icon: "catalog" as const,
    },
    {
      label: instagramLabel,
      href: client.instagram,
      ariaLabel: `${instagramLabel} de ${client.nombreNegocio}`,
      icon: "instagram" as const,
    },
    {
      label: ubicacionLabel,
      href: client.ubicacionUrl,
      ariaLabel: `${ubicacionLabel} de ${client.nombreNegocio}`,
      icon: "map" as const,
    },
  ];
  const Root = previewMode ? "div" : "main";

  return (
    <Root
      className={`puntoqr-page puntoqr-page--${client.estiloPlantilla} ${
        previewMode ? "puntoqr-page--mockup" : ""
      }`}
      style={
        {
          "--accent-color": client.colorPrincipal,
        } as React.CSSProperties
      }
    >
      <article className={`business-landing ${templateClass} business-landing--${client.slug} ${previewClass}`}>
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
              {quickActions.map((action) => (
                <ActionButton
                  ariaLabel={action.ariaLabel ?? `${action.label} de ${client.nombreNegocio}`}
                  href={action.href}
                  icon={getQuickActionIcon(action.icon)}
                  key={`${action.label}-${action.href}`}
                  variant="compact"
                >
                  {action.label}
                </ActionButton>
              ))}
            </div>
          </nav>
          {client.lineaConfianza ? (
            <p className="trust-line">{client.lineaConfianza}</p>
          ) : null}
          <CatalogSection client={client} />
          <GallerySection client={client} />
          {client.hideTransferSection ? null : <TransferSection client={client} />}
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
    </Root>
  );
}

function getQuickActionIcon(icon: QuickActionIcon) {
  switch (icon) {
    case "booking":
      return <HiOutlineBookmark />;
    case "facebook":
      return <FaFacebookF />;
    case "contact":
      return <HiOutlineUserPlus />;
    case "instagram":
      return <FaInstagram />;
    case "map":
      return <HiOutlineMapPin />;
    case "catalog":
    default:
      return <HiOutlineBookOpen />;
  }
}
