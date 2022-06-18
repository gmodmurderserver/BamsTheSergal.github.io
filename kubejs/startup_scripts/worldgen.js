onEvent('worldgen.add', event => {
//scandium test	
  event.addOre(ore => {
    ore.block = 'kubejs:scandium_ore' // Block ID (Use [] syntax for properties)
    ore.spawnsIn.values = [ // List of valid block IDs or tags that the ore can spawn in
      '#minecraft:base_stone_overworld' // Default behavior - ores spawn in all stone types
    ]
    ore.clusterMaxSize = 8 // Max blocks per cluster
    ore.clusterCount = 20 // Clusters per chunk
    ore.minHeight = -56 // Min Y ore spawns in
    ore.maxHeight = -32 // Max Y ore spawns in
    ore.squared = true // Adds random value to X and Z between 0 and 16. Recommended to be true
  })
onEvent('worldgen.remove', event => {
  event.removeOres(ores => {
    ores.blocks = [ 'thermal:tin_ore', 'thermal:deepslate_tin_ore', 'thermal:lead_ore', 'thermal:deepslate_lead_ore' ]
		})
	})
})