const TimePoints = 36;
const PlanetArea = 36_019_661

function findLat() {
  const multiplier = Array(3).fill(null).reduce((acc, _, index) => {
    return (acc + Math.random())/(index + 1)
  }, 0)

  return multiplier * 180 - 90
}

let lipTimes = new Array(TimePoints).fill(null)
  .map((_, index) => 18 - index * .5)
  .filter(() => Math.random() < .25)
  .map((time) =>({
      time,
      lat: findLat(),
      long: ((Math.random() * 360) - 180),
      area: (((Math.random() * 1.5) + (Math.random() * 0.5) + Math.random())/3) * 509600000
  }))

console.log({lipTimes})
