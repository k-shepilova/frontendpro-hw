let firstNum = +prompt('Введіть перше число');
let secondNum = +prompt('Введіть друге число');

let resultSum = firstNum + secondNum;
let resultDif = firstNum - secondNum;
let resultProd = firstNum * secondNum;
let resultQuot = firstNum / secondNum;

alert(`
  ${firstNum} + ${secondNum} = ${resultSum} \n
  ${firstNum} - ${secondNum} = ${resultDif} \n 
  ${firstNum} * ${secondNum} = ${resultProd} \n 
  ${firstNum} / ${secondNum} = ${resultQuot}`
);