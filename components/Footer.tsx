import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & trust */}
          <div>
            <h3 className="text-white font-semibold mb-3">
              Mingde International Program
            </h3>

            <div className="w-10 h-1 bg-brand-gold rounded-full mb-4" />

            <p className="text-sm text-brand-muted leading-relaxed max-w-sm">
              A school-based international exchange program connecting students
              in Canada and China through structured academics and supervised
              cultural experiences.
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <p className="text-brand-light">Victoria, BC</p>

              <a
                href="mailto:info@mingde.school"
                className="block text-brand-light underline underline-offset-4 hover:text-brand-gold transition"
              >
                info@mingde.school
              </a>

              <a
                href="tel:+12508889999"
                className="block text-brand-light underline underline-offset-4 hover:text-brand-gold transition"
              >
                +1 (250) 999-9999
              </a>
            </div>
          </div>

          {/* About (trust-building) */}
          <nav aria-label="About Mingde">
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="underline underline-offset-4 hover:text-brand-gold transition"
                >
                  About Mingde School
                </Link>
              </li>
            </ul>
          </nav>

          {/* Program (recovery links only) */}
          <nav aria-label="Program information">
            <h4 className="text-white font-semibold mb-4">Program</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/program"
                  className="underline underline-offset-4 hover:text-brand-gold transition"
                >
                  Program Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/program/travel"
                  className="underline underline-offset-4 hover:text-brand-gold transition"
                >
                  Travel & Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="/program/faqs"
                  className="underline underline-offset-4 hover:text-brand-gold transition"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </nav>

          {/* Student Life + next steps */}
          <div>
            <h4 className="text-white font-semibold mb-4">Student Life</h4>

            <ul className="space-y-3 text-sm mb-6">
              <li>
                <Link
                  href="/student-life/accommodation"
                  className="underline underline-offset-4 hover:text-brand-gold transition"
                >
                  Accommodation & Safety
                </Link>
              </li>
              <li>
                <Link
                  href="/student-life/daily-life"
                  className="underline underline-offset-4 hover:text-brand-gold transition"
                >
                  Daily Life & Student Pairing
                </Link>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-lg bg-brand-gold px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
            >
              Contact & Next Steps
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-border/20">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-brand-muted flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
          <p>
            © {new Date().getFullYear()} Mingde School. All rights reserved.
          </p>
          <p>For informational purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
