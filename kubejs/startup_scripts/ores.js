onEvent('block.registry', event => {
  event.create('scandium_ore')
  	   .material('stone')
       .hardness(1)
       .displayName('Scandium Ore')
       .tagBlock('minecraft:mineable/pickaxe')
	   
})
