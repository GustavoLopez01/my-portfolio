import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const [big, setBig] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top = e.clientY + 'px'
      }
      if (ring.current) {
        ring.current.style.left = e.clientX + 'px'
        ring.current.style.top = e.clientY + 'px'
      }
    }
    const over = () => setBig(true)
    const out = () => setBig(false)

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', over)
      el.addEventListener('mouseleave', out)
    })
    return () => document.removeEventListener('mousemove', move)
  }, [])

  const base: React.CSSProperties = {
    position: 'fixed',
    pointerEvents: 'none',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
  }

  return (
    <>
      <div
        ref={dot}
        style={{
          ...base,
          width: big ? '8px' : '5px',
          height: big ? '8px' : '5px',
          background: 'var(--accent)',
          transition: 'width 0.15s, height 0.15s',
        }}
      />
      <div
        ref={ring}
        style={{
          ...base,
          zIndex: 9998,
          width: big ? '52px' : '30px',
          height: big ? '52px' : '30px',
          border: `1.5px solid ${big ? 'var(--accent)' : 'rgba(240,237,230,0.25)'}`,
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease',
        }}
      />
    </>
  )
}