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
      className="cursor-pointer decoration-0 text-sm inline-flex items-center py-3.5! px-8!"
      style={{
        letterSpacing: '0.06em',
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
      className="w-full min-h-screen py-0! px-12! relative flex flex-col justify-center overflow-hidden"
      id="hero"
    >
      <div
        className="absolute pointer-events-none bg-size-(--bg-size-about) inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        }}
      />

      <div
        className="absolute w-120 h-120 top-[28%] right-[8%] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(207,255,71,0.07) 0%, transparent 70%)',
        }}
      />

      <div
        className="relative max-w-240">
        <p
          className="font-jetbrains text-accent uppercase mb-7! text-xs tracking-[0.16em]"
          style={{
            ...fade(0.15),
          }}
        >
          ◆ Disponible para nuevos proyectos
        </p>

        <h1
          className="font-dmserif tracking-tighter mb-3! leading-[.93]"
          style={{
            ...fade(0.28),
            fontSize: 'clamp(60px, 9vw, 120px)',
          }}
        >
          Gustavo
          <br />
          <span className="text-accent">López</span>
        </h1>

        <h2
          className="font-dmserif italic tracking-[-0.03em] mb-9! leading-[1.1] text-[rgba(240,237,230,0.3)]"
          style={{
            ...fade(0.4),
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(24px, 3.5vw, 52px)',
          }}
        >
          {subtitle}
        </h2>

        <p
          className="max-w-125 mb-13! leading-[1.75] text-[rgba(240,237,230,0.5)]"
          style={{
            ...fade(0.52)
          }}
        >
          Construyo interfaces que no solo se ven bien — se&nbsp;<em>sienten</em>&nbsp;bien.
          Rápidas, accesibles y con esa atención al detalle que separa lo bueno de lo memorable.
        </p>

        <div className="flex gap-4" style={{ ...fade(0.64) }}>
          <MagneticBtn href="#projects" primary>
            Ver mi trabajo
          </MagneticBtn>
          <MagneticBtn href="#contact">Hablemos →</MagneticBtn>
        </div>
      </div>
    </section>
  )
}