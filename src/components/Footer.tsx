export default function Footer() {
  return (
    <footer
      style={{
        padding: '28px 48px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px',
          color: 'rgba(240,237,230,0.2)',
          letterSpacing: '0.1em',
        }}
      >
        © 2024 Juan Díaz — Built with React + Vite
      </span>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px',
          color: 'rgba(240,237,230,0.2)',
          letterSpacing: '0.1em',
        }}
      >
        Diseño & Código propio
      </span>
    </footer>
  )
}
