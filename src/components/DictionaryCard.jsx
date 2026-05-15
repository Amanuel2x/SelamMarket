import { useRef } from 'react'
import styles from './DictionaryCard.module.css'

const BADGES = [
  { label: 'Amharic',       cls: 'green'  },
  { label: 'Tigrinya',      cls: 'yellow' },
  { label: "Ge'ez Origin",  cls: 'red'    },
  { label: 'Semitic Root',  cls: 'gold'   },
]

const DEFS = [
  {
    num: '1', cls: 'n1',
    pos: 'interjection — greeting',
    text: 'Used as a warm salutation meaning "hello," "hi," or "peace be upon you." The everyday greeting exchanged between friends, family, and strangers alike across Ethiopia and Eritrea.',
    example: '"Selam! Dehna neh?" — Hello! How are you? (Amharic)',
  },
  {
    num: '2', cls: 'n2',
    pos: 'noun — concept',
    text: 'Peace, tranquility, harmony. In a broader philosophical sense, selam represents a state of inner and communal well-being — an absence of conflict and the presence of wholeness.',
    example: '"Selam yihunelan" — May there be peace for us.',
  },
  {
    num: '3', cls: 'n3',
    pos: 'cultural usage — farewell',
    text: 'Also used as a parting phrase or blessing, similar to "goodbye" or "go in peace," wishing safety and well-being upon departure.',
    example: '"Selam hulachim" — Peace to all of you.',
  },
]

const CONJUGATIONS = [
  { label: 'Standard Greeting', value: 'Selam',       amharic: 'ሰላም' },
  { label: 'Tigrinya Form',     value: 'Selam',       amharic: 'ሰላም (Tigrinya)' },
  { label: 'Formal / Plural',   value: 'Selam new',   amharic: 'ሰላም ነው' },
  { label: 'Adjective Form',    value: 'Selam-awi',   amharic: 'ሰላማዊ (peaceful)' },
  { label: 'To Make Peace',     value: 'Selam alew',  amharic: 'ሰላም አለው' },
  { label: 'Greeting Response', value: 'Dehna neh?',  amharic: 'ደህና ነህ? (are you well?)' },
]

const ROOT_NODES = [
  { lang: 'Proto-Semitic', word: '*šalām',  cls: 'proto'   },
  { lang: 'Arabic',        word: 'سَلَام',    cls: 'arabic'  },
  { lang: 'Hebrew',        word: 'שָׁלוֹם',   cls: 'hebrew'  },
  { lang: "Ge'ez / Amharic", word: 'ሰላም',  cls: 'amharic' },
]

export default function DictionaryCard() {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const cx = rect.left + rect.width  / 2
    const cy = rect.top  + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width  / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    card.style.transform = `rotateY(${dx * 5}deg) rotateX(${-dy * 3.5}deg) translateY(-4px)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (card) card.style.transform = 'rotateX(1.5deg)'
  }

  const speakSelam = () => {
    if (!window.speechSynthesis) return
    const u = new SpeechSynthesisUtterance('Selam')
    u.lang = 'am'
    u.rate = 0.82
    window.speechSynthesis.speak(u)
  }

  return (
    <div className={styles.wrapper}>
      {/* ambient glows */}
      <div className={`${styles.glow} ${styles.glowGreen}`}  />
      <div className={`${styles.glow} ${styles.glowYellow}`} />
      <div className={`${styles.glow} ${styles.glowRed}`}    />

      <div
        ref={cardRef}
        className={styles.card}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >

        {/* ── header ── */}
        <div className={styles.header}>
          <div>
            <h1 className={styles.word}>Selam</h1>
            <p className={styles.phonetic}>/ sɛˈlɑːm / &nbsp;·&nbsp; seh-LAHM</p>
          </div>
          <div className={styles.amharicBlock}>
            <div className={styles.amharic}>ሰላም</div>
            <div className={styles.scriptLabel}>Fidel Script</div>
          </div>
        </div>

        {/* ── badges ── */}
        <div className={styles.badges}>
          {BADGES.map(b => (
            <span key={b.label} className={`${styles.badge} ${styles[b.cls]}`}>
              {b.label}
            </span>
          ))}
        </div>

        <hr className={styles.divider} />

        {/* ── etymology ── */}
        <p className={styles.sectionLabel}>Etymology &amp; Origin</p>
        <p className={styles.etymology}>
          Derived from the ancient <strong>Ge&apos;ez</strong> root <em>ሰ-ላ-መ</em> (S-L-M),
          meaning <strong>wholeness, completeness, peace</strong>. This triconsonantal Semitic root
          is shared across the family of Semitic languages — appearing as <em>Salām</em> (Arabic سَلَام),{' '}
          <em>Shalom</em> (Hebrew שָׁלוֹם) — all tracing to the <strong>Proto-Semitic</strong>{' '}
          root <em>*šalām</em> (to be safe, whole). Selam entered <strong>Amharic</strong> and{' '}
          <strong>Tigrinya</strong> through Ge&apos;ez, the classical liturgical language of the
          Ethiopian Orthodox Church.
        </p>

        {/* root tree */}
        <div className={styles.rootTree}>
          {ROOT_NODES.map((node, i) => (
            <div key={node.lang} className={styles.rootRow}>
              {i > 0 && <span className={styles.arrow}>→</span>}
              <div className={`${styles.rootNode} ${styles[node.cls]}`}>
                <div className={styles.rootLang}>{node.lang}</div>
                <div className={styles.rootWord}>{node.word}</div>
              </div>
            </div>
          ))}
        </div>

        <hr className={styles.divider} />

        {/* ── definitions ── */}
        <p className={styles.sectionLabel}>Definitions</p>
        <div className={styles.defs}>
          {DEFS.map(d => (
            <div key={d.num} className={styles.defItem}>
              <div className={`${styles.defNum} ${styles[d.cls]}`}>{d.num}</div>
              <div>
                <p className={styles.defPos}>{d.pos}</p>
                <p className={styles.defText}>{d.text}</p>
                <p className={styles.defExample}>{d.example}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className={styles.divider} />

        {/* ── conjugations ── */}
        <p className={styles.sectionLabel}>Forms &amp; Conjugations</p>
        <div className={styles.conjGrid}>
          {CONJUGATIONS.map(c => (
            <div key={c.label} className={styles.conjItem}>
              <div className={styles.conjLabel}>{c.label}</div>
              <div className={styles.conjValue}>{c.value}</div>
              <div className={styles.conjAmharic}>{c.amharic}</div>
            </div>
          ))}
        </div>

        {/* ── footer ── */}
        <div className={styles.footer}>
          <span className={styles.footerNote}>Selam Market · Ethiopian &amp; Eritrean Community</span>
          <button className={styles.listenBtn} onClick={speakSelam}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
            Hear it
          </button>
        </div>

      </div>
    </div>
  )
}
