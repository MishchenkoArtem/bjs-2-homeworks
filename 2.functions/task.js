function getArrayParams(...rest) {
  const min = Math.min(...rest);
  const max = Math.max(...rest);
  const sum = rest.reduce((accumulator, currentValue) => accumulator + currentValue);

  const averageValueOfTheSum = sum / rest.length;
  const avg = +averageValueOfTheSum.toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...rest) {
  if (rest.length === 0) {
    return 0;
  } else {
    return rest.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
}

function differenceMaxMinWorker(...rest) {

}

function differenceEvenOddWorker(...rest) {

}

function averageEvenElementsWorker(...rest) {

}

function makeWork (arrOfArr, func) {

}
