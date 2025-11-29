"use client"

import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image" 
import { Search, Filter, X } from "lucide-react"

function HeaderContent() {
  const router = useRouter()
  const searchParams = useSearchParams() 
  const pathname = usePathname()

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("all")

  useEffect(() => {
    const q = searchParams.get("q") || ""
    const type = searchParams.get("type") || "all"
    setSearchQuery(q)
    setSelectedType(type)
  }, [searchParams])

  const handleUpdateParams = (newSearch: string, newType: string) => {
    if (pathname !== "/cards") {
      router.push(`/cards?q=${newSearch}&type=${newType}`)
      return
    }
    
    router.replace(`/cards?q=${newSearch}&type=${newType}`)
  }

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setSearchQuery(val)
    handleUpdateParams(val, selectedType)
  }

  const onTypeChange = (type: string) => {
    setSelectedType(type)
    handleUpdateParams(searchQuery, type)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-xl pt-safe">
      <div className="max-w-6xl mx-auto px-4 py-3">
        
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          
          {/* --- BARIS 1: LOGO & SEARCH BAR (Sejajar di HP) --- */}
          <div className="flex items-center gap-3 w-full md:w-auto flex-1">
            <Link href="/" className="flex-shrink-0 group">
              <Image 
                src="/YuGiOh_Duel_Links.png" 
                alt="Yu-Gi-Oh! Catalog" 
                width={120} 
                height={60} 
                priority
                className="h-8 w-auto md:h-12 object-contain transition-transform group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              />
            </Link>

            {/* Search Bar langsung di sini biar rapi sejajar logo */}
            <div className="relative flex-1 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                suppressHydrationWarning 
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={onSearchChange}
                className="w-full h-9 md:h-10 bg-secondary/50 border border-white/10 rounded-full pl-9 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder:text-muted-foreground"
              />
              {searchQuery && (
                <button 
                  suppressHydrationWarning
                  onClick={() => {setSearchQuery(""); handleUpdateParams("", selectedType)}}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white p-1"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* --- BARIS 2: FILTER BUTTONS (Full Width di HP, Kanan di Desktop) --- */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide w-full md:w-auto border-t border-white/5 pt-2 md:pt-0 md:border-t-0">
            <div className="flex items-center gap-1 text-muted-foreground text-[10px] font-medium pr-2 border-r border-white/10 mr-2 flex-shrink-0">
              <Filter className="w-3 h-3" />
              <span>Filter</span>
            </div>
            
            {["all", "Monster", "Spell", "Trap"].map((type) => (
              <button
                key={type}
                suppressHydrationWarning
                onClick={() => onTypeChange(type)}
                className={`
                  px-3 py-1 rounded-full text-[10px] md:text-xs font-bold transition-all whitespace-nowrap border flex-shrink-0
                  ${selectedType === type 
                    ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_10px_rgba(37,99,235,0.5)]" 
                    : "bg-secondary/30 border-white/5 text-muted-foreground hover:bg-secondary hover:text-white"
                  }
                `}
              >
                {type === "all" ? "All" : type}
              </button>
            ))}
          </div>

        </div>
      </div>
    </header>
  )
}

export function Header() {
  return (
    <Suspense fallback={<div className="fixed top-0 left-0 right-0 z-10 h-12 bg-black/90 border-b border-white/10" />}>
      <HeaderContent />
    </Suspense>
  )
}