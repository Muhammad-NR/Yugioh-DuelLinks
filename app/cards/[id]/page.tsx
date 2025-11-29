"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, X, ExternalLink, Loader2 } from "lucide-react" 
import { useParams } from "next/navigation"
import { Card, Deck } from "@/lib/def" 

export default function CardDetailPage() {
  const params = useParams()
  const id = params.id as string 
  
  const [card, setCard] = useState<Card | null>(null)
  const [decks, setDecks] = useState<Deck[]>([]) 
  const [isLoading, setIsLoading] = useState(true)
  const [isImageOpen, setIsImageOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        
        const [cardRes, decksRes] = await Promise.all([
            fetch(`/api/cards/${id}`),
            fetch(`/api/decks`)
        ])

        if (cardRes.ok) {
            const cardData = await cardRes.json()
            setCard(cardData)
        }

        if (decksRes.ok) {
            const decksData = await decksRes.json()
            setDecks(decksData)
        }

      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
        fetchData()
    }
  }, [id])

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center pb-24">
        <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
            <p className="text-muted-foreground">Summoning Card...</p>
        </div>
        <Navigation />
      </main>
    )
  }

  if (!card) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center pb-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Card not found</h1>
          <Link href="/cards">
            <Button>Back to Cards</Button>
          </Link>
        </div>
        <Navigation />
      </main>
    )
  }

  const imageSrc = card.image || `/.jpg?height=800&width=600&query=${encodeURIComponent(card.name)} yugioh card`

  return (
      <main className="min-h-screen bg-background pb-24 pt-10">
        <div className="max-w-2xl mx-auto px-4 pt-1 pb-8 md:p-7 space-y-6">        
        <Link href="/cards" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-6 mt-4">
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Cards</span>
        </Link>

        {/* IMAGE SECTION */}
        <div className="bg-card border border-border rounded-xl overflow-hidden mb-8 max-w-[420px] mx-auto shadow-2xl">
          <div 
            className="aspect-[420/613] bg-black flex items-center justify-center cursor-zoom-in relative group"
            onClick={() => setIsImageOpen(true)}
          >
            <div className="absolute inset-0 bg-gray-900/30 animate-pulse" />
            <img
              src={imageSrc}
              alt={card.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-10"
            />
            <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs px-3 py-1.5 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity z-20 border border-white/20">
              Click to zoom
            </div>
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{card.name}</h1>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 rounded bg-primary/20 text-primary font-medium">{card.type}</span>
              <span className="px-3 py-1 rounded bg-accent/20 text-accent font-medium">{card.rarity}</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">Description</h3>
              <div 
                className="text-lg leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
            </div>

            {card.type === "Monster" && (
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-1">ATK</h3>
                  <p className="text-2xl font-bold text-accent">{card.atk}</p>
                </div>

                {card.LINK ? (
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-1">LINK RATING</h3>
                    <p className="text-2xl font-bold text-blue-500">LINK-{card.LINK}</p>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-1">DEF</h3>
                    <p className="text-2xl font-bold text-primary">{card.def}</p>
                  </div>
                )}
              </div>
            )}

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">Attributes</h3>
              <div className="flex gap-3 flex-wrap">
                {card.type === "Monster" && !card.LINK && (
                  <div className="px-4 py-2 rounded-lg bg-zinc-800 text-white font-bold text-base border border-zinc-700 shadow-sm flex items-center gap-2">
                    <span className="text-muted-foreground font-bold text-base">Level:</span>
                    {card.level}
                  </div>
                )}

                <div className="px-4 py-2 rounded-lg bg-zinc-800 text-white font-bold text-base border border-zinc-700 shadow-sm">
                  {card.attribute}
                </div>
              </div>
            </div>

            {/* USABLE IN DECKS (UPDATED LOGIC) */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">Usable in Decks</h3>
              <div className="flex gap-2 flex-wrap">
                {card.deckTypes?.map((deckName) => {
                  const linkedDeck = decks.find((d) => d.name === deckName)

                  if (linkedDeck) {
                    return (
                      <Link key={deckName} href={`/decks/${linkedDeck.id}`}>
                        <div className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-md transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5 border border-blue-400">
                          {deckName}
                          <ExternalLink className="w-3 h-3 opacity-70" />
                        </div>
                      </Link>
                    )
                  }

                  return (
                    <span key={deckName} className="px-3 py-1.5 rounded-full bg-slate-700 text-white text-sm font-medium border border-slate-600">
                      {deckName}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- ZOOM MODAL --- */}
      {isImageOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200 cursor-zoom-out"
          onClick={() => setIsImageOpen(false)}
        >
          <button className="absolute top-4 right-4 text-white/70 hover:text-white p-2">
            <X className="w-8 h-8" />
          </button>
          <img src={imageSrc} alt={card.name} className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl" />
        </div>
      )}

      <Navigation />
    </main>
  )
}