"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import type { PuntoQrClient } from "@/types/puntoqr";
import { BusinessLanding } from "./BusinessLanding";

type ScrollPhoneDemoProps = {
  client: PuntoQrClient;
  whatsappUrl: string;
};

export function ScrollPhoneDemo({ client, whatsappUrl }: ScrollPhoneDemoProps) {
  const phoneRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [phoneScrollY, setPhoneScrollY] = useState(0);
  const [maxScrollY, setMaxScrollY] = useState(0);

  useEffect(() => {
    const phone = phoneRef.current;
    const viewport = viewportRef.current;
    const content = contentRef.current;

    if (!phone || !viewport || !content) {
      return;
    }

    const viewportElement = viewport;
    const contentElement = content;

    function updateMaxScroll() {
      const nextMax = Math.max(
        0,
        contentElement.scrollHeight - viewportElement.clientHeight,
      );
      setMaxScrollY(nextMax);
      setPhoneScrollY((current) => Math.min(current, nextMax));
    }

    function handlePhoneWheel(event: WheelEvent) {
      event.preventDefault();
      event.stopPropagation();

      setPhoneScrollY((current) => {
        const next = current + event.deltaY;
        return Math.min(Math.max(next, 0), maxScrollY);
      });
    }

    updateMaxScroll();
    phone.addEventListener("wheel", handlePhoneWheel, { passive: false });
    window.addEventListener("resize", updateMaxScroll);

    return () => {
      phone.removeEventListener("wheel", handlePhoneWheel);
      window.removeEventListener("resize", updateMaxScroll);
    };
  }, [maxScrollY]);


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
          <div className="scroll-phone-viewport" ref={viewportRef}>
            <div className="scroll-phone-content" ref={contentRef}>
              <BusinessLanding client={client} previewMode />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
