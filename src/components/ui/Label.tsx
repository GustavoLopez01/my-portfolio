export default function Label({
  n,
  children,
  center,
}: {
  n: string
  children: React.ReactNode
  center?: boolean
}) {
  return (
    <p
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '10px',
        color: 'var(--accent)',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        textAlign: center ? 'center' : 'left',
      }}
    >
      {n}&nbsp;/&nbsp;{children}
    </p>
  )
}