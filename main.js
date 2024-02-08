// 1

const array = [123, 'lorem', 4, 12, 'ipsum', true, 50];

function getArithmeticMean(array) {
    let result = 0;
    let sum = 0;
    let counter = 0;
    for (let i = 0; i <= array.length; i++) {
        if (typeof (array[i]) === 'number') {
            sum += array[i];
            counter++;
        }
    }
    result = sum / counter;
    console.log(result);
}

getArithmeticMean(array);

// 2

const firstValue = prompt('Введіть перше число');
const secondValue = prompt('Введіть друге число');
const sign = prompt('Введіть математичну операцію');

function doMath(x, znak, y) {
    let firstNum;
    let secondNum;
    switch (true) {
        case firstValue === null:
            console.log('Шкода, що ви не ввели перше число');
            break;
        case firstValue.trim() === '':
            console.log('Ви нічого не ввели в поле 1');
            break;
        case isNaN(+firstValue):
            console.log('Ви ввели не число в поле 1');
            break;
        default:
            firstNum = +firstValue;
    }

    switch (true) {
        case secondValue === null:
            console.log('Шкода, що ви не ввели друге число');
            break;
        case secondValue.trim() === '':
            console.log('Ви нічого не ввели в поле 2');
            break;
        case isNaN(+secondValue):
            console.log('Ви ввели не число в поле 2');
            break;
        default:
            secondNum = +secondValue;
    }

    if (!(firstNum === undefined || secondNum === undefined)) {
        switch (sign) {
            case '+':
                console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
                break;
            case '-':
                console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
                break;
            case '*':
                console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
                break;
            case '/':
                console.log(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
                break;
            case '%':
                console.log(`${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
                break;
            case '^':
                console.log(`${firstNum} ^ ${secondNum} = ${Math.pow(firstNum, secondNum)}`);
                break;
            default:
                console.log('Ви ввели не знак');
        }
    }
}

doMath(firstValue, sign, secondValue);

// 3
let mainArray = [];
const mainArrayLength = prompt('Введіть довжину основного масиву');

function addingDataToArray(mainArrayLength) {
    switch (true) {
        case mainArrayLength === null:
            console.log('Шкода, що ви скасували введення довжини основного масиву');
            return;
        case isNaN(+mainArrayLength):
            console.log('Ви ввели не число в поле основного масиву');
            return;
        case mainArrayLength.trim() === '':
            console.log('Ви залишили пустий рядок в полі основного масиву');
            return;
    }
    for (let i = 1; i <= mainArrayLength; i++) {
        let innerArray = [];
        const innerArrayLength = prompt('Введіть довжину внутрішнього масиву');
        switch (true) {
            case innerArrayLength === null:
                console.log('Шкода, що ви скасували введення довжини внутрішнього масиву');
                return;
            case isNaN(+innerArrayLength):
                console.log('Ви ввели не число в поле внутрішнього масиву');
                return;
            case innerArrayLength.trim() === '':
                console.log('Ви залишили пустий рядок в полі внутрішнього масиву');
                return;
        }
        for (let j = 1; j <= innerArrayLength; j++) {
            const innerArrayData = prompt('Введіть дані внутрішнього масиву');
            switch (true) {
                case innerArrayData === null:
                    console.log('Шкода, що ви скасували введення даних внутрішнього масиву');
                    return;
                case innerArrayData.trim() === '':
                    console.log('Ви залишили пустий рядок в полі даних внутрішнього масиву');
                    return;
            }
            innerArray.push(innerArrayData);
        }
        mainArray.push(innerArray)
    }
    console.log(mainArray);
}

addingDataToArray(mainArrayLength);

// 4
let text = prompt('Введіть будь який текст');
const symbols = prompt('Введіть без пробілів всі символи, які хочете видалити з попереднього рядка');
let result = text;

function removeSymbols(text, symbols) {
    switch (true) {
        case text === null || symbols === null:
            console.log('Шкода, що ви скасували');
            return;
        case text.trim() === '' || symbols.trim() === '':
            console.log('Ви залишили пустий рядок');
            return;
    }
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < symbols.length; j++) {
            if (symbols[j] === text[i]) {
                result = result.replace(symbols[j], '');
            }
        }
    }
    console.log(result);
}

removeSymbols(text, symbols);
