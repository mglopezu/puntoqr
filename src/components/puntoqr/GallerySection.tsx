import type { PuntoQrClient } from "@/types/puntoqr";

type GallerySectionProps = {
  client: PuntoQrClient;
};

export function GallerySection({ client }: GallerySectionProps) {
  const gallery = client.gallerySection;

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

      <div className="gallery-carousel" aria-label={gallery.title}>
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
    </section>
  );
}
