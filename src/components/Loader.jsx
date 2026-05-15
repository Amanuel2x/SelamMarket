import { useEffect, useRef, useState } from 'react'
import styles from './Loader.module.css'

const LETTERS = [
  { char: 'S', colorClass: styles.green },
  { char: 'e', colorClass: styles.green },
  { char: 'l', colorClass: styles.yellow },
  { char: 'a', colorClass: styles.yellow },
  { char: 'm', colorClass: styles.red },
]

export default function Loader({ onDone }) {
  const [hidden, setHidden] = useState(false)
  const canvasRef = useRef(null)

  /* ── particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const colors = ['#078930', '#FCDD09', '#DA121A']
    let particles = []
    let raf

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 90; i++) {
      particles.push({
        x:  Math.random() * window.innerWidth,
        y:  Math.random() * window.innerHeight,
        r:  Math.random() * 1.6 + 0.3,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        color: colors[Math.floor(Math.random() * 3)],
        alpha: Math.random() * 0.5 + 0.15,
      })
    }

    const frame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
      })
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(frame)
    }
    frame()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  /* ── auto-dismiss after 3.4 s ── */
  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true)
      onDone?.()
    }, 3400)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div className={`${styles.loader} ${hidden ? styles.hidden : ''}`} aria-hidden={hidden}>
      <canvas ref={canvasRef} className={styles.particles} />

      {/* decorative rotating rings */}
      <div className={styles.ringOuter} />
      <div className={styles.ringInner} />
      <div className={styles.star} />

      {/* SELAM word */}
      <div className={styles.word} aria-label="Selam">
        {LETTERS.map(({ char, colorClass }, i) => (
          <span
            key={i}
            className={`${styles.letter} ${colorClass}`}
            style={{ animationDelay: `${i * 0.08}s, ${i * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Amharic script */}
      <div className={styles.amharic}>ሰላም</div>

      {/* Tagline */}
      <div className={styles.tagline}>Ethiopian &amp; Eritrean Market</div>

      {/* Ethiopian-flag progress stripes */}
      <div className={styles.barWrap}>
        <div className={styles.barStripes}>
          <span className={styles.barGreen}  />
          <span className={styles.barYellow} />
          <span className={styles.barRed}    />
        </div>
        <div className={styles.barLabel}>Welcome · Merhaba · Akwam</div>
      </div>
    </div>
  )
}
