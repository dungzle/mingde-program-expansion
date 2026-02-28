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

        <p className="mt-6 text-base md:text-lg text-brand-muted">
          Below is the draft itinerary for the Changsha exchange program. Dates
          and times may be slightly adjusted, but arrival is planned for
          Thursday to ensure a smooth integration into school life.
        </p>
      </section>

      {/* Changsha Itinerary */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Changsha Itinerary (Tentative)
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-sm">
          <table className="min-w-full text-sm md:text-base">
            <thead className="bg-brand-goldLight text-brand-dark">
              <tr>
                <th className="px-6 py-4 text-left font-medium w-1/4 md:w-1/6">
                  Date
                </th>
                <th className="px-6 py-4 text-left font-medium">
                  Program Activities
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-brand-border text-brand-muted">
              <tr>
                <td className="px-6 py-4 font-medium">April 16</td>
                <td className="px-6 py-4">
                  Arrival in Changsha with school-arranged airport pickup.
                  Welcome meeting at Mingde Middle School. Evening departure
                  with host families for rest.
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 font-medium">April 17</td>
                <td className="px-6 py-4">
                  Official welcome ceremony and School History Exhibition Hall
                  tour. Afternoon specialized courses at Mingde International
                  Department (English, Mathematics, Physical Education).
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 font-medium">April 18</td>
                <td className="px-6 py-4">
                  Cultural visit to Hunan Provincial Museum and Wuyi Square.
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 font-medium">April 19</td>
                <td className="px-6 py-4">
                  Cultural immersion with host families, including daily life
                  experiences and community activities.
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 font-medium">April 20</td>
                <td className="px-6 py-4">
                  Flag-raising ceremony, Tai Chi exchange, International Art
                  class, friendly basketball match, and farewell ceremony.
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 font-medium">April 21</td>
                <td className="px-6 py-4">
                  Meet at school gate for airport transfer and departure.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-goldLight">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Questions About Travel or Accommodation?
          </h2>

          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            We understand that travel and host family arrangements are important
            considerations for families. Please reach out if you would like
            further clarification.
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
