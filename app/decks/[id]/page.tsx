"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Loader2 } from "lucide-react"
import { useParams } from "next/navigation"
import { Deck, Card, Skill } from "@/lib/def"

export default function DeckDetailPage() {
  const params = useParams()
  const id = params.id as string


  const [deck, setDeck] = useState<Deck | null>(null)
  const [allCards, setAllCards] = useState<Card[]>([])
  const [allSkills, setAllSkills] = useState<Skill[]>([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true)
        

        const [deckRes, cardsRes, skillsRes] = await Promise.all([
          fetch(`/api/decks/${id}`),
          fetch('/api/cards'),
          fetch('/api/skills')
        ])

        if (deckRes.ok) {
          const deckData = await deckRes.json()
          setDeck(deckData)
        }
        
        if (cardsRes.ok) {
          const cardsData = await cardsRes.json()
          setAllCards(cardsData)
        }

        if (skillsRes.ok) {
          const skillsData = await skillsRes.json()
          setAllSkills(skillsData)
        }

      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (id) fetchAllData()
  }, [id])


  const getCardByName = (name: string) => {
    return allCards.find((c) => c.name === name)
  }


  const skillData = deck ? allSkills.find((s) => s.name === deck.skill) : null
  const skillImageSrc = deck?.skillType === "Universal" ? "/Skill_Uni.png" : "/Skill.png"

  const tierColors = {
    S: "bg-red-500/20 text-red-400 border-red-500/50",
    A: "bg-orange-500/20 text-orange-400 border-orange-500/50",
    B: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
    C: "bg-blue-500/20 text-blue-400 border-blue-500/50",
  }


  if (isLoading) {
    return (
      <main className="min-h-screen bg-background pb-24 pt-10 flex items-center justify-center">
         <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
            <p className="text-muted-foreground">Analysing Deck Strategy...</p>
         </div>
         <Navigation />
      </main>
    )
  }


  if (!deck) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center pb-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Deck not found</h1>
          <Link href="/decks">
            <Button>Back to Decks</Button>
          </Link>
        </div>
        <Navigation />
      </main>
    )
  }


  return (
      <main className="min-h-screen bg-background pb-24 pt-6">
        <div className="max-w-5xl mx-auto p-4">
        
        <Link href="/decks" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-6 mt-4">
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Meta Decks</span>
        </Link>

        <div className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-white glow-text">{deck.name}</h1>
              <div className={`inline-flex items-center px-3 py-1 rounded border ${tierColors[deck.tier as keyof typeof tierColors]}`}>
                <span className="font-bold">TIER {deck.tier}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 text-center bg-card/50 p-3 rounded-lg border border-border">
                <div>
                    <div className="text-xs text-muted-foreground">Win Rate</div>
                    <div className="font-bold text-accent">{deck.winRate}%</div>
                </div>
                <div>
                    <div className="text-xs text-muted-foreground">Usage</div>
                    <div className="font-bold text-primary">{deck.usage}%</div>
                </div>
                <div>
                    <div className="text-xs text-muted-foreground">Diff</div>
                    <div className="font-bold">{deck.difficulty}/10</div>
                </div>
                <div>
                    <div className="text-xs text-muted-foreground">Pop</div>
                    <div className="font-bold">{deck.popularity}/5</div>
                </div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground border-l-4 border-primary pl-4 italic">
            "{deck.description}"
          </p>
        </div>

        {/* SKILL SECTION */}
        {deck.skill && (
            skillData ? (
              <Link href={`/skill/${skillData.id}`}>
                 <div className="mt-6 flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-white/10 w-fit shadow-lg backdrop-blur-sm mb-8 cursor-pointer hover:border-blue-400 transition-all hover:scale-105 group">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border border-yellow-500/50 group-hover:border-blue-400 transition-colors">
                        <img src={skillImageSrc} alt="Skill Type" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold group-hover:text-white transition-colors">
                            {deck.skillType === "Universal" ? "Archive Skill" : "Character Skill"}
                        </span>
                        <span className="text-xl font-bold text-blue-400 drop-shadow-md group-hover:text-blue-300 transition-colors">
                            {deck.skill}
                        </span>
                    </div>
                 </div>
              </Link>
            ) : (
              <div className="mt-6 flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-white/10 w-fit shadow-lg backdrop-blur-sm mb-8 opacity-70">
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border border-yellow-500/50">
                    <img src={skillImageSrc} alt="Skill Type" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                        {deck.skillType === "Universal" ? "Archive Skill" : "Character Skill"}
                    </span>
                    <span className="text-xl font-bold text-blue-400 drop-shadow-md">
                        {deck.skill}
                    </span>
                </div>
              </div>
            )
        )}

        {/* MAIN DECK VISUALIZER */}
        <div className="bg-card border border-border rounded-xl overflow-hidden mb-8">
          <div className="bg-secondary/20 px-6 py-4 border-b border-border flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2">
              Main Deck <span className="text-sm font-normal text-muted-foreground">({deck.mainCards?.length || 0})</span>
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-5 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-7 gap-3">
              {deck.mainCards?.map((cardName, i) => {
                const cardData = getCardByName(cardName)
                if (!cardData) return <div key={i} className="aspect-[2.1/3] bg-red-900/50 border border-red-500 flex items-center justify-center text-[10px] text-center p-1 truncate" title={cardName}>{cardName}</div>
                return (
                  <Link key={i} href={`/cards/${cardData.id}`} className="group relative">
                    <div className="aspect-[2.1/3] relative rounded overflow-hidden border border-white/10 hover:border-accent transition-all hover:scale-105 hover:z-10 shadow-lg">
                        <img src={cardData.image || "/card-back.jpg"} alt={cardData.name} className="w-full h-full object-cover" />
                        <div className="absolute top-0 right-0 bg-black/60 text-xs px-2 py-1 text-accent font-extrabold opacity-0 group-hover:opacity-100 transition-opacity z-20">{cardData.rarity}</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* EXTRA DECK VISUALIZER */}
        {deck.extraCards && deck.extraCards.length > 0 && (
          <div className="bg-card border border-border rounded-xl overflow-hidden mb-8">
            <div className="bg-secondary/20 px-6 py-4 border-b border-border">
              <h2 className="text-xl font-bold flex items-center gap-2">
                Extra Deck <span className="text-sm font-normal text-muted-foreground">({deck.extraCards.length})</span>
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-5 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-7 gap-3">
                {deck.extraCards.map((cardName, i) => {
                  const cardData = getCardByName(cardName)
                  if (!cardData) return <div key={i} className="aspect-[2.1/3] bg-red-900/50 border border-red-500 flex items-center justify-center text-[10px] text-center p-1" title={cardName}>Not Found</div>
                  return (
                    <Link key={i} href={`/cards/${cardData.id}`} className="group relative">
                      <div className="aspect-[2.1/3] relative rounded overflow-hidden border border-white/10 hover:border-pink-500 transition-all hover:scale-105 hover:z-10 shadow-lg">
                          <img src={cardData.image || "/card-back.jpg"} alt={cardData.name} className="w-full h-full object-cover" />
                          <div className="absolute top-0 right-0 bg-black/60 text-xs px-2 py-1 text-blue-300 font-extrabold opacity-0 group-hover:opacity-100 transition-opacity z-20">{cardData.rarity}</div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* STRATEGY GUIDE */}
        {deck.strategy && (
          <div className="bg-card border border-border rounded-xl p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-red-500 border-b border-white/10 pb-4">Strategy Guide</h2>
            
            <div className="space-y-3 text-muted-foreground text-lg leading-relaxed">
                {deck.strategy.split('\n').map((line, i) => {
                    const trimmed = line.trim();
                    if (!trimmed) return <div key={i} className="h-1" /> 

                    if (trimmed.startsWith('●') || trimmed.startsWith('-')) {
                        return (
                            <div key={i} className="flex gap-3 pl-4">
                                <span className="text-green-500 font-bold text-xl">●</span>
                                <span>{trimmed.substring(1).trim()}</span>
                            </div>
                        )
                    }

                    const numberMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
                    if (numberMatch) {
                        return (
                            <div key={i} className="flex gap-3 pl-4">
                                <span className="text-green-500 font-bold min-w-[1.5rem]">{numberMatch[1]}.</span>
                                <span>{numberMatch[2]}</span>
                            </div>
                        )
                    }

                    return (
                        <p key={i} className="block">
                            {line}
                        </p>
                    )
                })}
            </div>
          </div>
        )}
      </div>

      <Navigation />
    </main>
  )
}