"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Deck } from "@/lib/def"
import { ChevronRight, Loader2 } from "lucide-react"

export default function DecksPage() {

  const [decks, setDecks] = useState<Deck[]>([])
  const [isLoading, setIsLoading] = useState(true)
  

  const [selectedTier, setSelectedTier] = useState("all")


  useEffect(() => {
    const fetchDecks = async () => {
      try {
        const res = await fetch('/api/decks')
        if (res.ok) {
          const data = await res.json()
          setDecks(data)
        }
      } catch (error) {
        console.error("Error fetching decks:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchDecks()
  }, [])

  const tiers = ["all", "S", "A", "B", "C"]


  const filteredDecks = selectedTier === "all" ? decks : decks.filter((d) => d.tier === selectedTier)

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
            <p className="text-muted-foreground">Loading Meta Decks...</p>
        </div>
        <Navigation />
      </main>
    )
  }

  return (
      <main className="min-h-screen bg-background pb-24 pt-6">
        <div className="max-w-4xl mx-auto p-4 space-y-6">
        <div className="space-y-4 pt-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Meta Decks</h1>
            <div className="flex items-center gap-2">
                <p className="text-muted-foreground">Current competitive tier list</p>
                <span className="text-xs bg-secondary px-2 py-0.5 rounded text-muted-foreground">
                    {filteredDecks.length} Decks
                </span>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            {tiers.map((tier) => (
              <Button
                key={tier}
                variant={selectedTier === tier ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTier(tier)}
                className={selectedTier === tier && tier !== "all" ? tierColors[tier as keyof typeof tierColors] : ""}
              >
                {tier === "all" ? "All Tiers" : `Tier ${tier}`}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredDecks.map((deck) => (
            <Link key={deck.id} href={`/decks/${deck.id}`}>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">{deck.name}</h2>
                      <span
                        className={`px-3 py-1 rounded font-bold border ${tierColors[deck.tier as keyof typeof tierColors]}`}
                      >
                        TIER {deck.tier}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{deck.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {/* Fitur Preview Kartu Tetap Ada */}
                      {deck.mainCards?.slice(0, 3).map((card, i) => (
                        <span key={i} className="text-xs bg-secondary/20 text-gray-400 border border-white/5 px-2 py-1 rounded">
                          {card}
                        </span>
                      ))}
                      {deck.mainCards && deck.mainCards.length > 3 && (
                        <span className="text-xs bg-muted/20 text-muted-foreground px-2 py-1 rounded">
                          +{deck.mainCards.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Navigation />
    </main>
  )
}