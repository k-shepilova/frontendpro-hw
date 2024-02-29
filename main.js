const userArrayLength = prompt('Введіть кількість елементів масиву');

switch (true) {
    case userArrayLength === null:
        console.log('Ви скасували');
        break;
    case userArrayLength.trim() === '':
        console.log('Ви ничого не ввели');
        break;
    case isNaN(+userArrayLength):
        console.log('Ви ввели не число');
        break;
    default:
        const userArray = [];
        console.log(userArray);

        for (let i = 1; i <= userArrayLength; i++) {
            let element = prompt(`Введіть ${i}-й елемент`);
            userArray.push(element);
        }

        console.log(userArray);
        userArray.sort();
        console.log(userArray);

        userArray.splice(1, 3);
        console.log(userArray);
}

