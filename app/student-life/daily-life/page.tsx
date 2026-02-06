import Link from "next/link";

export default function DailyLifePage() {
  return (
    <main className="bg-brand-light">
      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <h1 className="text-3xl md:text-4xl font-semibold text-brand-dark">
          Daily Life & <span className="text-brand-gold">Student Pairing</span>
        </h1>

        <div className="mt-4 w-16 h-1 bg-brand-gold rounded-full" />

        <p className="mt-6 text-base md:text-lg text-brand-muted max-w-3xl">
          Daily life at Mingde is structured, supportive, and designed to help
          visiting students feel comfortable in a new environment. Clear
          routines and student pairing help students settle in quickly and
          confidently.
        </p>
      </section>

      {/* Student pairing */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Student Pairing System
        </h2>

        <p className="text-base text-brand-muted max-w-3xl mb-8">
          Each visiting student is paired with a Mingde student to support daily
          routines, communication, and campus navigation. This pairing helps
          visiting students feel welcomed and included from the first day.
        </p>

        <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm max-w-3xl">
          <ul className="space-y-4 text-sm md:text-base text-brand-muted">
            <li>• Paired students attend activities together</li>
            <li>• Mingde students help with schedules and locations</li>
            <li>• Staff oversee and support all student pairings</li>
          </ul>
        </div>
      </section>

      {/* Typical weekday */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          A Typical Weekday
        </h2>

        <div className="space-y-6 max-w-4xl">
          {[
            {
              time: "Morning",
              text: "Arrival on campus, morning routines, and academic classes with Mingde students.",
            },
            {
              time: "Midday",
              text: "Lunch and rest time, with opportunities for social interaction and relaxation.",
            },
            {
              time: "Afternoon",
              text: "Workshops, physical activities, or cultural experiences.",
            },
            {
              time: "Evening",
              text: "Dinner, supervised free time, and preparation for the next day.",
            },
          ].map((block) => (
            <div
              key={block.time}
              className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm flex gap-4"
            >
              <div className="flex-shrink-0 w-24 text-sm font-medium text-brand-gold">
                {block.time}
              </div>
              <p className="text-sm text-brand-muted">{block.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Weekends */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Weekends & Non-School Days
        </h2>

        <p className="text-base text-brand-muted max-w-3xl mb-8">
          Weekends offer a change of pace while maintaining structure and
          supervision. Activities are organized in advance and led by staff.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Cultural outings and group activities",
            "Rest and personal time",
            "Optional group excursions",
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

      {/* Supervision & well-being */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Supervision & Student Well-Being
        </h2>

        <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm max-w-3xl">
          <ul className="space-y-4 text-sm md:text-base text-brand-muted">
            <li>• Staff supervision throughout the day</li>
            <li>• Clear schedules shared with students</li>
            <li>• Support available for adjustment or concerns</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-goldLight">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            See How Daily Life Fits Into the Full Program
          </h2>

          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            Daily routines work alongside academics, workshops, and travel to
            create a balanced student experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/program/academic-experience"
              className="inline-flex items-center justify-center rounded-lg bg-brand-gold px-8 py-3 text-white font-medium hover:opacity-90 transition"
            >
              Academic Experience
            </Link>

            <Link
              href="/program/workshops"
              className="text-brand-blue font-medium hover:underline"
            >
              Workshops & Activities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
