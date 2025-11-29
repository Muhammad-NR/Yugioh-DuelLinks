import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yu-Gi-Oh! Duel Links Catalog',
    short_name: 'Duel Links DB',
    description: 'Catalog for Yu-Gi-Oh! Duel Links Cards and Meta Decks',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#09090b',
    icons: [
      {
        src: '/icon2.png', 
        sizes: '192x192',
        type: 'image/png', 
        purpose: 'any maskable', 
      },
      {
        src: '/icon2.png', 
        sizes: '512x512',
        type: 'image/png', 
        purpose: 'any maskable',
      },
    ],
  }
}