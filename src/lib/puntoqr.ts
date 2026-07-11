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

export function formatWhatsappUrlWithMessage(
  client: PuntoQrClient,
  message: string,
): string {
  const phone = client.whatsapp.replace(/\D/g, "");

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function formatTransferText(client: PuntoQrClient): string {
  const transfer = client.datosTransferencia;
  const accountNumber = transfer.numeroCuenta.replace(/\s+/g, "");

  return [
    transfer.titular,
    transfer.rut,
    transfer.correo.toLowerCase(),
    transfer.banco,
    transfer.tipoCuenta,
    accountNumber,
  ].join("\n");
}

export function getClientPublicUrl(client: PuntoQrClient): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return `${baseUrl.replace(/\/$/, "")}/${client.slug}`;
}
