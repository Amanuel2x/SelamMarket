import { useState } from 'react'
import Loader from './components/Loader'
import Hero from './components/Hero'
import DictionaryCard from './components/DictionaryCard'
import styles from './App.module.css'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <div className={`${styles.site} ${loaded ? styles.visible : ''}`}>
        <Hero />
        <main className={styles.page}>
          <p className={styles.pageLabel}>Selam Market — Word of Welcome</p>
          <DictionaryCard />
        </main>
      </div>
    </>
  )
}
