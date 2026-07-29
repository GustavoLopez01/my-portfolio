export default function Footer() {
  return (
    <footer className="flex justify-between items-center border-t border-[var(--border)] py-7! px-12!">
      <span className="text-xs tracking-widest font-jetbrains text-[rgba(240,237,230,0.2)]">
        © {new Date().getFullYear()} Gustavo López
      </span>
      <span
        className="font-jetbrains text-xs tracking-widest color-[rgba(240,237,230,0.2)]">
        Diseño & Código propio
      </span>
    </footer>
  )
}
