function recursion(num, degree) {
    if (degree === 1) {
        return num;
    } else {
        return num * recursion(num, degree - 1);
    }
}

console.log(recursion(2, 4));
