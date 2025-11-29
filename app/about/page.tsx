"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Heart, Mail, X, QrCode } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background pb-24 pt-6">
      <div className="max-w-3xl mx-auto p-4 space-y-8">
        
        {/* Header */}
        <div className="pt-8 space-y-4 text-center md:text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent inline-block">
                Yu-Gi-Oh Duel Links
            </h1>
            <h2 className="text-2xl text-foreground/80">Card Catalog & Meta Guide</h2>
          </div>
        </div>

        {/* About */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-primary">About This App</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Yu-Gi-Oh Duel Links Catalog is a comprehensive database and guide for players. Explore thousands of cards,
            discover current meta decks, and learn strategies used by professional players to climb the ladder and
            achieve victory in competitive duels.
          </p>
        </div>

        {/* Features */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-primary">Features</h2>
          <ul className="space-y-4">
            {[
                "Complete card catalog with detailed information",
                "Meta tier list of competitive decks",
                "Search and filter cards by type and attributes",
                "Detailed deck analysis with strategy guides",
                "Skill database with character & universal skills"
            ].map((feature, i) => (
                <li key={i} className="flex gap-4 items-start">
                    <div className="mt-1 min-w-[20px] h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <span className="text-green-500 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-foreground/90">{feature}</span>
                </li>
            ))}
          </ul>
        </div>

        {/* Technology */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-primary">Built With</h2>
          <div className="flex flex-wrap gap-3">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "PWA"].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium border border-white/10">
                    {tech}
                </span>
            ))}
          </div>
        </div>

        {/* Contact Section (Updated) */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <h2 className="text-2xl font-bold mb-2 text-primary">Get In Touch</h2>
          <p className="text-muted-foreground mb-6">Have feedback or found an issue? We'd love to hear from you.</p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
                onClick={() => setIsContactOpen(true)}
                className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 h-12 text-base"
            >
              <QrCode className="w-5 h-5" />
              Contact Us
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-border/50 space-y-3 mt-12">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made by <span className="font-bold text-foreground">Rizky BKP</span> <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> for Yu-Gi-Oh fans
          </p>
          <p className="text-sm text-muted-foreground/60">© 2025 Yu-Gi-Oh Catalog. Not affiliated with Konami.</p>
        </div>
      </div>

      {/* --- CONTACT MODAL (BARCODE) --- */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white text-black p-8 rounded-2xl shadow-2xl max-w-sm w-full relative animate-in zoom-in-95 duration-200">
                <button 
                    onClick={() => setIsContactOpen(false)}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X className="w-6 h-6 text-gray-500" />
                </button>

                <div className="text-center space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold mb-1">Scan to Chat</h3>
                        <p className="text-gray-500 text-sm">Scan this code to contact us via WhatsApp</p>
                    </div>

                    {/* Area Barcode - GANTI src INI NANTI */}
                    <div className="aspect-square bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative">
                        {/* Placeholder Image (Ganti dengan QR Code asli lu) */}
                        <img 
                            src="Me.png" 
                            alt="Contact QR Code"
                            className="w-full h-full object-contain p-4"
                        />
                    </div>

                    <Button 
                        onClick={() => setIsContactOpen(false)}
                        variant="outline" 
                        className="w-full border-gray-300 text-white hover:bg-gray-50"
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
      )}

      <Navigation />
    </main>
  )
}