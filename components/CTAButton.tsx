import Link from "next/link";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function CTAButton({
  children,
  href,
  onClick,
  type = "button",
  className,
}: CTAButtonProps) {
  const baseClassName =
    "bg-brand-gold font-bold text-white px-6 py-3 rounded-lg hover:opacity-90 transition inline-flex items-center justify-center";
  const mergedClassName = className
    ? `${baseClassName} ${className}`
    : baseClassName;

  if (href) {
    return (
      <Link href={href} className={mergedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={mergedClassName}>
      {children}
    </button>
  );
}
