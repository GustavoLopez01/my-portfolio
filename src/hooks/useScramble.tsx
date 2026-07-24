import { useEffect, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export default function useScramble(text: string, trigger: boolean) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!trigger) return
    let frame = 0
    const total = 22
    const id = setInterval(() => {
      frame++
      const progress = frame / total
      setDisplay(
        text
          .split('')
          .map((ch, i) => {
            if (ch === ' ') return ' '
            if (i / text.length < progress) return ch
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join(''),
      )
      if (frame >= total) clearInterval(id)
    }, 38)
    return () => clearInterval(id)
  }, [trigger])

  return display;
}
