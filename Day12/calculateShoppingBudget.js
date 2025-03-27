listFood = [
  [3, 1],
  [2, 4],
  [4, 5],
];

function calculateShoppingBudget(listFood) {
  let sum = 0;
  for (let i = 0; i < listFood.length; i++) {
    sum += listFood[i][0] * listFood[i][1];
  }
  return sum;
}
let result = calculateShoppingBudget(listFood);
console.log(result);
