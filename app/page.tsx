export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
          Landis Hennessy
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          Engineering, design, and fabrication consulting.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-300 md:text-xl">
          I help architects, fabricators, and startups turn ideas into
          manufacturable products through CAD, prototyping, and hands-on
          fabrication experience.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#work"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            View Work
          </a>
          <a
            href="mailto:landis.hennessy@gmail.com"
            className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-white"
          >
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}