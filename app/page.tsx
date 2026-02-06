import Head from "next/head";
import Link from "next/link";

import CTAButton from "@/components/CTAButton";
import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mingde School — International Program",
    url: "https://your-domain.com",
    logo: "https://your-domain.com/logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-604-555-0123",
        contactType: "customer service",
        areaServed: "CA",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Mingde School — Student Exchange Program (Canada ↔ China)</title>
        <meta
          name="description"
          content="Mingde School's short-term student exchange connects Canadian students with Mingde School in China. Structured academics, supervised cultural activities, and careful family communication."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* Skip link for a11y */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:text-brand-dark focus:px-3 focus:py-2 rounded"
      >
        Skip to content
      </a>

      {/* Hero (keeps your HeroSlider component) */}
      <header aria-label="Site hero">
        <HeroSlider />
      </header>

      <main id="main" className="bg-brand-light">
        {/* Intro + primary CTA */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-brand-dark">
              A school-based international exchange with{" "}
              <span className="text-brand-gold">Mingde School</span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-brand-muted max-w-[44ch]">
              Short-term, carefully supervised exchanges that place Canadian
              high school students into Mingde School for classroom
              participation, cultural workshops, and supported daily life — with
              families kept clearly informed every step of the way.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <CTAButton href="/program" aria-label="Explore the Program">
                Explore the Program
              </CTAButton>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-brand-blue px-4 py-3 text-sm font-medium text-brand-blue hover:bg-brand-blue hover:text-white transition"
                aria-label="Contact Mingde School"
              >
                Contact & Next Steps
              </Link>
            </div>
          </div>

          {/* Hero video preview — lazy loaded */}
          <div className="w-full">
            <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-sm bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/LkkgqV8xb1k?rel=0"
                title="Mingde International Program overview"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <p className="mt-3 text-xs text-brand-muted">
              Official Mingde School video — captions available on YouTube.
            </p>
          </div>
        </section>

        {/* Quick program signposts — parent-friendly, recovery nav */}
        {/* Key Program Entry Points */}
        <section className="bg-brand-goldLight py-12">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-3">
              Start Here: Key Program Information
            </h2>

            <p className="text-center text-sm text-brand-muted max-w-[60ch] mx-auto mb-8">
              These pages explain how the program works, what students
              experience each day, and how travel and supervision are handled.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Program Overview",
                  href: "/program",
                  desc: "Who the program is for, group size, locations, and structure.",
                },
                {
                  title: "Academic Experience",
                  href: "/program/academic-experience",
                  desc: "Class participation, language support, and academic expectations.",
                },
                {
                  title: "Student Life",
                  href: "/student-life/daily-life",
                  desc: "Daily routines, student pairing, accommodation, and supervision.",
                },
                {
                  title: "Travel & Timeline",
                  href: "/program/travel",
                  desc: "Travel flow, sample timelines, and planning details.",
                },
              ].map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  aria-label={card.title}
                  className="group relative overflow-hidden bg-white rounded-xl border border-brand-border p-5 shadow-sm transition
                     hover:border-brand-gold hover:shadow-md
                     focus:outline-none focus:ring-2 focus:ring-brand-gold"
                >
                  {/* left accent */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-sm text-brand-dark mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-brand-muted leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Exchange Structure & Support */}
        <section className="max-w-6xl mx-auto px-5 sm:px-6 py-10">
          <h2 className="text-lg md:text-xl font-semibold text-center mb-6">
            A Student Exchange, Thoughtfully Structured
          </h2>

          <p className="text-center text-sm text-brand-muted max-w-[60ch] mx-auto mb-8">
            The Mingde exchange is designed to give students meaningful academic
            and cultural exposure while ensuring they feel supported, confident,
            and safe throughout their time at Mingde School.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              {
                title: "Classroom Participation",
                caption:
                  "Students join selected classes without grading or high-stakes academic pressure.",
              },
              {
                title: "Daily Support",
                caption:
                  "Staff supervision and student buddies help students navigate each day.",
              },
              {
                title: "Clear Communication",
                caption:
                  "Families receive regular updates during the exchange experience.",
              },
              {
                title: "Safe Accommodation",
                caption:
                  "Students stay in on-campus housing or with carefully selected host families.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="text-brand-gold text-2xl mb-2">●</div>
                <div className="font-medium text-sm">{item.title}</div>
                <div className="text-xs text-brand-muted mt-1 leading-relaxed">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-dark py-12 text-center text-brand-light">
          <div className="max-w-5xl mx-auto px-5 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to learn more about the Mingde exchange?
            </h2>

            <p className="text-sm md:text-base text-brand-muted max-w-[60ch] mx-auto mb-6">
              Families are welcome to request detailed program materials,
              timelines, and safety information.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <CTAButton href="/contact">Contact & Next Steps</CTAButton>

              <Link
                href="/apply"
                className="px-5 py-3 rounded-lg border border-brand-light text-sm text-brand-light hover:bg-brand-light hover:text-brand-dark transition"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
