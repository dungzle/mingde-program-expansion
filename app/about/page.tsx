import Link from "next/link";

export default function MingdeSchoolPage() {
  return (
    <main className="bg-brand-light">
      {/* Intro / Identity */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <h1 className="text-3xl md:text-4xl font-semibold text-brand-dark">
          About <span className="text-brand-gold">Mingde School</span>
        </h1>

        {/* gold accent */}
        <div className="mt-4 w-16 h-1 bg-brand-gold rounded-full" />

        <p className="mt-6 text-base md:text-lg text-brand-muted max-w-3xl">
          Mingde School is a learning community built on respect, structure, and
          care. The campus environment emphasizes strong academic foundations
          while supporting students’ personal growth, responsibility, and
          well-being.
        </p>
      </section>

      {/* Educational philosophy */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Educational Philosophy
        </h2>

        <p className="text-base text-brand-muted max-w-3xl mb-8">
          At Mingde, education extends beyond the classroom. Teachers and staff
          focus on helping students develop discipline, curiosity, and mutual
          respect in a calm and supportive setting.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Clear expectations and consistent routines",
            "Respectful teacher–student relationships",
            "Emphasis on personal responsibility and growth",
          ].map((value) => (
            <div
              key={value}
              className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-brand-muted">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Daily life */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Daily Life on Campus
        </h2>

        <p className="text-base text-brand-muted max-w-3xl mb-8">
          Students at Mingde follow a structured daily routine that balances
          academics, physical activity, and community time. This rhythm helps
          students feel secure, focused, and supported throughout the school
          day.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Classroom learning environments",
            "Shared student spaces and study areas",
            "Organized physical and community activities",
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

      {/* Student community */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Student Community & Support
        </h2>

        <p className="text-base text-brand-muted max-w-3xl mb-8">
          Mingde’s student community is guided by cooperation and mutual
          respect. Staff members are present throughout the day to support
          students academically and personally, creating a sense of consistency
          and care.
        </p>

        <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm max-w-3xl">
          <ul className="space-y-4 text-sm md:text-base text-brand-muted">
            <li>• Supportive teacher supervision</li>
            <li>• Clear behavioral expectations</li>
            <li>• Strong sense of community and belonging</li>
          </ul>
        </div>
      </section>

      {/* Video section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Experience Mingde Through Video
        </h2>

        <p className="text-base text-brand-muted max-w-3xl mb-8">
          Official Mingde School videos provide a closer look at campus life,
          classrooms, and the student experience.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm"
            >
              <div className="aspect-video rounded-xl bg-brand-light flex items-center justify-center text-sm text-brand-muted">
                Video placeholder
              </div>
              <p className="mt-4 text-sm text-brand-muted">
                Campus and student life highlight
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gentle CTA */}
      <section className="bg-brand-goldLight">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Learn How Mingde Supports International Students
          </h2>

          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            Families interested in the exchange program can explore how Mingde’s
            school environment supports visiting students academically and
            personally.
          </p>

          <Link
            href="/program"
            className="inline-flex items-center justify-center rounded-lg bg-brand-gold px-8 py-3 text-white font-medium hover:opacity-90 transition"
          >
            View the Exchange Program
          </Link>
        </div>
      </section>
    </main>
  );
}
