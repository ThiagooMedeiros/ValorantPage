import Image from 'next/image'
import styles from './styles.module.scss'
import { Triangle } from '@phosphor-icons/react'

export const Header = () => (
  <header className={styles.container}>
      <div className={styles.header_content}>
        <Image src="/riot-games.svg" width={52} height={26} alt='Logo da Riot Games'/>

        <span className={styles.divider}/>

        <Image src="/valorant.svg" width={32} height={26} alt='Logo do Valorant'/>

        <nav className={styles.nav}>
          <a href="#" target='_blanck'>GAMES</a>
          <a href="#" target='_blanck'>CHAMPIONS</a>
          <a href="#" target='_blanck'>NEWS</a>
          <a href="#" target='_blanck'>PATCH NOTES</a>
          <a href="#" target='_blanck'>SHOP</a>
          <a href="#" target='_blanck'>SUPPORT</a>
        </nav>

        <div className={styles.user}>
          <picture>
          <Image src="/Thiagoimg3.jpeg" alt='Image de avatar do usuário' layout='fill'/>
          </picture>

          <strong>Thiago Medeiros</strong>
          
          <Triangle size={8} weight='fill'/> {/* biblioteca: yarn add @phosphor-icons/react */}
        </div>

      </div>
    </header>
)