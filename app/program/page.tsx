import Link from "next/link";

const PROGRAM_CARDS = [
  {
    title: "Program Overview",
    description:
      "An introduction to the program structure, locations, duration, and who it is designed for.",
    href: "/program/overview",
  },
  {
    title: "Academic Experience",
    description:
      "How students participate in classes, academic support, and learning expectations.",
    href: "/program/academic-experience",
  },
  {
    title: "Workshops & Cultural Activities",
    description:
      "Hands-on workshops, cultural activities, and interactive experiences beyond the classroom.",
    href: "/program/workshops",
  },
  {
    title: "Travel & Timeline",
    description:
      "Key dates, travel plans, and a clear timeline to help families prepare.",
    href: "/program/travel",
  },
  {
    title: "FAQs",
    description:
      "Answers to common questions from parents and students about the program.",
    href: "/program/faqs",
  },
];

export default function ProgramPage() {
  return (
    <main className="bg-brand-light">
      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-brand-dark">
          The Mingde{" "}
          <span className="text-brand-gold">
            International Exchange Program
          </span>
        </h1>

        {/* gold accent line */}
        <div className="mt-4 w-16 h-1 bg-brand-gold rounded-full" />

        <p className="mt-6 text-base md:text-lg text-brand-muted max-w-2xl">
          A structured academic and cultural exchange designed to support
          students as they learn, live, and study at Mingde School in China.
        </p>
      </section>

      {/* Program navigation cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-8">
          Explore the Program
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAM_CARDS.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-2xl border border-brand-border bg-white p-6 shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-lg font-semibold text-brand-dark group-hover:text-brand-blue transition">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                  {card.description}
                </p>

                <span className="mt-auto pt-6 text-sm font-medium text-brand-blue">
                  Learn more →
                </span>

                {/* subtle gold hover underline */}
                <div className="mt-4 h-0.5 w-0 bg-brand-gold group-hover:w-12 transition-all motion-reduce:transition-none" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Next steps */}
      <section className="bg-brand-goldLight">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Interested in the Mingde Exchange Program?
          </h2>

          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            Families can explore next steps, ask questions, and learn more about
            how to participate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand-gold px-8 py-3 text-white font-medium hover:opacity-90 transition"
            >
              Contact & Next Steps
            </Link>

            <Link
              href="/program/overview"
              className="text-brand-blue font-medium hover:underline"
            >
              Start with Program Overview
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
