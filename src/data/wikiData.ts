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
  { code: "PALACEUPDATE2060", reward: "4x Locked Red Elixirs, 100x Locked Element Rerolls, 4x Locked Skill Box Choosers, 35x Letzt Model Rerolls, Locked True Hogyoku, 100x Locked Weapon Rerolls, 55x Vizard Mask Rerolls, 55x Mask Rerolls, 2x Locked Blue Elixirs, 100x Locked Clan Rerolls and a Locked Custom Clothing Token", status: "Active", addedDate: "" },
  { code: "Cristi2026", reward: "100 total rerolls", status: "Active", addedDate: "" },
  { code: "TypeBugIsMYFavouriteGame", reward: "Rerolls, elixirs and skill boxes (requires Semi-Grade 2)", status: "Active", addedDate: "" },
  { code: "BalanceStage", reward: "Rerolls, elixirs and skill boxes", status: "Active", addedDate: "" },
  { code: "TheSecretIsInUpdateLogs", reward: "Rerolls, elixirs and skill boxes", status: "Active", addedDate: "" },
  { code: "TypeSoulBurden", reward: "Boxes, elixirs and rerolls", status: "Active", addedDate: "" },
  { code: "SpainWorldCupWinners26", reward: "Rerolls, elixirs and Kan", status: "Active", addedDate: "" },
  { code: "ItNearlyCameHome", reward: "Boxes and rerolls", status: "Active", addedDate: "" },
  { code: "HotfixesThxForPlayingTypeSoul", reward: "Elixirs, rerolls and box choosers", status: "Active", addedDate: "" },
  { code: "TypeSoulWorldCup2030", reward: "Rerolls, elixirs and skill boxes", status: "Active", addedDate: "" },
  { code: "palacecountdown", reward: "Rerolls, elixirs and skill boxes", status: "Active", addedDate: "" },
  { code: "ErikkiMonth", reward: "Rerolls, elixirs and skill boxes", status: "Active", addedDate: "" },
  { code: "SmallPatchYay", reward: "Rerolls, elixirs and skill boxes", status: "Active", addedDate: "" },
  { code: "TrueWorldbearer", reward: "Rerolls, elixirs and skill boxes", status: "Active", addedDate: "" },
  { code: "armastorcode2", reward: "Rerolls, elixirs and skill boxes", status: "Active", addedDate: "" },
  { code: "armastorcode", reward: "Rerolls, elixirs and skill boxes", status: "Active", addedDate: "" },
  { code: "HiddensBLESSING", reward: "Rerolls, elixirs and skill boxes", status: "Active", addedDate: "" },
  { code: "Kurtisatung", reward: "Rerolls, elixirs and skill boxes", status: "Active", addedDate: "" },
  { code: "almightycristishowcasev2", reward: "Rerolls and elixirs", status: "Active", addedDate: "" },
  { code: "kyokanerfsweredeservedlol", reward: "Rerolls and elixirs", status: "Active", addedDate: "" },
  { code: "texbday", reward: "Rerolls and elixirs", status: "Active", addedDate: "" },
  { code: "heyitsmevegadodgeframe", reward: "Rerolls and elixirs", status: "Active", addedDate: "" }
];

export const EXPIRED_CODES: CodeItem[] = [
  { code: "EidMubarak2026", reward: "Expired — no published payout", status: "Expired" },
  { code: "EidMubarak", reward: "Expired — no published payout", status: "Expired" },
  { code: "Smallinconvenience", reward: "Expired — no published payout", status: "Expired" },
  { code: "MiniErikkiKt", reward: "Expired — no published payout", status: "Expired" },
  { code: "morphquestfix", reward: "Expired — no published payout", status: "Expired" },
  { code: "Ichigo101010", reward: "Expired — no published payout", status: "Expired" },
  { code: "voidzlatebday", reward: "Expired — no published payout", status: "Expired" },
  { code: "SillyHollow", reward: "Expired — no published payout", status: "Expired" },
  { code: "rulesaremadetobebroken", reward: "Expired — no published payout", status: "Expired" },
  { code: "NoobSoul", reward: "Expired — no published payout", status: "Expired" },
  { code: "temisburger", reward: "Expired — no published payout", status: "Expired" },
  { code: "theykeepbeggingmeforcodes", reward: "Expired — no published payout", status: "Expired" },
  { code: "TheProdigy", reward: "Expired — no published payout", status: "Expired" },
  { code: "itsalmostthatkindofsummer", reward: "Expired — no published payout", status: "Expired" },
  { code: "greengiantv", reward: "Expired — no published payout", status: "Expired" },
  { code: "howsetroboominfooledtheinternet", reward: "Expired — no published payout", status: "Expired" },
  { code: "7daysnotawordnotavideonotaclipnotapostnothing", reward: "Expired — no published payout", status: "Expired" },
  { code: "groundhakudamogsairhakuda", reward: "Expired — no published payout", status: "Expired" },
  { code: "myvfxartistneedstostopghostingmebru", reward: "Expired — no published payout", status: "Expired" },
  { code: "TYPESOUL2026VVVKHOATICFENG", reward: "Expired — no published payout", status: "Expired" },
  { code: "bigkiswatching", reward: "Expired — no published payout", status: "Expired" },
  { code: "leafyhorizoncore", reward: "Expired — no published payout", status: "Expired" },
  { code: "thanksgivingbreakwoohoo", reward: "Expired — no published payout", status: "Expired" },
  { code: "natelacedthespiraltwinsoulsrig", reward: "Expired — no published payout", status: "Expired" },
  { code: "halloweenpart2", reward: "Expired — no published payout", status: "Expired" },
  { code: "happylatehalloween", reward: "Expired — no published payout", status: "Expired" },
  { code: "updatewoohoo", reward: "Expired — no published payout", status: "Expired" },
  { code: "sorryfornospiral", reward: "Expired — no published payout", status: "Expired" },
  { code: "letsbringback2023typesoul", reward: "Expired — no published payout", status: "Expired" },
  { code: "clavgotframemoggedbyasufratleader", reward: "Expired — no published payout", status: "Expired" },
  { code: "serverlistfixed", reward: "Expired — no published payout", status: "Expired" },
  { code: "thosewhoknowemblem", reward: "Expired — no published payout", status: "Expired" },
  { code: "wowshutdowncodeyeah", reward: "Expired — no published payout", status: "Expired" },
  { code: "superduperfunsecretcode", reward: "Expired — no published payout", status: "Expired" },
  { code: "yesterdayshutdown", reward: "Expired — no published payout", status: "Expired" },
  { code: "thanksfor900k", reward: "Expired — no published payout", status: "Expired" },
  { code: "excaliburfool", reward: "Expired — no published payout", status: "Expired" },
  { code: "goplayranked", reward: "Expired — no published payout", status: "Expired" },
  { code: "800kcodeyeah", reward: "Expired — no published payout", status: "Expired" },
  { code: "somebugsfixes", reward: "Expired — no published payout", status: "Expired" },
  { code: "raidsfixed", reward: "Expired — no published payout", status: "Expired" },
  { code: "thanksforpatience", reward: "Expired — no published payout", status: "Expired" },
  { code: "promiseddecembercode", reward: "Expired — no published payout", status: "Expired" },
  { code: "privateservercompensation", reward: "Expired — no published payout", status: "Expired" }
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
