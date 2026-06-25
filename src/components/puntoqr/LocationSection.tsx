import { HiOutlineClock, HiOutlineMapPin } from "react-icons/hi2";
import type { PuntoQrClient } from "@/types/puntoqr";

type LocationSectionProps = {
  client: PuntoQrClient;
};

export function LocationSection({ client }: LocationSectionProps) {
  return (
    <section className="info-section" aria-labelledby="details-title">
      <h2 className="info-section__title" id="details-title">
        {client.detailsTitle ?? "Información"}
      </h2>
      <dl className="details-list">
        <div>
          <dt>
            <HiOutlineClock aria-hidden="true" />
            Horario
          </dt>
          <dd>{client.horario}</dd>
        </div>
        <div>
          <dt>
            <HiOutlineMapPin aria-hidden="true" />
            Ubicación
          </dt>
          <dd>
            {client.ubicacionTexto}
          </dd>
        </div>
      </dl>
      <a
        className="map-link"
        href={client.ubicacionUrl}
        rel="noreferrer"
        target="_blank"
      >
        {client.mapsLabel ?? "Ver ubicación"}
      </a>
    </section>
  );
}
