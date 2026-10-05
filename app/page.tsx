const capabilities = [
  ["01", "Product development", "Translate an early idea into a clear path toward a physical, buildable result."],
  ["02", "CAD & prototyping", "Test proportion, construction, and function before committing to production."],
  ["03", "Design for fabrication", "Bring practical manufacturing thinking to complex parts, assemblies, and details."],
  ["04", "Project coordination", "Keep the handoff between design, fabrication, and installation intentional."],
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f5f3ee] text-[#18201c]">
      <header className="flex items-center justify-between border-b border-[#c9cac1] px-[4.5vw] py-6 text-[0.7rem] font-bold uppercase tracking-[0.07em]">
        <a className="text-[0.85rem] tracking-[0.12em]" href="#top">Landis Hennessy</a>
        <span className="underline-offset-4">Independent studio</span>
      </header>
      <section id="top" className="relative min-h-[76vh] px-[10vw] pb-[9vw] pt-[clamp(86px,14vw,190px)]">
        <div aria-hidden="true" className="absolute right-[-7vw] top-[18%] -z-0 aspect-square w-[20vw] max-w-[270px] rounded-full bg-[#d9ee59]" />
        <div className="relative z-10"><p className="mb-6 font-mono text-[0.68rem] uppercase tracking-[0.09em] text-[#5e655f]">Product development studio</p><h1 className="max-w-5xl font-serif text-[clamp(3.1rem,7.25vw,8.25rem)] leading-[0.92] tracking-[-0.05em]">Engineering, design,<br />and fabrication consulting.</h1><p className="mb-7 mt-12 max-w-xl text-[clamp(1rem,1.5vw,1.33rem)] leading-relaxed">I help architects, fabricators, and startups turn ideas into manufacturable products through CAD, prototyping, and hands-on fabrication experience.</p><div className="flex items-center gap-7 text-sm font-bold"><span className="border border-[#18201c] bg-[#18201c] px-5 py-3.5 text-[#f5f3ee]">Project inquiries opening soon</span><a className="border-b border-[#18201c] pb-1" href="#approach">How I work ↓</a></div></div>
      </section>
      <section id="approach" className="grid border-t border-[#c9cac1] md:grid-cols-[.92fr_1.08fr]"><div className="border-b border-[#c9cac1] px-[4.5vw] py-14 md:border-b-0 md:border-r"><p className="mb-6 font-mono text-[0.68rem] uppercase tracking-[0.09em] text-[#5e655f]">Capabilities</p><h2 className="font-serif text-[clamp(2.3rem,4.3vw,5.2rem)] leading-[0.99] tracking-[-0.05em]">From the first sketch<br />to the shop floor.</h2></div><div>{capabilities.map(([number, title, description]) => <article className="grid min-h-40 grid-cols-[50px_1fr] gap-4 border-b border-[#c9cac1] px-[4.5vw] py-7 last:border-b-0 md:grid-cols-[50px_1fr_1.1fr] md:items-center" key={number}><span className="font-mono text-[0.68rem] text-[#5e655f]">{number}</span><h3 className="text-base font-semibold tracking-[-0.03em]">{title}</h3><p className="col-start-2 max-w-xs text-sm leading-relaxed text-[#5e655f] md:col-start-auto">{description}</p></article>)}</div></section>
      <section className="bg-[#18201c] px-[4.5vw] py-[10vw] text-[#f5f3ee]"><p className="mb-6 font-mono text-[0.68rem] uppercase tracking-[0.09em] text-[#aab0aa]">Selected work</p><div className="flex flex-col justify-between gap-9 md:flex-row md:items-end"><h2 className="font-serif text-[clamp(2.3rem,4.3vw,5.2rem)] leading-[0.99] tracking-[-0.05em]">Portfolio and case studies<br />are in development.</h2><p className="max-w-xs text-sm leading-relaxed text-[#c3c9c3]">In the meantime, get in touch to discuss relevant experience for your project.</p></div></section>
      <section className="bg-[#d9ee59] px-[10vw] py-[12vw]"><p className="mb-6 font-mono text-[0.68rem] uppercase tracking-[0.09em] text-[#18201c]">Contact</p><h2 className="font-serif text-[clamp(2.3rem,4.3vw,5.2rem)] leading-[0.99] tracking-[-0.05em]">Have a project<br />taking shape?</h2><p className="mt-11 inline-block border-b-2 border-[#18201c] pb-1 text-[clamp(1.05rem,2vw,1.7rem)] font-semibold tracking-[-0.04em]">A dedicated contact channel is coming soon.</p></section>
      <footer className="flex items-center justify-between border-t border-[#18201c]/25 bg-[#d9ee59] px-[4.5vw] py-6 text-[0.7rem] font-bold uppercase tracking-[0.07em]"><span>© {new Date().getFullYear()} Landis Hennessy</span><span>Contact coming soon</span></footer>
    </main>
  );
}
