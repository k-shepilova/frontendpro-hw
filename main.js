const shopData = {
    'Fruits': [
        {name: 'Apple', info: 'This is apple'},
        {name: 'Banana', info: 'This is banana'},
        {name: 'Kiwi', info: 'This is kiwi'},
        {name: 'Peach', info: 'This  is peach'},
        {name: 'Pear', info: 'This is pear'}
    ],
    'Vegetables': [
        {name: 'Cucumber', info: 'This is cucumber'},
        {name: 'Tomato', info: 'This is tomato'},
        {name: 'Pepper', info: 'This is pepper'},
        {name: 'Onion', info: 'This is onion'}
    ],
    'Drinks': [
        {name: 'Tea', info: 'This is tea'},
        {name: 'Coffee', info: 'This is coffee'},
        {name: 'Juice', info: 'This is juice'},
        {name: 'Milk', info: 'This is milk'},
    ]
};

const categories = document.querySelector('#categories');
const items = document.querySelector('#items');
const info = document.querySelector('#info');

for (const key in shopData) {
    const categoryName = document.createElement('div');
    categoryName.classList.add('category');
    categoryName.textContent = key;
    categories.appendChild(categoryName);
}

categories.addEventListener('click', (event) => {
    if (event.target.classList.contains('category')) {
        const catName = event.target.textContent;
        const categoryItems = shopData[catName];
        showItems(categoryItems);
    }
});

items.addEventListener('click', (event) => {
    if (event.target.classList.contains('item')) {
        const itemName = event.target.textContent;
        const itemInfo = event.target.dataset.info;
        showInfo(itemName, itemInfo);
    }
});

function showItems(categoryItems) {
    items.innerHTML = '';
    categoryItems.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('item');
        itemEl.textContent = item.name;
        itemEl.dataset.info = item.info;
        items.appendChild(itemEl);
    });
}

function showInfo(itemName, itemInfo) {
    info.innerHTML = '';
    const itemInfoEl = document.createElement('div');
    const buyBtn = document.createElement('button');
    itemInfoEl.classList.add('info');
    itemInfoEl.textContent = itemInfo;
    buyBtn.classList.add('buy-btn');
    buyBtn.textContent = 'Buy';
    info.appendChild(itemInfoEl);
    info.appendChild(buyBtn);

    buyBtn.addEventListener('click', () => {
        const buyMessage = document.createElement('div');
        const messageClose = document.createElement('button');
        buyMessage.textContent = 'You bought ' + itemName + '!';
        buyMessage.classList.add('buy-message');
        messageClose.classList.add('message-close');
        messageClose.innerText = 'X';
        document.body.appendChild(buyMessage);
        buyMessage.prepend(messageClose);
        items.innerHTML = '';
        info.innerHTML = '';
        messageClose.addEventListener('click', () => {
            document.body.removeChild(buyMessage);
        })
    });
}
