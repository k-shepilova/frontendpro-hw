function getUserInfo() {
    let year = prompt('Введіть свій рік народження');
    let city = prompt('Введіть своє місто');
    let sport = prompt('Який ваш улюблений вид спорту?');

    let yearText, cityText, sportText;
    let cityMessage, sportMessage;

    if (!year || year === '0') {
        yearText = 'Шкода, що Ви не захотіли ввести свій рік народження.';
    } else if (isNaN(year)) {
        yearText = 'Будь ласка введіть рік народження цифрами.';
    } else {
        yearText = year;
    }

    if (!city) {
        cityText = 'Шкода, що Ви не захотіли ввести своє місто.';
    } else {
        cityText = `Ти живеш у місті ${city}`;
    }

    if (!sport) {
        sportText = 'Шкода, що Ви не захотіли ввести свій улюблений вид спорту.';
    } else {
        sportText = `Твій улюблений вид спорту - ${sport}`;
    }

    switch (city) {
        case 'Київ':
            cityMessage = 'України';
            break;
        case 'Вашингтон':
            cityMessage = 'США';
            break;
        case 'Лондон':
            cityMessage = 'Великобританії';
            break;
    }

    switch (sport) {
        case 'Теніс':
            sportMessage = 'Шарлотою Купер';
            break;
        case 'Футбол':
            sportMessage = 'Адою Хегерберг';
            break;
        case 'Бокс':
            sportMessage = 'Сесілією Брекхус';
            break;
    }

    alert(`${yearText} \n
           ${cityMessage ? `Ти живеш у столиці ${cityMessage}` : cityText}\n
           ${sportMessage ? `Круто! Хочеш стати ${sportMessage}?` : sportText}`);
}

getUserInfo();
