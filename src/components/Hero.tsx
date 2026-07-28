import { useEffect, useRef, useState } from 'react';
import useScramble from '../hooks/useScramble';

function MagneticBtn({
  href,
  primary,
  children,
}: {
  href: string
  primary?: boolean
  children: React.ReactNode
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect()
    setPos({
      x: (e.clientX - r.left - r.width / 2) * 0.22,
      y: (e.clientY - r.top - r.height / 2) * 0.22,
    })
  }

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '14px 32px',
        fontSize: '13px',
        fontWeight: 500,
        letterSpacing: '0.06em',
        textDecoration: 'none',
        cursor: 'pointer',
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: 'transform 0.35s ease',
        ...(primary
          ? { background: 'var(--accent)', color: '#080808', border: 'none' }
          : {
            background: 'transparent',
            color: 'var(--fg)',
            border: '1px solid rgba(240,237,230,0.18)',
          }),
      }}
    >
      {children}
    </a>
  )
}

export default function Hero() {
  const [ready, setReady] = useState(false)
  const subtitle = useScramble('Desarrollador Web Full Stack', ready)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 400)
    return () => clearTimeout(t)
  }, [])

  const fade = (delay: number): React.CSSProperties => ({
    opacity: ready ? 1 : 0,
    transform: ready ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  })

  return (
    <section
      className="w-full relative flex flex-col justify-center"
      id="hero"
      style={{
        minHeight: '100vh',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        padding: '0 48px',
        overflow: 'hidden',
      }}
    >
      {/* grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      {/* glow orb */}
      <div
        style={{
          position: 'absolute',
          right: '8%',
          top: '28%',
          width: '480px',
          height: '480px',
          background: 'radial-gradient(circle, rgba(207,255,71,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: '960px' }}>
        <p
          style={{
            ...fade(0.15),
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            letterSpacing: '0.16em',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            marginBottom: '28px',
          }}
        >
          ◆ Disponible para nuevos proyectos
        </p>

        <h1
          style={{
            ...fade(0.28),
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(60px, 9vw, 120px)',
            lineHeight: '0.92',
            letterSpacing: '-0.045em',
            marginBottom: '12px',
          }}
        >
          Gustavo
          <br />
          <span style={{ color: 'var(--accent)' }}>López</span>
        </h1>

        <h2
          style={{
            ...fade(0.4),
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(24px, 3.5vw, 52px)',
            fontStyle: 'italic',
            color: 'rgba(240,237,230,0.3)',
            letterSpacing: '-0.03em',
            marginBottom: '36px',
            lineHeight: '1.1',
          }}
        >
          {subtitle}
        </h2>

        <p
          style={{
            ...fade(0.52),
            fontSize: '17px',
            lineHeight: '1.75',
            color: 'rgba(240,237,230,0.5)',
            maxWidth: '500px',
            marginBottom: '52px',
          }}
        >
          Construyo interfaces que no solo se ven bien — se&nbsp;<em>sienten</em>&nbsp;bien.
          Rápidas, accesibles y con esa atención al detalle que separa lo bueno de lo memorable.
        </p>

        <div style={{ ...fade(0.64), display: 'flex', gap: '14px' }}>
          <MagneticBtn href="#projects" primary>
            Ver mi trabajo
          </MagneticBtn>
          <MagneticBtn href="#contact">Hablemos →</MagneticBtn>
        </div>
      </div>

      {/* scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          opacity: ready ? 0.35 : 0,
          transition: 'opacity 0.6s ease 1.2s',
        }}
      >
        <span
          style={{
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          scroll
        </span>
        <div
          className="scroll-line"
          style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, var(--fg), transparent)',
          }}
        />
      </div>
    </section>
  )
}