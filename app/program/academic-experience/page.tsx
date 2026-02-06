import Link from "next/link";

export default function AcademicExperiencePage() {
  return (
    <main className="bg-brand-light">
      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <h1 className="text-3xl md:text-4xl font-semibold text-brand-dark">
          Academic <span className="text-brand-gold">Experience</span>
        </h1>

        <div className="mt-4 w-16 h-1 bg-brand-gold rounded-full" />

        <p className="mt-6 text-base md:text-lg text-brand-muted max-w-3xl">
          The Mingde exchange program is designed to introduce students to
          classroom learning in China in a supportive and carefully structured
          way. Academic participation focuses on engagement, confidence, and
          cultural exposure rather than academic pressure.
        </p>
      </section>

      {/* Classroom participation */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Classroom Participation
        </h2>

        <p className="text-base text-brand-muted max-w-3xl mb-8">
          Visiting students attend selected classes alongside Mingde students.
          Teachers are informed in advance and understand the background and
          goals of international participants.
        </p>

        <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm max-w-3xl">
          <ul className="space-y-4 text-sm md:text-base text-brand-muted">
            <li>• Participation is observational and interactive</li>
            <li>• No formal testing or grading</li>
            <li>• Focus on confidence, exposure, and engagement</li>
          </ul>
        </div>
      </section>

      {/* Language & curriculum support */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Language & Curriculum Support
        </h2>

        <p className="text-base text-brand-muted max-w-3xl mb-8">
          The academic experience is adapted to ensure students feel comfortable
          even if they do not speak Chinese fluently. Language differences are
          expected and accommodated.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Teachers provide clear guidance and context during lessons",
            "Students are not expected to understand all spoken content",
            "Peer support and staff assistance are available throughout the day",
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

      {/* Suitable subjects */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Suitable Subjects
        </h2>

        <p className="text-base text-brand-muted max-w-3xl mb-8">
          Classes are selected to allow visiting students to participate
          comfortably, regardless of language background.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["English", "Physical & Health Education", "Music", "Art"].map(
            (subject) => (
              <div
                key={subject}
                className="rounded-xl border border-brand-border bg-white px-5 py-4 text-sm font-medium text-brand-dark shadow-sm"
              >
                {subject}
              </div>
            ),
          )}
        </div>
      </section>

      {/* Academic culture */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Academic Culture at Mingde
        </h2>

        <p className="text-base text-brand-muted max-w-3xl mb-8">
          Classrooms at Mingde emphasize respect, attentiveness, and consistent
          routines. Visiting students gain insight into a different academic
          culture while remaining supported throughout the experience.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Structured classroom routines",
            "Strong teacher presence and guidance",
            "Respectful and focused learning environment",
          ].map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-brand-muted">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-goldLight">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Explore the Full Student Experience
          </h2>

          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            Academic learning is just one part of the exchange. Families are
            encouraged to explore workshops, daily life, and travel details.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/program/workshops"
              className="inline-flex items-center justify-center rounded-lg bg-brand-gold px-8 py-3 text-white font-medium hover:opacity-90 transition"
            >
              Workshops & Activities
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
