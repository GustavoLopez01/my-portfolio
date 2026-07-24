import { useState } from 'react';

export default function SkillItem({ name }: { name: string }) {
  const [h, setH] = useState(false)
  return (
    <li
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '14px',
        color: h ? 'var(--fg)' : 'rgba(240,237,230,0.45)',
        transition: 'color 0.2s ease',
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      <span
        style={{
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          background: h ? 'var(--accent)' : 'var(--muted)',
          flexShrink: 0,
          transition: 'background 0.2s ease',
        }}
      />
      {name}
    </li>
  )
}
