import type { ReactNode } from "react";

type ActionButtonProps = {
  href: string;
  children: ReactNode;
  ariaLabel?: string;
  icon?: ReactNode;
  isPrimary?: boolean;
  variant?: "default" | "compact";
};

export function ActionButton({
  href,
  children,
  ariaLabel,
  icon,
  isPrimary = false,
  variant = "default",
}: ActionButtonProps) {
  const className = [
    "action-button",
    isPrimary ? "action-button--primary" : "",
    variant === "compact" ? "action-button--compact" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a
      aria-label={ariaLabel}
      className={className}
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      <span className="action-button__content">
        {icon ? (
          <span className="action-button__icon" aria-hidden="true">
            {icon}
          </span>
        ) : null}
        <span className="action-button__label">{children}</span>
      </span>
      {variant === "compact" ? null : (
        <span className="action-button__arrow" aria-hidden="true">
          →
        </span>
      )}
    </a>
  );
}
