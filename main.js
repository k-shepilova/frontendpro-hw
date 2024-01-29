let hours = prompt('Please enter the number of hours');
let seconds = hours * 3600;

switch (true) {
    case hours === null:
        alert('You canceled');
        break;
    case hours.trim() === '':
        alert('Empty string');
        break;
    case isNaN(+hours):
        alert('This is not a number');
        break;
    default: alert(`${hours} hour(s) is ${seconds} seconds`);
}