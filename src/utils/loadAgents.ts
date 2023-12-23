import type { Agent } from 'types/agent'

const LOCAL_KEY = '@agentes/valorant'

export const loadAgents = async () => {
  const localData = window.localStorage.getItem('LOCAL_KEY')

  if (localData !== null) {
    return JSON.parse(localData)
  }

  const route = 'https://valorant-api.com/v1/agents?language=pt-BR'
  const response = await fetch(route).then(data => data.json())

  let data = response.data as Agent[]
  data = data.filter(agent => agent.fullPortrait)

  window.localStorage.setItem('LOCAL_KEY', JSON.stringify(data))
  return
}
