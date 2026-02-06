import Link from "next/link";

export default function ProgramOverviewPage() {
  return (
    <main className="bg-brand-light">
      {/* Hero / Intro */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <h1 className="text-3xl md:text-4xl font-semibold text-brand-dark">
          Mingde{" "}
          <span className="text-brand-gold">Student Exchange Program</span>
        </h1>

        {/* gold accent */}
        <div className="mt-4 w-16 h-1 bg-brand-gold rounded-full" />

        <p className="mt-6 text-base md:text-lg text-brand-muted max-w-3xl">
          The Mingde Student Exchange Program offers Canadian students a
          structured, short-term academic and cultural experience in China,
          designed to promote global awareness, confidence, and meaningful
          cross-cultural learning.
        </p>
      </section>

      {/* Who the program is for */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Who This Program Is For
        </h2>

        <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm">
          <ul className="space-y-4 text-sm md:text-base text-brand-muted">
            <li className="flex gap-3">
              <span className="text-brand-gold">●</span>
              Canadian middle and high school students interested in global
              education and cultural exchange.
            </li>
            <li className="flex gap-3">
              <span className="text-brand-gold">●</span>
              Students seeking a supportive introduction to studying abroad
              without long-term relocation.
            </li>
            <li className="flex gap-3">
              <span className="text-brand-gold">●</span>
              Families looking for a well-supervised, school-based international
              experience.
            </li>
          </ul>
        </div>
      </section>

      {/* Program snapshot */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Program Snapshot
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Group Size",
              text: "Small, well-supported student groups for close supervision and guidance.",
            },
            {
              title: "Locations",
              text: "Primary experience in Changsha, with optional Shanghai extension.",
            },
            {
              title: "Program Length",
              text: "Short-term exchange options designed to fit school schedules.",
            },
            {
              title: "School-Based",
              text: "Hosted and supervised directly by Mingde School staff.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm"
            >
              <h3 className="font-medium text-brand-dark mb-2">{item.title}</h3>
              <p className="text-sm text-brand-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Academic + cultural balance */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          A Balanced Academic & Cultural Experience
        </h2>

        <p className="text-base text-brand-muted max-w-3xl mb-8">
          Students participate in academic classes alongside Mingde students
          while also engaging in workshops, cultural activities, and guided
          excursions. The program is carefully paced to ensure students feel
          supported, engaged, and comfortable throughout their stay.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Academic classroom participation",
            "Cultural workshops and hands-on activities",
            "Daily life integration with student buddies",
          ].map((label) => (
            <div
              key={label}
              className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm"
            >
              <div className="h-32 rounded-xl bg-brand-light flex items-center justify-center text-sm text-brand-muted">
                Image placeholder
              </div>
              <p className="mt-4 text-sm text-brand-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guidance to sub-pages */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Explore the Program in Detail
        </h2>

        <p className="text-base text-brand-muted max-w-2xl mb-8">
          Each part of the program is explained in detail to help families fully
          understand the student experience.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              href: "/program/academic-experience",
              label: "Academic Experience",
            },
            { href: "/program/workshops", label: "Workshops & Activities" },
            { href: "/program/travel", label: "Travel & Timeline" },
            { href: "/program/faqs", label: "FAQs" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-brand-border bg-white px-5 py-4 text-sm font-medium text-brand-dark shadow-sm hover:border-brand-gold transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-goldLight">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Learn More?</h2>

          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            Families are encouraged to review program details and reach out with
            any questions about participation, safety, or next steps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand-gold px-8 py-3 text-white font-medium hover:opacity-90 transition"
            >
              Contact Us
            </Link>

            <Link
              href="/program/faqs"
              className="text-brand-blue font-medium hover:underline"
            >
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
