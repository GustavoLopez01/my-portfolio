import { useEffect, useState } from 'react';

function NavLink({
  href,
  children
}: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      className={`text-[12px] tracking-wider uppercase transition-all ${hovered ? 'opacity-100' : 'opacity-45'}`}
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 64)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Contacto', href: '#contact' },
  ]

  return (
    <nav
      className="fixed flex justify-between items-center top-0 left-0 right-0 z-100 py-12 px-5"
      style={{
        padding: '20px 48px',
        background: scrolled ? 'rgba(8,8,8,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.35s ease',
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: '20px',
          letterSpacing: '-0.02em',
          color: 'var(--fg)',
          textDecoration: 'none',
        }}
      >
        GL.<span style={{ color: 'var(--accent)' }}>dev</span>
      </a>
      <div style={{ display: 'flex', gap: '40px' }}>
        {links.map(({ label, href }) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
