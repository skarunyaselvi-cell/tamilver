export type GardenStyle =
  | 'cottage'
  | 'zen'
  | 'mediterranean'
  | 'potager'
  | 'meadow'
  | 'modern'
  | 'xeriscape';

export type SunExposure = 'full-sun' | 'part-shade' | 'full-shade';

export type SoilType = 'loam' | 'sandy' | 'clay' | 'raised-bed' | 'chalk';

export type PlantCategory =
  | 'vegetable'
  | 'herb'
  | 'perennial'
  | 'shrub'
  | 'tree'
  | 'climber'
  | 'groundcover';

export interface Plant {
  id: string;
  commonName: string;
  botanicalName: string;
  category: PlantCategory;
  sunRequirement: SunExposure;
  waterNeed: 'low' | 'moderate' | 'high';
  matureHeight: string;
  matureSpread: string;
  bloomTime: string;
  flowerColor?: string;
  foliageColor?: string;
  companionFriends: string[];
  companionFoes: string[];
  ecologicalBenefit: string;
  careTip: string;
  zoneId?: string;
  quantity?: number;
  iconGlyph?: string;
}

export type ZoneType =
  | 'planter_bed'
  | 'pathway'
  | 'water_feature'
  | 'seating'
  | 'lawn'
  | 'border'
  | 'structure'
  | 'accent_tree';

export interface GardenZone {
  id: string;
  name: string;
  type: ZoneType;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  width: number; // percentage 0-100
  height: number; // percentage 0-100
  shape: 'rect' | 'circle' | 'rounded';
  color: string;
  borderColor?: string;
  surfaceMaterial: string;
  plantIds: string[];
  description: string;
}

export interface CompanionSynergy {
  plantA: string;
  plantB: string;
  type: 'beneficial' | 'antagonistic';
  mechanism: string;
}

export interface GardenDesign {
  id: string;
  name: string;
  style: GardenStyle;
  styleImage: string;
  dimensions: {
    width: number;
    length: number;
    unit: 'ft' | 'm';
  };
  sunlight: SunExposure;
  soilType: SoilType;
  climateZone: string;
  goals: string[];
  narrative: string;
  zones: GardenZone[];
  plants: Plant[];
  companionSynergies: CompanionSynergy[];
  seasonalTasks: {
    spring: string[];
    summer: string[];
    autumn: string[];
    winter: string[];
  };
  materialsEstimate: Array<{
    item: string;
    quantity: string;
    unit: string;
    purpose: string;
  }>;
  history: Array<{
    id: string;
    timestamp: number;
    prompt: string;
    summary: string;
  }>;
}

export interface GenerateGardenRequest {
  style: GardenStyle;
  dimensions: {
    width: number;
    length: number;
    unit: 'ft' | 'm';
  };
  sunlight: SunExposure;
  soilType: SoilType;
  climateZone: string;
  goals: string[];
  budgetTier?: 'modest' | 'moderate' | 'premium';
  userNotes?: string;
}

export interface EditGardenPromptRequest {
  currentDesign: GardenDesign;
  prompt: string;
}
