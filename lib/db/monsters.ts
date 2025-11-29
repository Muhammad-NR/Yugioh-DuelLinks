import { Card } from "@/lib/def";


export const MONSTER_CARDS: Card[] = [
  {
    id: "1",
    name: "Blue-Eyes White Dragon",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Dragon / Normal ]</b>
    This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.`,
    atk: 3000,
    def: 2500,
    level: 8,
    attribute: "Light",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/monsters/Blue-Eyes White Dragon.webp",
  },
  {
    id: "2",
    name: "Blue-Eyes Chaos Dragon",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Dragon / Ritual / Effect ]</b>
    You can Ritual Summon this card with "Chaos Form". 
    \nMust be Ritual Summoned. 
    \nYour opponent cannot target this card with card effects, 
    also it cannot be destroyed by your opponent's card effects. 
    \nIf this card was Ritual Summoned using "Blue-Eyes White Dragon", when it declares an attack: You can change the battle positions of as many monsters your opponent controls as possible, and if you do, the ATK/DEF of those changed monsters become 0, also, this turn, if this card attacks a Defense Position monster, inflict piercing battle damage.`,
    atk: 3000,
    def: 0,
    level: 8,
    attribute: "Dark",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/monsters/Blue-Eyes Chaos Dragon.webp",
  },
  {
    id: "3",
    name: "Blue-Eyes Alternative White Dragon",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Dragon / Effect ]</b>
    This card cannot be Normal Summoned or Set.
    \nYou can Special Summon this card (from your hand) by revealing "Blue-Eyes White Dragon" in your hand. 
    \nYou can only Special Summon "Blue-Eyes Alternative White Dragon" once per turn this way. 
    \nThis card's name becomes "Blue-Eyes White Dragon" while it is on the field or in the GY. 
    \nOnce per turn: You can target 1 monster your opponent controls; destroy that target.`,
    atk: 3000,
    def: 2500,
    level: 8,
    attribute: "Light",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/monsters/Blue-Eyes Alternative White Dragon.webp",
  },
  {
    id: "4",
    name: "Kaibaman the Legend",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Warrior / Tuner / Effect ]</b>
    \nIf this card is Normal or Special Summoned: You can show 3 "Blue-Eyes White Dragon" in your hand, Deck, face-up field, and/or GY, then Special Summon 1 "Blue-Eyes White Dragon" from your hand, Deck, or GY.
    \nIf you Special Summoned "Blue-Eyes White Dragon" while this card is in your GY (except during the Damage Step): You can banish this card; add 1 "Blue-Eyes" monster from your Deck to your hand.
    \nYou can only use each effect of "Kaibaman the Legend" once per turn.`,
    atk: 200,
    def: 700,
    level: 1,
    attribute: "Light",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/monsters/Kaibaman the Legend.webp",
  },
  {
    id: "5",
    name: "Blue-Eyes Jet Dragon",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Dragon / Effect ]</b>
    Other cards you control cannot be destroyed by your opponent's card effects.
    \nYou can only use each of the following effects of "Blue-Eyes Jet Dragon" once per turn, and can only activate them while "Blue-Eyes White Dragon" is on your field or in your GY.
    \nIf a card(s) on the field is destroyed by battle or card effect: You can Special Summon this card from the GY (if it was there when the card was destroyed) or hand (even if not).
    \nAt the start of the Damage Step, if this card battles: You can target 1 card your opponent controls; return it to the hand.`,
    atk: 3000,
    def: 0,
    level: 8,
    attribute: "Light",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/monsters/Blue-Eyes Jet Dragon.webp",
  },
  {
    id: "6",
    name: "Grandtusk Dragon",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Dragon / Effect ]</b>
    If this card is Normal or Special Summoned: You can target up to 2 other cards on the field; destroy them, and if you do, this card gains 600 ATK for each card destroyed.
    \nYou can only use this effect of "Grandtusk Dragon" once per turn.`,
    atk: 1400,
    def: 2400,
    level: 8,
    attribute: "Earth",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/monsters/Grandtusk Dragon.webp",
  },
  {
    id: "7",
    name: "Skull Meister",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Fiend / Effect ]</b>
    When a card effect is activated in your opponent's GY (Quick Effect): You can send this card from your hand to the GY; negate that effect.`,
    atk: 1700,
    def: 400,
    level: 4,
    attribute: "Dark",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/monsters/Skull Meister.webp",
  },    
  {
    id: "8",
    name: "Blue-Eyes Tyrant Dragon",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Dragon / Fusion / Effect ]</b>
    "Blue-Eyes White Dragon" + 1 Dragon monster
    \nMust first be either Fusion Summoned, or Special Summoned from your Extra Deck by Tributing 1 "Blue-Eyes White Dragon" equipped with a Fusion Monster.
    \nUnaffected by Trap Cards or effects.
    \nThis card can attack all monsters your opponent controls, once each.
    \nOnce per turn, at the end of the Damage Step, if this card battled: You can target 1 Trap in your GY; Set it to your Spell & Trap Zone.`,
    atk: 3400,
    def: 2900,
    level: 8,
    attribute: "Light",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/extra_deck/Blue-Eyes Tyrant Dragon.webp",
  },
  {
    id: "9",
    name: "Blue-Eyes Spirit Dragon",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Dragon / Synchro / Effect ]</b>
   1 Tuner + 1 or more non-Tuner monsters "Blue-Eyes" monsters
   \nNeither player can Special Summon 2 or more monsters at the same time.
   \nOnce per turn, during either player's turn, when an effect of a card in the Graveyard is activated: You can negate the activation.
   \nDuring either player's turn: You can Tribute this Synchro Summoned card; Special Summon 1 LIGHT Dragon-Type Synchro Monster from your Extra Deck in Defense Position, except "Blue-Eyes Spirit Dragon", but destroy it during the End Phase of this turn.`,    
    atk: 2500,
    def: 3000,
    level: 9,
    attribute: "Light",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/extra_deck/Blue-Eyes Spirit Dragon.webp",
  },
  {
    id: "10",
    name: "Azure-Eyes Silver Dragon",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Dragon / Synchro / Effect ]</b>
    1 Tuner + 1+ non-Tuner Normal Monsters
    \nIf this card is Special Summoned: Until the end of the next turn, neither player can target Dragon monsters you currently control with card effects, also they cannot be destroyed by card effects.
    \nOnce per turn, during your Standby Phase: You can target 1 Normal Monster in your GY; Special Summon it.`,
    atk: 2500,
    def: 3000,
    level: 9,
    attribute: "Light",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/extra_deck/Azure-Eyes Silver Dragon.webp",
  },
  {
    id: "11",
    name: "Black Rose Moonlight Dragon",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Dragon / Synchro / Effect ]</b>
    1 Tuner + 1 or more non-Tuner monsters
    \nIf this card is Special Summoned, or a Level 5 or higher monster(s) is Special Summoned to your opponent's side of the field: Target 1 Special Summoned monster your opponent controls; return that target to the hand.
    \nYou can only use this effect of "Black Rose Moonlight Dragon" once per turn.`,  
    atk: 2400,
    def: 1800,
    level: 7,
    attribute: "Light",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/extra_deck/Black Rose Moonlight Dragon.webp",
  },
  {
    id: "12",
    name: "Lightstorm Dragon",
    type: "Monster",
    rarity: "Rare",
    description: `<b>[ Dragon / Synchro / Effect ]</b>
    1 Tuner + 1+ non-Tuner monsters
   \nIf this card is Special Summoned: You can target Spells/Traps on the field up to the number of Normal Monsters in your GY +1; destroy them.
   \nIf this card is destroyed by battle or card effect: You can target 1 Spell/Trap in your GY; Set it, but it cannot be activated unless you control a Normal Monster.
   \nYou can only use each effect of "Lightstorm Dragon" once per turn.`,  
    atk: 2700,
    def: 3000,
    level: 9,
    attribute: "Light",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/extra_deck/Lightstorm Dragon.webp",
  },
  {
    id: "13",
    name: "Divine Dragon Knight Felgrand",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Warrior / Xyz / Effect ]</b>
    2 Level 8 monsters
    \nOnce per turn, during either player's turn: You can detach 1 Xyz Material from this card, then target 1 face-up monster on the field; this turn, its effects are negated, but it is unaffected by other card effects.`,
    atk: 2800,
    def: 1800,
    level: 8,
    attribute: "Light",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/extra_deck/Divine Dragon Knight Felgrand.webp",
  },
  { 
    id: "14",
    name: "Dingirsu, the Orcust of the Evening Star",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Machine / Xyz / Effect ]</b>
    2 Level 8 monsters
    \nYou can only Special Summon "Dingirsu, the Orcust of the Evening Star(s)" once per turn.
    \nYou can also Xyz Summon this card by using an "Orcust" Link Monster you control as material.
    \nIf a card(s) you control would be destroyed by battle or card effect, you can detach 1 material from this card instead.
    \nIf this card is Special Summoned: You can activate 1 of these effects;
    \n● Send 1 card your opponent controls to the GY.
    \n● Attach 1 of your banished Machine monsters to this card as material.`,
    atk: 2600,
    def: 2100,
    level: 8,
    attribute: "Dark",
    deckTypes: ["Blue-Eyes", "Despia"],
    image: "/cards/extra_deck/Dingirsu the Orcust of the Evening Star.webp",
  },
  {  
    id: "15",
    name: "Hieratic Seal of the Heavenly Spheres",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Dragon / Link / Effect ]</b>
    2 Dragon monsters
    \nOnce per opponent's turn, if this card is in the Extra Monster Zone (Quick Effect): You can Tribute 1 monster from your hand or field; return 1 face-up card on the field to the hand.
    \nIf this card is Tributed: Special Summon 1 Dragon monster from your hand or Deck, but make its ATK/DEF 0.
    \nYou can only use this effect of "Hieratic Seal of the Heavenly Spheres" once per turn.`,
    atk: 0,
    LINK: 2,
    attribute: "Light",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/extra_deck/Hieratic Seal of the Heavenly Spheres.webp",
  },
  {
    id: "16",
    name: "Salamangreat Almiraj",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Cyberse / Link / Effect ]</b>
    1 Normal Summoned monster with 1000 or less ATK
    \n(Quick Effect): You can Tribute this card, then target 1 monster you control; it cannot be destroyed by your opponent's card effects this turn.
    \nWhen a Normal Summoned monster you control is destroyed by battle, while this card is in your GY: You can Special Summon this card.
    \nYou can only use this effect of "Salamangreat Almiraj" once per turn.`,
    atk: 0,
    LINK: 1,
    attribute: "Fire",
    deckTypes: ["Blue-Eyes", "Salamangreat"],
    image: "/cards/extra_deck/Salamangreat Almiraj.webp",
  },
  {
    id: "17",
    name: "Aluber the Jester of Despia",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Fairy / Effect ]</b>
    If this card is Normal or Special Summoned: You can add 1 "Branded" Spell/Trap from your Deck to your hand.
    \nIf a face-up Fusion Monster(s) you control is destroyed by battle, or leaves the field because of an opponent's card effect, while this card is in your GY: You can target 1 Effect Monster your opponent controls; Special Summon this card, and if you do, negate the targeted monster's effects until the end of this turn.
    \nYou can only use 1 "Aluber the Jester of Despia" effect per turn, and only once that turn.`,
    atk: 1800,
    def: 0,
    level: 4,
    attribute: "Dark",
    deckTypes: ["Despia"],
    image: "/cards/monsters/Aluber the Jester of Despia.webp",
  },
  {
    id: "18",
    name: "Dramaturge of Despia",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Fairy / Effect ]</b>
    If a Fusion, Synchro, Xyz, or Link Monster is Special Summoned (except during the Damage Step): You can target 1 Effect Monster on the field; negate its effects until the end of this turn.
    \nIf this card in your hand or field is used as Fusion Material, and sent to the GY or banished: You can Special Summon this card.
    \nYou can only use each effect of "Dramaturge of Despia" once per turn.`,
    atk: 3000,
    def: 1500,
    level: 8,
    attribute: "Dark",
    deckTypes: ["Despia"],
    image: "/cards/monsters/Dramaturge of Despia.webp",
  },
  {
    id: "19",
    name: "Darklord Morningstar",
    type: "Monster",
    rarity: "Rare",
    description: `<b>[ Fairy / Effect ]</b>
    Cannot be Special Summoned.
    \nIf this card is Tribute Summoned: You can Special Summon "Darklord" monsters from your hand and/or Deck, up to the number of Effect Monsters your opponent controls.
    \nWhile you control another "Darklord" monster, your opponent cannot target this card with card effects.
    \nOnce per turn: You can send cards from the top of your Deck to the Graveyard, equal to the number of "Darklord" monsters on the field, and if you do, gain 500 LP for each "Darklord" card sent to the Graveyard by this effect.`,
    atk: 3000,
    def: 3000,
    level: 11,
    attribute: "Dark",
    deckTypes: ["Despia"],
    image: "/cards/monsters/Darklord Morningstar.webp",
  },
  {
    id: "20",
    name: "Ad Libitum of Despia",
    type: "Monster",
    rarity: "Rare",
    description: `<b>[ Fairy / Effect ]</b>
    During your Main Phase: You can make all face-up monsters currently on the field gain ATK equal to their Level x 100, until the end of your opponent's turn.
    \nIf this card is used as material for a Fusion Summon from the hand or field, and sent to the GY or banished: You can target 1 of your "Despia" monsters or 1 of your Level 8 or higher Fusion Monsters that is banished or in your GY, except "Ad Libitum of Despia"; Special Summon it.
    \nYou can only use each effect of "Ad Libitum of Despia" once per turn.`,
    atk: 1500,
    def: 2000,
    level: 8,
    attribute: "Dark",
    deckTypes: ["Despia"],
    image: "/cards/monsters/Ad Libitum of Despia.webp", 
  },
  {
    id: "21",
    name: "Despian Comedy",
    type: "Monster",
    rarity: "Normal",
    description: `<b>[ Fairy / Effect ]</b>
    When your opponent activates a card or effect that targets a face-up "Despia" card(s) you control (Quick Effect): You can discard this card; negate that effect.
    \nIf this card is in your GY (Quick Effect): You can Tribute 1 Fusion Monster; Special Summon this card.
    \nYou can only use 1 "Despian Comedy" effect per turn, and only once that turn.`,
    atk: 0,
    def: 2000,
    level: 1,
    attribute: "Dark",
    deckTypes: ["Despia"],
    image: "/cards/monsters/Despian Comedy.webp",
  },
  {
    id: "22",
    name: "Despian Tragedy",
    type: "Monster",
    rarity: "Normal",
    description: `<b>[ Fairy / Effect ]</b>
    If this card is sent to the GY, or banished, by a card effect: You can add 1 "Despia" monster from your Deck to your hand, except "Despian Tragedy".
    \nYou can banish this card from your GY, then target 1 "Branded" Spell/Trap in your GY; Set it to your field.
    \nYou can only use 1 "Despian Tragedy" effect per turn, and only once that turn.`,
    atk: 400,
    def: 400,
    level: 1,
    attribute: "Dark",
    deckTypes: ["Despia"],
    image: "/cards/monsters/Despian Tragedy.webp",
  },
  {
    id: "23",
    name: "Masquerade the Blazing Dragon",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Dragon / Fusion / Effect ]</b>
    1 "Despia" monster + 1 LIGHT or DARK monster
    \nWhile you control this Fusion Summoned card, your opponent must pay 600 LP to activate cards or effects.
    \nIf your opponent controls a Ritual, Fusion, Synchro, Xyz, or Link Monster, while this card is in your GY (Quick Effect): You can Special Summon this card, but banish it when it leaves the field.
    \nYou can only use this effect of "Masquerade the Blazing Dragon" once per turn.`,
    atk: 2500,
    def: 2000,
    level: 8,
    attribute: "Dark",
    deckTypes: ["Despia"],
    image: "/cards/extra_deck/Masquerade the Blazing Dragon.webp",
  },
  {
    id: "24",
    name: "Starving Venom Fusion Dragon",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Dragon / Fusion / Effect ]</b>
    2 DARK monsters on the field, except Tokens
    \nIf this card is Fusion Summoned: You can make this card gain ATK equal to 1 opponent's Special Summoned monster, until the end of this turn.
    \nOnce per turn: You can target 1 Level 5 or higher monster your opponent controls; until the End Phase, this card's name becomes that monster's original name, and replace this effect with that monster's original effects.
    \nIf this Fusion Summoned card is destroyed: You can destroy all your opponent's Special Summoned monsters.`,
    atk: 2800,
    def: 2000,
    level: 8,
    attribute: "Dark",
    deckTypes: ["Despia"],
    image: "/cards/extra_deck/Starving Venom Fusion Dragon.webp",
  },
  {
    id: "25",
    name: "The First Darklord",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Fairy / Fusion / Effect ]</b>
    3 DARK Fairy monsters
    \nYour opponent cannot target Fairy monsters you control with card effects.
    \nYou can only use 1 of the following effects of "The First Darklord" per turn, and only once that turn.
    \n● If this card is Fusion Summoned using "Darklord Morningstar" as material: You can destroy all cards your opponent controls.
    \n● During the Main Phase (Quick Effect): You can pay 1000 LP; Special Summon 1 Fairy monster from your hand or GY in Defense Position.`,
    atk: 4000,
    def: 4000,
    level: 12,
    attribute: "Dark",
    deckTypes: ["Despia"],
    image: "/cards/extra_deck/The First Darklord.webp",
  },
  {
    id: "26",
    name: "Despian Quaeritis",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Fairy / Fusion / Effect ]</b>
    1 "Despia" monster + 1 LIGHT or DARK monster
    \nDuring the Main Phase (Quick Effect): You can change the ATK of all monsters currently on the field to 0 until the end of this turn, except Level 8 or higher Fusion Monsters.
    \nIf this face-up card in its owner's control leaves the field because of an opponent's card effect: You can add to your hand, or Special Summon, 1 "Fallen of Albaz" or 1 "Despia" monster, from your Deck.
    \nYou can only use each effect of "Despian Quaeritis" once per turn.`,
    atk: 2500,
    def: 2500,
    level: 8,
    attribute: "Light",
    deckTypes: ["Despia"],
    image: "/cards/extra_deck/Despian Quaeritis.webp",
  },
  {
    id: "27",
    name: "Despian Proskenion",
    type: "Monster",
    rarity: "Normal",
    description: `<b>[ Fiend / Fusion / Effect ]</b>
    1 "Despia" monster + 1 LIGHT monster + 1 DARK monster
    \nDuring the Main Phase (Quick Effect): You can target 1 Fusion, Synchro, Xyz, or Link Monster in your opponent's GY; banish it, or Special Summon it to your field.
    \nWhen this card destroys an opponent's monster by battle: You can inflict damage to your opponent equal to half that monster's original ATK or DEF (whichever is higher).
    \nYou can only use each effect of "Despian Proskenion" once per turn.`,
    atk: 3200,
    def: 3200,
    level: 11,
    attribute: "Light",
    deckTypes: ["Despia"],
    image: "/cards/extra_deck/Despian Proskenion.webp",
  },
  {
    id: "28",
    name: "Condemned Darklord",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Fairy / Link / Effect ]</b>
    2 Fairy monsters
    \nYou can Tribute Summon Fairy monsters that require 2 Tributes by banishing 2 monsters from your GY instead of Tributing (it is still treated as a Tribute Summon).
    \nYou can discard 1 card; take 1 "Darklord" monster from your Deck, and either add it to your hand or send it to the GY.
    \nYou can only use this effect of "Condemned Darklord" once per turn.
    \nOnce per turn, during your End Phase: Gain 500 LP for each Fairy monster on the field.`,
    atk: 1600,
    LINK: 2,
    attribute: "Dark",
    deckTypes: ["Despia"],
    image: "/cards/extra_deck/Condemned Darklord.webp",
  },
  {
    id: "29",
    name: "Fallen of Albaz",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Dragon / Effect ]</b>
    If this card is Normal or Special Summoned (except during the Damage Step): You can discard 1 card; Fusion Summon 1 Fusion Monster from your Extra Deck, using monsters on either field as Fusion Material, including this card, but you cannot use other monsters you control as Fusion Material.
    \nYou can only use this effect of "Fallen of Albaz" once per turn.`,
    atk: 1800,
    def: 0,
    level: 4,
    attribute: "Dark",
    deckTypes: ["Despia"],
    image: "/cards/monsters/Fallen of Albaz.webp",
  },
  {
    id: "30",
    name: "Blue-Eyes Ultimate Dragon",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Dragon / Fusion ]</b>
    "Blue-Eyes White Dragon" + "Blue-Eyes White Dragon" + "Blue-Eyes White Dragon"`,
    atk: 4500,
    def: 3800,
    level: 12,
    attribute: "Light",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/extra_deck/Blue-Eyes Ultimate Dragon.webp",
  },
  {
    id: "31",
    name: "Black Luster Soldier",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Warrior / Ritual ]</b>
    You can Ritual Summon this card with "Black Luster Ritual".`,
    atk: 3000,
    def: 2500,
    level: 8,
    attribute: "Earth",
    deckTypes: ["Blue-Eyes"],
    image: "/cards/monsters/Black Luster Soldier.webp",
  },
  {
    id: "32",
    name: "Elemental HERO Neos",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Warrior / Normal ]</b>
    "A new Elemental HERO has arrived from Neo-Space! When he initiates a Contact Fusion with a Neo-Spacian his unknown powers are unleashed."`,
    atk: 2500,
    def: 2000,
    level: 7,
    attribute: "Light",
    deckTypes: ["HERO"],
    image: "/cards/monsters/Elemental HERO Neos.webp",
  },
  {
    id: "33",
    name: "Rainbow Dragon",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Dragon / Effect ]</b>
    (This card is always treated as an "Ultimate Crystal" card.)
    \nCannot be Normal Summoned/Set.
    \nMust be Special Summoned (from your hand) by having 7 "Crystal Beast" cards with different names on your field and/or GY.
    \nThis card cannot activate the following effects the turn it is Special Summoned.
    \n(Quick Effect): You can send all face-up "Crystal Beast" monsters you control to the GY; this card gains 1000 ATK for each monster sent to the GY.
    \nYou can banish all "Crystal Beast" monsters from your GY; shuffle all cards on the field into the Deck.`,
    atk: 4000,
    def: 0,
    level: 10,
    attribute: "Light",
    deckTypes: ["Crystal Beast", "HERO"],
    image: "/cards/monsters/Rainbow Dragon.webp",
  },
  {
    id: "34",
    name: "Armed Dragon Thunder LV10",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Dragon / Effect ]</b>
    If this card was Special Summoned by the effect of an "Armed Dragon" monster, it gains effects based on its own ATK.
    \n● 1+: This card's name becomes "Armed Dragon LV10".
    \n● 10+: Possession of this card cannot switch.
    \n● 100+: Cannot be destroyed by battle.
    \n● 1000+: Once per turn, during your opponent's turn (Quick Effect): You can send 1 card from your hand to the GY, then target 1 other card on the field; destroy it, and if you do, this card gains 1000 ATK.
    \n● 10000+: Once per turn: You can destroy all other cards on the field.`,
    atk: 3000,
    def: 2000,
    level: 10,
    attribute: "Wind",
    deckTypes: ["Armed Dragon", "HERO"],
    image: "/cards/monsters/Armed Dragon Thunder LV10.webp",
  },
  {
    id: "35",
    name: "Number 39: Utopia",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Warrior / Xyz / Effect ]</b>
    2 Level 4 monsters
    \nWhen a monster declares an attack: You can detach 1 material from this card; negate the attack.
    \nIf this card is targeted for an attack, while it has no material: Destroy this card.`,
    atk: 2500,
    def: 2000,
    level: 4,
    attribute: "Light",
    deckTypes: ["Utopia"],
    image: "/cards/extra_deck/Number 39 Utopia.jpg",
  },
  {
    id: "36",
    name: "Astraltopia",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Warrior / Effect ]</b>
    If an Xyz Monster(s) is on the field: You can Special Summon this card from your hand.
    \nYou can send 1 other card from your hand or field to the GY; add 1 "Xyz", "Onomat", "Zexal", or "Number" Spell/Trap, from your Deck to your hand.
    \nYou can only use each effect of "Astraltopia" once per turn.`,
    atk: 0,
    def: 0,
    level: 4,
    attribute: "Light",
    deckTypes: ["Utopia"],
    image: "/cards/monsters/Astraltopia.jpg",
  },
  {
    id: "37",
    name: "Number C39: Utopia Ray Victory",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Warrior / Xyz / Effect ]</b>
    3 Level 5 monsters
    \nIf this card attacks, your opponent cannot activate any Spell/Trap Cards until the end of the Damage Step.
    \nIf this card has a "Utopia" monster as an Xyz Material, it gains this effect.
    \n● When this card declares an attack on a face-up monster your opponent controls: You can detach 1 Xyz Material from this card; negate that opponent's face-up monster's effects, also this card gains ATK equal to that opponent's monster's ATK.
    \nThese changes last until the end of this turn.`,
    atk: 2800,
    def: 2500,
    level: 5,
    attribute: "Light",
    deckTypes: ["Utopia"],
    image: "/cards/extra_deck/Number C39 Utopia Ray Victory.jpg",
  },
  {
    id: "38",
    name: "Sky Striker Ace - Roze",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Warrior / Effect ]</b>
    If a "Sky Striker Ace" monster(s) is Normal or Special Summoned, except "Sky Striker Ace - Roze" (except during the Damage Step): You can Special Summon this card from your hand.
    \nIf an opponent's monster in the Extra Monster Zone is destroyed by battle, or leaves the field because of your card effect, while this card is in your GY: You can Special Summon this card, then you can negate the effects of 1 face-up monster your opponent controls, until the end of this turn.
    \nYou can only use each effect of "Sky Striker Ace - Roze" once per turn.`,
    atk: 1500,
    def: 1500,
    level: 4,
    attribute: "Light",
    deckTypes: ["Sky Striker"],
    image: "/cards/monsters/Sky Striker Ace - Roze.jpg",
  },
  {
    id: "39",
    name: "Sky Striker Ace - Raye",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Warrior / Effect ]</b>
   (Quick Effect): You can Tribute this card; Special Summon 1 "Sky Striker Ace" monster from your Extra Deck to the Extra Monster Zone.
    \nWhile this card is in your GY, if a face-up "Sky Striker Ace" Link Monster you control is destroyed by battle, or leaves the field because of an opponent's card effect: You can Special Summon this card.
    \nYou can only use each effect of "Sky Striker Ace - Raye" once per turn.`,
    atk: 1500,
    def: 1500,
    level: 4,
    attribute: "Dark",
    deckTypes: ["Sky Striker"],
    image: "/cards/monsters/Sky Striker Ace - Raye.jpg",
  },
  {
    id: "40",
    name: "Surgical Striker - H.A.M.P.",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Machine / Effect ]</b>
    (This card is always treated as a "Sky Striker" card.)
    \nIf you control a "Sky Striker Ace" monster, you can Special Summon this card (from your hand) to either field by Tributing 1 monster from that field.
    \nYou can only Special Summon "Surgical Striker - H.A.M.P." once per turn this way.
    \nWhen this card is destroyed by battle: You can target 1 card your opponent controls; destroy it.`,
    atk: 2500,
    def: 2500,
    level: 8,
    attribute: "Dark",
    deckTypes: ["Sky Striker"],
    image: "/cards/monsters/Surgical Striker - H.A.M.P..jpg",
  },
  {
    id: "41",
    name: "Sky Striker Ace - Hayate",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Machine / Link / Effect ]</b>
    1 non-WIND "Sky Striker Ace" monster
    \nYou can only Special Summon "Sky Striker Ace - Hayate(s)" once per turn.
    \nThis card can attack directly.
    \nAfter damage calculation, if this card battled: You can send 1 "Sky Striker" card from your Deck to the GY.`,
    atk: 1500,
    LINK: 1,
    attribute: "Wind",
    deckTypes: ["Sky Striker"],
    image: "/cards/extra_deck/Sky Striker Ace - Hayate.jpg",
  },
  {
    id: "42",
    name: "Sky Striker Ace - Kaina",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Machine / Link / Effect ]</b>
    1 non-EARTH "Sky Striker Ace" monster
    \nIf this card is Special Summoned: You can target 1 face-up monster your opponent controls; it cannot attack until the end of your opponent's turn.
    \nEach time you activate a "Sky Striker" Spell Card, or its effect, gain 100 LP immediately after the card or effect resolves.
    \nYou can only Special Summon "Sky Striker Ace - Kaina(s)" once per turn.`,
    atk: 1500,
    LINK: 1,
    attribute: "Earth",
    deckTypes: ["Sky Striker"],
    image: "/cards/extra_deck/Sky Striker Ace - Kaina.jpg",
  },
  {
    id: "43",
    name: "Sky Striker Ace - Shizuku",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Machine / Link / Effect ]</b>
    1 non-WATER "Sky Striker Ace" monster
    \nMonsters your opponent controls lose 100 ATK/DEF for each Spell in your GY.
    \nOnce per turn, during the End Phase, if this card was Special Summoned this turn: You can add 1 "Sky Striker" Spell from your Deck to your hand, with a name different from the cards in your GY.
    \nYou can only Special Summon "Sky Striker Ace - Shizuku(s)" once per turn.`,
    atk: 1500,
    LINK: 1,
    attribute: "Water",
    deckTypes: ["Sky Striker"],
    image: "/cards/extra_deck/Sky Striker Ace - Shizuku.jpg",
  },
  {
    id: "44",
    name: "Sky Striker Ace - Zeke",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Machine / Link / Effect ]</b>
    2 monsters, including a "Sky Striker Ace" monster
    \nMust be Link Summoned.
    \nYou can only Special Summon "Sky Striker Ace - Zeke(s)" once per turn.
    \nIf this card is Link Summoned: You can target 1 face-up monster on the field; banish it until your opponent's next End Phase.
    \nOnce per turn: You can target 1 other card you control; this card gains 1000 ATK, then, send the targeted card to the GY.`,
    atk: 1500,
    LINK: 2,
    attribute: "Dark",
    deckTypes: ["Sky Striker"],
    image: "/cards/extra_deck/Sky Striker Ace - Zeke.jpg",
  },
  {
    id: "45",
    name: "Sky Striker Ace - Kagari",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Machine / Link / Effect ]</b>
    1 non-FIRE "Sky Striker Ace" monster
    \nIf this card is Special Summoned: You can target 1 "Sky Striker" Spell in your GY; add it to your hand.
    \nGains 100 ATK for each Spell in your GY.
    \nYou can only Special Summon "Sky Striker Ace - Kagari(s)" once per turn.`,
    atk: 1500,
    LINK: 1,
    attribute: "Fire",
    deckTypes: ["Sky Striker"],
    image: "/cards/extra_deck/Sky Striker Ace - Kagari.jpg",
  },
  {
    id: "46",
    name: "Shinobaron Peacock",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Winged Beast / Ritual / Effect / Spirit ]</b>
    You can Ritual Summon this card with "Shinobird's Calling".
    \nMust be Ritual Summoned, and cannot be Special Summoned by other ways.
    \nIf this card is Ritual Summoned: You can return up to 3 monsters your opponent controls to the hand, then you can Special Summon 1 Level 4 or lower Spirit monster from your hand, ignoring its Summoning conditions.
    \nOnce per turn, during the End Phase, if this card was Special Summoned this turn: Return it to the hand, and if you do, Special Summon 2 "Shinobird Tokens" (Winged Beast-Type/WIND/Level 4/ATK 1500/DEF 1500).`,
    atk: 3000,
    def: 2500,
    level: 8,
    attribute: "Wind",
    deckTypes: ["Shinato's Judgment"],
    image: "https://images.ygoprodeck.com/images/cards/52900000.jpg",
  },
  {
    id: "47",
    name: "Shinobaroness Peacock",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Winged Beast / Ritual / Effect / Spirit ]</b>
    You can Ritual Summon this card with "Shinobird's Calling".
    \nMust be Ritual Summoned, and cannot be Special Summoned by other ways.
    \nIf this card is Ritual Summoned: You can shuffle up to 3 Spell/Trap Cards your opponent controls into the Deck, then you can Special Summon 1 Level 4 or lower Spirit monster from your Deck, ignoring its Summoning conditions.
    \nOnce per turn, during the End Phase, if this card was Special Summoned this turn: Return it to the hand, and if you do, Special Summon 2 "Shinobird Tokens" (Winged Beast-Type/WIND/Level 4/ATK 1500/DEF 1500).`,
    atk: 2500,
    def: 3000,
    level: 8,
    attribute: "Wind",
    deckTypes: ["Shinato's Judgment"],
    image: "https://images.ygoprodeck.com/images/cards/25415052.jpg",  
  },
  {
    id: "48",
    name: "Shinobaron Shade Peacock",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Winged Beast / Ritual / Spirit / Effect ]</b>
    You can Ritual Summon this card with "Shinobird's Calling".
    \nThis card's name becomes "Shinobaron Peacock" while in the hand or on the field.
    \nYou can Tribute this Ritual Summoned card; add 1 Spirit monster and 1 Ritual Spell from your Deck to your hand.
    \nYou can only use this effect of "Shinobaron Shade Peacock" once per turn.
    \nOnce per turn, during the Standby Phase of the next turn after this card was banished: Special Summon this banished card.
    \nOnce per turn, during the End Phase, if this card was Special Summoned this turn: Return this card to the hand.`,
    atk: 2000,
    def: 1500,
    level: 4,
    attribute: "Wind",
    deckTypes: ["Shinato's Judgment"],
    image: "https://images.ygoprodeck.com/images/cards/60823690.jpg",  
  },
  {
    id: "49",
    name: "Shinobaroness Shade Peacock",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Winged Beast / Ritual / Spirit / Effect ]</b>
    You can Ritual Summon this card with "Shinobird's Calling".
    \nThis card's name becomes "Shinobaroness Peacock" while in the hand or on the field.
    \nIf this card is Ritual Summoned: You can add 1 Spell/Trap from your Deck to your hand that mentions "Spirit monster" in its text.
    \nYou can only use this effect of "Shinobaroness Shade Peacock" once per turn.
    \nOnce per turn, during the Standby Phase of the next turn after this card was banished: Special Summon this banished card.
    \nOnce per turn, during the End Phase, if this card was Special Summoned this turn: Return this card to the hand.`,
    atk: 1500,
    def: 2000,
    level: 4,
    attribute: "Wind",
    deckTypes: ["Shinato's Judgment"],
    image: "https://images.ygoprodeck.com/images/cards/33325951.jpg",  
  },
  {
    id: "50",
    name: "Droll & Lock Bird",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Spellcaster / Effect ]</b>
    If a card(s) is added from the Main Deck to your opponent's hand, except during the Draw Phase (Quick Effect): You can send this card from your hand to the GY; for the rest of this turn, cards cannot be added from either player's Main Deck to the hand.`,
    atk: 0,
    def: 0,
    level: 1,
    attribute: "Wind",
    deckTypes: ["Shinato's Judgment"],
    image: "https://images.ygoprodeck.com/images/cards/94145022.jpg",  
  },
  {
    id: "51",
    name: "Sakitama",
    type: "Monster",
    rarity: "Super Rare",
    description: `<b>[ Fairy / Spirit / Effect ]</b>
    Cannot be Special Summoned.
    \nOnce per turn, during the End Phase, if this card was Normal Summoned or flipped face-up this turn: Return this card to the hand.
    \nYou can only use each of the following effects of "Sakitama" once per turn.
    \nYou can reveal this card in your hand; immediately after this effect resolves, Normal Summon 1 Spirit monster from your hand.
    \nIf this card is Tributed: Target 1 Spirit monster in your GY; add it to your hand.`,
    atk: 400,
    def: 900,
    level: 4,
    attribute: "Earth",
    deckTypes: ["Shinato's Judgment"],
    image: "https://images.ygoprodeck.com/images/cards/67972302.jpg",  
  },
  {
    id: "52",
    name: "Shinato, King of a Higher Plane",
    type: "Monster",
    rarity: "Ultra Rare",
    description: `<b>[ Fairy / Ritual / Effect ]</b>
    This card can only be Ritual Summoned with the Ritual Spell Card, "Shinato's Ark".
    \nYou must also Tribute monsters whose total Levels equal 8 or more from the field or your hand.
    \nWhen this card destroys a Defense Position monster and sends it to the Graveyard as a result of battle, inflict damage to your opponent's Life Points equal to the original ATK of the destroyed monster.`,
    atk: 3300,
    def: 3000,
    level: 8,
    attribute: "Earth",
    deckTypes: ["Shinato's Judgment"],
    image: "https://images.ygoprodeck.com/images/cards/86327225.jpg", 
  }
  
]