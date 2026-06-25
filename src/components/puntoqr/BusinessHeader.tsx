import type { PuntoQrClient } from "@/types/puntoqr";

type BusinessHeaderProps = {
  client: PuntoQrClient;
};

export function BusinessHeader({ client }: BusinessHeaderProps) {
  const className = [
    "business-header",
    client.portadaUrl ? "business-header--has-cover" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      {client.portadaUrl ? (
        <img
          alt={client.portadaAlt ?? `Imagen principal de ${client.nombreNegocio}`}
          className="business-header__image"
          src={client.portadaUrl}
        />
      ) : null}
    </div>
  );
}
