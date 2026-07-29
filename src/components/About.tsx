import TitleSection from './ui/TitleSection';

export default function About() {
  return (
    <section
      id="about"
      className="grid justify-center items-center"
      style={{ padding: '128px 48px' }}
    >
      <div
        className="max-w-7xl gap-20 items-center m-auto grid grid-cols-1 md:grid-cols-2 reveal section-hidden"
      >
        {/* text */}
        <div className="flex flex-col">
          <TitleSection
            label="sobre mí"
            number="01"
            firstLine="No construyo páginas."
            secondLine="Construyo experiencias."
          />

          <p className="leading-8 color-[rgba(240,237,230,0.55)]">
            Soy un desarrollador Front-End con más de 4 años de experiencia construyendo interfaces
            que equilibran estética y rendimiento. Me especializo en React, TypeScript y CSS avanzado
            — pero lo que me apasiona es cerrar esa brecha entre diseño y código.
          </p>
          <p className="leading-8 color-[rgba(240,237,230,0.55)]">
            Cada proyecto es una oportunidad de crear algo que la gente disfrute usar: intuitivo,
            veloz y con microinteracciones que hacen que todo se sienta <em>vivo</em>. Creo que los
            detalles distinguen un producto bueno de uno memorable.
          </p>

          <div className="pt-6! flex gap-13">
            {(
              [
                ['4+', 'Años de exp.'],
                ['20+', 'Proyectos'],
                ['98', 'Lighthouse avg'],
              ] as [string, string][]
            ).map(([n, l]) => (
              <div key={l}>
                <p
                  className="font-dmserif text-[40px] text-accent"
                  style={{
                    lineHeight: 1,
                  }}
                >
                  {n}
                </p>
                <p className="text-xs text-[rgba(240,237,230,0.35)] mt-1.5! tracking-wider">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block relative">
          <div
            className="absolute pointer-events-none inset-0 border border-accent transform-[translate(14px, 14px)]"
          />
          <img
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=620&h=740&fit=crop&auto=format"
            alt="Developer working"
            className="w-full h-130 object-cover block filter-[grayscale(25%)]"
          />
          <div
            className="absolute py-3.5! px-4.5! bottom-6 left-6 right-6 bg-[rgba(8,8,8,0.82)] border border-border backdrop-filter-[blur(10px)]"
          >
            <p className="font-dmserif text-xs text-accent mb-1!">
              $ currently_working_on
            </p>
            <p className="text-[13px] text-[rgba(240,237,230,0.65)]">
              Design system + performance optimization sprint
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}