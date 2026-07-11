export type PuntoQrTemplateStyle = "simple" | "premium" | "app";

export type TransferData = {
  titular: string;
  rut: string;
  banco: string;
  tipoCuenta: string;
  numeroCuenta: string;
  correo: string;
};

export type CatalogItem = {
  name: string;
  category: string;
  description: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition?: string;
  buttonLabel: string;
  whatsappMessage: string;
};

export type CatalogSection = {
  title: string;
  intro: string;
  categories: string[];
  layout?: "grid" | "carousel";
  items: CatalogItem[];
  specialOrdersTitle?: string;
  specialOrdersText?: string;
  specialOrdersButtonLabel?: string;
  specialOrdersWhatsappMessage?: string;
};

export type QuickActionIcon =
  | "booking"
  | "facebook"
  | "map"
  | "contact"
  | "catalog"
  | "instagram"
  | "globe"
  | "hotelVidal"
  | "puntoqr";

export type QuickAction = {
  label: string;
  href: string;
  ariaLabel?: string;
  icon: QuickActionIcon;
};

export type GalleryItem = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition?: string;
};

export type GallerySection = {
  title: string;
  intro: string;
  items: GalleryItem[];
};

export type PuntoQrClient = {
  slug: string;
  nombreNegocio: string;
  rubro: string;
  descripcion: string;
  ciudad: string;
  whatsapp: string;
  mensajeWhatsapp: string;
  instagram: string;
  catalogoUrl: string;
  ubicacionTexto: string;
  ubicacionUrl: string;
  horario: string;
  contactEmail?: string;
  colorPrincipal: string;
  logoUrl?: string;
  portadaUrl?: string;
  portadaAlt?: string;
  logoAlt?: string;
  showPuntoQRBranding?: boolean;
  estiloPlantilla: PuntoQrTemplateStyle;
  lineaConfianza?: string;
  ctaPrincipalLabel?: string;
  catalogoLabel?: string;
  instagramLabel?: string;
  ubicacionLabel?: string;
  transferTitle?: string;
  transferMicrocopy?: string;
  copyAllLabel?: string;
  copyAllSuccessMessage?: string;
  copyFieldSuccessMessage?: string;
  detailsTitle?: string;
  mapsLabel?: string;
  finalCtaText?: string;
  finalCtaLabel?: string;
  finalCtaWhatsappMessage?: string;
  catalogSection?: CatalogSection;
  gallerySection?: GallerySection;
  quickActions?: QuickAction[];
  hideTransferSection?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  datosTransferencia: TransferData;
};
