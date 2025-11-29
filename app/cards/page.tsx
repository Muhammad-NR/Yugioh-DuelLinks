"use client"

import { useMemo, Suspense, useState, useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react" 
import { useSearchParams, useRouter } from "next/navigation"
import { Card } from "@/lib/def"

const CARDS_PER_PAGE = 9

function CardsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [cardsData, setCardsData] = useState<Card[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      const fetchCards = async () => {
        try {
          const res = await fetch('/api/cards')
          if (!res.ok) throw new Error("Gagal mengambil data")
          
          const data = await res.json()
          
          console.log("DATA DARI API:", data) 
          console.log("JUMLAH DATA:", data.length) 
          
          setCardsData(data)
        } catch (error) {
          console.error("Error fetching cards:", error)
        } finally {
          setIsLoading(false)
        }
      }
      fetchCards()
    }, [])

  const search = searchParams.get("q") || ""
  const typeFilter = searchParams.get("type") || "all"
  const pageParam = searchParams.get("page")
  const currentPage = pageParam ? parseInt(pageParam) : 1

  const filteredCards = useMemo(() => {
    return cardsData.filter((card) => {
      const matchesSearch =
        card.name.toLowerCase().includes(search.toLowerCase()) ||
        card.description.toLowerCase().includes(search.toLowerCase())
      
      const matchesType = typeFilter === "all" || card.type === typeFilter
      
      return matchesSearch && matchesType
    })
  }, [search, typeFilter, cardsData]) 

  const totalPages = Math.ceil(filteredCards.length / CARDS_PER_PAGE)
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE
  const paginatedCards = filteredCards.slice(startIndex, startIndex + CARDS_PER_PAGE)

  const handlePageChange = (newPage: number) => {
    const p = Math.max(1, Math.min(newPage, totalPages))
    
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", p.toString())
    
    router.push(`/cards?${params.toString()}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background pb-24 pt-10 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
            <p className="text-muted-foreground">Mengambil data kartu...</p>
        </div>
        <Navigation />
      </main>
    )
  }

  return (
      <main className="min-h-screen bg-background pb-24 pt-10">
        <div className="max-w-5xl mx-auto px-4 pt-2 pb-8 md:p-7 space-y-6">        
        {/* --- INFO BAR --- */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <h1 className="text-2xl font-bold">Card Catalog</h1>
            <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                {filteredCards.length} Cards Found
            </span>
        </div>

        {/* LIST KARTU */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginatedCards.map((card) => (
            <Link key={card.id} href={`/cards/${card.id}`}>
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all cursor-pointer h-full flex flex-col group">
                
                <div className="aspect-[813/1185] bg-black flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-900/30 animate-pulse" />
                  <img
                    src={
                      card.image ||
                      `/.jpg?height=1185&width=813&query=${encodeURIComponent(card.name) || "/placeholder.svg"} yugioh card art`
                    }
                    alt={card.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-10"
                  />
                </div>

                <div className="p-4 space-y-3 flex flex-col flex-grow bg-secondary/5">
                  <h3 className="font-bold text-lg truncate group-hover:text-primary transition-colors">{card.name}</h3>
                  
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded font-medium">{card.type}</span>
                    <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded font-medium">{card.rarity}</span>
                  </div>

                  <div 
                    className="text-sm text-muted-foreground line-clamp-3 mt-auto pt-2"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* EMPTY STATE */}
        {paginatedCards.length === 0 && (
          <div className="text-center py-20 border border-dashed border-white/20 rounded-xl bg-secondary/5">
            <p className="text-xl font-bold text-muted-foreground mb-2">No cards found</p>
            <p className="text-sm text-muted-foreground">Try searching for something else in the header above</p>
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-3"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev</span>
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(3, totalPages) }).map((_, i) => {
                let pageNum: number
                
                if (totalPages <= 3) {
                  pageNum = i + 1
                } else if (currentPage <= 2) {
                  pageNum = i + 1
                } else if (currentPage >= totalPages - 1) {
                  pageNum = totalPages - 2 + i
                } else {
                  pageNum = currentPage - 1 + i
                }

                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    onClick={() => handlePageChange(pageNum)}
                    className="w-9 h-9 p-0 font-bold text-sm"
                  >
                    {pageNum}
                  </Button>
                )
              })}
            </div>

            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-3"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}    
      </div>

      <Navigation />
    </main>
  )
}

export default function CardsPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading page...</div>}>
      <CardsContent />
    </Suspense>
  )
}