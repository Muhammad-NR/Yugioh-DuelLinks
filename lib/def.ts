export interface Card {
  id: string
  name: string
  type: "Monster" | "Spell" | "Trap" 
  rarity: string
  description: string
  atk?: number 
  def?: number
  LINK?: number
  level?: number
  attribute: string
  deckTypes?: string[]
  image?: string 
}

export interface Deck {
  id: string
  name: string
  tier: string
  description: string
  skill?: string
  skillType?: "Character" | "Universal" 
  winRate: number
  usage: number
  difficulty: number
  popularity: number
  mainCards?: string[]
  extraCards?: string[]
  strategy?: string
}

export interface Skill {
  id: string
  name: string
  character?: string 
  type: "Character" | "Universal"
  description: string
  image: string
  characterImage?: string
  relatedCards?: string[] 
}