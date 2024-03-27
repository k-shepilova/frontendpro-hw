const numbers = [1, [1.1, 1.2, 1.3], 2, [2.1, 2.2], 3, 4, [4.1, 4.2, 4.3]];

function generateList(array) {
    const ul = document.createElement('ul');

    array.forEach(item => {
        const li = document.createElement('li');
        if (Array.isArray(item)) {
            li.appendChild(generateList(item));
        } else {
            li.innerText = item;
        }
        ul.appendChild(li);
    });

    return ul;
}

document.getElementById('wrapper').appendChild(generateList(numbers));

