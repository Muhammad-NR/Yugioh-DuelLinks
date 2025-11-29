import { Deck } from "@/lib/def";

export const DECKS_DATA: Deck[] = [
  {
    id: "1",
    name: "Blue-Eyes",
    tier: "S",
    description: "Highly consistent engine with easy access to negates and spot removal for now.",
    skill: "Master of Blue-Eyes",
    skillType: "Character",
    winRate: 61,
    usage: 24,
    difficulty: 8,
    popularity: 5,
    mainCards: [
      "Blue-Eyes Chaos Dragon",
      "Blue-Eyes Alternative White Dragon", "Blue-Eyes Alternative White Dragon",
      "Kaibaman the Legend", "Kaibaman the Legend", "Kaibaman the Legend",
      "Blue-Eyes Jet Dragon", "Blue-Eyes Jet Dragon",
      "Grandtusk Dragon",
      "Skull Meister", "Skull Meister",
      "Blue-Eyes White Dragon", "Blue-Eyes White Dragon", "Blue-Eyes White Dragon",
      
      "Vision with Eyes of Blue",
      "Forbidden Droplet", "Forbidden Droplet", "Forbidden Droplet",
      "Ultimate Fusion",
      "The Melody of Awakening Dragon", "The Melody of Awakening Dragon", "The Melody of Awakening Dragon",
      "Bingo Machine, Go!!!",
      
      "True Light",
      "Majesty of the White Dragons"
    ],
    extraCards: [
      "Blue-Eyes Tyrant Dragon",
      "Blue-Eyes Spirit Dragon",
      "Azure-Eyes Silver Dragon",
      "Black Rose Moonlight Dragon",
      "Lightstorm Dragon",
      "Divine Dragon Knight Felgrand",
      "Dingirsu, the Orcust of the Evening Star",
      "Hieratic Seal of the Heavenly Spheres",
      "Salamangreat Almiraj"
    ],
    strategy:
      "Use Tuner monsters to perform Synchro Summons and maintain field advantage with Swordsoul monsters. Control the pace of the game.",
  },
  {
    id: "2",
    name: "Despia",
    tier: "A",
    description: "Insane consistency that sets up a heavy LP tax on every activation, backed by an instant board wipe.",
    skill: "Theater of the Branded's Opening",
    skillType: "Universal",
    winRate: 56,
    usage: 18,
    difficulty: 7,
    popularity: 4,
    mainCards: [
      "Aluber the Jester of Despia", "Aluber the Jester of Despia",
      "Dramaturge of Despia", "Dramaturge of Despia", 
      "Fallen of Albaz",
      "Ad Libitum of Despia", "Ad Libitum of Despia",
      "Despian Comedy", "Despian Comedy",
      "Despian Tragedy", "Despian Tragedy", "Despian Tragedy",
      "Darklord Morningstar", "Darklord Morningstar",

      "Forbidden Droplet", "Forbidden Droplet",
      "Super Polymerization",
      "Banishment of the Darklords", "Banishment of the Darklords",
      "Branded in Red", "Branded in Red",
      "Branded Opening", "Branded Opening", "Branded Opening",
      "Despia, Theater of the Branded", "Despia, Theater of the Branded",
      "Mystical Space Typhoon", "Mystical Space Typhoon",

      "Judgment of the Branded", "Judgment of the Branded"
    ],
    extraCards: [
      "Masquerade the Blazing Dragon",
      "Starving Venom Fusion Dragon",
      "The First Darklord", "The First Darklord",
      "Despian Quaeritis", "Despian Quaeritis",
      "Despian Proskenion",
      "Condemned Darklord",
      "Dingirsu, the Orcust of the Evening Star",
    ],
    strategy: `Going 1st Your gameplan is as follows:

                 ● Not Brick (by playing lots of despias so the skill is always live)
                 ● Get to "Masquerade the Blazing Dragon"
                 ● Get "Darklord Morningstar"
                 ● Get "Branded in Red" so you can clear board on your opponent turn.
              
                 The "Going 1st" Combo
                      
            1. Use skill to add either Tragedy or Dramaturge, whichever you dont have.
            2. Use field to fuse the two, making "Masquerade the Blazing Dragon" in the middle of the main monster zone.
            3. Special Summon Dramaturge after the fusion, and add Aluber from Tragedy's effect
            4. Normal Aluber, add Branded in Red.
            5. Link Aluber and Dramaturge into Condemned Darklord.
            6. Use Condemned Darklord to discard a card to get Darklord Morningstar. Preferably disscarding Branded Opening for Graveyard protection for your fusion monsters from destruction.

            Note that using Branded Opening WILL lock you to fusions, so dont use it if you have a path to Condemned Darklord.

    This combo uses the 1 Despia you'll have in hand, a discard for Condemned Darklord and your skill, which means youre likely to stay with 2 more cards in hand which could be your other non-engine.

    Going 2nd My recommandation is to not underestimate Starving Venom Fusion Dragon, sometimes that card alone can be the game ender, attacking into a small monster using the ATK of something else the opponent has, especially if Quearitis resoved earlier. I Usually make sure i still get Tragedy and Dramaturge, since your skill will get you Branded in Red, you're mostly good to go.

    I like to send Ad Libitum to the Graveyard with the 2nd Skill effect, for extantion and revival if needed. In some cases the best cards to send to grave with your skills will be:

    Aluber
            ● When you see that your opponent WILL destroy your first fusion and you have no way to save it with Branded Opening, Aluber in grave will trigger and negate 1 of their monsters.
    Comedy
            ● When your opponent has target negation, such as Effect Veiler, Infinite Impermenance, or Swordsoul Chixiao. Tributing your Fusion monster will allow you to dodge those kind of effects.`,
  },
  {
    id: "3",
    name: "Sky Striker",
    tier: "A",
    description: "A control deck that grinds out resources while maintaining field presence with link monsters and powerful spell cards.",
    skill: "Sky Striker Ace Defying Fate",
    skillType: "Universal",
    winRate: 54,
    usage: 15,
    difficulty: 9,
    popularity: 3,
    mainCards: [
      "Sky Striker Ace - Raye", 
      "Sky Striker Ace - Roze", 
      "Surgical Striker - H.A.M.P.",
      
      "Sky Striker Mobilize - Engage!",  "Sky Striker Mobilize - Engage!", "Sky Striker Mobilize - Engage!",
      "Sky Striker Mecha - Widow Anchor", "Sky Striker Mecha - Widow Anchor", 
      "Sky Striker Mecha - Eagle Booster",
      "Sky Striker Mecha - Shark Cannon",
      "Sky Striker Maneuver - Jamming Waves!",
      "Sky Striker Maneuver - Afterburners!", "Sky Striker Maneuver - Afterburners!",
      "Sky Striker Mobilize - Linkage!", "Sky Striker Mobilize - Linkage!",
      "Mystical Space Typhoon", "Mystical Space Typhoon",  
    ],
    extraCards: [
      "Sky Striker Ace - Hayate",
      "Sky Striker Ace - Kaina",
      "Sky Striker Ace - Shizuku", "Sky Striker Ace - Shizuku",
      "Sky Striker Ace - Zeke", "Sky Striker Ace - Zeke",
      "Sky Striker Ace - Kagari", "Sky Striker Ace - Kagari",
    ],
    strategy: `The Sky Striker deck is a control-oriented deck that focuses on maintaining field presence through the use of Link Monsters and powerful Spell Cards. The deck's main strategy revolves around the Sky Striker Ace monsters, which can be summoned using the various Sky Striker Spell Cards.`,
  },
  {
    id: "4",
    name: "Shinobird",
    tier: "S",
    description: "Most broken deck for meta right now!",
    skill: "Shinato's Judgment",
    skillType: "Character",
    winRate: 70,
    usage: 30,
    difficulty: 10,
    popularity: 4.8,
    mainCards: [
      "Shinobaron Peacock",
      "Shinobaroness Peacock", "Shinobaroness Peacock",
      "Shinobaron Shade Peacock",
      "Shinobaroness Shade Peacock",
      "Droll & Lock Bird", "Droll & Lock Bird", "Droll & Lock Bird",
      "Sakitama",
      "Yaksha",
      "Aratama", "Aratama",
      "Nikitama", "Nikitama", "Nikitama",

      "Shinobird's Calling", "Shinobird's Calling", "Shinobird's Calling",
      "Pre-Preparation of Rites", "Pre-Preparation of Rites", "Pre-Preparation of Rites",
      "Forbidden Droplet", "Forbidden Droplet", "Forbidden Droplet",
      "Stars Align Above the Shrine",
      "Book of Eclipse",

      "Stars Align across the Milky Way",
    ],
    extraCards: [
      "Abyss Dweller", 
      "Tornado Dragon",
      "Decode Talker Heatsoul",
      "Knightmare Unicorn",
      "Salamangreat Almiraj",
      "Underworld Goddess of the Closed World",
      "I:P Masquerena",
      "Knightmare Phoenix",
      "Security Dragon",
    ],
    strategy: `A version a bit different from the standard, full combo can end board with an Amano-Iwato equipped with Mirror of Yata, and a second Amano on hand. First Amano will bait books or droplet, and hopefully opponent wont have an answer for the second one.`,
  }
]