document.addEventListener('DOMContentLoaded', function () {
    let wrapper = document.querySelector('.wrapper');
    let task = 1;

    while (task <= 12) {
        let h2 = document.createElement('h2');
        let taskBlock = document.createElement('div');
        taskBlock.classList.add('task', `task-${task}`);
        wrapper.append(taskBlock);
        taskBlock.append(h2);

        h2.innerHTML = `${task})`;

        task++;
    }

    let taskBlock1 = document.querySelector('.task-1');
    let taskBlock2 = document.querySelector('.task-2');
    let taskBlock3 = document.querySelector('.task-3');
    let taskBlock4 = document.querySelector('.task-4');
    let taskBlock5 = document.querySelector('.task-5');
    let taskBlock6 = document.querySelector('.task-6');
    let taskBlock7 = document.querySelector('.task-7');
    let taskBlock8 = document.querySelector('.task-8');
    let taskBlock9 = document.querySelector('.task-9');
    let taskBlock10 = document.querySelector('.task-10');
    let taskBlock11 = document.querySelector('.task-11');
    let taskBlock12 = document.querySelector('.task-12');

    // 1
    for (let i = 10; i <= 20; i++) {
        let punct;
        if (i === 20) {
            punct = '.';
        } else {
            punct = ', ';
        }
        taskBlock1.innerHTML += i + punct;
    }

    // 2
    let j = 10;
    while (j >= 10 && j <= 20) {
        let square = j * j;
        taskBlock2.innerHTML += `<div>${j} * ${j} = ${square}</div>`;
        j++;
    }

    // 3
    for (let i = 1; i <= 10; i++) {
        let result = 7 * i;
        taskBlock3.innerHTML += `<div>7 * ${i} = ${result}</div>`;
    }

    // 4
    let a = 1;
    let sum = 0;

    while (a <= 15) {
        let sign;
        sum += a;
        if (a === 15) {
            sign = ' = ';
        } else {
            sign = ' + ';
        }
        taskBlock4.innerHTML += `${a}${sign}`;
        a++;
    }
    taskBlock4.innerHTML += sum;

    // 5
    let product = 1;
    for (let i = 15; i <= 35; i++) {
        let sign;
        if (i === 35) {
            sign = ' = ';
        } else {
            sign = ' * ';
        }
        taskBlock5.innerHTML += `${i}${sign}`;
        product *= i;
    }
    taskBlock5.innerHTML += product;

    // 6
    let startNum = 1;
    let endNum = 500;
    let total = 0;
    let allNumbers = [];
    while (startNum <= endNum) {
        total += startNum;
        allNumbers.push(startNum)
        startNum++;
    }
    let length = allNumbers.length;
    let arithmeticMean = total / length;
    let sumString = allNumbers.join(" + ");

    taskBlock6.append(`(${sumString}) / ${length} = ${arithmeticMean}`);

    // 7
    let sum2 = 0;
    let allEven = [];
    for (let i = 30; i <= 80; i++) {
        if (i % 2 === 0) {
            allEven.push(i);
            sum2 += i;
        }
    }

    let allEvenString = allEven.join(" + ");

    taskBlock7.append(`${allEvenString} = ${sum2}`);

    // 8
    let startNumber = 100;
    let endNumber = 200;
    let divider = 3;
    while (startNumber <= endNumber) {
        if (startNumber % divider === 0) {
            if (startNumber >= endNumber - divider + 1) {
                taskBlock8.innerHTML += `${startNumber}.`;
            } else {
                taskBlock8.innerHTML += `${startNumber}, `;
            }
        }
        startNumber++;
    }

    // 9
    let initialNumber = +prompt('Введіть число');
    let dividersQuantity = 0;
    let dividersSum = 0;
    for (let i = 1; i <= initialNumber; i++) {
        if (initialNumber % i === 0) {
            if (i >= initialNumber - i + 1) {
                taskBlock9.innerHTML += `${i}.`;
            } else {
                taskBlock9.innerHTML += `${i}, `;
            }

            // 10
            if (i % 2 === 0) {
                dividersQuantity++;
                // 11
                dividersSum += i;
            }

        }
    }

    taskBlock10.innerHTML += `<div>${dividersQuantity}</div>`;
    taskBlock11.innerHTML += `<div>${dividersSum}</div>`;

    // 12
    let first = 1;
    while (first <= 10) {
        let second = 1;
        let innerDiv = document.createElement('div');
        taskBlock12.append(innerDiv);
        innerDiv.innerHTML += `<h3>${first}.</h3>`;
        while (second <= 10) {
            let totalResult = first * second;
            innerDiv.innerHTML += `<div>${first} * ${second} = ${totalResult}</div>`;
            second++;
        }
        first++;
    }
});