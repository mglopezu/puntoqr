import Link from "next/link";
import type { Metadata } from "next";
import { BusinessLanding } from "@/components/puntoqr/BusinessLanding";
import { getPuntoQrClientBySlug } from "@/lib/puntoqr";

type ClientPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ClientPageProps): Promise<Metadata> {
  const { slug } = await params;
  const client = getPuntoQrClientBySlug(slug);

  if (!client) {
    return {
      title: "PuntoQR no disponible",
    };
  }

  return {
    title: client.seoTitle ?? `${client.nombreNegocio} | PuntoQR`,
    description: client.seoDescription ?? client.descripcion,
  };
}

export default async function ClientPage({ params }: ClientPageProps) {
  const { slug } = await params;
  const client = getPuntoQrClientBySlug(slug);

  if (!client) {
    return (
      <main className="missing-page">
        <section>
          <h1>Este PuntoQR no está disponible.</h1>
          <Link href="/" style={{ color: "#211f1c", fontWeight: 700 }}>
            Volver al inicio
          </Link>
        </section>
      </main>
    );
  }

  return <BusinessLanding client={client} />;
}
