import Link from "next/link";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function CTAButton({
  children,
  href,
  onClick,
  type = "button",
}: CTAButtonProps) {
  const className =
    "bg-brand-gold font-bold text-white px-6 py-3 rounded-lg hover:opacity-90 transition inline-flex items-center justify-center";

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
