let operation = prompt('Введіть бажану операцію: додавання (+), віднімання (-), множення (*), ділення (/)');
let firstNum = +prompt('Введіть перше число');
let secondNum = +prompt('Введіть друге число');

let resultSum = firstNum + secondNum;
let resultDif = firstNum - secondNum;
let resultProd = firstNum * secondNum;
let resultQuot = firstNum / secondNum;

 switch (operation) {
     case '+':
         console.log(`${firstNum} + ${secondNum} = ${resultSum}`);
         break;
     case '-':
        console.log(`${firstNum} - ${secondNum} = ${resultDif}`);
        break;
     case '*':
        console.log(`${firstNum} * ${secondNum} = ${resultProd}`);
        break;
     case '/':
        console.log(`${firstNum} / ${secondNum} = ${resultQuot}`);
        break;
     default: console.log('Ви ввели не знак');
 }
