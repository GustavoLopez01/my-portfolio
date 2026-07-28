import TitleSection from './ui/TitleSection';

export default function About() {
  return (
    <section 
      id="about"
      className="grid justify-center items-center"
      style={{ padding: '128px 48px' }}
    >
      <div
        className="max-w-7xl gap-20 items-center m-auto grid grid-cols-1 md:grid-cols-2"
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
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '40px',
                    color: 'var(--accent)',
                    lineHeight: 1,
                  }}
                >
                  {n}
                </p>
                <p
                  style={{
                    fontSize: '11px',
                    color: 'rgba(240,237,230,0.35)',
                    marginTop: '6px',
                    letterSpacing: '0.06em',
                  }}
                >
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* image */}
        <div className="hidden md:block" style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              border: '1px solid var(--border)',
              transform: 'translate(14px, 14px)',
              pointerEvents: 'none',
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=620&h=740&fit=crop&auto=format"
            alt="Developer working"
            style={{
              width: '100%',
              height: '520px',
              objectFit: 'cover',
              display: 'block',
              filter: 'grayscale(25%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
              background: 'rgba(8,8,8,0.82)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--border)',
              padding: '14px 18px',
            }}
          >
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                color: 'var(--accent)',
                marginBottom: '4px',
              }}
            >
              $ currently_working_on
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(240,237,230,0.65)' }}>
              Design system + performance optimization sprint
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}