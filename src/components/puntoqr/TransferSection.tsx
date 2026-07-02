"use client";

import { useState } from "react";
import { HiCheck, HiOutlineClipboardDocument } from "react-icons/hi2";
import { formatTransferText } from "@/lib/puntoqr";
import type { PuntoQrClient } from "@/types/puntoqr";

type TransferSectionProps = {
  client: PuntoQrClient;
};

const CLIPBOARD_WRITE_TIMEOUT_MS = 700;

export function TransferSection({ client }: TransferSectionProps) {
  const defaultCopyLabel = client.copyAllLabel ?? "Copiar datos de transferencia";
  const copyAllSuccessMessage =
    client.copyAllSuccessMessage ?? "Datos copiados para pegar en tu banco";
  const copyFieldSuccessMessage = client.copyFieldSuccessMessage ?? "";
  const [copyLabel, setCopyLabel] = useState(defaultCopyLabel);
  const [statusMessage, setStatusMessage] = useState("");
  const [copiedField, setCopiedField] = useState("");
  const transfer = client.datosTransferencia;
  const transferRows = [
    ["Titular", transfer.titular],
    ["RUT", transfer.rut],
    ["Banco", transfer.banco],
    ["Cuenta", transfer.tipoCuenta],
    ["Número", transfer.numeroCuenta],
    ["Correo", transfer.correo],
  ];

  async function copyText(text: string) {
    try {
      if (navigator.clipboard?.writeText) {
        await Promise.race([
          navigator.clipboard.writeText(text),
          new Promise((_, reject) => {
            window.setTimeout(reject, CLIPBOARD_WRITE_TIMEOUT_MS);
          }),
        ]);
        return;
      }
    } catch {
      // Fall through to the textarea fallback below.
    }

    copyWithTextarea(text);
  }

  async function handleCopyAll() {
    await copyText(formatTransferText(client));
    setCopyLabel("Datos copiados");
    setStatusMessage(copyAllSuccessMessage);
    window.setTimeout(() => {
      setCopyLabel(defaultCopyLabel);
      setStatusMessage("");
    }, 2200);
  }

  async function handleCopyField(label: string, value: string) {
    await copyText(value);
    setCopiedField(label);
    setStatusMessage(copyFieldSuccessMessage || `${label} copiado`);
    window.setTimeout(() => {
      setCopiedField("");
      setStatusMessage("");
    }, 1800);
  }

  return (
    <section className="info-section" aria-labelledby="transfer-title">
      <h2 className="info-section__title" id="transfer-title">
        {client.transferTitle ?? "Datos de transferencia"}
      </h2>
      {client.transferMicrocopy ? (
        <p className="info-section__microcopy">{client.transferMicrocopy}</p>
      ) : null}
      <dl className="transfer-list">
        {transferRows.map(([label, value]) => (
          <div className="transfer-row" key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
            <button
              aria-label={`Copiar ${label.toLowerCase()}`}
              className={`transfer-copy-button ${
                copiedField === label ? "transfer-copy-button--copied" : ""
              }`}
              onClick={() => handleCopyField(label, value)}
              title={copiedField === label ? "Copiado" : `Copiar ${label.toLowerCase()}`}
              type="button"
            >
              {copiedField === label ? <HiCheck /> : <HiOutlineClipboardDocument />}
              <span>{copiedField === label ? "Copiado" : "Copiar"}</span>
            </button>
          </div>
        ))}
      </dl>
      <button className="copy-button" type="button" onClick={handleCopyAll}>
        <span className="copy-button__icon" aria-hidden="true">
          {statusMessage ? <HiCheck /> : <HiOutlineClipboardDocument />}
        </span>
        {copyLabel}
      </button>
      <p className="copy-status" role="status" aria-live="polite">
        {statusMessage}
      </p>
    </section>
  );
}

function copyWithTextarea(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
