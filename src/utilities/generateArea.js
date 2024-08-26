function generateArea(surfaceArea) {
  const multiplier = Math.random() * Math.random() * Math.random()
  return multiplier * (surfaceArea * .01)
}

exports.generateArea = generateArea