const shopData = {
    'Повсякденний одяг': [
        {
            name: 'Джинси',
            info: 'Джинси фасону straight із завищеною талією із кишенями Cargo. Зшиті з щільного декоративно випраного деніму з натуральної бавовни. Застібаються на блискавку і гудзик спереду.'
        },
        {
            name: 'Футболка',
            info: 'Зручна, практична модель без бічних швів. Комір футболки оброблений рибаною з додаванням еластану, зміцнювальна тасьма на комірі. Короткі рукави. Широка колірна гамма.'
        },
        {
            name: 'Худі',
            info: 'Худі - це стильний та зручний одяг, який ідеально підходить для різних ситуацій. Воно поєднує в собі високу якість матеріалів та лаконічний дизайн. Завдяки комбінації поліестеру і бавовни, худі приємне на дотик та комфортне у носінні.'
        },
        {
            name: 'Жакет',
            info: 'Класичний піджак вільного крою. Вільний подовжений піджак на ґудзиках, виконаний з однотонної костюмки. Модель з англійським коміром і довгими рукавами оснащена декоративними клапанами. Модель без текстильної підкладки, з потайними плічками.'
        },
        {
            name: 'Спідниця',
            info: 'Чорна розкльошена спідниця-сонце. Класична спідниця-сонце з довжиною міді, виготовлена з чорного софту. Модель на поясній гумці з розкльошеним кроєм і знімним поясом з пряжкою.'
        }
    ],
    'Спортивний одяг': [
        {
            name: 'Футболка',
            info: 'Спортивна футболка відшита з переробленого поліестеру. Модель чудово підійде для тренувань, фітнесу, занять у залі та бігу. Майка-розлітайка поєднується з будь-яким низом і взуттям.'
        },
        {
            name: 'Шорти',
            info: 'Компресійні шорти виготовлені з технологічного трикотажу з широким еластичним поясом. Матеріал має властивості регуляції вологи. В результаті шкіра залишається сухою та забезпечується максимальний комфорт під час активних тренувань.'
        },
        {
            name: 'Штани',
            info: 'Тонкі, легкі та надзвичайно зручні тренувальні штани з контролем вологості збережуть вас свіжими та сухими, якими б інтенсивними не були ваші тренування. Універсальний дизайн також добре поєднується з повсякденним гардеробом.'
        },
        {
            name: 'Комбінезон',
            info: 'Спортивний комбінезон без рукавів з функціональної тканини DryMove, яка допомагає відводити вологу від шкіри, зберігаючи комфорт під час руху. Обтислий крій з вирізами спереду і ззаду, блискавкою ззаду на шиї і безліччю плоских швів контрастного кольору.'
        },
    ],
    'Класичний одяг': [
        {
            name: 'Сукня',
            info: 'Приталена сукня з довгими рукавами-ліхтариками і гумкою на горловині. Виріб з темно-синього крепу з боковим розрізом на нозі і потайною блискавкою. Сукня з відкритими плечима і розкльошеним низом міді довжини. '
        },
        {
            name: 'Блузка',
            info: 'Блузка прямого крою із шифону. Комір-стійка зі складанням та невеликі розрізи з боків. Полиця доповнена підкладкою з бавовни. Позаду розріз та застібка на ґудзики.'
        },
        {
            name: 'Штани',
            info: 'Класичні штани в мінімалістичному стилі. Універсальна і зручна модель прямого крою. Бічні кишені зміщені трохи вперед для створення стрункого силуету. Ззаду дві кишені на ґудзиках. Прихований еластичний пояс. Застібаються на блискавку і гачок. Є петлі для ременя.'
        },
        {
            name: 'Спідниця',
            info: 'Чорна шовкова спідниця-дзвін у білизняному стилі. Універсальна шовкова чорна спідниця в білизняному стилі. Модель міді довжини на поясній резинці з розкльошеним кроєм спідниці-дзвона.'
        },
    ]
};

const categories = document.querySelector('#categories');
const items = document.querySelector('#items');
const info = document.querySelector('#info');
const customerFormWrapper = document.querySelector('#customerForm');
const customerForm = customerFormWrapper.querySelector('form');
const closeBtn = customerFormWrapper.querySelector('#closeBtn');
const submitBtn = customerFormWrapper.querySelector('#submitBtn');
const buyMessage = document.querySelector('#buyMessage');


for (const key in shopData) {
    const categoryName = document.createElement('div');
    categoryName.classList.add('category');
    categoryName.textContent = key;
    categories.appendChild(categoryName);
}

categories.addEventListener('click', (event) => {
    if (event.target.classList.contains('category')) {
        showItems(shopData[event.target.textContent], event.target.textContent);
    }
});

items.addEventListener('click', (event) => {
    if (event.target.classList.contains('item')) {
        showInfo(event.target.textContent, event.target.dataset.info, event.target.dataset.category);
    }
});

function showItems(categoryItems, categoryName) {
    items.innerHTML = '';
    categoryItems.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('item');
        itemEl.textContent = item.name;
        itemEl.dataset.info = item.info;
        itemEl.dataset.category = categoryName;
        items.appendChild(itemEl);
    });
}


function showInfo(itemName, itemInfo, itemCategory) {
    info.innerHTML = `<div class='info'>${itemInfo}</div><button class='buy-btn'>Купити</button>`;
    document.querySelector('.buy-btn').addEventListener('click', () => {
        customerFormWrapper.style.opacity = 1;
        customerFormWrapper.style.pointerEvents = 'auto';

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!validateForm()) return;
            showMessage(itemName, itemInfo, itemCategory);
            customerForm.reset();
            customerFormWrapper.style.opacity = 0;
            customerFormWrapper.style.pointerEvents = 'none';
        });
    });
}


function validateForm() {
    let isValid = true;
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"], select');

    document.querySelectorAll('.error-message').forEach(el => el.remove());

    inputs.forEach(input => {
        let isInputValid;

        if (input.type === 'text') {
            isInputValid = input.value.trim() !== '' && input.value.trim().length >= 2 && !/\d/.test(input.value);
        } else if (input.tagName.toLowerCase() === 'select') {
            const selectedOption = input.options[input.selectedIndex];
            isInputValid = selectedOption && !selectedOption.disabled && selectedOption.value.trim() !== '';
        } else if (input.type === 'number') {
            isInputValid = !isNaN(input.value) && parseInt(input.value, 10) >= 1;
        }

        if (!isInputValid) {
            input.style.border = '1px solid darkred';
            const errorMessage = document.createElement('em');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'Невірно заповнене поле';
            if (input.nextElementSibling) {
                input.nextElementSibling.appendChild(errorMessage);
            } else {
                input.parentNode.appendChild(errorMessage);
            }
        } else {
            input.style.border = '';
        }

        isValid = isValid && isInputValid;
    });

    return isValid;
}

function showMessage(itemName, itemInfo, itemCategory) {
    const fullName = customerForm.querySelector('#fullName').value;
    const city = customerForm.querySelector('#city').value;
    const postOfficeNumber = customerForm.querySelector('#postOfficeNumber').value;
    const quantity = customerForm.querySelector('#quantity').value;
    const comment = customerForm.querySelector('#comment').value;
    const paymentMethodElement = customerForm.querySelector('input[name="payment"]:checked');
    const paymentMethod = paymentMethodElement ? paymentMethodElement.nextElementSibling.textContent : '';

    buyMessage.innerHTML = `
        <button class='message-close'>X</button>

        <h2>Замовлення успішно завершене!</h2>
        <h3>Інформація про товар:</h3>
        <div>${itemName}</div>
        <div>Категорія: ${itemCategory}</div>
        <div>Опис: ${itemInfo}</div>
        <div>Кількість: ${quantity}</div>
        
        <h3>Інформація про доставку:</h3>
        <div>ПІБ: ${fullName}</div>
        <div>Місто: ${city}</div>
        <div>НП: ${postOfficeNumber}</div>
        <div>Спосіб оплати: ${paymentMethod}</div>
        ${comment ? `<div>Коментар: ${comment}</div>` : ''}
    `;

    buyMessage.style.opacity = 1;
    buyMessage.style.pointerEvents = 'auto';

    document.querySelector('.message-close').addEventListener('click', () => {
        buyMessage.innerHTML = '';
        buyMessage.style.opacity = 0;
        buyMessage.style.pointerEvents = 'none';
    });
}

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    customerForm.reset();
    customerFormWrapper.style.opacity = 0;
    customerFormWrapper.style.pointerEvents = 'none';
});