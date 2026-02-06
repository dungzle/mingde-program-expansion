import Link from "next/link";

export default function WorkshopsPage() {
  return (
    <main className="bg-brand-light">
      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <h1 className="text-3xl md:text-4xl font-semibold text-brand-dark">
          Workshops &{" "}
          <span className="text-brand-gold">Cultural Activities</span>
        </h1>

        <div className="mt-4 w-16 h-1 bg-brand-gold rounded-full" />

        <p className="mt-6 text-base md:text-lg text-brand-muted max-w-3xl">
          Beyond the classroom, students take part in hands-on workshops and
          cultural activities designed to be engaging, interactive, and fun.
          These experiences help students connect with Chinese culture while
          building confidence and friendships.
        </p>
      </section>

      {/* Workshops overview */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Hands-On Cultural Workshops
        </h2>

        <p className="text-base text-brand-muted max-w-3xl mb-8">
          Workshops are interactive and guided by experienced instructors.
          Students are encouraged to participate actively, ask questions, and
          learn through doing rather than observation.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Traditional arts and crafts",
            "Calligraphy and creative expression",
            "Cultural games and group challenges",
          ].map((workshop) => (
            <div
              key={workshop}
              className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm"
            >
              <div className="h-36 rounded-xl bg-brand-light flex items-center justify-center text-sm text-brand-muted">
                Image placeholder
              </div>
              <p className="mt-4 text-sm text-brand-muted">{workshop}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Student-led & social */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Student-Led & Social Activities
        </h2>

        <p className="text-base text-brand-muted max-w-3xl mb-8">
          Mingde students play an active role in welcoming visiting students.
          Through shared activities, games, and informal interactions, students
          form natural connections and friendships.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Small-group cultural exchanges",
            "Campus-based social activities",
            "Collaborative team games",
          ].map((activity) => (
            <div
              key={activity}
              className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm"
            >
              <div className="h-36 rounded-xl bg-brand-light flex items-center justify-center text-sm text-brand-muted">
                Image placeholder
              </div>
              <p className="mt-4 text-sm text-brand-muted">{activity}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sports & movement */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Sports, Movement & Physical Activities
        </h2>

        <p className="text-base text-brand-muted max-w-3xl mb-8">
          Physical activity is an important part of daily life at Mingde.
          Students participate in organized sports and movement-based activities
          that encourage teamwork and energy release.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Group sports and fitness activities",
            "Traditional movement-based games",
            "Outdoor campus activities",
          ].map((sport) => (
            <div
              key={sport}
              className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm"
            >
              <div className="h-36 rounded-xl bg-brand-light flex items-center justify-center text-sm text-brand-muted">
                Image placeholder
              </div>
              <p className="mt-4 text-sm text-brand-muted">{sport}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why it matters */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Why These Activities Matter
        </h2>

        <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm max-w-3xl">
          <ul className="space-y-4 text-sm md:text-base text-brand-muted">
            <li>• Builds confidence in new environments</li>
            <li>• Encourages natural cultural exchange</li>
            <li>• Creates shared memories and friendships</li>
            <li>• Helps students feel included and engaged</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-goldLight">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            See What a Day at Mingde Looks Like
          </h2>

          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            Workshops and activities are woven into students’ daily routines,
            alongside academics and community life.
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
