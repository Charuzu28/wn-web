import Image from "next/image";

type Developer = {
  name: string;
  role: string;
  imageSrc: string;
};

const DEVELOPERS: Developer[] = [
  {
    name: "Charles Alamares",
    role: "UI/UX & Frontend Developer",
    imageSrc: "/developers/charles.png",
  },
  {
    name: "Cedric Lawrence Naño",
    role: "Full-Stack Developer",
    imageSrc: "/developers/cedric.png",
  },
  {
    name: "Louis Jasper Cañon",
    role: "Full-Stack Developer",
    imageSrc: "/developers/louis.png",
  },
];

export default function DevelopersSection() {
  return (
    <section id="developers" className="relative overflow-hidden">
      {/* soft vignette like your screenshot */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_50%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-8 py-20 sm:py-24">
        <div className="text-center">
          <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            Meet the Developers
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/60 sm:text-base">
            The team behind Who’s Next — building smarter, fairer hiring.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {DEVELOPERS.map((dev) => (
            <article
              key={dev.name}
              className="group flex flex-col items-center text-center"
            >
              {/* avatar card */}
              <div className="relative h-48 w-48 rounded-3xl transition-transform duration-300 group-hover:-translate-y-1 cursor-pointer ">
                <Image
                  src={dev.imageSrc}
                  alt={dev.name}
                  fill
                  className="object-contain p-3"
                  sizes="128px"
                  priority={dev.name === "Cedric Lawrence Nano"}
                />
              </div>

              <h3 className="mt-5 text-sm font-semibold text-white/90">
                {dev.name}
              </h3>
              <p className="mt-1 text-xs text-white/60">{dev.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
