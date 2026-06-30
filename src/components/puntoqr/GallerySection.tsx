"use client";

import { useRef, useState } from "react";
import type { PuntoQrClient } from "@/types/puntoqr";

type GallerySectionProps = {
  client: PuntoQrClient;
};

export function GallerySection({ client }: GallerySectionProps) {
  const gallery = client.gallerySection;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!gallery) {
    return null;
  }

  return (
    <section className="gallery-section" aria-labelledby="gallery-title">
      <div className="gallery-section__header">
        <h2 className="gallery-section__title" id="gallery-title">
          {gallery.title}
        </h2>
        <p>{gallery.intro}</p>
      </div>

      <div
        className="gallery-carousel"
        aria-label={gallery.title}
        onScroll={(event) => {
          const carousel = event.currentTarget;
          const nextIndex = Math.round(carousel.scrollLeft / carousel.clientWidth);
          setActiveIndex(Math.min(Math.max(nextIndex, 0), gallery.items.length - 1));
        }}
        ref={carouselRef}
      >
        {gallery.items.map((item) => (
          <article className="gallery-card" key={item.title}>
            <img
              alt={item.imageAlt}
              className="gallery-card__image"
              src={item.imageUrl}
              style={{ objectPosition: item.imagePosition ?? "center" }}
            />
            <div className="gallery-card__body">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="gallery-dots" aria-label="Fotos del carrusel">
        {gallery.items.map((item, index) => (
          <button
            aria-label={`Ver foto ${index + 1}: ${item.title}`}
            className={index === activeIndex ? "gallery-dot gallery-dot--active" : "gallery-dot"}
            key={item.title}
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
    </section>
  );
}
