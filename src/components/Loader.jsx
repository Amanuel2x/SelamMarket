import { useEffect, useState } from 'react'
import styles from './Loader.module.css'

const LETTERS = [
  { char: 'S', cls: styles.green  },
  { char: 'e', cls: styles.green  },
  { char: 'l', cls: styles.yellow },
  { char: 'a', cls: styles.yellow },
  { char: 'm', cls: styles.red    },
]

export default function Loader({ onDone }) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => { setHidden(true); onDone?.() }, 3000)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div className={`${styles.loader} ${hidden ? styles.hidden : ''}`} aria-hidden={hidden}>
      <div className={styles.flagBar}><span /><span /><span /></div>
      <div className={styles.word} aria-label="Selam">
        {LETTERS.map(({ char, cls }, i) => (
          <span key={i} className={`${styles.letter} ${cls}`} style={{ animationDelay: `${i*0.07}s, ${i*0.08}s` }}>{char}</span>
        ))}
      </div>
      <div className={styles.amharic}>ሰላም</div>
      <div className={styles.tagline}>Ethiopian &amp; Eritrean Market</div>
      <div className={styles.dots} role="status">
        <div className={styles.dot} /><div className={styles.dot} /><div className={styles.dot} />
      </div>
    </div>
  )
}
