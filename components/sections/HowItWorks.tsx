export default function HowItWorks() {
  return (
    <section id="howItWorks" className="relative overflow-hidden">
      {/* subtle gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-48 -top-48 h-130 w-130 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-8 pt-28 pb-16 sm:pt-32 sm:pb-20">
        {/* push content below fixed navbar */}

        <div className="grid items-center gap-2 md:grid-cols-12 lg:grid-cols-2 ">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/80">
            About the Project
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            Who’s Next is a capstone project from{" "}
            <strong>Divine Word College of Legazpi</strong>. Built for job
            seekers and recruiters, it reimagines hiring as a swipe-based
            experience — think Tinder, but for jobs.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            What you’re seeing now is an early prototype created by our team.
            The goal is to simplify job matching and reduce the friction and
            struggle many people face when applying for work.
          </p>
        </div>
      </div>
    </section>
  );
}
