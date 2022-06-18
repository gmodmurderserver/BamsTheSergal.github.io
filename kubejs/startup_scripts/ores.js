onEvent('block.registry', event => {
  event.create('scandium_ore')
  	   .material('stone')
       .hardness(1)
       .displayName('Scandium Ore') // No longer required in 1.18.2+
       .tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a shovel in 1.18.2+
	   
})