export interface Agent {
  role: {
    displayName: string
  }
  displayName: string
  abilities: {
    displayName: string
    displayIcon: string
  }[] //além de obj é um array
  fullPortrait: string
}
