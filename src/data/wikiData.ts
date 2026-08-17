export interface CodeItem {
  code: string;
  reward: string;
  status: 'Active' | 'Expired';
  addedDate?: string;
}

export interface WeaponTierItem {
  name: string;
  race: 'Shinigami' | 'Arrancar' | 'Quincy';
  tier: 'S+' | 'S' | 'A' | 'B';
  description: string;
  scaling: string;
  keyAbilities: string[];
}

export interface ClanItem {
  name: string;
  race: 'Shinigami' | 'Arrancar' | 'Quincy';
  rarity: 'Supreme (0.5%)' | 'Legendary (3%)' | 'Rare (15%)' | 'Common (81.5%)';
  buffs: string;
}

export interface ValueItem {
  itemName: string;
  category: 'Essence' | 'Reroll' | 'Skill Box' | 'Special';
  valueInRerolls: string;
  demand: 'Very High' | 'High' | 'Medium' | 'Low';
  notes: string;
}

export const ACTIVE_CODES: CodeItem[] = [
  { code: "PALACEUPDATE2060", reward: "Free Clan Rerolls & Weapon Rerolls (Req. Semi-Rank 2)", status: "Active", addedDate: "August 17, 2026" },
  { code: "BalanceStage", reward: "5x Element Rerolls & Reroll Strips", status: "Active", addedDate: "August 17, 2026" },
  { code: "TheSecretIsInUpdateLogs", reward: "10x Weapon Rerolls & 5x Clan Rerolls", status: "Active", addedDate: "August 17, 2026" },
  { code: "TypeSoulBurden", reward: "Locked Element Reroll & 10x Weapon Rerolls", status: "Active", addedDate: "August 17, 2026" },
  { code: "SpainWorldCupWinners26", reward: "Special Title & 15x Free Rerolls", status: "Active", addedDate: "August 17, 2026" },
  { code: "ItNearlyCameHome", reward: "5x Clan Rerolls & 500 Soul Tickets", status: "Active", addedDate: "August 17, 2026" },
  { code: "HotfixesThxForPlayingTypeSoul", reward: "10x Clan Rerolls & 1x Blue Elixir", status: "Active", addedDate: "August 17, 2026" },
  { code: "TypeSoulWorldCup2030", reward: "15x Reroll Strips & 1,000 Soul Tickets", status: "Active", addedDate: "August 17, 2026" },
  { code: "palacecountdown", reward: "5x Element Rerolls", status: "Active", addedDate: "August 17, 2026" },
  { code: "ErikkiMonth", reward: "10x Weapon Rerolls", status: "Active", addedDate: "August 17, 2026" },
  { code: "SmallPatchYay", reward: "5x Free Clan Rerolls", status: "Active", addedDate: "August 17, 2026" },
  { code: "OasisGraduation", reward: "10x Reroll Strips", status: "Active", addedDate: "August 17, 2026" },
  { code: "EidMubarak2026", reward: "5x Clan Rerolls & 5x Weapon Rerolls", status: "Active", addedDate: "August 17, 2026" },
  { code: "Kurtisatung", reward: "Locked Weapon Reroll", status: "Active", addedDate: "August 17, 2026" },
  { code: "TrueWorldbearer", reward: "10x Weapon Rerolls & 5x Element Rerolls", status: "Active", addedDate: "August 17, 2026" },
  { code: "armastorcode2", reward: "5x Free Reroll Strips", status: "Active", addedDate: "August 17, 2026" },
  { code: "HiddensBLESSING", reward: "1x Blue Elixir Skill Reset", status: "Active", addedDate: "August 17, 2026" },
  { code: "armastorcode", reward: "5x Clan Rerolls", status: "Active", addedDate: "August 17, 2026" }
];

export const EXPIRED_CODES: CodeItem[] = [
  { code: "midyearupdate", reward: "10x Weapon Rerolls", status: "Expired" },
  { code: "500kmembers", reward: "Clan & Element Reroll Bundle", status: "Expired" },
  { code: "sorryforshutdowns", reward: "5x Free Rerolls", status: "Expired" },
  { code: "bleachisback", reward: "10x Reroll Strips", status: "Expired" },
  { code: "bugfixdelay", reward: "2x Blue Elixir", status: "Expired" }
];

export const WEAPON_TIER_DATA: WeaponTierItem[] = [
  {
    name: "Kyoka Suigetsu (Illusion)",
    race: "Shinigami",
    tier: "S+",
    description: "Supreme crowd control and complete sensory disruption. Best PvP weapon in the current meta.",
    scaling: "Kendo / Spirit",
    keyAbilities: ["Shatter Reality", "Complete Hypnosis Counter", "Illusion Strike"]
  },
  {
    name: "Ryujin Jakka (Flame)",
    race: "Shinigami",
    tier: "S+",
    description: "Massive AoE fire damage with high tick damage and armor break capabilities.",
    scaling: "Kendo",
    keyAbilities: ["Ennetsu Jigoku", "Incinerating Slash", "Flame Wall"]
  },
  {
    name: "Nozarashi (Berserker)",
    race: "Shinigami",
    tier: "S",
    description: "Brutal raw strength weapon that breaks blocks easily and hits massive crit damage.",
    scaling: "Kendo",
    keyAbilities: ["Cleave Earth", "Meteor Splitter", "Unstoppable Rampage"]
  },
  {
    name: "Gluttony (Cero Metralleta)",
    race: "Arrancar",
    tier: "S+",
    description: "Devastating mid-range Cero barrage with life-steal capabilities.",
    scaling: "Kido / Spirit",
    keyAbilities: ["Infinite Cero Stream", "Devour Soul", "Hollow Flash"]
  },
  {
    name: "Santa Teresa (Multi-Arm Blade)",
    race: "Arrancar",
    tier: "S",
    description: "Aggressive close-range combo weapon with high attack speed and stun-lock potential.",
    scaling: "Speed / Kendo",
    keyAbilities: ["Six-Arm Flurry", "Carapace Shield", "Scythe Thrust"]
  },
  {
    name: "Antithesis (Reishi Bow)",
    race: "Quincy",
    tier: "S+",
    description: "Long-range snipe weapon capable of swapping damage states and controlling combat distance.",
    scaling: "Kido",
    keyAbilities: ["State Swap Arrow", "Licht Regen Barrage", "Heilig Pfeil Burst"]
  },
  {
    name: "Schrift: The Fear",
    race: "Quincy",
    tier: "S",
    description: "Applies fear debuff to enemies, slowing move speed and blocking dodge abilities.",
    scaling: "Spirit",
    keyAbilities: ["Fear Spike", "Terrify Aura", "Grasping Nightmare"]
  },
  {
    name: "Benihime",
    race: "Shinigami",
    tier: "A",
    description: "Balanced offensive and defensive crimson shield blade.",
    scaling: "Kendo / Speed",
    keyAbilities: ["Chikasumi No Tate", "Kamisori Slash"]
  },
  {
    name: "Grimmjow Claws (Panthera)",
    race: "Arrancar",
    tier: "A",
    description: "High mobility melee claw weapon ideal for rushdown playstyles.",
    scaling: "Speed",
    keyAbilities: ["Desgarron Claw", "Sonic Blitz"]
  }
];

export const CLAN_TIER_DATA: ClanItem[] = [
  {
    name: "Kurosaki",
    race: "Shinigami",
    rarity: "Supreme (0.5%)",
    buffs: "+15 Reiatsu, +10 HP, Fast Reiatsu Regeneration, Getsuga Tensho Passive Damage Boost"
  },
  {
    name: "Yamamoto",
    race: "Shinigami",
    rarity: "Supreme (0.5%)",
    buffs: "+20 HP, +10 Stance Break, Immunity to Burn Debuffs, Fire Skill Cooldown -15%"
  },
  {
    name: "Zaraki",
    race: "Shinigami",
    rarity: "Supreme (0.5%)",
    buffs: "+25 HP, +15 Posture, Stun Resistance, Damage Increases as Health Drops"
  },
  {
    name: "Cifer",
    race: "Arrancar",
    rarity: "Supreme (0.5%)",
    buffs: "+15 Spirit, +10 Reiatsu, Second Etapa Passive Unlock, Cero Damage +15%"
  },
  {
    name: "Jaegerjaquez",
    race: "Arrancar",
    rarity: "Supreme (0.5%)",
    buffs: "+15 Speed, +10 HP, Increased Flash Step Distance, Claw Crit Multiplier"
  },
  {
    name: "Vandenreich / Yhwach",
    race: "Quincy",
    rarity: "Supreme (0.5%)",
    buffs: "+20 Spirit, +15 Reiatsu, Reishi Arrow Charge Speed +25%, Almighty Dodge Chance"
  },
  {
    name: "Shiba",
    race: "Shinigami",
    rarity: "Legendary (3%)",
    buffs: "+10 HP, +5 Spirit, Fireworks Knockback Ability"
  },
  {
    name: "Hitsugaya",
    race: "Shinigami",
    rarity: "Legendary (3%)",
    buffs: "+10 Spirit, Freeze Duration +10%"
  },
  {
    name: "Lousenbarn",
    race: "Quincy",
    rarity: "Legendary (3%)",
    buffs: "+10 Speed, Quincy Bow Range +15%"
  }
];

export const VALUE_LIST_DATA: ValueItem[] = [
  { itemName: "Hallow Essence", category: "Essence", valueInRerolls: "50 - 60 Rerolls", demand: "Very High", notes: "Used to change Hollow Mask and Resurreccion forms" },
  { itemName: "Form Reroll", category: "Reroll", valueInRerolls: "15 - 20 Rerolls", demand: "High", notes: "Rerolls Shikai, Resurreccion, or Voltstanding form" },
  { itemName: "Blue Elixir", category: "Special", valueInRerolls: "25 - 30 Rerolls", demand: "High", notes: "Resets all skill points instantly" },
  { itemName: "Red Elixir", category: "Special", valueInRerolls: "20 - 25 Rerolls", demand: "Medium", notes: "Resets stat points without wiping tree progression" },
  { itemName: "Skill Box", category: "Skill Box", valueInRerolls: "35 - 45 Rerolls", demand: "Very High", notes: "Unlocks secret tier 5 skills for Kendo/Kido/Speed" },
  { itemName: "Locked Weapon Reroll", category: "Reroll", valueInRerolls: "1 Reroll", demand: "Medium", notes: "Standard weapon reroll item" }
];
