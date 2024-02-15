// 1

let result = '';

for (let i = 1; i <= 3; i++) {
    let string = prompt('Введіть будь який текст');
    result = result + string + ' ';
}

console.log(result);

// 2

let number = 53791;
let j = 10000;
let resultNumbers = '';
for ( let i = 1; i <= 5; i++){
    let singleNumber = Math.floor(number / j);
    number = (number - (j * singleNumber) );
    j /= 10;
    resultNumbers = resultNumbers + singleNumber + ' ';
}

console.log(resultNumbers)