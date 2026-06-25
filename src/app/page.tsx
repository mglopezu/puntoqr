import Link from "next/link";
import {
  HiOutlineArrowRight,
  HiOutlineBanknotes,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineMapPin,
  HiOutlineQrCode,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { ScrollPhoneDemo } from "@/components/puntoqr/ScrollPhoneDemo";
import { getPuntoQrClientBySlug } from "@/lib/puntoqr";

const WHATSAPP_URL =
  "https://wa.me/56912345678?text=Hola,%20quiero%20crear%20mi%20PuntoQR";

const featureCards = [
  {
    title: "WhatsApp directo",
    text: "Tus clientes te escriben sin buscar tu número.",
    icon: <HiOutlineChatBubbleLeftRight />,
  },
  {
    title: "Datos de transferencia",
    text: "Muestra tus datos de pago de forma clara y ordenada.",
    icon: <HiOutlineBanknotes />,
  },
  {
    title: "Catálogo o menú",
    text: "Comparte productos, servicios, precios o promociones.",
    icon: <HiOutlineShoppingBag />,
  },
  {
    title: "Redes y ubicación",
    text: "Lleva a tus clientes a Instagram, Google Maps u otros enlaces.",
    icon: <HiOutlineMapPin />,
  },
];

const packItems = [
  "Mini landing móvil personalizada.",
  "QR único para tu negocio.",
  "Botones a WhatsApp, Instagram, catálogo, ubicación o pago.",
  "Datos de transferencia ordenados.",
  "Uso de logo, foto o imagen del negocio.",
  "Archivo del QR listo para imprimir.",
  "Diseño base para afiche o sticker.",
  "Ajustes iniciales para dejarlo funcionando.",
];

const useCases = [
  {
    title: "Foodtrucks",
    text: "Menú, ubicación y pedidos desde la fila.",
    image: "/puntoqr/foodtruck.png",
  },
  {
    title: "Ferias y bazares",
    text: "Todo tu contacto visible desde el puesto.",
    image: "/puntoqr/feria-dulces.png",
  },
  {
    title: "Velas, artesanía y regalos",
    text: "Packaging conectado con redes, catálogo y pago.",
    image: "/puntoqr/pack-qr.png",
  },
];

const faqItems = [
  {
    question: "¿Necesito tener página web?",
    answer: "No. PuntoQR crea una mini landing para tu negocio.",
  },
  {
    question: "¿Puedo usar mis propias fotos?",
    answer: "Sí. Puedes enviar fotos, logo, colores o imágenes de tus productos.",
  },
  {
    question: "¿El QR cambia si actualizo mis datos?",
    answer:
      "El objetivo es que el QR apunte a tu mini landing. Si se actualiza la información dentro de la landing, puedes mantener el mismo QR.",
  },
  {
    question: "¿Sirve para ferias o negocios sin local?",
    answer:
      "Sí. Es ideal para ferias, foodtrucks, bazares, servicios, emprendimientos y ventas presenciales.",
  },
  {
    question: "¿Incluye impresión?",
    answer:
      "Esta versión incluye archivos listos para imprimir. La impresión puede cotizarse aparte.",
  },
];

export default function HomePage() {
  const demoClient = getPuntoQrClientBySlug("dulces-martina");

  return (
    <main className="marketing-page">
      <header className="marketing-header">
        <Link className="marketing-logo" href="/" aria-label="PuntoQR">
          <img
            alt="PuntoQR. Tu punto de contacto digital"
            src="/puntoqr/logo-puntoqr.png"
          />
        </Link>
        <nav className="marketing-nav" aria-label="Navegación principal">
          <a href="#incluye">Qué incluye</a>
          <a href="#ejemplos">Ejemplos</a>
          <a href="#pack">Pack inicial</a>
          <a href="#faq">Preguntas frecuentes</a>
        </nav>
        <a className="marketing-nav-button" href={WHATSAPP_URL}>
          Pedir mi PuntoQR
        </a>
      </header>

      <section className="marketing-hero" aria-labelledby="hero-title">
        <div className="marketing-hero__copy">
          <p className="marketing-eyebrow">Pack PuntoQR Inicial</p>
          <h1 id="hero-title">
            Convierte tu mesón en un punto de contacto digital
          </h1>
          <p>
            Creamos una mini landing móvil para tu negocio y un QR listo para
            imprimir, para que tus clientes puedan pagarte, escribirte, ver tu
            catálogo o seguirte en redes desde un solo lugar.
          </p>
          <div className="marketing-actions">
            <a className="marketing-button marketing-button--primary" href={WHATSAPP_URL}>
              Pedir mi PuntoQR
              <HiOutlineArrowRight aria-hidden="true" />
            </a>
            <Link className="marketing-button" href="/demo">
              Ver mini landing demo
            </Link>
          </div>
          <p className="marketing-microcopy">
            Pensado para ferias, foodtrucks, tiendas, repostería, servicios y
            negocios locales.
          </p>
        </div>

        <div className="marketing-hero__visual">
          <img
            alt="Cliente escaneando PuntoQR en un mesón de velas artesanales"
            className="marketing-hero__image"
            src="/puntoqr/hero-meson.png"
          />
          <Link className="marketing-phone" href="/demo" aria-label="Ver demo PuntoQR">
            <span className="marketing-phone__bar" aria-hidden="true" />
            <div className="marketing-phone__screen" aria-hidden="true">
              <div className="marketing-phone__cover">
                <span>Providencia</span>
              </div>
              <div className="marketing-phone__avatar">V</div>
              <div className="marketing-phone__content">
                <p>Velas aromaticas artesanales</p>
                <h3>Velas Amalia</h3>
                <span>Velas de soya hechas a mano para regalos y espacios acogedores.</span>
                <strong>Pedir por WhatsApp</strong>
                <div className="marketing-phone__shortcuts">
                  <em>Catalogo</em>
                  <em>Instagram</em>
                  <em>Ubicacion</em>
                </div>
                <div className="marketing-phone__transfer">
                  <b>Datos de transferencia</b>
                  <small>Amalia Rojas</small>
                  <small>Banco Santander</small>
                  <small>Cuenta corriente</small>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="marketing-section" id="incluye">
        <div className="marketing-section__intro">
          <p className="marketing-eyebrow">Qué es PuntoQR</p>
          <h2>Todo lo importante de tu negocio en un solo QR</h2>
          <p>
            PuntoQR crea una mini página móvil personalizada para que tus
            clientes accedan rápidamente a tus datos de contacto, pago,
            catálogo, ubicación y redes sociales. Tú recibes el QR listo para
            usar en tu mesón, packaging, afiche o tarjeta.
          </p>
        </div>
        <div className="marketing-feature-grid">
          {featureCards.map((feature) => (
            <article className="marketing-feature-card" key={feature.title}>
              <span aria-hidden="true">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pack-section" id="pack">
        <div className="pack-card">
          <div>
            <p className="marketing-eyebrow">Oferta inicial</p>
            <h2>Pack PuntoQR Inicial</h2>
            <p>
              Una solución simple para comenzar a digitalizar tu negocio físico
              sin pagar una plataforma mensual.
            </p>
            <p className="pack-price">Desde $39.990</p>
            <p className="pack-note">
              Precio final según nivel de personalización y piezas gráficas
              incluidas.
            </p>
            <a className="marketing-button marketing-button--primary" href={WHATSAPP_URL}>
              Quiero mi Pack PuntoQR
            </a>
          </div>
          <ul className="pack-list">
            {packItems.map((item) => (
              <li key={item}>
                <HiOutlineCheck aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {demoClient ? (
        <ScrollPhoneDemo client={demoClient} whatsappUrl={WHATSAPP_URL} />
      ) : null}

      <section className="steps-section">
        <div className="marketing-section__intro">
          <p className="marketing-eyebrow">Cómo funciona</p>
          <h2>Así funciona</h2>
        </div>
        <div className="steps-grid">
          <article>
            <span>1</span>
            <h3>Nos envías tus datos</h3>
            <p>
              Nombre del negocio, logo, WhatsApp, redes, datos de
              transferencia, fotos y enlaces.
            </p>
          </article>
          <article>
            <span>2</span>
            <h3>Creamos tu mini landing</h3>
            <p>
              Diseñamos una página móvil simple, clara y personalizada para tu
              negocio.
            </p>
          </article>
          <article>
            <span>3</span>
            <h3>Recibes tu QR listo para imprimir</h3>
            <p>
              Puedes usarlo en tu mesón, afiche, tarjeta, packaging, puesto o
              local.
            </p>
          </article>
        </div>
      </section>

      <section className="use-section" id="ejemplos">
        <div className="marketing-section__intro">
          <p className="marketing-eyebrow">Ejemplos de uso</p>
          <h2>Pensado para negocios que atienden en persona</h2>
        </div>
        <div className="use-grid">
          {useCases.map((useCase) => (
            <article className="use-card" key={useCase.title}>
              <img alt="" src={useCase.image} />
              <h3>{useCase.title}</h3>
              <p>{useCase.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="marketing-section__intro">
          <p className="marketing-eyebrow">FAQ</p>
          <h2>Preguntas frecuentes</h2>
        </div>
        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <h2>Crea el punto digital de tu negocio</h2>
        <p>
          Ordena tus datos, facilita el contacto con tus clientes y entrega una
          experiencia más profesional desde el primer escaneo.
        </p>
        <a className="marketing-button marketing-button--primary" href={WHATSAPP_URL}>
          Pedir mi PuntoQR
        </a>
      </section>
    </main>
  );
}
