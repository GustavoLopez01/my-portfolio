import { useState } from "react"
import Label from "./ui/Label"

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '10px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'rgba(240,237,230,0.35)',
        marginBottom: '8px',
      }}
    >
      {children}
    </p>
  )
}

function SendButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      type="submit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        alignSelf: 'flex-start',
        background: hovered ? 'rgba(207,255,71,0.88)' : 'var(--accent)',
        color: '#080808',
        border: 'none',
        padding: '15px 40px',
        fontSize: '13px',
        fontWeight: 600,
        letterSpacing: '0.07em',
        cursor: 'pointer',
        fontFamily: "'Inter', sans-serif",
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'transform 0.2s ease, background 0.2s ease',
      }}
    >
      Enviar mensaje →
    </button>
  )
}

function SocialLink({ label }: { label: string }) {
  const [h, setH] = useState(false)
  return (
    <a
      href="#"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        fontSize: '12px',
        letterSpacing: '0.07em',
        color: h ? 'var(--accent)' : 'rgba(240,237,230,0.35)',
        textDecoration: 'none',
        transition: 'color 0.2s ease',
      }}
    >
      {label}
    </a>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: '1px solid var(--border)',
    padding: '14px 16px',
    fontSize: '15px',
    color: 'var(--fg)',
    outline: 'none',
    fontFamily: "'Inter', sans-serif",
    transition: 'border-color 0.25s ease',
  }

  const focusIn = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(207,255,71,0.4)'
  }
  const focusOut = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'var(--border)'
  }

  return (
    <section
      id="contact"
      style={{ padding: '128px 48px', background: 'rgba(255,255,255,0.018)' }}
    >
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <div className="reveal section-hidden" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <Label n="04" center>
            Contacto
          </Label>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(36px, 5vw, 68px)',
              lineHeight: '1',
              letterSpacing: '-0.04em',
              marginTop: '18px',
              marginBottom: '22px',
            }}
          >
            ¿Tienes un proyecto
            <br />
            <span style={{ fontStyle: 'italic', color: 'rgba(240,237,230,0.3)' }}>en mente?</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(240,237,230,0.45)', lineHeight: '1.75' }}>
            Estoy disponible para roles full-time, freelance y colaboraciones.
            <br />
            Escríbeme — te respondo en menos de 24 horas.
          </p>
        </div>

        {sent ? (
          <div
            className="reveal section-hidden"
            style={{
              textAlign: 'center',
              padding: '64px',
              border: '1px solid rgba(207,255,71,0.22)',
              background: 'rgba(207,255,71,0.025)',
            }}
          >
            <p
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '32px',
                color: 'var(--accent)',
                marginBottom: '10px',
              }}
            >
              Mensaje recibido.
            </p>
            <p style={{ color: 'rgba(240,237,230,0.45)', fontSize: '15px' }}>
              Hablamos pronto.
            </p>
          </div>
        ) : (
          <form
            className="reveal section-hidden"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {(
                [
                  ['name', 'Nombre', 'text', 'Tu nombre'],
                  ['email', 'Email', 'email', 'tu@email.com'],
                ] as [keyof typeof form, string, string, string][]
              ).map(([key, label, type, ph]) => (
                <div key={key}>
                  <FieldLabel>{label}</FieldLabel>
                  <input
                    type={type}
                    placeholder={ph}
                    required
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    onFocus={focusIn}
                    onBlur={focusOut}
                    style={inputStyle}
                  />
                </div>
              ))}
            </div>
            <div>
              <FieldLabel>Mensaje</FieldLabel>
              <textarea
                placeholder="Cuéntame sobre tu proyecto..."
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={focusIn}
                onBlur={focusOut}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>
            <SendButton />
          </form>
        )}

        {/* footer row */}
        <div
          className="reveal section-hidden"
          style={{
            marginTop: '80px',
            paddingTop: '36px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <a
            href="mailto:hola@juandiaz.dev"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '18px',
              color: 'var(--fg)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg)')}
          >
            hola@juandiaz.dev
          </a>
          <div style={{ display: 'flex', gap: '28px' }}>
            {['GitHub', 'LinkedIn', 'Twitter'].map((s) => (
              <SocialLink key={s} label={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}