const TimePoints = 35;
const PlanetArea = 509_600_000

function distro(count = 3) {
  return Array(count).fill(null).reduce((acc, _, index) => {
    return (acc + Math.random())/(index + 1)
  }, 0)
}

function generateLat() {
  const multiplier = distro();
  return multiplier * 180 - 90
}

function generateArea() {
  const multiplier = distro();
  return multiplier * (PlanetArea * .02) + 100_000
}

let lipTimes = new Array(TimePoints).fill(null)
  .map((_, index) => (TimePoints/2) - index * .5)
  .filter(() => Math.random() < .25)
  .map((time) =>({
      time,
      lat: generateLat().toFixed(2),
      long: ((Math.random() * 360) - 180).toFixed(2),
      area: (generateArea()).toFixed(2)
  }))

console.log({lipTimes})
