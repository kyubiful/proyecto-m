export interface WowCharacter {
  name: string;
  race: string;
  class: string;
  active_spec_name: string;
  active_spec_role: string;
  gender: string;
  faction: string;
  achievement_points: number;
  honorable_kills: number;
  thumbnail_url: string;
  region: string;
  realm: string;
  last_crawled_at: Date;
  profile_url: string;
  profile_banner: string;
  mythic_plus_scores_by_season: MythicPlusScoresBySeason[];
  mythic_plus_highest_level_runs: MythicPlusBestRun[];
  mythic_plus_ranks: MythicPlusRanks;
  mythic_plus_best_runs: MythicPlusBestRun[];
  gear: Gear;
  talentLoadout: TalentLoadout;
}

export interface Gear {
  updated_at: Date;
  item_level_equipped: number;
  artifact_traits: number;
  corruption: GearCorruption;
  items: { [key: string]: Item };
}

export interface GearCorruption {
  added: number;
  resisted: number;
  total: number;
  cloakRank: number;
  spells: any[];
}

export interface Item {
  item_id: number;
  item_level: number;
  icon: string;
  name: string;
  item_quality: number;
  is_legendary: boolean;
  is_azerite_armor: boolean;
  azerite_powers: Array<AzeritePower | null>;
  corruption: ItemCorruption;
  domination_shards: any[];
  gems: number[];
  bonuses: number[];
  tier?: string;
}

export interface AzeritePower {
  id: number;
  spell: Spell;
  tier: number;
}

export interface Spell {
  id: number;
  school: number;
  icon: string;
  name: string;
  rank: null;
  hasCooldown?: boolean;
}

export interface ItemCorruption {
  added: number;
  resisted: number;
  total: number;
}

export interface MythicPlusBestRun {
  dungeon?: string;
  short_name: string;
  mythic_level?: number;
  completed_at?: Date;
  clear_time_ms?: number;
  par_time_ms?: number;
  num_keystone_upgrades?: number;
  map_challenge_mode_id?: number;
  zone_id?: number;
  score?: number;
  affixes: Affix[];
  url?: string;
}

export interface Affix {
  id: number;
  name: Name;
  description: string;
  icon: Icon;
  wowhead_url: string;
}

export enum Icon {
  AbilityToughness = "ability_toughness",
  AchievementBossAnomalus = "achievement_boss_anomalus",
  SpellShadowBloodboil = "spell_shadow_bloodboil",
}

export enum Name {
  Fortified = "Fortified",
  Incorporeal = "Incorporeal",
  Sanguine = "Sanguine",
  Tyrannical = "Tyrannical",
}

export interface MythicPlusRanks {
  overall: Class;
  class: Class;
  tank: Class;
  class_tank: Class;
  dps: Class;
  class_dps: Class;
  spec_71: Class;
  spec_72: Class;
  spec_73: Class;
}

export interface Class {
  world: number;
  region: number;
  realm: number;
}

export interface MythicPlusScoresBySeason {
  season: string;
  scores: Scores;
  segments: Segments;
}

export interface Scores {
  all: number;
  dps: number;
  healer: number;
  tank: number;
  spec_0: number;
  spec_1: number;
  spec_2: number;
  spec_3: number;
}

export interface Segments {
  all: All;
  dps: All;
  healer: All;
  tank: All;
  spec_0: All;
  spec_1: All;
  spec_2: All;
  spec_3: All;
}

export interface All {
  score: number;
  color: string;
}

export interface TalentLoadout {
  loadout_spec_id: number;
  loadout_text: string;
  loadout: Loadout[];
}

export interface Loadout {
  node: Node;
  entryIndex: number;
  rank: number;
}

export interface Node {
  id: number;
  treeId: number;
  type: number;
  entries: Entry[];
  important: boolean;
  posX: number;
  posY: number;
  row: number;
  col: number;
}

export interface Entry {
  id: number;
  traitDefinitionId: number;
  type: number;
  maxRanks: number;
  spell: Spell;
}
