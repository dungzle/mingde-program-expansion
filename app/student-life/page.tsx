import Link from "next/link";

const STUDENT_LIFE_CARDS = [
  {
    title: "Daily Life & Student Pairing",
    description:
      "Understand daily schedules, the buddy system, and how students are supported throughout the school day.",
    href: "/student-life/daily-life",
  },
  {
    title: "Accommodation & Safety",
    description:
      "Learn about accommodation options, supervision, and the measures in place to ensure student well-being.",
    href: "/student-life/accommodation",
  },
];

export default function StudentLifePage() {
  return (
    <main className="bg-brand-light">
      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-brand-dark">
          Student Life at <span className="text-brand-gold">Mingde</span>
        </h1>

        {/* gold accent line */}
        <div className="mt-4 w-16 h-1 bg-brand-gold rounded-full" />

        <p className="mt-6 text-base md:text-lg text-brand-muted max-w-2xl">
          Daily routines, attentive supervision, and consistent communication
          help students feel safe, supported, and ready to learn while studying
          at Mingde School.
        </p>
      </section>

      {/* Student life navigation cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-8">
          Explore Student Life
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {STUDENT_LIFE_CARDS.map((card) => (
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

      {/* Reassurance & CTA */}
      <section className="bg-brand-goldLight">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Clear Communication and Ongoing Support
          </h2>

          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            Families receive regular updates and have access to responsive
            support throughout the student’s experience at Mingde.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand-gold px-8 py-3 text-white font-medium hover:opacity-90 transition"
            >
              Contact & Next Steps
            </Link>

            <Link
              href="/program"
              className="text-brand-blue font-medium hover:underline"
            >
              Explore the Program
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
