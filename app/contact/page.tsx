import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-brand-light">
      {/* Intro */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 pt-16 pb-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-brand-dark">
          Contact & <span className="text-brand-gold">Next Steps</span>
        </h1>

        <div className="mt-4 w-16 h-1 bg-brand-gold rounded-full" />

        <p className="max-w-6xl mt-5 text-base md:text-lg text-brand-muted">
          Families interested in the Mingde Student Exchange can use this page
          to request more information and understand what happens next. Our team
          will follow up with clear guidance and detailed program materials.
        </p>
      </section>

      {/* Primary action: Interest form */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 pb-14">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Request More Information
        </h2>

        <p className="max-w-6xl text-sm md:text-base text-brand-muted mb-6">
          The interest form helps us understand your questions and provide
          information that is most relevant to your family. Submitting the form
          does <strong>not</strong> commit you to participation.
        </p>

        <div className="rounded-2xl border border-brand-border bg-white p-5 shadow-sm">
          <div
            className="h-96 rounded-xl border border-dashed border-brand-border bg-brand-light
                       flex items-center justify-center text-sm text-brand-muted"
            role="group"
            aria-label="Mingde exchange interest form"
          >
            Google Form embed
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 pb-14">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          What Happens After You Submit the Form
        </h2>

        <div className="rounded-2xl border border-brand-border bg-white p-5 shadow-sm max-w-6xl">
          <ol className="space-y-4 text-sm md:text-base text-brand-muted list-decimal list-inside">
            <li>
              Our team reviews your submission and notes any specific questions
              or concerns.
            </li>
            <li>
              You receive detailed program information, including timelines and
              next steps.
            </li>
            <li>
              A program advisor may follow up by email to provide clarification
              or additional guidance.
            </li>
            <li>
              Families interested in moving forward receive application and
              preparation information.
            </li>
          </ol>
        </div>
      </section>

      {/* Direct contact */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 pb-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Contact Information
        </h2>

        <div className="rounded-2xl border border-brand-border bg-white p-5 shadow-sm max-w-6xl space-y-3">
          <p className="text-sm text-brand-muted">
            If you have a specific question, you are welcome to contact us
            directly:
          </p>

          <p className="text-sm text-brand-muted">
            Email:{" "}
            <a
              href="mailto:info@mingde.school"
              className="text-brand-blue underline underline-offset-4 hover:opacity-80"
            >
              info@mingde.school
            </a>
          </p>

          <p className="text-sm text-brand-muted">
            Our team typically responds within 2–3 business days.
          </p>
        </div>
      </section>

      {/* Gentle reassurance + navigation */}
      <section className="bg-brand-goldLight">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-14 text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Questions Before Submitting the Form?
          </h2>

          <p className="text-brand-muted mb-6 max-w-[60ch] mx-auto">
            Many common questions about academics, travel, supervision, and
            daily life are answered in our FAQ section.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/program/faqs"
              className="inline-flex items-center justify-center rounded-lg bg-brand-gold
                         px-8 py-3 text-white font-medium hover:opacity-90 transition"
            >
              View FAQs
            </Link>

            <Link
              href="/program"
              className="text-brand-blue font-medium underline underline-offset-4 hover:opacity-80"
            >
              Explore the Program
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
