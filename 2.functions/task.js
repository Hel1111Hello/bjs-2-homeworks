function getArrayParams(...arr) {

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = (arr.reduce((a, b) => a + b, 0)) / arr.length;

  avg = parseFloat(avg.toFixed(2));
  
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

  return arr.reduce((a, b) => a + b, 0);
}

function differenceMaxMinWorker(...arr) {

  if (arr.length == 0) return 0;
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {

  return arr.filter(num => num % 2 === 0).reduce((a, b) => a + b, 0) - arr.filter(num => num % 2 != 0).reduce((a, b) => a + b, 0);
}

function averageEvenElementsWorker(...arr) {
  
  return arr.filter(num => num % 2 === 0).reduce((a, b) => a + b, 0) / arr.filter(num => num % 2 === 0).length;
}

function makeWork (arrOfArr, func) {
  
  let arr = [];

  for (let i = 0; i < arrOfArr.length; i++) arr.push(func(...arrOfArr[i]));

  return  Math.max(...arr);
}