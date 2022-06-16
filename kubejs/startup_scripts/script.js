// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

// Startup script
onEvent('fluid.registry', event => {
  // Scandium fluid test
  event.create('molten_scandium')
    .thickTexture(0xF8FB61)
    .bucketColor(0xF8FB61)
    .displayName('Molten Scandium')
})

onEvent('fluid.registry', event => {
  // Titanium fluid test
  event.create('molten_titanium')
    .thickTexture(0x6173FB)
    .bucketColor(0x6173FB)
    .displayName('Molten Titanium')
})

onEvent('fluid.registry', event => {
  // Vanadium fluid test
  event.create('molten_vanadium')
    .thickTexture(0x536272)
    .bucketColor(0x536272)
    .displayName('Molten Vanadium')
})

onEvent('fluid.registry', event => {
  // Chromium fluid test
  event.create('molten_chromium')
    .thickTexture(0x471A5C)
    .bucketColor(0x471A5C)
    .displayName('Molten Chromium')
})

onEvent('fluid.registry', event => {
  // Manganese fluid test
  event.create('molten_manganese')
    .thickTexture(0xc4a083)
    .bucketColor(0xc4a083)
    .displayName('Molten Manganese')
})

onEvent('fluid.registry', event => {
  // Yttrium fluid test
  event.create('molten_yttrium')
    .thickTexture(0xb064c1)
    .bucketColor(0xb064c1)
    .displayName('Molten Yttrium')
})

onEvent('fluid.registry', event => {
  // Zirconium fluid test
  event.create('molten_zirconium')
    .thickTexture(0xd0b88d)
    .bucketColor(0xd0b88d)
    .displayName('Molten Zirconium')
})

onEvent('fluid.registry', event => {
  // Niobium fluid test
  event.create('molten_niobium')
    .thickTexture(0x714c53)
    .bucketColor(0x714c53)
    .displayName('Molten Niobium')
})

onEvent('fluid.registry', event => {
  // Molybdenum fluid test
  event.create('molten_molybdenum')
    .thickTexture(0x6b7c98)
    .bucketColor(0x6b7c98)
    .displayName('Molten Molybdenum')
})

onEvent('fluid.registry', event => {
  // Ruthenium fluid test
  event.create('molten_ruthenium')
    .thickTexture(0x5e4f52)
    .bucketColor(0x5e4f52)
    .displayName('Molten Ruthenium')
})

onEvent('fluid.registry', event => {
  // Rhodium fluid test
  event.create('molten_rhodium')
    .thickTexture(0x807367)
    .bucketColor(0x807367)
    .displayName('Molten Rhodium')
})

onEvent('fluid.registry', event => {
  // Palladium fluid test
  event.create('molten_palladium')
    .thickTexture(0x6e4057)
    .bucketColor(0x6e4057)
    .displayName('Molten Palladium')
})

onEvent('fluid.registry', event => {
  // cadmium fluid test
  event.create('molten_cadmium')
    .thickTexture(0x982a33)
    .bucketColor(0x982a33)
    .displayName('Molten Cadmium')
})

onEvent('fluid.registry', event => {
  // Lutetium fluid test
  event.create('molten_lutetium')
    .thickTexture(0x934c40)
    .bucketColor(0x934c40)
    .displayName('Molten Lutetium')
})

onEvent('fluid.registry', event => {
  // Hafnium fluid test
  event.create('molten_hafnium')
    .thickTexture(0x233165)
    .bucketColor(0x233165)
    .displayName('Molten Hafnium')
})

onEvent('fluid.registry', event => {
  // tantalum fluid test
  event.create('molten_tantalum')
    .thickTexture(0xa51e1f)
    .bucketColor(0xa51e1f)
    .displayName('Molten Tantalum')
})

onEvent('fluid.registry', event => {
  // Tungsten fluid test
  event.create('molten_tungsten')
    .thickTexture(0x2a303d)
    .bucketColor(0x2a303d)
    .displayName('Molten Tungsten')
})

onEvent('fluid.registry', event => {
  // Iridium fluid test
  event.create('molten_iridium')
    .thickTexture(0x2e5deb)
    .bucketColor(0x2e5deb)
    .displayName('Molten Iridium')
})

onEvent('fluid.registry', event => {
  // Platinum fluid test
  event.create('molten_platinum')
    .thickTexture(0xcfd0d0)
    .bucketColor(0xcfd0d0)
    .displayName('Molten Platinum')
})

