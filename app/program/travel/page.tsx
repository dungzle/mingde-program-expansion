import Link from "next/link";

export default function TravelTimelinePage() {
  return (
    <main className="bg-brand-light">
      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <h1 className="text-3xl md:text-4xl font-semibold text-brand-dark">
          Travel & <span className="text-brand-gold">Program Timeline</span>
        </h1>

        <div className="mt-4 w-16 h-1 bg-brand-gold rounded-full" />

        <p className="mt-6 text-base md:text-lg text-brand-muted max-w-3xl">
          This page outlines travel logistics and the overall program timeline
          so families can clearly understand how the exchange is organized from
          departure to return.
        </p>
      </section>

      {/* Program duration */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Program Duration Options
        </h2>

        <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm max-w-3xl">
          <ul className="space-y-4 text-sm md:text-base text-brand-muted">
            <li>
              • Short-term exchange programs designed to fit within school
              schedules
            </li>
            <li>
              • Final program length will be confirmed prior to enrollment
            </li>
            <li>
              • Detailed dates shared once travel arrangements are finalized
            </li>
          </ul>
        </div>
      </section>

      {/* Travel locations */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Travel Locations
        </h2>

        <p className="text-base text-brand-muted max-w-3xl mb-8">
          Travel plans are designed to be straightforward and manageable for
          students, with clear supervision throughout the journey.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm">
            <h3 className="font-medium text-brand-dark mb-2">
              Changsha Program
            </h3>
            <p className="text-sm text-brand-muted">
              Students are based in Changsha, where Mingde School is located.
              Academic activities, workshops, and daily life experiences take
              place on and around campus.
            </p>
          </div>

          <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm">
            <h3 className="font-medium text-brand-dark mb-2">
              Shanghai Extension (Tentative)
            </h3>
            <p className="text-sm text-brand-muted">
              A short Shanghai extension may be offered as an optional
              component. Details will be confirmed closer to the program date
              and clearly communicated to families.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Typical Program Timeline
        </h2>

        <div className="space-y-6 max-w-4xl">
          {[
            {
              title: "Pre-Departure Preparation",
              text: "Families receive detailed travel information, packing guidance, and final schedules prior to departure.",
            },
            {
              title: "International Travel",
              text: "Students travel as a supervised group with clear check-in points and staff oversight.",
            },
            {
              title: "On-Campus Experience",
              text: "Academic participation, workshops, daily activities, and supervised free time take place during the stay.",
            },
            {
              title: "Return Travel",
              text: "Students return as a group, with families informed of arrival details in advance.",
            },
          ].map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm flex gap-4"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center text-sm font-medium">
                {index + 1}
              </div>
              <div>
                <h3 className="font-medium text-brand-dark mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-muted">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Supervision */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Supervision & Communication
        </h2>

        <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm max-w-3xl">
          <ul className="space-y-4 text-sm md:text-base text-brand-muted">
            <li>
              • Students are supervised throughout travel and daily activities
            </li>
            <li>• Mingde staff and program coordinators are present on-site</li>
            <li>• Families receive regular updates during the program</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-goldLight">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Have Questions About Travel or Safety?
          </h2>

          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            Common questions about logistics, supervision, and planning are
            answered in our FAQ section.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/program/faqs"
              className="inline-flex items-center justify-center rounded-lg bg-brand-gold px-8 py-3 text-white font-medium hover:opacity-90 transition"
            >
              View FAQs
            </Link>

            <Link
              href="/contact"
              className="text-brand-blue font-medium hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
