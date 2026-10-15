import { GardenDesign, Plant } from '../types/garden';

export const BOTANICAL_DATABASE: Plant[] = [
  // Herbs & Vegetables
  {
    id: 'p-tomato-heirloom',
    commonName: 'Cherokee Purple Heirloom Tomato',
    botanicalName: 'Solanum lycopersicum',
    category: 'vegetable',
    sunRequirement: 'full-sun',
    waterNeed: 'high',
    matureHeight: '5-7 ft (1.5-2.1m)',
    matureSpread: '2-3 ft (0.6-0.9m)',
    bloomTime: 'Summer to Early Fall',
    flowerColor: 'Bright Yellow',
    foliageColor: 'Deep Emerald Green',
    companionFriends: ['Genovese Basil', 'French Marigold', 'Nasturtium', 'Chives'],
    companionFoes: ['Bronze Fennel', 'Potato', 'Corn'],
    ecologicalBenefit: 'Attracts native bumblebees for buzz pollination.',
    careTip: 'Prune suckers regularly and water at soil base to prevent foliage blight.',
    iconGlyph: '🍅'
  },
  {
    id: 'p-basil-genovese',
    commonName: 'Genovese Sweet Basil',
    botanicalName: 'Ocimum basilicum',
    category: 'herb',
    sunRequirement: 'full-sun',
    waterNeed: 'moderate',
    matureHeight: '18-24 in (45-60cm)',
    matureSpread: '12-18 in (30-45cm)',
    bloomTime: 'Mid Summer',
    flowerColor: 'Pale Lilac-White',
    foliageColor: 'Glossy Vibrant Green',
    companionFriends: ['Cherokee Purple Heirloom Tomato', 'Bell Pepper', 'Rosemary'],
    companionFoes: ['Common Rue', 'Sage'],
    ecologicalBenefit: 'Aromatic essential oils deter hornworms and aphids.',
    careTip: 'Pinch terminal bud tips weekly to stimulate bushy lateral branching.',
    iconGlyph: '🌿'
  },
  {
    id: 'p-french-marigold',
    commonName: 'French Marigold',
    botanicalName: 'Tagetes patula',
    category: 'perennial',
    sunRequirement: 'full-sun',
    waterNeed: 'low',
    matureHeight: '10-14 in (25-35cm)',
    matureSpread: '10-12 in (25-30cm)',
    bloomTime: 'Late Spring to First Frost',
    flowerColor: 'Golden Amber & Crimson',
    foliageColor: 'Ferny Dark Olive',
    companionFriends: ['Cherokee Purple Heirloom Tomato', 'Bell Pepper', 'Rainbow Chard'],
    companionFoes: ['Beans', 'Cabbage'],
    ecologicalBenefit: 'Secretes alpha-terthienyl into root zones, repelling parasitic root-knot nematodes.',
    careTip: 'Deadhead spent blossoms for continuous vigorous flower bud set.',
    iconGlyph: '🌼'
  },
  {
    id: 'p-rainbow-chard',
    commonName: 'Bright Lights Rainbow Chard',
    botanicalName: 'Beta vulgaris subsp. vulgaris',
    category: 'vegetable',
    sunRequirement: 'full-sun',
    waterNeed: 'moderate',
    matureHeight: '16-20 in (40-50cm)',
    matureSpread: '12-15 in (30-38cm)',
    bloomTime: 'Non-flowering biennial foliage',
    flowerColor: 'Inconspicuous',
    foliageColor: 'Crimson, Gold & Ruby Ribs with Dark Emerald Crinkled Leaves',
    companionFriends: ['English Lavender', 'French Marigold', 'Garlic Chives'],
    companionFoes: ['Field Corn'],
    ecologicalBenefit: 'Deep taproot cycles subsoil minerals to upper rhizosphere.',
    careTip: 'Harvest outer stalks continuously from ground level to encourage new central crown growth.',
    iconGlyph: '🥬'
  },
  {
    id: 'p-rosemary-tuscan',
    commonName: 'Tuscan Blue Rosemary',
    botanicalName: 'Salvia rosmarinus',
    category: 'herb',
    sunRequirement: 'full-sun',
    waterNeed: 'low',
    matureHeight: '3-4 ft (0.9-1.2m)',
    matureSpread: '3-4 ft (0.9-1.2m)',
    bloomTime: 'Early Spring through Summer',
    flowerColor: 'Sky Blue',
    foliageColor: 'Needle-like Silver Green',
    companionFriends: ['English Lavender', 'Tuscan Olive Tree', 'Mission Fig'],
    companionFoes: ['Carrots', 'Potatoes'],
    ecologicalBenefit: 'Early nectar source for queens of solitary bees emerging from overwintering.',
    careTip: 'Requires gritty, free-draining soil; avoid overwatering or waterlogged root zones.',
    iconGlyph: '🌱'
  },
  {
    id: 'p-lavender-hidcote',
    commonName: 'Hidcote English Lavender',
    botanicalName: 'Lavandula angustifolia',
    category: 'herb',
    sunRequirement: 'full-sun',
    waterNeed: 'low',
    matureHeight: '18-24 in (45-60cm)',
    matureSpread: '20-24 in (50-60cm)',
    bloomTime: 'June through August',
    flowerColor: 'Deep Violet-Purple',
    foliageColor: 'Aromatic Silver-Grey',
    companionFriends: ['Tuscan Blue Rosemary', 'Lady of Shalott Rose', 'Olive Tree'],
    companionFoes: ['Mint (competing moisture needs)'],
    ecologicalBenefit: 'High linalool nectar attractant for swallowtails, bumblebees, and honeybees.',
    careTip: 'Prune back by one third immediately after flowering, avoiding cutting into old woody stems.',
    iconGlyph: '🪻'
  },

  // Perennials & Cottage Bloomers
  {
    id: 'p-foxglove-excelsior',
    commonName: 'Excelsior Hybrid Foxglove',
    botanicalName: 'Digitalis purpurea',
    category: 'perennial',
    sunRequirement: 'part-shade',
    waterNeed: 'moderate',
    matureHeight: '4-5 ft (1.2-1.5m)',
    matureSpread: '18-24 in (45-60cm)',
    bloomTime: 'Late Spring to Mid Summer',
    flowerColor: 'Dusty Rose with Speckled Throats',
    foliageColor: 'Soft Velvety Green Rosette',
    companionFriends: ['Lady of Shalott Rose', 'Pacific Giant Delphinium', 'Lady Fern'],
    companionFoes: [],
    ecologicalBenefit: 'Deep bell florets engineered specifically for long-tongued wild bumblebees.',
    careTip: 'Self-seeds gently; leave central seed spike in late autumn for next year’s naturalized rosettes.',
    iconGlyph: '🌸'
  },
  {
    id: 'p-delphinium-pacific',
    commonName: 'Pacific Giant Delphinium',
    botanicalName: 'Delphinium elatum',
    category: 'perennial',
    sunRequirement: 'full-sun',
    waterNeed: 'moderate',
    matureHeight: '5-6 ft (1.5-1.8m)',
    matureSpread: '18-24 in (45-60cm)',
    bloomTime: 'Early Summer & rebloom in Autumn',
    flowerColor: 'Cobalt Blue with White Bee',
    foliageColor: 'Palmate Divided Green',
    companionFriends: ['Excelsior Hybrid Foxglove', 'David Austin Heirloom Rose'],
    companionFoes: [],
    ecologicalBenefit: 'Architectural vertical accent and nectar station for hummingbirds.',
    careTip: 'Stake early in spring before heavy bloom spikes form; mulch to keep roots cool.',
    iconGlyph: '🪻'
  },
  {
    id: 'p-rose-david-austin',
    commonName: 'Lady of Shalott English Rose',
    botanicalName: 'Rosa "Lady of Shalott"',
    category: 'shrub',
    sunRequirement: 'full-sun',
    waterNeed: 'moderate',
    matureHeight: '4-5 ft (1.2-1.5m)',
    matureSpread: '3.5-4 ft (1-1.2m)',
    bloomTime: 'Continuous Flushes June to November',
    flowerColor: 'Rich Apricot & Warm Copper Orange',
    foliageColor: 'Bronzed New Growth turning Glossy Mid-Green',
    companionFriends: ['Hidcote English Lavender', 'Walker\'s Low Catmint', 'Garlic Chives'],
    companionFoes: [],
    ecologicalBenefit: 'Produces nutrient-dense autumn rosehips that feed overwintering birds.',
    careTip: 'Underplant with alliums or catmint to naturally suppress blackspot fungus and aphids.',
    iconGlyph: '🌹'
  },
  {
    id: 'p-catmint-walkers-low',
    commonName: 'Walker\'s Low Catmint',
    botanicalName: 'Nepeta racemosa',
    category: 'perennial',
    sunRequirement: 'full-sun',
    waterNeed: 'low',
    matureHeight: '24-30 in (60-75cm)',
    matureSpread: '30-36 in (75-90cm)',
    bloomTime: 'May through September',
    flowerColor: 'Soft Lavender-Blue',
    foliageColor: 'Aromatic Crinkled Grey-Green',
    companionFriends: ['Lady of Shalott English Rose', 'Echinacea Coneflower', 'Salvia Caradonna'],
    companionFoes: [],
    ecologicalBenefit: 'Continuous season-long nectar buffet; virtually immune to deer and rabbit browsing.',
    careTip: 'Shear back by half after first flush in July to trigger compact re-blooming in August.',
    iconGlyph: '🌾'
  },
  {
    id: 'p-echinacea-purpurea',
    commonName: 'Magnus Purple Coneflower',
    botanicalName: 'Echinacea purpurea',
    category: 'perennial',
    sunRequirement: 'full-sun',
    waterNeed: 'low',
    matureHeight: '30-36 in (75-90cm)',
    matureSpread: '18-24 in (45-60cm)',
    bloomTime: 'Mid Summer through Fall',
    flowerColor: 'Magenta-Purple with Spiky Bronze Cone',
    foliageColor: 'Rough Dark Green',
    companionFriends: ['Black-Eyed Susan', 'Blue Oat Grass', 'Russian Sage'],
    companionFoes: [],
    ecologicalBenefit: 'Goldfinches flock to the mature spiky seedheads in late autumn and winter.',
    careTip: 'Drought-tolerant once established; leave dried seed heads standing through winter for avian forage.',
    iconGlyph: '🌻'
  },

  // Trees & Architectural Focal Points
  {
    id: 'p-japanese-maple-bloodgood',
    commonName: 'Bloodgood Japanese Maple',
    botanicalName: 'Acer palmatum "Bloodgood"',
    category: 'tree',
    sunRequirement: 'part-shade',
    waterNeed: 'moderate',
    matureHeight: '15-20 ft (4.5-6m)',
    matureSpread: '15-20 ft (4.5-6m)',
    bloomTime: 'Early Spring emergent flowers',
    flowerColor: 'Subtle Crimson Samaras',
    foliageColor: 'Deep Burgundy-Purple turning Brilliant Crimson in Fall',
    companionFriends: ['Japanese Forest Grass', 'Autumn Fern', 'Hosta Patriot'],
    companionFoes: [],
    ecologicalBenefit: 'Provides canopy dappled shade, wind sheltering, and high nesting value.',
    careTip: 'Protect from harsh desiccating afternoon westerly winds; surface roots enjoy pine-bark mulch.',
    iconGlyph: '🍁'
  },
  {
    id: 'p-cloud-pine-niwaki',
    commonName: 'Niwaki Sculpted Japanese Black Pine',
    botanicalName: 'Pinus thunbergii',
    category: 'tree',
    sunRequirement: 'full-sun',
    waterNeed: 'low',
    matureHeight: '8-12 ft (2.4-3.6m)',
    matureSpread: '6-8 ft (1.8-2.4m)',
    bloomTime: 'Spring Candle formation',
    flowerColor: 'Golden Pollen Cones',
    foliageColor: 'Rigid Deep Forest-Green Needles',
    companionFriends: ['Kousa Dogwood', 'Dwarf Mondo Grass', 'Hakone Grass'],
    companionFoes: [],
    ecologicalBenefit: 'Four-season architectural silhouette and evergreen bird sheltering.',
    careTip: 'Candle-prune new shoots in late spring to maintain defined cloud pads and sculptural scale.',
    iconGlyph: '🌲'
  },
  {
    id: 'p-olive-arbequina',
    commonName: 'Arbequina Mediterranean Olive',
    botanicalName: 'Olea europaea "Arbequina"',
    category: 'tree',
    sunRequirement: 'full-sun',
    waterNeed: 'low',
    matureHeight: '12-15 ft (3.6-4.5m)',
    matureSpread: '10-12 ft (3-3.6m)',
    bloomTime: 'Late Spring',
    flowerColor: 'Creamy White Star Blossoms',
    foliageColor: 'Silvery-Sage Undersides with Grey-Green Tops',
    companionFriends: ['Tuscan Blue Rosemary', 'Bougainvillea', 'Creeping Thyme'],
    companionFoes: [],
    ecologicalBenefit: 'Highly heat and drought resilient; produces edible table olives.',
    careTip: 'Thrives in well-draining mineral soil with limestone grit; prune canopy for open light penetration.',
    iconGlyph: '🫒'
  },
  {
    id: 'p-wisteria-amethyst-falls',
    commonName: 'Amethyst Falls American Wisteria',
    botanicalName: 'Wisteria frutescens "Amethyst Falls"',
    category: 'climber',
    sunRequirement: 'full-sun',
    waterNeed: 'moderate',
    matureHeight: '15-25 ft trellis vine',
    matureSpread: '8-12 ft (2.4-3.6m)',
    bloomTime: 'Late Spring with summer repeat',
    flowerColor: 'Pendulous Lilac-Blue Clusters',
    foliageColor: 'Pinnate Bright Green',
    companionFriends: ['Clematis Jackmanii', 'Excelsior Hybrid Foxglove'],
    companionFoes: [],
    ecologicalBenefit: 'Nitrogen-fixing legume root nodules; native non-invasive alternative to Asian wisteria.',
    careTip: 'Train along heavy timber pergola rafters; prune twice yearly in summer and late winter.',
    iconGlyph: '🍇'
  },
  {
    id: 'p-hakone-grass',
    commonName: 'Aureola Japanese Forest Grass',
    botanicalName: 'Hakonechloa macra "Aureola"',
    category: 'groundcover',
    sunRequirement: 'part-shade',
    waterNeed: 'moderate',
    matureHeight: '12-18 in (30-45cm)',
    matureSpread: '18-24 in (45-60cm)',
    bloomTime: 'Late Summer plumes',
    flowerColor: 'Feathery Russet Spikelets',
    foliageColor: 'Cascading Gold Ribbons with Lime Stripes',
    companionFriends: ['Bloodgood Japanese Maple', 'Autumn Fern', 'Ophiopogon Mondo Grass'],
    companionFoes: [],
    ecologicalBenefit: 'Suppresses weed emergence on slopes; mimics flowing water currents in zen design.',
    careTip: 'Thrives in humic, moisture-retentive shade; cut back to ground in late winter before spring shoot flush.',
    iconGlyph: '🌾'
  }
];

export const PRESET_GARDEN_DESIGNS: Record<string, GardenDesign> = {
  cottage: {
    id: 'design-cottage-bloom',
    name: 'Somerset Meadow English Cottage Garden',
    style: 'cottage',
    styleImage: '/src/assets/images/garden_english_cottage_1792061105544.jpg',
    dimensions: { width: 30, length: 45, unit: 'ft' },
    sunlight: 'full-sun',
    soilType: 'loam',
    climateZone: 'USDA Hardiness Zone 7b',
    goals: ['Fragrant Blooms', 'Pollinator Sanctuary', 'Cut Flowers', 'Rustic Seating'],
    narrative: 'A romantic, layered cottage garden inspired by classic English countryside estates. Informal winding limestone gravel pathways meander through overflowing herbaceous perennial borders, climbing heirloom roses over weathered timber arches, and sheltered bench nooks for quiet morning contemplation.',
    zones: [
      {
        id: 'z-lawn-central',
        name: 'Curved Soft Fescue Lawn Sanctuary',
        type: 'lawn',
        x: 25,
        y: 20,
        width: 50,
        height: 55,
        shape: 'rounded',
        color: '#4ade80',
        borderColor: '#16a34a',
        surfaceMaterial: 'Fine Dwarf Fescue & Microclover Turf',
        plantIds: [],
        description: 'Negative space central lawn balancing the dense perimeter flower beds.'
      },
      {
        id: 'z-path-limestone',
        name: 'Winding Pea Gravel Walkway',
        type: 'pathway',
        x: 10,
        y: 10,
        width: 15,
        height: 80,
        shape: 'rounded',
        color: '#e7e5e4',
        borderColor: '#a8a29e',
        surfaceMaterial: 'Cotswold Buff Pea Gravel with Steel Edging',
        plantIds: [],
        description: 'Main pedestrian spine leading from the cottage terrace to the hidden arbor.'
      },
      {
        id: 'z-border-north',
        name: 'Delphinium & Foxglove Perennial Spires',
        type: 'border',
        x: 5,
        y: 5,
        width: 90,
        height: 15,
        shape: 'rect',
        color: '#c084fc',
        borderColor: '#9333ea',
        surfaceMaterial: 'Triple-Shredded Organic Leaf Mold Mulch',
        plantIds: ['p-delphinium-pacific', 'p-foxglove-excelsior', 'p-echinacea-purpurea'],
        description: 'Tall architectural back-of-border planting creating deep layering against stone walls.'
      },
      {
        id: 'z-rose-arbor',
        name: 'David Austin Heirloom Rose Trellis',
        type: 'structure',
        x: 75,
        y: 25,
        width: 20,
        height: 25,
        shape: 'rect',
        color: '#fb7185',
        borderColor: '#e11d48',
        surfaceMaterial: 'Weathered Oak Timber Pergola & Trellis',
        plantIds: ['p-rose-david-austin', 'p-wisteria-amethyst-falls'],
        description: 'Climbing rose focal point offering copper-orange blooms and heady fruity fragrance.'
      },
      {
        id: 'z-lavender-drift',
        name: 'Aromatic English Lavender & Catmint Swathe',
        type: 'border',
        x: 25,
        y: 75,
        width: 65,
        height: 18,
        shape: 'rounded',
        color: '#a855f7',
        borderColor: '#7e22ce',
        surfaceMaterial: 'Gravel Mulch with Composted Bark',
        plantIds: ['p-lavender-hidcote', 'p-catmint-walkers-low', 'p-french-marigold'],
        description: 'Low-mounded aromatic front-of-border releasing essential oils when brushed along the path.'
      },
      {
        id: 'z-bench-nook',
        name: 'Weathered Teak Garden Bench Nook',
        type: 'seating',
        x: 80,
        y: 70,
        width: 15,
        height: 15,
        shape: 'rect',
        color: '#d97706',
        borderColor: '#b45309',
        surfaceMaterial: 'Hand-Hewn Flagstone Platform with Teak Seat',
        plantIds: [],
        description: 'Secluded vantage point overlooking the full breadth of blooming perennials.'
      }
    ],
    plants: [
      BOTANICAL_DATABASE[0],
      BOTANICAL_DATABASE[1],
      BOTANICAL_DATABASE[2],
      BOTANICAL_DATABASE[5],
      BOTANICAL_DATABASE[6],
      BOTANICAL_DATABASE[7],
      BOTANICAL_DATABASE[8],
      BOTANICAL_DATABASE[9],
      BOTANICAL_DATABASE[10],
      BOTANICAL_DATABASE[14]
    ],
    companionSynergies: [
      {
        plantA: 'Lady of Shalott English Rose',
        plantB: 'Hidcote English Lavender',
        type: 'beneficial',
        mechanism: 'Lavender scents deter aphids and blackspot beetles from delicate rose petals.'
      },
      {
        plantA: 'Walker\'s Low Catmint',
        plantB: 'Lady of Shalott English Rose',
        type: 'beneficial',
        mechanism: 'Catmint foliage conceals bare rose canes and crowds out summer weeds.'
      },
      {
        plantA: 'Excelsior Hybrid Foxglove',
        plantB: 'Pacific Giant Delphinium',
        type: 'beneficial',
        mechanism: 'Complementary vertical spire forms host shared bumblebee pollinators without root resource competition.'
      }
    ],
    seasonalTasks: {
      spring: [
        'Top-dress perennial borders with 2 inches of composted leaf mold',
        'Stake delphiniums and foxgloves before stems exceed 2 feet tall',
        'Prune climbing roses down to vigorous outward-facing buds'
      ],
      summer: [
        'Deadhead spent rose blooms weekly to stimulate continuous flower sets',
        'Shear catmint by half in mid-July for a flush of autumn blossoms',
        'Water deeply at root level twice weekly during prolonged heatwaves'
      ],
      autumn: [
        'Plant allium bulbs and spring daffodils among the lavender drifts',
        'Leave echinacea and sunflower seed heads standing for songbirds',
        'Clean fallen leaves around roses to prevent overwintering fungal spores'
      ],
      winter: [
        'Mulch rose crowns with shredded bark to protect against hard frost heave',
        'Inspect and repair weathered timber pergolas and arbor anchors',
        'Sharpen bypass secateurs and sterilize pruning tools with alcohol'
      ]
    },
    materialsEstimate: [
      { item: 'Cotswold Buff Pea Gravel', quantity: '4.5', unit: 'Cubic Yards', purpose: 'Pathway bedding and drainage collar' },
      { item: 'Rough-Hewn English Limestone Flagstones', quantity: '180', unit: 'Square Feet', purpose: 'Bench platform and perimeter edging' },
      { item: 'Aged Oak Pergola Framing (4x4 & 2x6)', quantity: '48', unit: 'Linear Feet', purpose: 'Climbing rose and wisteria support structure' },
      { item: 'Composted Leaf Mold & Peat-Free Topsoil', quantity: '6', unit: 'Cubic Yards', purpose: 'Deep perennial border replenishment' }
    ],
    history: [
      {
        id: 'h-1',
        timestamp: Date.now() - 3600000,
        prompt: 'Initial English Cottage Garden layout generated',
        summary: 'Generated layout with winding pea gravel spine, rose arbor, and tiered perennial spire borders.'
      }
    ]
  },

  zen: {
    id: 'design-zen-kyoto',
    name: 'Kyoto Sanctuary Modern Zen Garden',
    style: 'zen',
    styleImage: '/src/assets/images/garden_modern_zen_1792051105458.jpg',
    dimensions: { width: 25, length: 35, unit: 'ft' },
    sunlight: 'part-shade',
    soilType: 'sandy',
    climateZone: 'USDA Hardiness Zone 8a',
    goals: ['Meditation & Contemplation', 'Minimalist Aesthetics', 'Water Soundscape', 'Low Maintenance'],
    narrative: 'A tranquil Japanese karesansui dry landscape fused with a modern cedar contemplation deck. Concentric raked granite gravel rings symbolize ocean ripples encircling moss-covered glacial boulders, framed by an ancient Niwaki cloud pine and a trickling bamboo shishi-odoshi fountain.',
    zones: [
      {
        id: 'z-deck-cedar',
        name: 'Floating Cedar Engawa Viewing Deck',
        type: 'seating',
        x: 5,
        y: 65,
        width: 90,
        height: 30,
        shape: 'rect',
        color: '#b45309',
        borderColor: '#78350f',
        surfaceMaterial: 'Tongue-and-Groove Western Red Cedar Decking',
        plantIds: [],
        description: 'Elevated platform for seated tea ceremonies and garden viewing.'
      },
      {
        id: 'z-gravel-sea',
        name: 'Raked Shirakawa Granite Gravel Sea',
        type: 'lawn',
        x: 15,
        y: 15,
        width: 70,
        height: 48,
        shape: 'rounded',
        color: '#f5f5f4',
        borderColor: '#d6d3d1',
        surfaceMaterial: 'Fine Crushed Grey Quartzite Granite (2-4mm)',
        plantIds: [],
        description: 'Dry landscape ocean with concentric circular wave raking around focal stones.'
      },
      {
        id: 'z-pine-island',
        name: 'Sculpted Niwaki Cloud Pine & Moss Island',
        type: 'accent_tree',
        x: 60,
        y: 20,
        width: 25,
        height: 30,
        shape: 'circle',
        color: '#15803d',
        borderColor: '#14532d',
        surfaceMaterial: 'Living Polytrichum Haircap Moss & Granite Boulders',
        plantIds: ['p-cloud-pine-niwaki', 'p-hakone-grass'],
        description: 'Sacred mountain island anchored by a sculptural cloud-pruned Japanese black pine.'
      },
      {
        id: 'z-tsukubai-water',
        name: 'Granite Tsukubai Basin & Bamboo Spout',
        type: 'water_feature',
        x: 10,
        y: 25,
        width: 20,
        height: 25,
        shape: 'circle',
        color: '#38bdf8',
        borderColor: '#0284c7',
        surfaceMaterial: 'Carved Natural Granite Basin with Bamboo Water Flute',
        plantIds: ['p-japanese-maple-bloodgood'],
        description: 'Gentle rhythmic soundscape of circulating mountain spring water.'
      }
    ],
    plants: [
      BOTANICAL_DATABASE[11],
      BOTANICAL_DATABASE[12],
      BOTANICAL_DATABASE[15]
    ],
    companionSynergies: [
      {
        plantA: 'Bloodgood Japanese Maple',
        plantB: 'Aureola Japanese Forest Grass',
        type: 'beneficial',
        mechanism: 'Maple provides critical 40% dappled canopy shade protecting chartreuse grass blades from scorching.'
      }
    ],
    seasonalTasks: {
      spring: [
        'Candle-prune new upright shoots on black pine to preserve cloud tiers',
        'Rake and refresh fine granite gravel patterns with wooden tine rake',
        'Mist moss islands with rainwater during dry spring winds'
      ],
      summer: [
        'Check water pump flow rate and clean debris filter on bamboo spout',
        'Prune lower weeping branches of Japanese maple for light penetration'
      ],
      autumn: [
        'Gently gather fallen crimson maple leaves from gravel using a bamboo broom',
        'Clear organic sediment from the stone basin before freezing weather'
      ],
      winter: [
        'Drain and isolate fountain water lines to avoid freezing crack damage',
        'Brush heavy wet snow accumulation from sculptural pine branches'
      ]
    },
    materialsEstimate: [
      { item: 'Shirakawa White Granite Gravel (2-4mm)', quantity: '3.8', unit: 'Tons', purpose: 'Dry landscape raked gravel sea' },
      { item: 'Select Mossy Glacial Granite Boulders', quantity: '5', unit: 'Boulders (300-800 lbs)', purpose: 'Triad and island anchor stones' },
      { item: 'Western Red Cedar Dimensional Lumber', quantity: '280', unit: 'Linear Feet', purpose: 'Elevated engawa meditation deck' }
    ],
    history: [
      {
        id: 'h-zen-1',
        timestamp: Date.now() - 1800000,
        prompt: 'Initial Zen Garden design generated',
        summary: 'Created minimalist Japanese dry garden with central gravel sea, Niwaki pine island, and granite tsukubai basin.'
      }
    ]
  },

  potager: {
    id: 'design-potager-chef',
    name: 'Domaine Potager Architectural Kitchen Garden',
    style: 'potager',
    styleImage: '/src/assets/images/garden_potager_kitchen_1792061106263.jpg',
    dimensions: { width: 35, length: 50, unit: 'ft' },
    sunlight: 'full-sun',
    soilType: 'raised-bed',
    climateZone: 'USDA Hardiness Zone 7a',
    goals: ['Organic Culinary Produce', 'Companion Planting', 'Geometric Symmetry', 'Year-Round Harvest'],
    narrative: 'A grand geometric French kitchen potager combining high-yield heirloom vegetables with edible companion flowers. Four symmetrical raised cedar beds surround a central urn fountain, connected by decomposed granite cart paths and bordered by espalier fruit trees.',
    zones: [
      {
        id: 'z-bed-ne',
        name: 'Northeast Bed: Nightshades & Basil Guild',
        type: 'planter_bed',
        x: 55,
        y: 10,
        width: 35,
        height: 35,
        shape: 'rect',
        color: '#ea580c',
        borderColor: '#9a3412',
        surfaceMaterial: 'Rough-Cut 2x10 Western Cedar with Cast Iron Brackets',
        plantIds: ['p-tomato-heirloom', 'p-basil-genovese', 'p-french-marigold'],
        description: 'Heirloom tomatoes supported by cedar obelisks underplanted with Genovese basil.'
      },
      {
        id: 'z-bed-nw',
        name: 'Northwest Bed: Brassicas & Root Crops',
        type: 'planter_bed',
        x: 10,
        y: 10,
        width: 35,
        height: 35,
        shape: 'rect',
        color: '#16a34a',
        borderColor: '#14532d',
        surfaceMaterial: 'Rough-Cut 2x10 Western Cedar with Cast Iron Brackets',
        plantIds: ['p-rainbow-chard', 'p-french-marigold'],
        description: 'Vibrant rainbow chard, purple kale, and French marigolds deterring pests.'
      },
      {
        id: 'z-bed-se',
        name: 'Southeast Bed: Culinary Herbs & Alliums',
        type: 'planter_bed',
        x: 55,
        y: 55,
        width: 35,
        height: 35,
        shape: 'rect',
        color: '#0284c7',
        borderColor: '#0369a1',
        surfaceMaterial: 'Rough-Cut 2x10 Western Cedar with Cast Iron Brackets',
        plantIds: ['p-rosemary-tuscan', 'p-lavender-hidcote'],
        description: 'Mediterranean culinary herbs enjoying maximum southern light exposure.'
      },
      {
        id: 'z-bed-sw',
        name: 'Southwest Bed: Cutting Flowers & Pollinators',
        type: 'planter_bed',
        x: 10,
        y: 55,
        width: 35,
        height: 35,
        shape: 'rect',
        color: '#e11d48',
        borderColor: '#9f1239',
        surfaceMaterial: 'Rough-Cut 2x10 Western Cedar with Cast Iron Brackets',
        plantIds: ['p-echinacea-purpurea', 'p-catmint-walkers-low', 'p-delphinium-pacific'],
        description: 'Abundant cutting flowers drawing beneficial pollinators into the potager.'
      },
      {
        id: 'z-central-fountain',
        name: 'Acanthus Leaf Limestone Water Basin',
        type: 'water_feature',
        x: 44,
        y: 44,
        width: 12,
        height: 12,
        shape: 'circle',
        color: '#38bdf8',
        borderColor: '#0284c7',
        surfaceMaterial: 'Carved Cast-Stone Self-Recirculating Fountain',
        plantIds: [],
        description: 'Geometric heart of the potager providing drinking water for honeybees.'
      }
    ],
    plants: [
      BOTANICAL_DATABASE[0],
      BOTANICAL_DATABASE[1],
      BOTANICAL_DATABASE[2],
      BOTANICAL_DATABASE[3],
      BOTANICAL_DATABASE[4],
      BOTANICAL_DATABASE[5],
      BOTANICAL_DATABASE[9],
      BOTANICAL_DATABASE[10]
    ],
    companionSynergies: [
      {
        plantA: 'Cherokee Purple Heirloom Tomato',
        plantB: 'Genovese Sweet Basil',
        type: 'beneficial',
        mechanism: 'Basil essential oils repel tomato hornworms while improving tomato vigor and culinary flavor.'
      },
      {
        plantA: 'Cherokee Purple Heirloom Tomato',
        plantB: 'French Marigold',
        type: 'beneficial',
        mechanism: 'Marigold root exudates suppress soil nematodes; flowers lure predatory wasps that consume caterpillars.'
      }
    ],
    seasonalTasks: {
      spring: [
        'Amend raised beds with 3 inches of compost and worm castings',
        'Direct sow cold-hardy greens and direct-seed carrots',
        'Set up drip irrigation drip lines with automatic solar timer'
      ],
      summer: [
        'Prune suckers from indeterminant heirloom tomatoes weekly',
        'Harvest basil leaves early morning before summer heat volatilizes aromatic oils',
        'Check undersides of chard foliage for leafminers and apply row cover if needed'
      ],
      autumn: [
        'Collect seeds from open-pollinated heirloom tomatoes and marigolds',
        'Sow winter cover crop of crimson clover and winter rye to fix nitrogen'
      ],
      winter: [
        'Inspect cedar raised bed joinery and tighten corner bracket hardware',
        'Clean, oil, and sharpen spades, trowels, and hand weeders'
      ]
    },
    materialsEstimate: [
      { item: 'Western Red Cedar Raised Bed Timbers (2x10x12)', quantity: '16', unit: 'Boards', purpose: 'Four symmetrical 8x12 ft raised planting beds' },
      { item: 'Organic Living Raised Bed Soil Mix', quantity: '14', unit: 'Cubic Yards', purpose: 'Nutrient-rich potting loam with compost and perlite' },
      { item: 'Decomposed Granite Pathway Aggregate', quantity: '5', unit: 'Tons', purpose: 'Permeable, weed-suppressive walkways between beds' },
      { item: 'Cast Iron Corner Bed Brackets', quantity: '16', unit: 'Brackets', purpose: 'Heavy-duty architectural corner reinforcement' }
    ],
    history: [
      {
        id: 'h-pot-1',
        timestamp: Date.now() - 7200000,
        prompt: 'Initial Potager layout created',
        summary: 'Designed 4-quadrant French potager with central limestone fountain and cedar planter beds.'
      }
    ]
  },

  mediterranean: {
    id: 'design-mediterranean-court',
    name: 'Villa Terrazza Mediterranean Courtyard',
    style: 'mediterranean',
    styleImage: '/src/assets/images/garden_mediterranean_courtyard_1792061107483.jpg',
    dimensions: { width: 30, length: 40, unit: 'ft' },
    sunlight: 'full-sun',
    soilType: 'sandy',
    climateZone: 'USDA Hardiness Zone 9a',
    goals: ['Drought Resilience', 'Fragrant Herbs', 'Outdoor Dining', 'Water Conservation'],
    narrative: 'A sun-drenched sanctuary evoking the hillside estates of Provence and Tuscany. Warm terracotta urns brim with aromatic rosemary and lavender, centered around a heritage Arbequina olive tree providing light, silvery dappled shade over rustic limestone pavers and a stone trough water basin.',
    zones: [
      {
        id: 'z-olive-center',
        name: 'Heritage Olive Tree & Stone Surround',
        type: 'accent_tree',
        x: 35,
        y: 25,
        width: 30,
        height: 35,
        shape: 'circle',
        color: '#65a30d',
        borderColor: '#3f6212',
        surfaceMaterial: 'Weathered Dry-Stacked Fieldstone Circle',
        plantIds: ['p-olive-arbequina', 'p-lavender-hidcote'],
        description: 'Sculptural olive tree centerpiece underplanted with fragrant lavender.'
      },
      {
        id: 'z-patio-dining',
        name: 'Limestone Courtyard Dining Patio',
        type: 'seating',
        x: 10,
        y: 60,
        width: 80,
        height: 35,
        shape: 'rect',
        color: '#e7e5e4',
        borderColor: '#78716c',
        surfaceMaterial: 'Hand-Cut Travertine Limestone Pavers',
        plantIds: ['p-rosemary-tuscan'],
        description: 'Spacious dining courtyard with wrought-iron pergola draped in bougainvillea.'
      },
      {
        id: 'z-trough-fountain',
        name: 'Antique Limestone Water Trough',
        type: 'water_feature',
        x: 70,
        y: 15,
        width: 22,
        height: 20,
        shape: 'rect',
        color: '#38bdf8',
        borderColor: '#0284c7',
        surfaceMaterial: 'Salvaged Antique Limestone Trough with Brass Spigot',
        plantIds: [],
        description: 'Tranquil cooling basin reflecting the intense Mediterranean sun.'
      }
    ],
    plants: [
      BOTANICAL_DATABASE[4],
      BOTANICAL_DATABASE[5],
      BOTANICAL_DATABASE[13]
    ],
    companionSynergies: [
      {
        plantA: 'Arbequina Mediterranean Olive',
        plantB: 'Tuscan Blue Rosemary',
        type: 'beneficial',
        mechanism: 'Identical low-moisture rhizosphere profiles prevent root rot while attracting wild pollinators.'
      }
    ],
    seasonalTasks: {
      spring: [
        'Prune deadwood from olive canopy to open internal branches to sunlight',
        'Top-dress terracotta pots with slow-release organic citrus/olive fertilizer',
        'Check drip emitters to ensure zero clogs in limestone pavers'
      ],
      summer: [
        'Water deeply once every 10-14 days in early dawn to avoid evaporation',
        'Harvest tender rosemary branch tips for grilling and drying'
      ],
      autumn: [
        'Harvest ripe purple Arbequina olives for curing or pressing',
        'Mulch plant bases with pale limestone gravel to reflect heat onto ripening wood'
      ],
      winter: [
        'Wrap tender potted succulents during any unseasonal frost dips below 25°F'
      ]
    },
    materialsEstimate: [
      { item: 'Hand-Cut Tumbled Travertine Pavers', quantity: '650', unit: 'Square Feet', purpose: 'Courtyard dining floor and perimeter walkways' },
      { item: 'Handmade Impruneta Terracotta Planter Urns (24")', quantity: '6', unit: 'Urns', purpose: 'Architectural planting containers for herbs' },
      { item: 'Salvaged Antique Stone Water Basin', quantity: '1', unit: 'Basin Unit', purpose: 'Courtyard water focal point' }
    ],
    history: [
      {
        id: 'h-med-1',
        timestamp: Date.now() - 5400000,
        prompt: 'Initial Mediterranean Courtyard created',
        summary: 'Generated layout with heritage olive tree focal, limestone dining terrace, and antique fountain.'
      }
    ]
  }
};
