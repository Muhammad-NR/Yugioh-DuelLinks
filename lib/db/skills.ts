import { Skill } from "@/lib/def";  

export const SKILLS_DATA: Skill[] = [
  {
    id: "s1",
    name: "Master of Blue-Eyes",
    character: "Seto Kaiba",
    type: "Character",
    description: `You can use this Skill's first and second effects once per Duel if your Deck contains a total of 15 or more "Blue-Eyes White Dragon" cards or cards that mention it.
    1: Reveal 1 "Blue-Eyes" monster from your hand and add 1 "Blue-Eyes White Dragon" or another card that mentions it from your Deck to your hand. Then, send 1 "Blue-Eyes Ultimate Dragon" and 1 "Black Luster Soldier" from outside your Deck to the Graveyard.
    2: If you control a "Blue-Eyes" monster or only your opponent controls a monster, Set 1 Spell/Trap card that mentions "Blue-Eyes White Dragon". (This card can be activated the same turn.)`,
    image: "/Skill.png",
    characterImage: "/characters/seto-kaiba.webp",
    relatedCards: ["1", "30", "31",],
  },
  {
    id: "s2",
    name: "Theater of the Branded's Opening",
    type: "Universal",
    description: `You can only use this Skill's second and third effects once per Duel.
    1: You cannot Special Summon any monsters with a Level, except "Fallen of Albaz", "Despia" monsters, and DARK and LIGHT Level 8 or higher monsters.
    2: Reveal 1 "Despia" monster or "Branded Opening" from your hand, then shuffle 1 card from your hand into the Deck, and add 1 "Despia" monster or "Branded Opening" from your Deck to your hand. Then, you can add 1 "Despia, Theater of the Branded" from your Deck to your hand.
    3: If only your opponent controls a monster, send 1 "Despia" monster from your Deck to the Graveyard. Then, you can add 1 "Branded in Red" from your Deck to your hand.`, 
    image: "/Skill_Uni.png", 
    characterImage: "/characters/branded.jpg",
    relatedCards: ["29", "69", "70", "71"],
  },
  {
    id: "s3",
    name: "Dragonic Contact",
    type: "Character",
    character: "Jaden/Yubel",
    description: `You can use this Skill's second effect once per turn if your Deck contains "Rainbow Dragon".
    1: You cannot Special Summon monsters, except "Neos", "Yubel", "Elemental HERO", and "Neo-Spacian" monsters.
    2: Send 1 Warrior monster or Level 10 monster from your hand or face-up field to the Graveyard, then play 1 of the following monsters from your Deck or Graveyard in face-down Defense Position (its battle position can be changed), and add 1 "Super Polymerization" from your Deck and 1 "Polymerization" from outside of your Deck to your hand.
    - "Elemental HERO Neos"
    - "Ultimate Crystal" monster
    - WIND "Armed Dragon" monster (treated as having been Special Summoned by the effect of an "Armed Dragon" monster)`, 
    image: "/Skill.png",
    characterImage: "/characters/JadenYubel.webp",
    relatedCards: ["32", "33", "34", "72"],
  },
  {
    id: "s4",
    name: "ZEXAL II – Power the Future",
    character: "Yuma Tsukumo",
    type: "Character",
    description: `You can use each of this Skill's second and third effects once per turn and twice per Duel if your Deck contains "Number C39: Utopia Ray Victory".
    1: You cannot Special Summon any monsters from your Extra Deck, except Xyz Monsters, and you cannot Special Summon any monsters with Spell/Trap Cards, except "Utopia" monsters with 2500 ATK and/or DEF.
    2: Can be activated by shuffling 1 card from your hand into the Deck and revealing 1 "ZS -" monster or 1 "Astraltopia" in your hand. Yuma and Astral build the Overlay Network! ZEXAL Ⅱ morph! Add up to 2 "ZS -" monsters and/or "Astraltopia" from your Deck to your hand.
    3: Can be activated after morphing by shuffling 1 card from your hand or field into the Deck. Reveal the true form of 1 card in your hand, turning it into "Rank-Up-Magic Numeron Force", and play 1 "Number 39: Utopia" from outside of your Deck. Then, you can Xyz Summon "Number C39: Utopia Ray Victory" using that "Number 39: Utopia" you just played and 1 monster your opponent controls as material.`,
    image: "/Skill.png",
    characterImage: "/characters/yuma-astral.webp",
    relatedCards: ["35", "36", "37", "73"],
  },
  {
    id: "s5",
    name: "Sky Striker Ace Defying Fate",
    type: "Universal",
    description: `You can use each of this Skill's first and second effects once per Duel if your Deck contains 1 or more "Sky Striker Ace - Roze" and 9 or more "Sky Striker" Spell Cards.
    1: At the beginning of your first turn, add 4 "Sky Striker Ace" Link Monsters with different names to your Extra Deck (except monsters that your Extra Deck already contains 3 copies of), and place 1 "Sky Striker Airspace - Area Zero" from outside of your Deck face-up in your Field Zone.
    2: Send up to 2 "Sky Striker" cards from your hand and/or field (either face-up or face-down) to the Graveyard, then draw 1 card.`,
    image: "/Skill_Uni.png",
    characterImage: "/characters/sky-striker.png",
    relatedCards: ["38", "41", "42", "74"],
  },
  {
    id: "s6",
    name: "Shinato's Judgment",
    character: "Noah Kaiba",
    type: "Character",
    description: `You can only use this Skill's second, third, and fourth effect once per Duel.
    1: You cannot Normal or Special Summon (excluding Special Summons from the Extra Deck) Effect monsters, except Spirit monsters. You can Normal Summon/Set twice a turn.
    2: Reveal up to 2 Spirit monsters or Ritual Spell Cards from your hand and shuffle 1 card from your hand into the Deck. Then for the number of cards revealed this way, add Spirit monsters or Spell/Trap Cards that mention Spirit monsters from the Deck to your hand.
    3: If only your opponent controls a monster, play 1 "Shinato, King of a Higher Plane" from outside your Deck in face-down Defense Position. (Its battle position can be changed.)
    4: If you control "Shinato, King of a Higher Plane", add 1 "Change of Heart" from outside your Deck to your hand.`,
    image: "/Skill.png",
    characterImage: "https://ms.yugipedia.com//b/b4/NoahKaiba-DULI-CutIn.png",
    relatedCards: ["52", "84"],
  }
]