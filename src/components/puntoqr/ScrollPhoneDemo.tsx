"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import {
  HiOutlineArrowRight,
  HiOutlineBanknotes,
  HiOutlineBookOpen,
  HiOutlineMapPin,
} from "react-icons/hi2";
import type { PuntoQrClient } from "@/types/puntoqr";

const SCROLL_DISTANCE = 360;

type ScrollPhoneDemoProps = {
  client: PuntoQrClient;
  whatsappUrl: string;
};

export function ScrollPhoneDemo({ client, whatsappUrl }: ScrollPhoneDemoProps) {
  const phoneRef = useRef<HTMLDivElement>(null);
  const [phoneScrollY, setPhoneScrollY] = useState(0);

  useEffect(() => {
    const phone = phoneRef.current;

    if (!phone) {
      return;
    }

    function handlePhoneWheel(event: WheelEvent) {
      event.preventDefault();
      event.stopPropagation();

      setPhoneScrollY((current) => {
        const next = current + event.deltaY;
        return Math.min(Math.max(next, 0), SCROLL_DISTANCE);
      });
    }

    phone.addEventListener("wheel", handlePhoneWheel, { passive: false });

    return () => {
      phone.removeEventListener("wheel", handlePhoneWheel);
    };
  }, []);


  return (
    <section
      className="scroll-phone-section"
      style={
        {
          "--phone-scroll-y": `-${Math.round(phoneScrollY)}px`,
        } as CSSProperties
      }
    >
      <div className="scroll-phone-sticky">
        <div className="scroll-phone-copy">
          <p className="marketing-eyebrow">Mini landing móvil</p>
          <h2>Todo lo que tus clientes necesitan después de escanear</h2>
          <p>
            Después de escanear tu QR, tus clientes pueden escribirte por
            WhatsApp, revisar tu catálogo, ver tu ubicación, seguirte en redes
            o copiar tus datos de transferencia sin tener que preguntarte.
          </p>
          <ul>
            <li>Diseñada para verse bien en celular.</li>
            <li>Personalizada con tu negocio, fotos y colores.</li>
            <li>Lista para usar desde un QR físico.</li>
            <li>Ideal para mesón, feria, foodtruck, local, tarjeta o packaging.</li>
          </ul>
          <a className="marketing-button marketing-button--primary" href={whatsappUrl}>
            Pedir mi PuntoQR
            <HiOutlineArrowRight aria-hidden="true" />
          </a>
        </div>

        <div
          className="scroll-phone-shell"
          aria-label="Mini landing en acción"
          ref={phoneRef}
        >
          <span className="scroll-phone-notch" aria-hidden="true" />
          <div className="scroll-phone-viewport">
            <div className="scroll-phone-content">
              <MiniLandingPreview client={client} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type MiniLandingPreviewProps = {
  client: PuntoQrClient;
};

function MiniLandingPreview({ client }: MiniLandingPreviewProps) {
  const transfer = client.datosTransferencia;
  const initial = client.nombreNegocio.charAt(0);

  return (
    <article className="mini-preview">
      <header className="mini-preview__cover">
        <span>{client.ciudad}</span>
      </header>
      <div className="mini-preview__body">
        <div className="mini-preview__avatar">{initial}</div>
        <p className="mini-preview__eyebrow">{client.rubro}</p>
        <h3>{client.nombreNegocio}</h3>
        <p className="mini-preview__description">{client.descripcion}</p>
        <button className="mini-preview__whatsapp" type="button">
          <FaWhatsapp aria-hidden="true" />
          Pedir por WhatsApp
          <HiOutlineArrowRight aria-hidden="true" />
        </button>
        <div className="mini-preview__actions">
          <span>
            <HiOutlineBookOpen aria-hidden="true" />
            Catálogo
          </span>
          <span>
            <FaInstagram aria-hidden="true" />
            Instagram
          </span>
          <span>
            <HiOutlineMapPin aria-hidden="true" />
            Ubicación
          </span>
        </div>
        <section className="mini-preview__transfer">
          <h4>Datos de transferencia</h4>
          <dl>
            <div>
              <dt>Titular</dt>
              <dd>{transfer.titular}</dd>
            </div>
            <div>
              <dt>RUT</dt>
              <dd>{transfer.rut}</dd>
            </div>
            <div>
              <dt>Banco</dt>
              <dd>{transfer.banco}</dd>
            </div>
            <div>
              <dt>Cuenta</dt>
              <dd>{transfer.tipoCuenta}</dd>
            </div>
            <div>
              <dt>Número</dt>
              <dd>{transfer.numeroCuenta}</dd>
            </div>
            <div>
              <dt>Correo</dt>
              <dd>{transfer.correo}</dd>
            </div>
          </dl>
          <button type="button">
            <HiOutlineBanknotes aria-hidden="true" />
            Copiar datos de transferencia
          </button>
        </section>
        <section className="mini-preview__info">
          <h4>Información</h4>
          <p>{client.horario}</p>
          <p>{client.ubicacionTexto}</p>
        </section>
        <footer>Creado con PuntoQR</footer>
      </div>
    </article>
  );
}
