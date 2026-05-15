import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* ── background texture pattern ── */}
      <div className={styles.patternBg} aria-hidden />
      <div className={styles.gradientOverlay} aria-hidden />

      {/* ── ambient light orbs ── */}
      <div className={`${styles.orb} ${styles.orbGreen}`}  aria-hidden />
      <div className={`${styles.orb} ${styles.orbYellow}`} aria-hidden />
      <div className={`${styles.orb} ${styles.orbRed}`}    aria-hidden />

      <div className={styles.inner}>

        {/* ════════════════════════════════
            LEFT — copy
        ════════════════════════════════ */}
        <div className={styles.copy}>

          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Ethiopian &amp; Eritrean · Est. Community
          </div>

          <h1 className={styles.headline}>
            <span className={styles.hlLine}>Where</span>
            <span className={styles.hlLine}>Every Meal</span>
            <span className={`${styles.hlLine} ${styles.hlAccent}`}>Tells a Story.</span>
          </h1>

          <p className={styles.sub}>
            From the smoky warmth of a jebena to the soft tear of injera —
            Selam Market brings the full heart of Ethiopian and Eritrean
            culture to your table.
          </p>

          <div className={styles.tags}>
            <span>ፍሬ ቡና · Fresh Coffee</span>
            <span>እንጀራ · Injera</span>
            <span>ድጎ ሥጋ · Spiced Meats</span>
          </div>

          <div className={styles.ctas}>
            <button className={styles.ctaPrimary}>Shop the Market</button>
            <button className={styles.ctaGhost}>Our Story</button>
          </div>

        </div>

        {/* ════════════════════════════════
            RIGHT — illustration
        ════════════════════════════════ */}
        <div className={styles.artWrap} aria-hidden>

          {/* floating coffee beans */}
          <div className={`${styles.bean} ${styles.bean1}`}><BeanSVG /></div>
          <div className={`${styles.bean} ${styles.bean2}`}><BeanSVG /></div>
          <div className={`${styles.bean} ${styles.bean3}`}><BeanSVG /></div>
          <div className={`${styles.bean} ${styles.bean4}`}><BeanSVG /></div>

          {/* main SVG scene */}
          <div className={styles.sceneShadow} />
          <div className={styles.scene}>
            <SceneSVG />
          </div>

          {/* floating info pills */}
          <div className={`${styles.pill} ${styles.pillCoffee}`}>
            <span className={styles.pillIcon}>☕</span>
            <div>
              <div className={styles.pillTitle}>Bunna / Coffee</div>
              <div className={styles.pillSub}>Daily ceremony, daily joy</div>
            </div>
          </div>

          <div className={`${styles.pill} ${styles.pillInjera}`}>
            <span className={styles.pillIcon}>🫓</span>
            <div>
              <div className={styles.pillTitle}>Injera</div>
              <div className={styles.pillSub}>Teff flatbread, shared plate</div>
            </div>
          </div>

        </div>

      </div>

      {/* ── bottom flag stripe ── */}
      <div className={styles.flagStripe} aria-hidden>
        <div className={styles.stripeGreen} />
        <div className={styles.stripeYellow} />
        <div className={styles.stripeRed} />
      </div>

    </section>
  )
}

/* ─── inline SVG: single coffee bean ─── */
function BeanSVG() {
  return (
    <svg viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="12" rx="18" ry="10" fill="#3d1a06" />
      <ellipse cx="20" cy="12" rx="14" ry="7"  fill="#5a2a0c" />
      <path d="M20 5 Q22 12 20 19" stroke="#3d1a06" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/* ─── main scene SVG: jebena + sini + injera on mesob ─── */
function SceneSVG() {
  return (
    <svg
      viewBox="0 0 520 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        {/* injera texture filter */}
        <filter id="injera-texture" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        {/* glow filter */}
        <filter id="glow-gold" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="glow-sm" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        {/* radial gradient for mesob */}
        <radialGradient id="mesobGrad" cx="50%" cy="40%" r="55%">
          <stop offset="0%"   stopColor="#8B4513" />
          <stop offset="100%" stopColor="#3d1a06" />
        </radialGradient>
        {/* injera gradient */}
        <radialGradient id="injeraGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#c8b89a" />
          <stop offset="100%" stopColor="#a89070" />
        </radialGradient>
        {/* jebena gradient */}
        <radialGradient id="jebenaGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%"   stopColor="#2a1506" />
          <stop offset="60%"  stopColor="#1a0d03" />
          <stop offset="100%" stopColor="#0d0602" />
        </radialGradient>
        {/* coffee liquid gradient */}
        <radialGradient id="coffeeGrad" cx="40%" cy="30%" r="60%">
          <stop offset="0%"   stopColor="#5c2e07" />
          <stop offset="100%" stopColor="#2a1003" />
        </radialGradient>
        {/* highlight gradient */}
        <linearGradient id="highlightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="white" stopOpacity="0.18" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* plate gradient */}
        <radialGradient id="plateGrad" cx="50%" cy="30%" r="60%">
          <stop offset="0%"   stopColor="#d4b896" />
          <stop offset="100%" stopColor="#b09070" />
        </radialGradient>
      </defs>

      {/* ══════════════════════════════
          MESOB — woven basket table
      ══════════════════════════════ */}
      {/* mesob base (cone shape) */}
      <path
        d="M180 480 L260 360 L340 480 Z"
        fill="url(#mesobGrad)"
      />
      {/* mesob weave lines */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <path
          key={i}
          d={`M${185 + i*19} ${477 - i*2} L260 ${362 + i*2} L${335 - i*19} ${477 - i*2}`}
          stroke="#5a2a0c"
          strokeWidth="1"
          strokeOpacity="0.6"
          fill="none"
        />
      ))}
      {/* ethiopian color bands on mesob */}
      <path d="M208 440 L260 375 L312 440" stroke="#078930" strokeWidth="3" fill="none" strokeOpacity="0.7" />
      <path d="M218 455 L260 395 L302 455" stroke="#FCDD09" strokeWidth="3" fill="none" strokeOpacity="0.7" />
      <path d="M228 469 L260 412 L292 469" stroke="#DA121A" strokeWidth="3" fill="none" strokeOpacity="0.7" />
      {/* mesob top rim */}
      <ellipse cx="260" cy="362" rx="82" ry="20" fill="#5a2a0c" />
      <ellipse cx="260" cy="362" rx="78" ry="17" fill="#8B4513" />

      {/* ══════════════════════════════
          INJERA on the mesob
      ══════════════════════════════ */}
      {/* injera base circle */}
      <ellipse cx="260" cy="356" rx="76" ry="18" fill="url(#injeraGrad)" filter="url(#injera-texture)" />
      {/* injera bubbles/holes — spongy texture */}
      {[
        [240,350],[255,345],[270,352],[248,358],[265,362],
        [280,348],[235,362],[252,340],[272,340],[285,358],
        [242,368],[258,372],[275,366],[290,350],[228,354],
        [295,362],[238,344],[268,372],[283,342],[250,366],
      ].map(([x,y],i) => (
        <ellipse key={i} cx={x} cy={y} rx="3.5" ry="2" fill="#9a7f5e" fillOpacity="0.55" />
      ))}
      {/* injera rim edge highlight */}
      <ellipse cx="260" cy="356" rx="76" ry="18" fill="none" stroke="#d4bfa0" strokeWidth="1" strokeOpacity="0.4" />

      {/* ══════════════════════════════
          WOT / stew scoops on injera
      ══════════════════════════════ */}
      {/* doro wot (red stew) */}
      <ellipse cx="245" cy="352" rx="22" ry="10" fill="#8B1A1A" />
      <ellipse cx="245" cy="350" rx="18" ry="7"  fill="#a52020" />
      {/* misir wot (lentil - orange) */}
      <ellipse cx="278" cy="354" rx="18" ry="9"  fill="#c45a1a" />
      <ellipse cx="278" cy="352" rx="14" ry="6"  fill="#d4701a" />
      {/* tikel gomen (cabbage - green) */}
      <ellipse cx="261" cy="363" rx="14" ry="6"  fill="#2d6b2d" />
      <ellipse cx="261" cy="362" rx="11" ry="4"  fill="#3a8c3a" />

      {/* ══════════════════════════════
          JEBENA — Ethiopian coffee pot
      ══════════════════════════════ */}
      {/* jebena body */}
      <ellipse cx="170" cy="290" rx="52" ry="62" fill="url(#jebenaGrad)" />
      {/* jebena neck */}
      <rect x="158" y="228" width="24" height="32" rx="12" fill="#1a0d03" />
      {/* jebena lid */}
      <ellipse cx="170" cy="228" rx="18" ry="8" fill="#2a1506" />
      <circle  cx="170" cy="220" r="5"          fill="#3d1a06" />
      {/* jebena spout */}
      <path
        d="M222 278 Q258 265 268 248 Q272 238 265 232"
        stroke="#2a1506"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M222 278 Q258 265 268 248 Q272 238 265 232"
        stroke="#1a0d03"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* jebena handle */}
      <path
        d="M118 270 Q88 270 88 295 Q88 320 118 318"
        stroke="#2a1506"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* jebena highlight */}
      <ellipse cx="152" cy="268" rx="14" ry="22" fill="url(#highlightGrad)" />
      {/* jebena ethiopian decoration bands */}
      <path d="M132 290 Q170 330 208 290" stroke="#078930" strokeWidth="2.5" fill="none" strokeOpacity="0.7" />
      <path d="M128 302 Q170 344 212 302" stroke="#FCDD09" strokeWidth="2.5" fill="none" strokeOpacity="0.7" />
      <path d="M130 316 Q170 354 210 316" stroke="#DA121A" strokeWidth="2.5" fill="none" strokeOpacity="0.6" />

      {/* steam from spout */}
      <g className="steam-group" style={{ transformOrigin: '265px 232px' }}>
        <path d="M265 232 Q258 218 265 204 Q272 190 265 176" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" strokeOpacity="0.3" />
        <path d="M272 228 Q278 214 272 200 Q266 186 272 172" stroke="white" strokeWidth="2"   strokeLinecap="round" fill="none" strokeOpacity="0.2" />
      </g>
      {/* steam from jebena top */}
      <path d="M164 218 Q158 202 164 186 Q170 170 164 154" stroke="white" strokeWidth="2"   strokeLinecap="round" fill="none" strokeOpacity="0.25" />
      <path d="M175 216 Q181 200 175 184 Q169 168 175 152" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" strokeOpacity="0.18" />

      {/* ══════════════════════════════
          SINI CUPS — small coffee cups
      ══════════════════════════════ */}
      {/* cup 1 */}
      <path d="M310 340 Q298 340 294 350 L298 370 Q302 380 318 380 Q334 380 338 370 L342 350 Q338 340 326 340 Z" fill="#c9a060" />
      <path d="M310 340 Q298 340 294 350 L298 370 Q302 380 318 380 Q334 380 338 370 L342 350 Q338 340 326 340 Z" fill="url(#highlightGrad)" />
      <ellipse cx="318" cy="340" rx="16" ry="5" fill="#e0b878" />
      <ellipse cx="318" cy="342" rx="13" ry="4" fill="url(#coffeeGrad)" />
      {/* cup saucer */}
      <ellipse cx="318" cy="382" rx="22" ry="5" fill="#b08040" />
      <ellipse cx="318" cy="382" rx="18" ry="3.5" fill="#c9a060" />
      {/* cup handle */}
      <path d="M340 352 Q354 352 354 362 Q354 372 340 372" stroke="#b08040" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* cup decoration */}
      <path d="M298 358 Q318 365 338 358" stroke="#078930" strokeWidth="1.5" fill="none" strokeOpacity="0.6" />
      <path d="M299 364 Q318 371 337 364" stroke="#FCDD09" strokeWidth="1.5" fill="none" strokeOpacity="0.6" />

      {/* cup 2 (smaller, behind) */}
      <path d="M360 325 Q350 325 346 333 L349 350 Q352 358 365 358 Q378 358 381 350 L384 333 Q380 325 370 325 Z" fill="#c9a060" />
      <ellipse cx="365" cy="325" rx="14" ry="4.5" fill="#e0b878" />
      <ellipse cx="365" cy="327" rx="11" ry="3.5" fill="url(#coffeeGrad)" />
      <ellipse cx="365" cy="360" rx="18" ry="4"   fill="#b08040" />
      <path d="M381 334 Q392 334 392 342 Q392 350 381 350" stroke="#b08040" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M348 340 Q365 346 382 340" stroke="#DA121A" strokeWidth="1.2" fill="none" strokeOpacity="0.55" />

      {/* ══════════════════════════════
          COFFEE BEANS scattered on mesob
      ══════════════════════════════ */}
      {[
        { x:295, y:310, r:14 },
        { x:340, y:322, r:12 },
        { x:375, y:310, r:11 },
      ].map((b,i) => (
        <g key={i} transform={`translate(${b.x},${b.y}) rotate(${i*30-15})`}>
          <ellipse cx="0" cy="0" rx={b.r} ry={b.r*0.6} fill="#3d1a06" />
          <ellipse cx="0" cy="0" rx={b.r*0.7} ry={b.r*0.38} fill="#5a2a0c" />
          <path d={`M0 ${-b.r*0.55} Q${b.r*0.15} 0 0 ${b.r*0.55}`} stroke="#3d1a06" strokeWidth="1" strokeLinecap="round" />
        </g>
      ))}

      {/* ══════════════════════════════
          INCENSE stick
      ══════════════════════════════ */}
      <rect x="400" y="280" width="4" height="90" rx="2" fill="#8B4513" />
      <circle cx="402" cy="280" r="3" fill="#FF6B00" />
      <path d="M402 278 Q396 264 402 250 Q408 236 402 222 Q396 208 402 194" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.3" />

      {/* ══════════════════════════════
          BERBERE SPICE pile
      ══════════════════════════════ */}
      <ellipse cx="410" cy="375" rx="28" ry="12" fill="#8B1A1A" />
      <ellipse cx="410" cy="370" rx="22" ry="9"  fill="#a52020" />
      <ellipse cx="410" cy="366" rx="16" ry="6"  fill="#c23a2a" />

      {/* spice label */}
      <text x="410" y="398" textAnchor="middle" fill="#c9a84c" fontSize="11" fontFamily="'Inter',sans-serif" fontWeight="600" letterSpacing="0.1em">BERBERE</text>
    </svg>
  )
}
