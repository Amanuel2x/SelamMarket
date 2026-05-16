import { useRef } from 'react'
import styles from './DictionaryCard.module.css'

const CONJUGATIONS = [
  { label: 'Standard',   value: 'Selam',      amharic: 'ሰላም' },
  { label: 'Tigrinya',   value: 'Selam',      amharic: 'ሰላም' },
  { label: 'Formal',     value: 'Selam new',  amharic: 'ሰላም ነው' },
  { label: 'Adjective',  value: 'Selamawi',   amharic: 'ሰላማዊ' },
  { label: 'Peace-noun', value: 'Selam alew', amharic: 'ሰላም አለው' },
  { label: 'Response',   value: 'Dehna neh?', amharic: 'ደህና ነህ?' },
]

export default function DictionaryCard() {
  const cardRef = useRef(null)

  const onMouseMove = (e) => {
    const el = cardRef.current; if (!el) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 8
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -6
    el.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`
  }
  const onMouseLeave = () => { if (cardRef.current) cardRef.current.style.transform = '' }
  const speak = () => {
    if (!window.speechSynthesis) return
    const u = new SpeechSynthesisUtterance('Selam'); u.lang = 'am'; u.rate = 0.82
    window.speechSynthesis.speak(u)
  }

  return (
    <div className={styles.outer}>
      <div ref={cardRef} className={styles.card} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
        <div className={styles.flagBar}><span className={styles.fg}/><span className={styles.fy}/><span className={styles.fr}/></div>

        <div className={styles.header}>
          <div>
            <div className={styles.partOfSpeech}>noun, interjection</div>
            <h2 className={styles.word}>Selam</h2>
            <div className={styles.phonetic}>
              <span className={styles.phoneticText}>/sɛˈlαːm/</span>
              <button className={styles.listenBtn} onClick={speak}>
                <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
                  <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414z"/>
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.amharicBlock}>
            <div className={styles.amharic}>ሰላም</div>
            <div className={styles.amharicLabel}>Ge'ez · Fidel</div>
          </div>
        </div>

        <hr className={styles.rule}/>
        <div className={styles.origins}>
          {[{label:'Amharic',color:'green'},{label:'Tigrinya',color:'yellow'},{label:"Ge'ez",color:'red'},{label:'S-L-M Root',color:'neutral'}].map(o => (
            <span key={o.label} className={`${styles.pill} ${styles[o.color]}`}>{o.label}</span>
          ))}
        </div>

        <hr className={styles.rule}/>
        <ol className={styles.defList}>
          <li>
            <span className={styles.defLabel}>greeting</span>
            <p className={styles.defText}><em>"Hello,"</em> <em>"hi,"</em> or <em>"peace be upon you"</em> — the everyday salutation across Ethiopia and Eritrea.</p>
            <p className={styles.defExample}>"Selam! Dehna neh?" — Hello! How are you?</p>
          </li>
          <li>
            <span className={styles.defLabel}>noun</span>
            <p className={styles.defText}><em>Peace, wholeness, harmony.</em> A state of inner and communal well-being.</p>
          </li>
          <li>
            <span className={styles.defLabel}>farewell</span>
            <p className={styles.defText}>A parting blessing — <em>"go in peace"</em> — wishing safety upon departure.</p>
            <p className={styles.defExample}>"Selam hulachim" — Peace to all of you.</p>
          </li>
        </ol>

        <hr className={styles.rule}/>
        <div className={styles.etymRow}>
          <span className={styles.etymLabel}>Origin</span>
          <p className={styles.etymText}>From <strong>Ge'ez</strong> via Proto-Semitic <em>*šalām</em> (to be safe, whole) — cognate with Arabic <span className={styles.script}>سَلَام</span> and Hebrew <span className={styles.script}>שָׁלוֹם</span>.</p>
        </div>

        <hr className={styles.rule}/>
        <div className={styles.conjHeader}>Forms &amp; Uses</div>
        <div className={styles.conjGrid}>
          {CONJUGATIONS.map(c => (
            <div key={c.label} className={styles.conjItem}>
              <div className={styles.conjLabel}>{c.label}</div>
              <div className={styles.conjValue}>{c.value}</div>
              <div className={styles.conjAmharic}>{c.amharic}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
