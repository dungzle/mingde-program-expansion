import Image from "next/image";
import Link from "next/link";

const PROGRAM_CARDS = [
  {
    title: "Academic Experience",
    description:
      "How students participate in classes, academic support, and learning expectations.",
    href: "/program/academic-experience",
  },
  {
    title: "Workshops & Cultural Activities",
    description:
      "Hands-on workshops, cultural activities, and interactive experiences beyond the classroom.",
    href: "/program/workshops",
  },
  {
    title: "Travel & Timeline",
    description:
      "Key dates, travel plans, and a clear timeline to help families prepare.",
    href: "/program/travel",
  },
  {
    title: "FAQs",
    description:
      "Answers to common questions from parents and students about the program.",
    href: "/program/faqs",
  },
];

export default function ProgramPage() {
  return (
    <main className="bg-brand-light">
      <section className="max-w-6xl mx-auto px-6 my-12 md:my-16 lg:my-20">
        <h1 className="text-3xl md:text-4xl font-semibold text-brand-dark">
          Canada–Mingde{" "}
          <span className="text-brand-gold">Student Exchange Program</span>
        </h1>

        <div className="mt-4 w-16 h-1 bg-brand-gold rounded-full" />

        <p className="mt-6 text-lg text-brand-muted">
          A structured academic and cultural exchange hosted by Mingde School in
          Changsha, designed to provide Canadian students with meaningful
          classroom participation and authentic cultural engagement.
        </p>
      </section>

      {/* Changsha Experience */}
      <section className="max-w-6xl mx-auto px-6 my-12 md:my-16 lg:my-20">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold pb-4">
            The Urban Adventure: Explore Changsha
          </h2>
          <p>
            From the ancient secrets of the Hunan Provincial Museum to exploring
            the futuristic neon-lit energy of a Wuyi Square, students will dive
            headfirst into the culture of one of China’s most historic and
            rapidly growing cities. Highlights include:
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Museum */}
          <div className="bg-white rounded-xl shadow-sm border border-brand-border overflow-hidden">
            <div className="relative h-56 w-full">
              <Image
                src="/hunan-provincial-museum.jpg"
                alt="Hunan Provincial Museum showcasing Han Dynasty artifacts including Lady Dai's tomb"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-medium text-brand-dark mb-2">
                Han Dynasty Heritage
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Visit the Hunan Provincial Museum and examine the remarkably
                preserved artifacts of Lady Dai’s tomb, offering insight into
                ancient Chinese civilization.
              </p>
            </div>
          </div>

          {/* Orange Island */}
          <div className="bg-white rounded-xl shadow-sm border border-brand-border overflow-hidden">
            <div className="relative h-56 w-full">
              <Image
                src="/orange-island.jpg"
                alt="Youth statue of Mao Zedong on Orange Island in Changsha"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-medium text-brand-dark mb-2">
                Orange Island Landmark
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Explore Orange Island and view the monumental youth statue of
                Mao Zedong, situated along the scenic Xiang River.
              </p>
            </div>
          </div>

          {/* Wuyi Square */}
          <div className="bg-white rounded-xl shadow-sm border border-brand-border overflow-hidden">
            <div className="relative h-56 w-full">
              <Image
                src="/huangxing-road.jpg"
                alt="Wuyi Square and Huangxing Road Walking Street in Changsha at night"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-medium text-brand-dark mb-2">
                Urban & Cultural Life
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Experience Changsha’s modern city environment, including Wuyi
                Square and Huangxing Road, where students observe daily urban
                life and regional cuisine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Participation */}
      <section className="max-w-6xl mx-auto px-6 my-12 md:my-16 lg:my-20">
        <h2 className="text-2xl font-semibold mb-4">
          The Mingde Student Experience
        </h2>

        <p className="text-brand-muted max-w-3xl mb-12 leading-relaxed">
          Participants are fully integrated into campus life at one of China’s
          leading Demonstration High Schools. The experience includes structured
          academic participation, cultural instruction, and collaborative
          exchange.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Campus Integration */}
          <div className="bg-white rounded-xl border border-brand-border shadow-sm overflow-hidden">
            <div className="relative h-56 w-full">
              <Image
                src="/raise-flag-ceremony.png"
                alt="Students attending a formal flag-raising ceremony at Mingde School"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-medium text-brand-dark mb-2">
                Campus Integration
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Attendance at formal flag-raising ceremonies and participation
                in daily school routines alongside Mingde students.
              </p>
            </div>
          </div>

          {/* Academic Engagement */}
          <div className="bg-white rounded-xl border border-brand-border shadow-sm overflow-hidden">
            <div className="relative h-56 w-full">
              <Image
                src="/academic-engagement.jpg"
                alt="Students participating in a Mingde International classroom session"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-medium text-brand-dark mb-2">
                Academic Engagement
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Structured coursework within the Mingde International program,
                including Mathematics, Arts, English, and Physical & Health
                Education.
              </p>
            </div>
          </div>

          {/* Cultural Instruction */}
          <div className="bg-white rounded-xl border border-brand-border shadow-sm overflow-hidden">
            <div className="relative h-56 w-full">
              <Image
                src="/calligraphy.png"
                alt="Students practicing Tai Chi and Chinese calligraphy at Mingde School"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-medium text-brand-dark mb-2">
                Cultural Instruction
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Guided training in traditional Tai Chi and Chinese calligraphy
                led by experienced instructors.
              </p>
            </div>
          </div>

          {/* Sports Exchange */}
          <div className="bg-white rounded-xl border border-brand-border shadow-sm overflow-hidden">
            <div className="relative h-56 w-full">
              <Image
                src="/basket-ball-game.jpeg"
                alt="Friendly sports match between Canadian and Mingde students"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-medium text-brand-dark mb-2">
                Inter-School Sports Exchange
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                A concluding friendly match between Canadian and Mingde
                students, promoting teamwork and shared achievement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program navigation cards */}
      <section className="max-w-6xl mx-auto px-6 my-12 md:my-16 lg:my-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-8">
          Explore the Program
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAM_CARDS.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-2xl border border-brand-border bg-white p-6 shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-lg font-semibold text-brand-dark group-hover:text-brand-blue transition">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                  {card.description}
                </p>

                <span className="mt-auto pt-6 text-sm font-medium text-brand-blue">
                  Learn more →
                </span>

                {/* subtle gold hover underline */}
                <div className="mt-4 h-0.5 w-0 bg-brand-gold group-hover:w-12 transition-all motion-reduce:transition-none" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-goldLight mt-12">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Start Your Journey?
          </h2>

          <p className="text-brand-muted mb-8 mx-auto max-w-xl">
            Whether you are a student looking for the adventure of a lifetime or
            a parent seeking a safe, high-impact educational experience, the
            Canada-Mingde Exchange is your gateway to a wider world.
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
