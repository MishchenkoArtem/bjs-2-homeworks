"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  const degree = Math.pow(b, 2);
  const discriminant = degree - 4 * a * c;


  if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
    return false;
  }

  const interestRate = (percent / 100) / 12;
  const loanBody = amount - contribution;
  const payment = loanBody * (interestRate + (interestRate / (((1 + interestRate)**countMonths) - 1)));
  const totalAmount = payment * countMonths;
  const numberRounding = +totalAmount.toFixed(2);

  return numberRounding;
}