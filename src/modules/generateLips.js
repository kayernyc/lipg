const { medianDistro } = require('../utilities/medianDistro');
const { generateArea } = require('../utilities/generateArea');

function generateLat() {
  const multiplier = medianDistro();
  return multiplier * 180 - 90
}

function generateLips (options) {
  const {begin, end, sizeLimit, surfaceArea} = options;
  const beginTime = parseInt(begin)
  const endTime = parseInt(end)

  const timeSteps = (beginTime - endTime) * 2;

  return new Array(timeSteps).fill(null)
    .map((_, index) => (timeSteps/2) - index * .5)
    .map(time => {
      const array = Array(Math.round(medianDistro() * 3))
        .fill(null)
        .map(() => ({
          lat: generateLat().toFixed(2),
          long: ((Math.random() * 360) - 180).toFixed(2),
          area: (generateArea(surfaceArea)).toFixed(2)
        }))
        .filter(record => record.area > sizeLimit)
        
      return {
        time: time + endTime,
        lips: array
      }
    })
    .filter(record => record.lips.length > 0)

  }

  exports.generateLips = generateLips;