import { Link } from "@tanstack/react-router";
import logo from "@/assets/bnt-logo.png";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link
      to="/"
      className="inline-flex items-center no-underline"
      aria-label="BNT — Bénin Négoce Transport — accueil"
    >
      <img
        src={logo}
        alt="Logo BNT — Bénin Négoce Transport"
        width={176}
        height={88}
        className={`h-[52px] w-auto ${variant === "light" ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
