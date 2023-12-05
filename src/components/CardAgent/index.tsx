import Image from 'next/image'
import type { Agent } from 'types/agent'
import styles from './styles.module.scss'

export const CardAgent = (agent: Agent) => (
  <a href="#" className={styles.agent}>
    <div className={styles.text}>
      <p>{agent.role.displayName}</p>
      <strong>{agent.displayName}</strong>
    </div>

    <ul className={styles.abilities}>
      {agent.abilities.map(
        ability =>
          ability.displayIcon && (
            <li key={ability.displayName}>
              <Image
                src={ability.displayIcon}
                width={36}
                height={36}
                alt={'Icone da habilidade ' + ability.displayName}
              />
            </li>
          )
      )}
    </ul>

    <div className={styles.background}>
      <span style={{ backgroundImage: `url('${agent.fullPortrait}')` }} />
    </div>
  </a>
)
