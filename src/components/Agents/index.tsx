import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import type { Agent } from 'types/agent'
import { CardAgent } from 'components/CardAgent'

import styles from './styles.module.scss'
import { loadAgents } from 'utils/loadAgents'

export const Agents = () => {
  const [agents, setAgents] = useState<Agent[]>([])
  const loadData = async () => {
    const data = await loadAgents()
    setAgents(data)
  }
  useEffect(() => {
    loadData()
  }, [])

  return (
    <Swiper className={styles.agents} spaceBetween={16} slidesPerView={4}>
      {agents.map(agent => (
        <SwiperSlide key={agent.displayName}>
          <CardAgent {...agent} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
