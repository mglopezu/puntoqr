"use client";

import { FaWhatsapp } from "react-icons/fa6";
import { useRef, useState } from "react";
import { formatWhatsappUrlWithMessage } from "@/lib/puntoqr";
import type { CatalogItem, PuntoQrClient } from "@/types/puntoqr";

type CatalogSectionProps = {
  client: PuntoQrClient;
};

export function CatalogSection({ client }: CatalogSectionProps) {
  const catalog = client.catalogSection;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!catalog) {
    return null;
  }

  const isCarousel = catalog.layout === "carousel";

  return (
    <section className="catalog-section" id="catalogo" aria-labelledby="catalog-title">
      <div className="catalog-section__header">
        <h2 className="catalog-section__title" id="catalog-title">
          {catalog.title}
        </h2>
        <p>{catalog.intro}</p>
      </div>

      {catalog.categories.length > 0 ? (
        <div className="catalog-section__filters" aria-label="Categorías del catálogo">
          {catalog.categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      ) : null}

      {isCarousel ? (
        <>
          <div
            aria-label={catalog.title}
            className="catalog-carousel"
            onScroll={(event) => {
              const carousel = event.currentTarget;
              const nextIndex = Math.round(carousel.scrollLeft / carousel.clientWidth);
              setActiveIndex(Math.min(Math.max(nextIndex, 0), catalog.items.length - 1));
            }}
            ref={carouselRef}
          >
            {catalog.items.map((item) => (
              <CatalogCarouselCard item={item} key={item.name} />
            ))}
          </div>

          <div className="gallery-dots" aria-label="Fotos del catálogo">
            {catalog.items.map((item, index) => (
              <button
                aria-label={`Ver producto ${index + 1}: ${item.name}`}
                className={index === activeIndex ? "gallery-dot gallery-dot--active" : "gallery-dot"}
                key={item.name}
                onClick={() => {
                  carouselRef.current?.scrollTo({
                    left: index * carouselRef.current.clientWidth,
                    behavior: "smooth",
                  });
                }}
                type="button"
              />
            ))}
          </div>
        </>
      ) : (
        <div className="catalog-grid">
          {catalog.items.map((item) => (
            <CatalogCard client={client} item={item} key={item.name} />
          ))}
        </div>
      )}

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

type CatalogCarouselCardProps = {
  item: CatalogItem;
};

function CatalogCarouselCard({ item }: CatalogCarouselCardProps) {
  return (
    <article className="catalog-carousel-card">
      <img
        alt={item.imageAlt}
        className="catalog-carousel-card__image"
        src={item.imageUrl}
        style={{ objectPosition: item.imagePosition ?? "center" }}
      />
      <div className="catalog-carousel-card__body">
        <span>{item.category}</span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    </article>
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
