const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;

function generateKey(length, characters) {
    let result = '';
    for (let i = 1; i <= length; i++){
        result += characters[Math.floor(Math.random() * charactersLength)];
    }
   return result;
}
const key = generateKey(16, characters);
console.log(key);

