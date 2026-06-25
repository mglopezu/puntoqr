import { puntoQrClients } from "@/data/clients";
import type { PuntoQrClient } from "@/types/puntoqr";

export function getPuntoQrClientBySlug(
  slug: string,
): PuntoQrClient | undefined {
  return puntoQrClients.find((client) => client.slug === slug);
}

export function formatWhatsappUrl(client: PuntoQrClient): string {
  const phone = client.whatsapp.replace(/\D/g, "");
  const message = encodeURIComponent(client.mensajeWhatsapp);

  return `https://wa.me/${phone}?text=${message}`;
}

export function formatTransferText(client: PuntoQrClient): string {
  const transfer = client.datosTransferencia;

  return [
    client.nombreNegocio,
    transfer.titular,
    `RUT: ${transfer.rut}`,
    transfer.banco,
    transfer.tipoCuenta,
    `N° ${transfer.numeroCuenta}`,
    `Correo: ${transfer.correo}`,
  ].join("\n");
}

export function getClientPublicUrl(client: PuntoQrClient): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return `${baseUrl.replace(/\/$/, "")}/${client.slug}`;
}
