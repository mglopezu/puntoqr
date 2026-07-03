import Link from "next/link";
import {
  HiOutlineArrowRight,
  HiOutlineBanknotes,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheck,
  HiOutlineMapPin,
  HiOutlinePrinter,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { InteractivePhoneMockup } from "@/components/puntoqr/ScrollPhoneDemo";
import { getPuntoQrClientBySlug } from "@/lib/puntoqr";

const WHATSAPP_URL =
  "https://wa.me/56966991537?text=Hola,%20quiero%20crear%20mi%20PuntoQR";
const HOTEL_VIDAL_URL = "https://hotelvidal.puntoqr.cl/";

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

const useCases = [
  {
    title: "Foodtrucks",
    text: "Menú, pedidos y redes mientras tus clientes esperan.",
    image: "/puntoqr/foodtruck.png",
  },
  {
    title: "Ferias y bazares",
    text: "Contacto, pago, catálogo e Instagram desde tu puesto.",
    image: "/puntoqr/tiendalumiere.png",
  },
  {
    title: "Servicios a domicilio",
    text: "WhatsApp, servicios, zonas de atención y datos de pago desde tu vehículo o tarjeta.",
    image: "/puntoqr/lucas-electricidad.png",
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
      "No. El QR puede seguir siendo el mismo. Cuando necesites cambiar tu WhatsApp, horario, catálogo, datos de pago o cualquier información, actualizamos la mini landing sin que tengas que imprimir un QR nuevo.",
  },
  {
    question: "¿Sirve para ferias o negocios sin local?",
    answer:
      "Sí. Puedes usarlo en un mesón, puesto, afiche, tarjeta, sticker, packaging o redes sociales.",
  },
  {
    question: "¿Incluye impresión?",
    answer:
      "No incluye impresión física. El Pack Inicial incluye un afiche listo para imprimir, el QR en formato PNG para usarlo en tarjetas, stickers, packaging o letreros, y además el enlace de tu mini landing para compartirlo en redes sociales o por WhatsApp.",
  },
  {
    question: "¿Cuánto demora la entrega?",
    answer:
      "Una vez que recibimos la información de tu negocio, preparamos tu PuntoQR en un plazo estimado de 2 a 4 días hábiles.",
  },
  {
    question: "¿Qué pasa después del primer año?",
    answer:
      "El primer año de hosting está incluido en el Pack PuntoQR Inicial. Después puedes renovar tu PuntoQR por una tarifa anual baja para mantener activa tu mini landing y seguir actualizando tus datos.",
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
  const hotelClient = getPuntoQrClientBySlug("hotel-vidal");

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
          <a href="#pack">Pack inicial</a>
          <a href="#caso-real">Caso real</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#casos-de-uso">Casos de uso</a>
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
            Tu negocio, tus datos y tus redes en un solo QR
          </h1>
          <p>
            Creamos una mini landing personalizada para que tus clientes
            encuentren en segundos tu WhatsApp, catálogo, ubicación, horarios,
            redes sociales y datos de pago.
          </p>
          <p className="marketing-hero__price">
            Precio de lanzamiento: $39.990
          </p>
          <p className="marketing-hero__benefits">
            Incluye mini landing personalizada, código QR listo para imprimir,
            afiche digital y hosting por 1 año.
          </p>
          <p className="marketing-hero__ease">
            No necesitas tener página web ni configurar nada. Tú nos envías tus
            datos y nosotros te entregamos todo listo para usar.
          </p>
          <div className="marketing-actions">
            <a className="marketing-button marketing-button--primary" href={WHATSAPP_URL}>
              Quiero mi PuntoQR
              <HiOutlineArrowRight aria-hidden="true" />
            </a>
            <Link className="marketing-button" href="/demo">
              Ver demo real
            </Link>
          </div>
        </div>

        <div className="marketing-hero__visual">
          <div className="marketing-hero__demo-copy">
            <span>Demo interactiva</span>
            <h2>Así se ve un PuntoQR en funcionamiento</h2>
          </div>
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
          Ideal para ferias, foodtrucks, tiendas, reposterías, peluquerías,
          servicios y negocios locales.
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
          <div className="pack-mockup-frame">
            <img
              alt="Pack PuntoQR Inicial con mini landing, código QR, afiche, sticker y tarjeta para Dulces Martina"
              src="/puntoqr/pack-puntoqr-inicial-mockup.png"
            />
          </div>
          <div className="pack-cta-zone">
            <p className="pack-launch-price">
              Precio de lanzamiento: <strong>$39.990</strong>
            </p>
            <div className="pack-includes" aria-label="Qué incluye el Pack PuntoQR Inicial">
              <p>Incluye:</p>
              <ul>
                <li>
                  <HiOutlineCheck aria-hidden="true" />
                  Mini landing personalizada
                </li>
                <li>
                  <HiOutlineCheck aria-hidden="true" />
                  Código QR en PNG listo para imprimir
                </li>
                <li>
                  <HiOutlineCheck aria-hidden="true" />
                  Afiche digital listo para enviar a imprenta
                </li>
                <li>
                  <HiOutlineCheck aria-hidden="true" />
                  Enlace para compartir en WhatsApp, Instagram o redes sociales
                </li>
                <li>
                  <HiOutlineCheck aria-hidden="true" />
                  Hosting incluido por 1 año
                </li>
              </ul>
            </div>
            <div className="pack-actions">
              <a className="marketing-button marketing-button--primary" href={WHATSAPP_URL}>
                Quiero mi PuntoQR
                <HiOutlineArrowRight aria-hidden="true" />
              </a>
              <Link className="marketing-button" href="/demo">
                Ver demo
              </Link>
            </div>
            <p className="pack-trust">
              <HiOutlineCheck aria-hidden="true" />
              Seguro, confiable y fácil de usar.
            </p>
          </div>
        </div>
      </section>

      <section className="qr-demo-section" id="caso-real" aria-labelledby="qr-demo-title">
        <div className="qr-demo-card">
          <div className="qr-demo-copy">
            <p className="marketing-eyebrow">Caso real</p>
            <h2 id="qr-demo-title">Escanea el PuntoQR real de Hotel Vidal</h2>
            <p>
              Este es un ejemplo funcionando de verdad. Hotel Vidal usa PuntoQR
              para que sus huéspedes accedan en segundos a reservas por WhatsApp,
              ubicación, contacto e información clave del alojamiento.
            </p>
            <ul>
              <li>El huésped escanea desde su celular.</li>
              <li>Abre la mini landing del hotel.</li>
              <li>Puede reservar, ver la ubicación y guardar el contacto.</li>
            </ul>
            <div className="hotel-case-actions">
              <a
                className="marketing-button marketing-button--primary"
                href={HOTEL_VIDAL_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mini landing real
                <HiOutlineArrowRight aria-hidden="true" />
              </a>
              <p>
                <span aria-hidden="true">
                  <HiOutlinePrinter />
                </span>
                También recibe su afiche y QR listos para imprimir.
              </p>
            </div>
          </div>
          <div className="hotel-case-visual" aria-label="Mini landing y afiche real de Hotel Vidal">
            {hotelClient ? (
              <InteractivePhoneMockup
                client={hotelClient}
                className="scroll-phone-shell--case"
              />
            ) : null}
            <img
              alt="Afiche de recepción de Hotel Vidal con QR, WhatsApp, Booking, Facebook y ubicación"
              className="hotel-case-poster"
              src="/puntoqr/hotel-vidal-afiche-recepcion.png"
            />
            <a
              className="hotel-case-qr-card"
              href={HOTEL_VIDAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Hotel Vidal en PuntoQR"
            >
              <img
                alt="QR real de Hotel Vidal"
                src="/puntoqr/hotel-vidal-qr-real.png"
              />
              <strong>Hotel Vidal</strong>
              <small>hotelvidal.puntoqr.cl</small>
            </a>
          </div>
        </div>
      </section>

      <section className="steps-section" id="como-funciona">
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

      <section className="use-section" id="casos-de-uso">
        <div className="marketing-section__intro">
          <p className="marketing-eyebrow">Casos de uso</p>
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
