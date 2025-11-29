"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: "/home.png", label: "Home" },
    { href: "/cards", icon: "/cards.png", label: "Cards" },
    { href: "/decks", icon: "/deck.png", label: "Decks" },
    { href: "/skill", icon: "/Skill.png", label: "Skills" }, 
    { href: "/about", icon: "/about.png", label: "About" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-white/10 z-50 backdrop-blur-md pb-safe">
      <div className="max-w-4xl mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = item.href === "/" 
            ? pathname === "/" 
            : pathname.startsWith(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 py-3 px-2 text-[10px] sm:text-xs font-medium transition-all duration-200 group min-w-[60px]",
                isActive ? "text-white" : "text-muted-foreground group-hover:text-white"
              )}
            >
              <div className="w-6 h-6 relative flex items-center justify-center">
                <img 
                  src={item.icon} 
                  alt={item.label}
                  className={cn(
                    "w-full h-full object-contain transition-all duration-300",
                    isActive 
                      ? "filter-none scale-110" 
                      : "brightness-0 invert opacity-70 group-hover:filter-none group-hover:opacity-100 group-hover:scale-110" 
                  )}
                />
              </div>
              <span>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}