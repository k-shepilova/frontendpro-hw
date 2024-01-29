// 1
let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let filteredArray = array.filter(function (el) {
    return el > 0;
})

let sum = filteredArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

let quantities = 0;
filteredArray.forEach(function (el) {
    quantities += 1;
})

console.log(`Сума позитивних елементів масиву: ${sum}`);
console.log(`Кількість позитивних елементів масиву: ${quantities}`);

// 2
let minEl = Math.min(...array);
let indexMinEl = array.indexOf(minEl);
console.log(`Найменший елемент масиву: ${minEl} має індекс ${indexMinEl}`);

// 3
let maxEl = Math.max(...array);
let indexMaxEl = array.indexOf(maxEl);
console.log(`Найбільший елемент масиву: ${maxEl} має індекс ${indexMaxEl}`);

// 4
let negativeArray = array.filter(function (el) {
    return el < 0;
})

console.log(`Кількість негативних елементів: ${negativeArray.length}`);

// 5 - 8
let oddCounter = 0;
let oddSum = 0;
let evenCounter = 0;
let evenSum = 0;
array.forEach(function (el) {
    if (el > 0 && el % 2 === 0) {
        evenCounter++;
        evenSum += el;
    } else if (el > 0 && !(el % 2 === 0)) {
        oddCounter++;
        oddSum += el;
    }
})

console.log(`Кількість непарних позитивних елементів: ${oddCounter}`);
console.log(`Кількість парних позитивних елементів: ${evenCounter}`);
console.log(`Сума парних позитивних елементів: ${evenSum}`);
console.log(`Сума непарних позитивних елементів: ${oddSum}`);

// 9
let positiveFilteredArray = array.filter(function (el) {
    return el > 0;
});

let mult = positiveFilteredArray.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
}, 1);

console.log(`Добуток позитивних чисел: ${mult}`);

// 10
let max = array.reduce(function (max, currentValue) {
    return currentValue > max ? currentValue : max;
}, array[0]);

array.forEach(function (el) {
    if (!(el === max)) {
        let index = array.indexOf(el);
        array.splice(index, 1, 0);
    }
});

console.log(array);