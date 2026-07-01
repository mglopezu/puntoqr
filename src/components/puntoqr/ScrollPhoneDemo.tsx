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

type InteractivePhoneMockupProps = {
  client: PuntoQrClient;
  className?: string;
};

export function InteractivePhoneMockup({
  client,
  className = "",
}: InteractivePhoneMockupProps) {
  const phoneRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const maxScrollYRef = useRef(0);
  const phoneScrollYRef = useRef(0);
  const touchStartYRef = useRef<number | null>(null);
  const [phoneScrollY, setPhoneScrollY] = useState(0);

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
      maxScrollYRef.current = nextMax;
      setPhoneScrollY((current) => {
        const next = Math.min(current, nextMax);
        phoneScrollYRef.current = next;
        return next;
      });
    }

    function movePhoneContent(deltaY: number) {
      const current = phoneScrollYRef.current;
      const next = Math.min(Math.max(current + deltaY, 0), maxScrollYRef.current);

      if (next === current) {
        return false;
      }

      phoneScrollYRef.current = next;
      setPhoneScrollY(next);
      return true;
    }

    function handlePhoneWheel(event: WheelEvent) {
      const moved = movePhoneContent(event.deltaY);

      if (moved) {
        event.preventDefault();
        event.stopPropagation();
      }
    }

    function handleTouchStart(event: TouchEvent) {
      touchStartYRef.current = event.touches[0]?.clientY ?? null;
    }

    function handleTouchMove(event: TouchEvent) {
      const previousTouchY = touchStartYRef.current;
      const currentTouchY = event.touches[0]?.clientY;

      if (previousTouchY === null || currentTouchY === undefined) {
        return;
      }

      const moved = movePhoneContent(previousTouchY - currentTouchY);
      touchStartYRef.current = currentTouchY;

      if (moved) {
        event.preventDefault();
        event.stopPropagation();
      }
    }

    function handleTouchEnd() {
      touchStartYRef.current = null;
    }

    updateMaxScroll();
    phone.addEventListener("wheel", handlePhoneWheel, { passive: false });
    phone.addEventListener("touchstart", handleTouchStart, { passive: true });
    phone.addEventListener("touchmove", handleTouchMove, { passive: false });
    phone.addEventListener("touchend", handleTouchEnd);
    phone.addEventListener("touchcancel", handleTouchEnd);
    window.addEventListener("resize", updateMaxScroll);

    return () => {
      phone.removeEventListener("wheel", handlePhoneWheel);
      phone.removeEventListener("touchstart", handleTouchStart);
      phone.removeEventListener("touchmove", handleTouchMove);
      phone.removeEventListener("touchend", handleTouchEnd);
      phone.removeEventListener("touchcancel", handleTouchEnd);
      window.removeEventListener("resize", updateMaxScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-phone-shell ${className}`.trim()}
      aria-label="Mini landing en acción"
      ref={phoneRef}
      style={
        {
          "--phone-scroll-y": `-${Math.round(phoneScrollY)}px`,
        } as CSSProperties
      }
    >
      <span className="scroll-phone-notch" aria-hidden="true" />
      <div className="scroll-phone-viewport" ref={viewportRef}>
        <div className="scroll-phone-content" ref={contentRef}>
          <BusinessLanding client={client} previewMode />
        </div>
      </div>
    </div>
  );
}

export function ScrollPhoneDemo({ client, whatsappUrl }: ScrollPhoneDemoProps) {
  return (
    <section className="scroll-phone-section">
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

        <InteractivePhoneMockup client={client} />
      </div>
    </section>
  );
}
