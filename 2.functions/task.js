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
  const max = Math.max(...rest);
  const min = Math.min(...rest);

  if (rest.length === 0) {
    return 0;
  } else {
    return max - min;
  }
}

function differenceEvenOddWorker(...rest) {
  if (rest.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < rest.length; i++) {
    if (rest[i] % 2 === 0) {
      sumEvenElement += rest[i];
    } else {
      sumOddElement += rest[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...rest) {
  if (rest.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < rest.length; i++) {
    if (rest[i] % 2 === 0) {
      sumEvenElement += rest[i];
      countEvenElement += 1;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  const maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    maxWorkerResult = func(arrOfArr[i]);
  }
}
