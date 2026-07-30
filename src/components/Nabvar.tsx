import { useEffect, useRef, useState } from 'react';
import { Menu, XIcon } from 'lucide-react';
import { LINKS } from '../constants/links';

type NavLinkProps = {
  href: string
  children: React.ReactNode
  isMobile: boolean
}

function NavLink({
  href,
  children,
  isMobile
}: NavLinkProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      className={`text-[12px] text-white tracking-wider uppercase transition-all ${hovered || isMobile ? 'opacity-100' : 'opacity-45'}`}
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 64);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div className="relative">
      <nav
        className="fixed w-full flex justify-between items-center top-0 left-0 right-0 z-100 py-5! px-12!"
        style={{
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

        <div className="hidden md:flex md:justify-end md:gap-4">
          {LINKS.map(({ label, href }) => (
            <NavLink key={href} href={href} isMobile={false}>
              {label}
            </NavLink>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="p-2 md:hidden focus:outline-none z-20 cursor-pointer"
          aria-expanded={showMenu ? "true" : "false"}
          aria-controls="mobile-menu-dropdown"
        >
          <Menu />
        </button>
      </nav>

      <MobileMenu
        isOpen={showMenu}
        toggleMenu={toggleMenu}
      />
    </div>
  )
}

const MobileMenu = ({
  isOpen,
  toggleMenu
}: {
  isOpen: boolean,
  toggleMenu: () => void
}) => {
  const menuRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current) {
        const currentElement = menuRef.current as HTMLElement;
        if (!currentElement.contains(event.target as Node)) {
          toggleMenu();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, menuRef]);

  return (
    <div
      id="container-mobile-menu"
      ref={menuRef}
      className="relative w-full z-102"
    >
      <div
        id="mobile-menu-dropdown"
        className={`
            bg-transparent backdrop-blur-[14px] border-b border-border
            fixed w-full text-white shadow-xl z-10 
            transition-all duration-300 ease-out 
            ${isOpen ? 'opacity-100 translate-y-0 max-h-[90vh]'
            : 'opacity-0 -translate-y-4 max-h-0 pointer-events-none'
          }
        `}
      >
        <div className="p-5!">
          <div className="w-full flex justify-end">
            <XIcon className="size-5 cursor-pointer" onClick={toggleMenu} />
          </div>
          <div className="flex flex-col gap-6 text-white">
            {LINKS.map(({ label, href }) => (
              <NavLink key={href} href={href} isMobile={true}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div >
    </div >
  );
};

