import { FaWhatsapp } from "react-icons/fa6";
import { formatWhatsappUrlWithMessage } from "@/lib/puntoqr";
import type { CatalogItem, PuntoQrClient } from "@/types/puntoqr";

type CatalogSectionProps = {
  client: PuntoQrClient;
};

export function CatalogSection({ client }: CatalogSectionProps) {
  const catalog = client.catalogSection;

  if (!catalog) {
    return null;
  }

  return (
    <section className="catalog-section" id="catalogo" aria-labelledby="catalog-title">
      <div className="catalog-section__header">
        <h2 className="catalog-section__title" id="catalog-title">
          {catalog.title}
        </h2>
        <p>{catalog.intro}</p>
      </div>

      <div className="catalog-section__filters" aria-label="Categorías del catálogo">
        {catalog.categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </div>

      <div className="catalog-grid">
        {catalog.items.map((item) => (
          <CatalogCard client={client} item={item} key={item.name} />
        ))}
      </div>

      {catalog.specialOrdersTitle &&
      catalog.specialOrdersText &&
      catalog.specialOrdersButtonLabel &&
      catalog.specialOrdersWhatsappMessage ? (
        <aside className="catalog-special-order">
          <h3>{catalog.specialOrdersTitle}</h3>
          <p>{catalog.specialOrdersText}</p>
          <a
            href={formatWhatsappUrlWithMessage(
              client,
              catalog.specialOrdersWhatsappMessage,
            )}
            rel="noreferrer"
            target="_blank"
          >
            <FaWhatsapp aria-hidden="true" />
            {catalog.specialOrdersButtonLabel}
          </a>
        </aside>
      ) : null}
    </section>
  );
}

type CatalogCardProps = {
  client: PuntoQrClient;
  item: CatalogItem;
};

function CatalogCard({ client, item }: CatalogCardProps) {
  return (
    <article className="catalog-card">
      <img
        alt={item.imageAlt}
        className="catalog-card__image"
        src={item.imageUrl}
        style={{ objectPosition: item.imagePosition ?? "center" }}
      />
      <div className="catalog-card__body">
        <span className="catalog-card__category">{item.category}</span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="catalog-card__footer">
          <a
            aria-label={`${item.buttonLabel}: ${item.name}`}
            href={formatWhatsappUrlWithMessage(client, item.whatsappMessage)}
            rel="noreferrer"
            target="_blank"
          >
            <span className="catalog-card__button-icon">
              <FaWhatsapp aria-hidden="true" />
            </span>
            <span className="catalog-card__button-text">{item.buttonLabel}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
