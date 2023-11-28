import Image from 'next/image'
import styles from './styles.module.scss'
import { Agents } from 'components/Agents'

export const Main = () => (
  <main className={styles.container}>
    <div className={styles.title}>
      <Image
        src="/background-logo.svg"
        width={140}
        height={99}
        alt="Logo Valorant"
      />

      <h1>Agentes</h1>
    </div>

    <Agents />
  </main>
)
