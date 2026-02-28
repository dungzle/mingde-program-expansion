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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:text-brand-dark focus:px-3 focus:py-2 rounded"
      >
        Skip to content
      </a>

      {/* Hero */}
      <header aria-label="Site hero">
        <HeroSlider />
      </header>

      <main id="main" className="bg-brand-light">
        {/* Title Block */}
        <section className="text-center pt-14 pb-8 px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-brand-dark">
            Global Connections: The Canada-Changsha Student Exchange
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-brand-gold mt-4">
            Bridging Cultures, Building Friendships
          </h2>
        </section>

        {/* Intro + Video */}
        <section className="max-w-7xl mx-auto px-6 pt-4 pb-12 md:py-12 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-base md:text-lg text-brand-muted leading-relaxed">
              Welcome to the official home of the{" "}
              <strong>Canada-Mingde Exchange</strong> Program, a premier
              intercultural journey designed to connect Canadian students with
              the vibrant heart of China. This is more than just a trip; it’s an
              opportunity to live, learn, and grow alongside peers at the
              prestigious <strong>Mingde Middle School</strong> in Changsha.
            </p>

            <p className="mt-6 text-base md:text-lg text-brand-muted leading-relaxed">
              Through immersive host-family stays and a dynamic schedule of
              campus and city adventures, participants gain a profound
              understanding of China’s 3,000-year history while building the
              global leadership skills needed for the future.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <CTAButton href="/program">Explore the Program</CTAButton>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-brand-blue px-5 py-3 text-sm font-medium text-brand-blue hover:bg-brand-blue hover:text-white transition"
              >
                Contact & Next Steps
              </Link>
            </div>
          </div>

          {/* Video */}
          <div>
            <div className="aspect-video w-full overflow-hidden rounded-xl shadow-sm bg-black">
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

        {/* Key Navigation */}
        <section className="bg-brand-goldLight py-14">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">
              Start Here: Key Program Information
            </h2>

            <p className="text-center text-sm text-brand-muted max-w-2xl mx-auto mb-10">
              These pages explain how the program works, what students
              experience each day, and how travel and supervision are handled.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="bg-white rounded-xl border border-brand-border p-6 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-sm text-brand-dark mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {card.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Support Structure */}
        <section className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
            A Student Exchange, Thoughtfully Structured
          </h2>

          <p className="text-center text-sm text-brand-muted max-w-2xl mx-auto mb-10">
            The Mingde exchange is designed to give students meaningful academic
            and cultural exposure while ensuring they feel supported, confident,
            and safe throughout their time at Mingde School.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
                  "Students stay with carefully selected host families who provide a safe and welcoming home environment.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-brand-border"
              >
                <div className="font-medium text-sm text-brand-dark">
                  {item.title}
                </div>
                <div className="text-xs text-brand-muted mt-2 leading-relaxed">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-dark py-16 text-center text-brand-light">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-5">
              Ready to Start Your Journey?
            </h2>

            <p className="text-sm md:text-base text-brand-muted-light max-w-xl mx-auto mb-8">
              Whether you are a student looking for the adventure of a lifetime
              or a parent seeking a safe, high-impact educational experience,
              the Canada-Mingde Exchange is your gateway to a wider world.
            </p>

            <CTAButton href="/contact">Request Program Information</CTAButton>
          </div>
        </section>
      </main>
    </>
  );
}
