const TimePoints = 35;
const PlanetArea = 509_600_000
const MinSizeLIP = 100_000

function medianDistro(count = 3) {
  return Array(count).fill(null).reduce((acc, _, index) => {
    return (acc + Math.random())/(index + 1)
  }, 0)
}

function generateLat() {
  const multiplier = medianDistro();
  return multiplier * 180 - 90
}

function generateArea() {
  const multiplier = Math.random() * Math.random() * Math.random()
  return multiplier * (PlanetArea * .01)
}

let lipTimes = new Array(TimePoints).fill(null)
  .map((_, index) => (TimePoints/2) - index * .5)
  .map(time => {
    const array = Array(Math.round(medianDistro() * 3))
      .fill(null)
      .map(() => ({
        lat: generateLat().toFixed(2),
        long: ((Math.random() * 360) - 180).toFixed(2),
        area: (generateArea()).toFixed(2)
      }))
      .filter(record => record.area > MinSizeLIP)
      
    return {
      time,
      lips: array
    }
  })
  .filter(record => record.lips.length > 0)


console.log(JSON.stringify(lipTimes, undefined, 2))
