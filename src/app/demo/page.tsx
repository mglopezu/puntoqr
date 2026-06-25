import { BusinessLanding } from "@/components/puntoqr/BusinessLanding";
import { getPuntoQrClientBySlug } from "@/lib/puntoqr";

export default function DemoPage() {
  const client = getPuntoQrClientBySlug("dulces-martina");

  if (!client) {
    return null;
  }

  return <BusinessLanding client={client} />;
}
