function medianDistro(count = 3) {
  return Array(count)
    .fill(null)
    .reduce((acc, _, index) => {
      return (acc + Math.random()) / (index + 1);
    }, 0);
}

exports.medianDistro = medianDistro;
