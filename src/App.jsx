import { useState } from 'react'
import Loader from './components/Loader'
import DictionaryCard from './components/DictionaryCard'
import styles from './App.module.css'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <main className={`${styles.page} ${loaded ? styles.visible : ''}`}>
        <p className={styles.pageLabel}>Selam Market &mdash; Ethiopian &amp; Eritrean</p>
        <DictionaryCard />
      </main>
    </>
  )
}
