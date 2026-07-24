import { useState } from 'react';

interface Project {
  id: number
  title: string
  description: string
  longDesc: string
  tags: string[]
  image: string
  year: string
}

export default function ProjectCard({ p, delay }: { p: Project; delay: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="reveal section-hidden"
      data-hover
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div
        style={{
          border: `1px solid ${hovered ? 'rgba(207,255,71,0.22)' : 'var(--border)'}`,
          overflow: 'hidden',
          transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
          transition: 'transform 0.45s ease, border-color 0.3s ease',
          cursor: 'pointer',
          background: hovered ? 'rgba(207,255,71,0.015)' : 'transparent',
        }}
      >
        {/* image */}
        <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
          <img
            src={p.image}
            alt={p.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: hovered ? 'grayscale(0%)' : 'grayscale(35%)',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.6s ease, filter 0.45s ease',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: hovered ? 'rgba(8,8,8,0.2)' : 'rgba(8,8,8,0.48)',
              transition: 'background 0.35s ease',
            }}
          />
          <span
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px',
              letterSpacing: '0.12em',
              color: 'var(--accent)',
              background: 'rgba(8,8,8,0.7)',
              padding: '4px 10px',
            }}
          >
            {p.year}
          </span>
        </div>

        {/* content */}
        <div style={{ padding: '26px 28px 30px' }}>
          <h3
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '20px',
              letterSpacing: '-0.02em',
              marginBottom: '10px',
              color: hovered ? 'var(--accent)' : 'var(--fg)',
              transition: 'color 0.3s ease',
            }}
          >
            {p.title}
          </h3>
          <p
            style={{
              fontSize: '13.5px',
              lineHeight: '1.75',
              color: 'rgba(240,237,230,0.5)',
              marginBottom: '22px',
              minHeight: '64px',
            }}
          >
            {hovered ? p.longDesc : p.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
            {p.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px',
                  padding: '3px 10px',
                  border: '1px solid var(--border)',
                  color: 'rgba(240,237,230,0.42)',
                  letterSpacing: '0.05em',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}