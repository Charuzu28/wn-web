import Image from "next/image";

export default function Hero() {
  return (
    <section id="#home" className="relative overflow-hidden">
      {/* subtle gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 -top-48 h-130 w-130 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-48 -bottom-48 h-130 w-130 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-8">
        {/* push content below fixed navbar */}
        <div className="pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <h1 className="font-semibold text-white sm:text-6xl">
                Find the Right Match. Faster.
              </h1>

              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
                Swipe-based hiring that connects talent and recruiters based on
                real skills, not noise.
              </p>

              <div className="mt-12 flex items-center gap-8">
                <div>
                  <p className="text-xs font-medium text-white/60">
                    Scan to Download
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-white">
                    iOS &amp; Android
                  </p>
                </div>

                <div className="rounded-2xl border border-white/20 bg-white/5 p-3 backdrop-blur">
                  <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-white">
                    <Image
                      src="/code.png"
                      alt="Download QR code"
                      fill
                      className="object-contain p-2"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              <div className="relative mx-auto aspect-9/16 w-70s sm:w-85 lg:w-95">
                <Image
                  src="/phone.png"
                  alt="App preview"
                  fill
                  className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
