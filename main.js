// 1
function countWithHalf() {
    let counter = 20;
    let result = '';
    while (counter <= 30) {
        result += `${counter} `;
        counter += 0.5;
    }
    console.log(result);
}

countWithHalf();

// 2
function convertMoney() {
    let dollars = 10;
    let hryvni = 27;
    let result;
    while (dollars <= 100) {
        result = dollars * hryvni;
        console.log(`${dollars} * ${hryvni} = ${result}`);
        dollars += 10;
    }
}

convertMoney();

// 3
function getNumbers(n) {
    for (let i = 1; i <= 100; i++) {
        let square = Math.pow(i, 2);
        if (square <= n && square <= 100) {
            console.log(square)
        }
    }
}

getNumbers(500);

// 4
function checkIfSimpleNumber(num) {
    let isSimple;
    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isSimple = false;
                break;
            } else {
                isSimple = true;
            }
        }
        isSimple ? console.log(`Число ${num} просте`) : console.log(`Число ${num} складене`);
    } else {
        console.log('Число повинно бути більше 1');
    }
}

checkIfSimpleNumber(13);

// 5
function checkNumber(num) {
    let isResult;
    let degree;
    for (let i = 1; i <= num; i++) {
        let j = Math.pow(3, i);
        if (j === num) {
            isResult = true;
            degree = Math.round(Math.log(num) / Math.log(3));
            break;
        } else {
            isResult = false;
        }
    }
    isResult ? console.log(`Число ${num} Є результатом зведення числа 3 до ${degree} ступеня`) : console.log(`Число ${num} НЕ є результатом зведення числа 3 до якого-небудь ступеня`);
}

checkNumber(243);