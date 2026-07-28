import { useEffect, useState } from 'react';
import { LINKS } from '../constants/links';
import { Menu } from 'lucide-react';

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

function NavLink({
  href,
  children
}: NavLinkProps) {
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

  return (
    <nav
      className="fixed w-full flex justify-between items-center top-0 left-0 right-0 z-100 py-12 px-5"
      style={{
        padding: '20px 48px',
        background: scrolled ? 'rgba(8,8,8,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.35s ease',
      }}
    >
      <a
        className="tracking-wider text-fg text-[20px] decoration-0"
        href="#hero"
      >
        GL.<span style={{ color: 'var(--accent)' }}>dev</span>
      </a>

      {/* Web */}
      <div className="hidden md:flex md:justify-end md:gap-4">
        {LINKS.map(({ label, href }) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}
      </div>

      {/* Mobile */}

      <div className="flex justify-end md:hidden">
        <Menu className="size-6 text-white" />
      </div>
    </nav>
  )
}
