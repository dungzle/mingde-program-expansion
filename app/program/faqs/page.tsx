export default function FAQsPage() {
  return (
    <main className="bg-brand-light">
      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <h1 className="text-3xl md:text-4xl font-semibold text-brand-dark">
          Frequently Asked <span className="text-brand-gold">Questions</span>
        </h1>

        <div className="mt-4 w-16 h-1 bg-brand-gold rounded-full" />

        <p className="mt-6 text-base md:text-lg text-brand-muted max-w-3xl">
          This section addresses common questions from parents and students
          about academics, supervision, travel, and daily life during the Mingde
          exchange program.
        </p>
      </section>

      {/* FAQ sections */}
      <section className="max-w-6xl mx-auto px-6 pb-24 space-y-12">
        {/* Academics */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Academic Experience
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-brand-border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-medium text-brand-dark">
                Will students be graded or tested?
              </summary>
              <p className="mt-3 text-sm text-brand-muted">
                No. Visiting students are not graded or formally assessed.
                Academic participation focuses on observation, engagement, and
                cultural exposure.
              </p>
            </details>

            <details className="rounded-xl border border-brand-border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-medium text-brand-dark">
                Do students need to speak Chinese?
              </summary>
              <p className="mt-3 text-sm text-brand-muted">
                No prior Chinese language ability is required. Teachers and
                staff are aware of language differences and provide appropriate
                guidance and support.
              </p>
            </details>

            <details className="rounded-xl border border-brand-border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-medium text-brand-dark">
                What types of classes will students attend?
              </summary>
              <p className="mt-3 text-sm text-brand-muted">
                Classes are selected to be accessible to visiting students, such
                as English, physical education, music, and art.
              </p>
            </details>
          </div>
        </div>

        {/* Supervision & safety */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Supervision & Student Safety
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-brand-border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-medium text-brand-dark">
                Are students supervised at all times?
              </summary>
              <p className="mt-3 text-sm text-brand-muted">
                Yes. Students are supervised during classes, activities, travel,
                and scheduled free time. Mingde staff and program coordinators
                are present throughout the program.
              </p>
            </details>

            <details className="rounded-xl border border-brand-border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-medium text-brand-dark">
                How are emergencies handled?
              </summary>
              <p className="mt-3 text-sm text-brand-muted">
                Emergency procedures are in place, and staff members are trained
                to respond promptly. Families will be contacted immediately if
                any issues arise.
              </p>
            </details>
          </div>
        </div>

        {/* Travel */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Travel & Logistics
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-brand-border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-medium text-brand-dark">
                Do students travel as a group?
              </summary>
              <p className="mt-3 text-sm text-brand-muted">
                Yes. Students travel together as a supervised group, with clear
                meeting points and staff oversight during international and
                domestic travel.
              </p>
            </details>

            <details className="rounded-xl border border-brand-border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-medium text-brand-dark">
                Is the Shanghai extension required?
              </summary>
              <p className="mt-3 text-sm text-brand-muted">
                No. The Shanghai extension, if offered, is optional. Full
                details will be confirmed in advance.
              </p>
            </details>
          </div>
        </div>

        {/* Daily life */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Daily Life & Activities
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-brand-border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-medium text-brand-dark">
                What does a typical day look like?
              </summary>
              <p className="mt-3 text-sm text-brand-muted">
                A typical day includes academic classes, workshops, physical
                activities, meals, and supervised free time. Schedules are
                structured and shared in advance.
              </p>
            </details>

            <details className="rounded-xl border border-brand-border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-medium text-brand-dark">
                Will students interact with Mingde students?
              </summary>
              <p className="mt-3 text-sm text-brand-muted">
                Yes. Activities and daily routines are designed to encourage
                interaction and cultural exchange with Mingde students.
              </p>
            </details>
          </div>
        </div>

        {/* Communication */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Parent Communication
          </h2>

          <div className="space-y-4">
            <details className="rounded-xl border border-brand-border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-medium text-brand-dark">
                How will families receive updates?
              </summary>
              <p className="mt-3 text-sm text-brand-muted">
                Families receive regular updates from program coordinators.
                Contact information will be shared prior to departure.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
