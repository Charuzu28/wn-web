"use client";

import Link from "next/link";

export default function Contribute() {
  return (
    <section id="contribute" className="mx-auto w-full max-w-6xl px-8 py-20">
      <div className="rounded-3xl border border-white/10 bg-white/3 p-8 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Want to contribute?
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/70">
              We’re building Who’s Next? in the open. Bug reports, feature
              requests, and PRs are welcome.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://github.com/cedik456/WhosNext"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold tracking-wide text-white/90 hover:bg-white/10"
            >
              View on GitHub
            </Link>
            <Link
              href="https://github.com/cedik456/WhosNext/issues/new/choose"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold tracking-wide text-white/90 hover:bg-white/10"
            >
              Open an issue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

