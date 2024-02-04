function getNum() {
    let total = 0;

    function getTotal(num) {
        return total += num;
    }
    return getTotal;
}

let sum = getNum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
