const listMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
function listSnail(matrix) {
  let list = [];

  while (matrix.length > 0) {
    const topRow = matrix.shift();
    list = list.concat(topRow);
    for (let i = 0; i < matrix.length; i++) {
      const rightColumn = matrix[i].pop();
      list.push(rightColumn);
    }

    if (matrix.length > 0) {
      const bottomRow = matrix.pop();
      list = list.concat(bottomRow.reverse());
    }

    for (let i = matrix.length - 1; i >= 0; i--) {
      const leftColumn = matrix[i].shift();
      if (leftColumn !== undefined) {
        list.push(leftColumn);
      }
    }
  }
  return list;
}

console.log(listSnail(listMatrix));
