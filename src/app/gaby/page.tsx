import type { Metadata } from "next";
import { BusinessLanding } from "@/components/puntoqr/BusinessLanding";
import { getPuntoQrClientBySlug } from "@/lib/puntoqr";

export const metadata: Metadata = {
  title: "Gabriela López | Fundadora de PuntoQR",
  description:
    "Tarjeta digital de Gabriela López, fundadora de PuntoQR. Guarda su contacto, habla por WhatsApp y conoce ejemplos reales de PuntoQR.",
};

export default function GabyPage() {
  const client = getPuntoQrClientBySlug("gaby");

  if (!client) {
    return null;
  }

  return <BusinessLanding client={client} />;
}
