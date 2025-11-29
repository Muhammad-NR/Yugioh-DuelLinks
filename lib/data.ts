
export * from "./def";

import { MONSTER_CARDS } from "./db/monsters";
import { SPELL_CARDS } from "./db/spells";
import { TRAP_CARDS } from "./db/traps";
import { DECKS_DATA } from "./db/decks";
import { SKILLS_DATA } from "./db/skills";

export const CARDS_DATA = [
  ...MONSTER_CARDS,
  ...SPELL_CARDS,
  ...TRAP_CARDS,
];

export { MONSTER_CARDS, SPELL_CARDS, TRAP_CARDS, DECKS_DATA, SKILLS_DATA };