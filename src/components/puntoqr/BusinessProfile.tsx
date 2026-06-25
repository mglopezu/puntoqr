import type { PuntoQrClient } from "@/types/puntoqr";

type BusinessProfileProps = {
  client: PuntoQrClient;
};

export function BusinessProfile({ client }: BusinessProfileProps) {
  const initial = client.nombreNegocio.trim().charAt(0).toUpperCase();

  return (
    <div className="business-profile">
      <div className="business-profile__logo">
        {client.logoUrl ? (
          <img alt={client.logoAlt ?? `Logo de ${client.nombreNegocio}`} src={client.logoUrl} />
        ) : (
          initial
        )}
      </div>
      <p className="business-profile__eyebrow">{client.rubro}</p>
      <h1 className="business-profile__title" id="business-name">
        {client.nombreNegocio}
      </h1>
      <p className="business-profile__description">{client.descripcion}</p>
    </div>
  );
}
