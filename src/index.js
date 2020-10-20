
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];

  let revMatrix = matrix.slice();

  for (let i=0; i < revMatrix.length; i++) {
      if (i % 2!== 0) {
          matrix [i] =  revMatrix[i].reverse();
      }
  }
  return matrix.flat();
}
