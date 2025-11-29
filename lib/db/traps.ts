import { Card } from "@/lib/def";

export const TRAP_CARDS: Card[] = [
  {
    id: "121",
    name: "True Light",
    type: "Trap",
    rarity: "Rare",
    description: `Your opponent cannot target "Blue-Eyes White Dragon" in your Monster Zone with card effects.
    \nIf this face-up card is sent from the Spell & Trap Zone to the GY: Destroy all monsters you control.
    \nYou can only use the following effect of "True Light" once per turn.
    \nYou can activate 1 of these effects;
    \n● Special Summon 1 "Blue-Eyes White Dragon" from your hand or GY.
    \n● Set 1 Spell/Trap directly from your Deck, that specifically lists "Blue-Eyes White Dragon" in its text, with a different name from the cards you control and in your GY.`,
    attribute: "Continuous Trap",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/traps/True Light.webp",
  },
  {
    id: "122",
    name: "Majesty of the White Dragons",
    type: "Trap",
    rarity: "Normal",
    description: `Show up to 3 of the "Blue-Eyes White Dragon" in your hand, face-up Monster Zone, and/or GY, then destroy an equal number of cards your opponent controls.
    \nYou can banish this card from your GY; Ritual Summon 1 Ritual Monster from your hand, by Tributing "Blue-Eyes White Dragon(s)" from your hand or field whose total Levels equal its Level.
    \nYou can only use each effect of "Majesty of the White Dragons" once per turn.`,
    attribute: "Normal Trap",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/traps/Majesty of the White Dragons.webp",
  },
  {
    id: "123",
    name: "Judgment of the Branded",
    type: "Trap",
    rarity: "Normal",
    description: `Target 1 Level 8 or higher Fusion Monster you control; destroy all monsters your opponent controls with an equal or higher ATK than that monster.
    \nDuring the End Phase, if this card is in the GY because it was sent there to activate the effect of "Fallen of Albaz" this turn: You can Set this card.
    \nYou can only use this effect of "Judgment of the Branded" once per turn.`,
    attribute: "Normal Trap",
    deckTypes: ["Despia"],
    image: "/cards/traps/Judgment of the Branded.webp",
  },
]