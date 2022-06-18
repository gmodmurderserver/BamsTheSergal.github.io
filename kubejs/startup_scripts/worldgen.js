//scandium test	
onEvent('worldgen.add', event => {
	event.addOre((ore) => {
		ore.id = "kubejs:scandium_ore" // optional
		ore.addTarget('minecraft:stone', 'kubejs:scandium_ore')
		ore.count([1, 8])
			.squared()
			.triangleHeight(50, 32)
	})
onEvent('worldgen.remove', event => {
  event.removeOres(ores => {
    ores.blocks = [ 'thermal:tin_ore', 'thermal:deepslate_tin_ore', 'thermal:lead_ore', 'thermal:deepslate_lead_ore' ]
		})
	})
})