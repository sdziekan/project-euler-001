function euler10() {
    var sum = 0;

    for (var i = 2; i < 2000000; i++) {
        if (isPrime(i) === true) {
            sum += i;
        }
    }

    console.log(sum);
}


function isPrime(x) {
    let i = 2;
    while (i <= Math.sqrt(x)) {
        if (x % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}