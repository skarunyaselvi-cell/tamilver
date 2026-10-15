import { GoogleGenAI, Type } from '@google/genai';
import { GardenDesign, GenerateGardenRequest, EditGardenPromptRequest } from '../src/types/garden';

// Server-side Gemini client initialization
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const GARDEN_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    name: { type: Type.STRING, description: 'Poetic, evocative name for the garden design' },
    narrative: { type: Type.STRING, description: '2-3 paragraph architectural and botanical design concept' },
    climateZone: { type: Type.STRING, description: 'Suitable USDA zone or climate classification' },
    zones: {
      type: Type.ARRAY,
      description: 'Key spatial zones in the garden with layout coordinates (0-100% relative coordinates)',
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          name: { type: Type.STRING },
          type: {
            type: Type.STRING,
            description: 'One of: planter_bed, pathway, water_feature, seating, lawn, border, structure, accent_tree'
          },
          x: { type: Type.NUMBER, description: 'X coordinate percentage (0-100)' },
          y: { type: Type.NUMBER, description: 'Y coordinate percentage (0-100)' },
          width: { type: Type.NUMBER, description: 'Width percentage (5-90)' },
          height: { type: Type.NUMBER, description: 'Height percentage (5-90)' },
          shape: { type: Type.STRING, description: 'rect, circle, or rounded' },
          color: { type: Type.STRING, description: 'Tailwind hex color (e.g. #ea580c, #16a34a, #e7e5e4, #38bdf8)' },
          borderColor: { type: Type.STRING, description: 'Darker border hex color' },
          surfaceMaterial: { type: Type.STRING, description: 'e.g. Weathered Cedar, Cotswold Gravel, Travertine Paver' },
          description: { type: Type.STRING }
        },
        required: ['id', 'name', 'type', 'x', 'y', 'width', 'height', 'shape', 'color', 'surfaceMaterial', 'description']
      }
    },
    plants: {
      type: Type.ARRAY,
      description: 'Curated list of 6-12 botanical specimens suited for this design',
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          commonName: { type: Type.STRING },
          botanicalName: { type: Type.STRING },
          category: { type: Type.STRING, description: 'vegetable, herb, perennial, shrub, tree, climber, groundcover' },
          sunRequirement: { type: Type.STRING, description: 'full-sun, part-shade, or shade' },
          waterNeed: { type: Type.STRING, description: 'low, moderate, or high' },
          matureHeight: { type: Type.STRING },
          matureSpread: { type: Type.STRING },
          bloomTime: { type: Type.STRING },
          flowerColor: { type: Type.STRING },
          foliageColor: { type: Type.STRING },
          companionFriends: { type: Type.ARRAY, items: { type: Type.STRING } },
          companionFoes: { type: Type.ARRAY, items: { type: Type.STRING } },
          ecologicalBenefit: { type: Type.STRING },
          careTip: { type: Type.STRING },
          iconGlyph: { type: Type.STRING, description: 'An appropriate botanical emoji like 🍅, 🌿, 🌸, 🪻, 🌾, 🌲, 🌹' }
        },
        required: ['id', 'commonName', 'botanicalName', 'category', 'sunRequirement', 'waterNeed', 'matureHeight', 'matureSpread', 'bloomTime', 'ecologicalBenefit', 'careTip']
      }
    },
    companionSynergies: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          plantA: { type: Type.STRING },
          plantB: { type: Type.STRING },
          type: { type: Type.STRING, description: 'beneficial or antagonistic' },
          mechanism: { type: Type.STRING, description: 'Horticultural reason for synergy' }
        },
        required: ['plantA', 'plantB', 'type', 'mechanism']
      }
    },
    seasonalTasks: {
      type: Type.OBJECT,
      properties: {
        spring: { type: Type.ARRAY, items: { type: Type.STRING } },
        summer: { type: Type.ARRAY, items: { type: Type.STRING } },
        autumn: { type: Type.ARRAY, items: { type: Type.STRING } },
        winter: { type: Type.ARRAY, items: { type: Type.STRING } }
      },
      required: ['spring', 'summer', 'autumn', 'winter']
    },
    materialsEstimate: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          item: { type: Type.STRING },
          quantity: { type: Type.STRING },
          unit: { type: Type.STRING },
          purpose: { type: Type.STRING }
        },
        required: ['item', 'quantity', 'unit', 'purpose']
      }
    }
  },
  required: ['name', 'narrative', 'climateZone', 'zones', 'plants', 'companionSynergies', 'seasonalTasks', 'materialsEstimate']
};

export async function generateGardenLayout(request: GenerateGardenRequest): Promise<GardenDesign> {
  const prompt = `You are a world-class landscape architect and master botanist.
Design a cohesive, bespoke dream garden based on these user preferences:
- Garden Style: ${request.style}
- Dimensions: ${request.dimensions.width} x ${request.dimensions.length} ${request.dimensions.unit}
- Sunlight Exposure: ${request.sunlight}
- Soil Type: ${request.soilType}
- Target Climate / Zone: ${request.climateZone || 'Temperate USDA Zone 7b'}
- Primary Goals: ${request.goals.join(', ')}
${request.userNotes ? `- Specific User Wishes & Features: "${request.userNotes}"` : ''}

Rules:
1. Spatial Layout: Provide 5 to 8 well-proportioned zones that compose a balanced 2D landscape (walkways, planter beds, water elements, seating nooks, lawns/meadows, trees). Coordinates (x, y, width, height) must fit gracefully within a 100x100 space without awkward overlap.
2. Botanical Rigor: Choose real, botanical-grade companion species that flourish in the specified sunlight and soil.
3. Materials: Estimate realistic real-world construction materials (stone pavers, lumber, organic compost).
4. Four-Season Care: Provide realistic seasonal maintenance tasks tailored specifically to the chosen plants.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: GARDEN_SCHEMA,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error('Empty response received from Gemini');
    }

    const data = JSON.parse(text);

    // Map style image
    let styleImage = '/src/assets/images/garden_english_cottage_1792061105544.jpg';
    if (request.style === 'zen') {
      styleImage = '/src/assets/images/garden_modern_zen_1792061105458.jpg';
    } else if (request.style === 'potager') {
      styleImage = '/src/assets/images/garden_potager_kitchen_1792061106263.jpg';
    } else if (request.style === 'mediterranean') {
      styleImage = '/src/assets/images/garden_mediterranean_courtyard_1792061107483.jpg';
    } else {
      styleImage = '/src/assets/images/hero_dream_garden_1792061103994.jpg';
    }

    const design: GardenDesign = {
      id: `garden-${Date.now()}`,
      name: data.name || `${request.style.toUpperCase()} Sanctuary`,
      style: request.style,
      styleImage,
      dimensions: request.dimensions,
      sunlight: request.sunlight,
      soilType: request.soilType,
      climateZone: data.climateZone || request.climateZone || 'USDA Zone 7b',
      goals: request.goals,
      narrative: data.narrative || '',
      zones: (data.zones || []).map((z: any, idx: number) => ({
        id: z.id || `zone-${idx + 1}`,
        name: z.name || `Zone ${idx + 1}`,
        type: z.type || 'planter_bed',
        x: Math.max(0, Math.min(95, Number(z.x) || 10)),
        y: Math.max(0, Math.min(95, Number(z.y) || 10)),
        width: Math.max(8, Math.min(90, Number(z.width) || 20)),
        height: Math.max(8, Math.min(90, Number(z.height) || 20)),
        shape: z.shape || 'rect',
        color: z.color || '#16a34a',
        borderColor: z.borderColor || '#15803d',
        surfaceMaterial: z.surfaceMaterial || 'Cedar & Mulch',
        plantIds: z.plantIds || [],
        description: z.description || ''
      })),
      plants: (data.plants || []).map((p: any, idx: number) => ({
        id: p.id || `plant-${idx + 1}`,
        commonName: p.commonName || 'Garden Plant',
        botanicalName: p.botanicalName || 'Botanicus exemplaris',
        category: p.category || 'perennial',
        sunRequirement: p.sunRequirement || request.sunlight,
        waterNeed: p.waterNeed || 'moderate',
        matureHeight: p.matureHeight || '2-3 ft',
        matureSpread: p.matureSpread || '1-2 ft',
        bloomTime: p.bloomTime || 'Summer',
        flowerColor: p.flowerColor,
        foliageColor: p.foliageColor,
        companionFriends: p.companionFriends || [],
        companionFoes: p.companionFoes || [],
        ecologicalBenefit: p.ecologicalBenefit || 'Supports biodiversity',
        careTip: p.careTip || 'Water regularly',
        iconGlyph: p.iconGlyph || '🌱'
      })),
      companionSynergies: data.companionSynergies || [],
      seasonalTasks: data.seasonalTasks || {
        spring: ['Prep soil and direct sow hardy seeds'],
        summer: ['Maintain drip irrigation and deadhead blossoms'],
        autumn: ['Mulch roots and divide established perennials'],
        winter: ['Protect delicate crowns and clean garden tools']
      },
      materialsEstimate: data.materialsEstimate || [],
      history: [
        {
          id: `h-${Date.now()}`,
          timestamp: Date.now(),
          prompt: request.userNotes ? `Custom design: ${request.userNotes}` : `Generated ${request.style} layout`,
          summary: `Created ${data.name || request.style} layout with ${data.zones?.length || 0} spatial zones and ${data.plants?.length || 0} botanical selections.`
        }
      ]
    };

    return design;
  } catch (error) {
    console.error('Gemini garden layout generation error:', error);
    throw error;
  }
}

export async function editGardenWithPrompt(request: EditGardenPromptRequest): Promise<GardenDesign> {
  const current = request.currentDesign;
  const userPrompt = request.prompt;

  const systemInstruction = `You are an expert landscape designer.
The user wants to EDIT or TRANSFORM their existing garden design using this instruction:
"${userPrompt}"

CURRENT DESIGN SNAPSHOT:
Name: ${current.name}
Style: ${current.style}
Dimensions: ${current.dimensions.width}x${current.dimensions.length} ${current.dimensions.unit}
Current Zones: ${JSON.stringify(current.zones.map(z => ({ name: z.name, type: z.type, x: z.x, y: z.y, width: z.width, height: z.height, surfaceMaterial: z.surfaceMaterial })))}
Current Plants: ${current.plants.map(p => p.commonName).join(', ')}

Apply the requested modification precisely.
- If they ask to add, remove, resize, or swap elements (e.g. "add a water fountain", "turn lawn into clover", "add Adirondack chairs", "replace annuals with drought-tolerant natives"), update the zones and plants accordingly.
- Preserve unchanged elements where appropriate to keep layout continuity.
- Ensure the updated coordinates fit nicely inside the 100x100 boundary.
- Return the updated complete garden structure conforming to the JSON schema.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `Please edit the garden design according to: "${userPrompt}"`,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: GARDEN_SCHEMA,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error('Empty response received from Gemini edit');
    }

    const data = JSON.parse(text);

    const updatedDesign: GardenDesign = {
      ...current,
      name: data.name || current.name,
      narrative: data.narrative || current.narrative,
      climateZone: data.climateZone || current.climateZone,
      zones: (data.zones || current.zones).map((z: any, idx: number) => ({
        id: z.id || `zone-${Date.now()}-${idx}`,
        name: z.name || `Zone ${idx + 1}`,
        type: z.type || 'planter_bed',
        x: Math.max(0, Math.min(95, Number(z.x) || 10)),
        y: Math.max(0, Math.min(95, Number(z.y) || 10)),
        width: Math.max(8, Math.min(90, Number(z.width) || 20)),
        height: Math.max(8, Math.min(90, Number(z.height) || 20)),
        shape: z.shape || 'rect',
        color: z.color || '#16a34a',
        borderColor: z.borderColor || '#15803d',
        surfaceMaterial: z.surfaceMaterial || 'Cedar & Mulch',
        plantIds: z.plantIds || [],
        description: z.description || ''
      })),
      plants: (data.plants && data.plants.length > 0 ? data.plants : current.plants).map((p: any, idx: number) => ({
        id: p.id || `plant-${Date.now()}-${idx}`,
        commonName: p.commonName || 'Garden Plant',
        botanicalName: p.botanicalName || 'Botanicus exemplaris',
        category: p.category || 'perennial',
        sunRequirement: p.sunRequirement || current.sunlight,
        waterNeed: p.waterNeed || 'moderate',
        matureHeight: p.matureHeight || '2-3 ft',
        matureSpread: p.matureSpread || '1-2 ft',
        bloomTime: p.bloomTime || 'Summer',
        flowerColor: p.flowerColor,
        foliageColor: p.foliageColor,
        companionFriends: p.companionFriends || [],
        companionFoes: p.companionFoes || [],
        ecologicalBenefit: p.ecologicalBenefit || 'Ecological support',
        careTip: p.careTip || 'Water as required',
        iconGlyph: p.iconGlyph || '🌿'
      })),
      companionSynergies: data.companionSynergies || current.companionSynergies,
      seasonalTasks: data.seasonalTasks || current.seasonalTasks,
      materialsEstimate: data.materialsEstimate || current.materialsEstimate,
      history: [
        {
          id: `h-${Date.now()}`,
          timestamp: Date.now(),
          prompt: userPrompt,
          summary: `Updated design: ${userPrompt.slice(0, 80)}${userPrompt.length > 80 ? '...' : ''}`
        },
        ...current.history
      ]
    };

    return updatedDesign;
  } catch (error) {
    console.error('Gemini garden edit error:', error);
    throw error;
  }
}
