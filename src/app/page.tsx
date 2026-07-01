import Link from "next/link";
import {
  HiOutlineArrowRight,
  HiOutlineBanknotes,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheck,
  HiOutlineMapPin,
  HiOutlineQrCode,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { InteractivePhoneMockup } from "@/components/puntoqr/ScrollPhoneDemo";
import { getPuntoQrClientBySlug } from "@/lib/puntoqr";

const WHATSAPP_URL =
  "https://wa.me/56966991537?text=Hola,%20quiero%20crear%20mi%20PuntoQR";
const MARTINA_DEMO_URL = "https://www.puntoqr.cl/dulces-martina";

const featureCards = [
  {
    title: "WhatsApp directo",
    text: "Tus clientes te escriben con un toque, sin guardar ni buscar tu número.",
    icon: <HiOutlineChatBubbleLeftRight />,
  },
  {
    title: "Datos para transferir",
    text: "Evita errores: tus clientes copian tus datos bancarios desde el celular.",
    icon: <HiOutlineBanknotes />,
  },
  {
    title: "Catálogo, menú o servicios",
    text: "Muestra lo que vendes sin enviar fotos una por una.",
    icon: <HiOutlineShoppingBag />,
  },
  {
    title: "Redes, horario y ubicación",
    text: "Haz que te sigan, te encuentren y sepan cuándo atiendes.",
    icon: <HiOutlineMapPin />,
  },
];

const packItems = [
  "Mini landing móvil personalizada.",
  "QR único para tu negocio.",
  "Botones a WhatsApp, Instagram, catálogo, ubicación o pago.",
  "Datos de transferencia ordenados y fáciles de copiar.",
  "Uso de logo, foto, colores y datos de tu negocio.",
  "Archivo del QR listo para imprimir.",
  "Diseño base para afiche, tarjeta o sticker.",
  "Ajustes iniciales para dejarlo funcionando.",
];

const useCases = [
  {
    title: "Foodtrucks",
    text: "Menú, pedidos y redes mientras tus clientes esperan.",
    image: "/puntoqr/foodtruck.png",
  },
  {
    title: "Ferias y bazares",
    text: "Contacto, pago, catálogo e Instagram desde tu puesto.",
    image: "/puntoqr/feria-dulces.png",
  },
  {
    title: "Velas, artesanía y regalos",
    text: "Un QR en tu packaging para que vuelvan a comprarte.",
    image: "/puntoqr/pack-qr.png",
  },
];

const faqItems = [
  {
    question: "¿Necesito tener página web?",
    answer:
      "No. PuntoQR funciona como una mini página móvil independiente. Tus clientes entran escaneando tu QR o abriendo tu enlace.",
  },
  {
    question: "¿Puedo usar mis propias fotos?",
    answer:
      "Sí. Puedes enviarnos fotos de tus productos, local, puesto, menú o trabajos anteriores.",
  },
  {
    question: "¿El QR cambia si actualizo mis datos?",
    answer:
      "No necesariamente. La idea es que el QR siga siendo el mismo y podamos actualizar la información de la mini landing cuando corresponda.",
  },
  {
    question: "¿Sirve para ferias o negocios sin local?",
    answer:
      "Sí. Puedes usarlo en un mesón, puesto, afiche, tarjeta, sticker, packaging o redes sociales.",
  },
  {
    question: "¿Incluye impresión?",
    answer:
      "El pack inicial incluye el archivo listo para imprimir. La impresión física puede cotizarse aparte si está disponible.",
  },
  {
    question: "¿Qué necesito enviar para crear mi PuntoQR?",
    answer:
      "Nombre del negocio, logo si tienes, WhatsApp, redes, datos de pago, ubicación, horario, fotos y enlaces que quieras incluir.",
  },
  {
    question: "¿Puedo compartirlo en Instagram o WhatsApp?",
    answer:
      "Sí. Además del QR, puedes compartir el enlace de tu mini landing en redes, WhatsApp o biografía de Instagram.",
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
            Tu negocio en un punto de contacto digital
          </h1>
          <p>
            Tus clientes escanean un QR y encuentran todo en segundos:
            WhatsApp, datos de pago, catálogo, redes, ubicación y horario.
          </p>
          <div className="marketing-actions">
            <a className="marketing-button marketing-button--primary" href={WHATSAPP_URL}>
              Pedir mi PuntoQR
              <HiOutlineArrowRight aria-hidden="true" />
            </a>
            <Link className="marketing-button" href="/demo">
              Ver demo
            </Link>
          </div>
        </div>

        <div className="marketing-hero__visual">
          <img
            alt="Cliente escaneando PuntoQR en el mesón de Dulces Martina"
            className="marketing-hero__image"
            src="/puntoqr/heropuntoqr.png"
          />
          {demoClient ? (
            <div className="marketing-hero__phone-stage">
              <InteractivePhoneMockup
                client={demoClient}
                className="scroll-phone-shell--hero"
              />
              <Link className="marketing-hero__phone-link" href="/demo">
                Ver demo completa
              </Link>
            </div>
          ) : null}
        </div>
        <p className="marketing-microcopy marketing-microcopy--wide">
          Ideal para ferias, foodtrucks, tiendas, reposterías, servicios y
          negocios locales.
        </p>
      </section>

      <section className="marketing-section" id="incluye">
        <div className="marketing-section__intro">
          <p className="marketing-eyebrow">Qué es PuntoQR</p>
          <h2>Todo lo importante de tu negocio en un solo QR</h2>
          <p>
            Creamos una mini landing móvil para que tus clientes encuentren
            todo lo que necesitan después de escanear tu QR: contacto, pagos,
            catálogo, redes, ubicación y horario. Tú recibes el enlace y el QR
            listo para imprimir.
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
              Una solución simple para digitalizar tu negocio físico sin pagar
              una plataforma mensual.
            </p>
            <p className="pack-price">Desde $39.990</p>
            <p className="pack-note">
              Incluye mini landing, QR personalizado y diseño base listo para
              imprimir. El precio final puede variar según personalización y
              piezas gráficas adicionales.
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

      <section className="qr-demo-section" aria-labelledby="qr-demo-title">
        <div className="qr-demo-card">
          <div className="qr-demo-copy">
            <p className="marketing-eyebrow">QR físico</p>
            <h2 id="qr-demo-title">Escanea y abre una mini landing real</h2>
            <p>
              Este QR de ejemplo lleva a Dulces Martina. Es la misma lógica que
              tendría el QR impreso en un mesón, vitrina, afiche, tarjeta o
              packaging.
            </p>
            <ul>
              <li>El cliente escanea desde su celular.</li>
              <li>Abre la mini landing del negocio.</li>
              <li>Puede escribir, ver catálogo, ubicarse o copiar datos.</li>
            </ul>
            <Link className="marketing-button marketing-button--primary" href="/dulces-martina">
              Ver mini landing
              <HiOutlineArrowRight aria-hidden="true" />
            </Link>
          </div>
          <a
            className="qr-demo-visual"
            href={MARTINA_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir mini landing de Dulces Martina"
          >
            <span aria-hidden="true">
              <HiOutlineQrCode />
            </span>
            <img
              alt="QR para abrir la mini landing de Dulces Martina"
              src="/puntoqr/dulces-martina-qr.png"
            />
            <strong>Dulces Martina</strong>
            <small>www.puntoqr.cl/dulces-martina</small>
          </a>
        </div>
      </section>

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
              Diseñamos una página móvil clara, personalizada y lista para
              compartir.
            </p>
          </article>
          <article>
            <span>3</span>
            <h3>Recibes tu QR listo para imprimir</h3>
            <p>
              Puedes usarlo en tu mesón, afiche, tarjeta, sticker, packaging,
              puesto o local.
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

      <section className="marketing-final-cta">
        <h2>Crea el punto de contacto digital de tu negocio</h2>
        <p>
          Ordena tus datos, facilita el contacto y entrega una experiencia más
          profesional desde el primer escaneo.
        </p>
        <a className="marketing-button marketing-button--primary" href={WHATSAPP_URL}>
          Pedir mi PuntoQR
        </a>
      </section>
    </main>
  );
}
