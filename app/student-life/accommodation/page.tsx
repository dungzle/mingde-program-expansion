import Link from "next/link";

export default function AccommodationSafetyPage() {
  return (
    <main className="bg-brand-light">
      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <h1 className="text-3xl md:text-4xl font-semibold text-brand-dark">
          Accommodation &{" "}
          <span className="text-brand-gold">Student Safety</span>
        </h1>

        <div className="mt-4 w-16 h-1 bg-brand-gold rounded-full" />

        <p className="mt-6 text-base md:text-lg text-brand-muted">
          Student well-being is a priority throughout the Mingde exchange
          experience. Accommodation arrangements and safety measures are
          carefully planned to provide families with clarity, consistency, and
          peace of mind.
        </p>
      </section>

      {/* Host Family Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Host Family Selection & Standards
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm">
            <h3 className="font-medium text-brand-dark mb-4">
              Host Family Requirements
            </h3>
            <ul className="space-y-3 text-sm md:text-base text-brand-muted">
              <li>
                • Priority given to families with a private vehicle for timely
                school pickup and drop-off
              </li>
              <li>• Separate bedroom provided for visiting student</li>
              <li>
                • Comfortable living conditions appropriate for student
                accommodation
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm">
            <h3 className="font-medium text-brand-dark mb-4">
              Screening & Preparation
            </h3>
            <p className="text-sm md:text-base text-brand-muted">
              All host families are screened and briefed prior to participation.
              Expectations regarding student care, communication, safety, and
              cultural sensitivity are clearly outlined to ensure a supportive
              and welcoming home environment.
            </p>
          </div>
        </div>
      </section>

      {/* Daily supervision */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Daily Supervision & Care
        </h2>

        <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm max-w-3xl">
          <ul className="space-y-4 text-sm md:text-base text-brand-muted">
            <li>• Staff supervision during school hours and activities</li>
            <li>• Clear daily schedules shared with students</li>
            <li>• Designated staff members available for support</li>
          </ul>
        </div>
      </section>

      {/* Safety measures */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Student Safety Measures
        </h2>

        <p className="text-base text-brand-muted max-w-3xl mb-8">
          Safety procedures are in place to support students throughout their
          stay, including on campus, during activities, and while traveling as
          part of the program.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Clear supervision protocols",
            "Staff presence during activities and travel",
            "Established emergency response procedures",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-brand-muted">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Communication */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Communication With Families
        </h2>

        <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm max-w-3xl">
          <ul className="space-y-4 text-sm md:text-base text-brand-muted">
            <li>• Families receive updates during the program</li>
            <li>• Contact information provided prior to departure</li>
            <li>• Clear channels for questions or concerns</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-goldLight">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Learn More About Program Planning
          </h2>

          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            Travel details, schedules, and supervision plans are explained in
            more detail in the Travel & Timeline section.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/program/travel"
              className="inline-flex items-center justify-center rounded-lg bg-brand-gold px-8 py-3 text-white font-medium hover:opacity-90 transition"
            >
              Travel & Timeline
            </Link>

            <Link
              href="/program/faqs"
              className="text-brand-blue font-medium underline underline-offset-4 md:no-underline md:hover:underline"
            >
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
